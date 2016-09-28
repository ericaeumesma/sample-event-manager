import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import CurrentPositionMarker from './current-position-marker';
import EventMarker from './event-marker';

const API_KEY =  process.env.REACT_APP_GMAPS_API_KEY;
const DEFAULT_CENTER = { lat: +23.603280200000004, lng: +46.6386296 };
const DEFAULT_ZOOM = 13;

let lastPosition = null;

class EventMap extends Component
{
	constructor(props, context)
	{
		super(props, context);

		this.state =
		{
			defaultCenter: lastPosition,
			currentCenter: lastPosition,
			currentPosition: lastPosition,
			geolocation: !!navigator.geolocation
		};
	}

	componentDidMount()
	{
		if(this.state.geolocation)
		{
			const onLocationChange = this.onLocationChange.bind(this)
			navigator.geolocation.getCurrentPosition(onLocationChange);
			this.watchID = navigator.geolocation.watchPosition(onLocationChange);
		}
	}

	componentWillUnmount()
	{
		this.unmounted = true;

		if(navigator.geolocation)
		{
			navigator.geolocation.clearWatch(this.watchID);
		}
	}

	onLocationChange({ coords })
	{
		// we can't abort navigator.geolocation.getCurrentPosition,
		// so, we have to check if the component is mounted before
		// setting a new state 
		if(this.unmounted) return;

		const currentPosition = lastPosition =
		{
			lat: coords.latitude,
			lng: coords.longitude
		};

		this.setState({ currentPosition });

		if(this.state.defaultCenter == null)
		{
			this.setState(
			{
				defaultCenter: currentPosition,
				currentCenter: currentPosition
			});
		}
	}

	componentWillReceiveProps(nextProps)
	{
		if(this.props.selectedEventId != nextProps.selectedEventId)
		{
			const selectedEvent = _.findWhere(this.props.events, { id: nextProps.selectedEventId });
			if(selectedEvent)
			{
				this.setState({ currentCenter: selectedEvent.coords }, () =>
					this.setState({ currentCenter: null }));
			}
		}
	}

	filterFutureEvents(events)
	{
		// todo filter future events;
		return events;
	}

	render()
	{
		const { events, selectedEventId, onClick } = this.props;
		const {
			currentPosition,
			defaultCenter,
			currentCenter,
			geolocation 
		} = this.state;

		if(!geolocation || (geolocation && defaultCenter))
		{
			return	<div className="event-map">
						<GoogleMap
							bootstrapURLKeys={{ key: API_KEY }}
							defaultCenter={defaultCenter || DEFAULT_CENTER}
							center={currentCenter}
							defaultZoom={DEFAULT_ZOOM} >
							<CurrentPositionMarker {...currentPosition} />
							{ _.map(events, (event) => (
								<EventMarker
									lat={event.coords.lat}
									lng={event.coords.lng}
									event={event}
									showDetails={event.id === selectedEventId}
									onClick={() => onClick(event)}
									key={event.id} />
							)) }
						</GoogleMap>
					</div>;
		}
		else
		{
			return null;
		}
	}
}

EventMap.propTypes =
{
	selectedEventId: PropTypes.number,
	events: PropTypes.array.isRequired,
	currentPosition: PropTypes.object,
	onClick: PropTypes.func
};

export default EventMap;