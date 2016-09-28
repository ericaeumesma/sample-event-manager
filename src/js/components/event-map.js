import _ from 'underscore';
import React, { Component, PropTypes } from 'react';
import GoogleMap from 'google-map-react';

import CurrentPositionMarker from './current-position-marker';
import EventMarker from './event-marker';

const API_KEY =  process.env.REACT_APP_GMAPS_API_KEY;
const DEFAULT_CENTER = { lat: +23.603280200000004, lng: +46.6386296 };
const DEFAULT_ZOOM = 13;

class EventMap extends Component
{
	constructor(props, context)
	{
		super(props, context);
		this.state =
		{
			defaultCenter: null,
			currentPosition: null,
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
		if(navigator.geolocation)
		{
			navigator.geolocation.clearWatch(this.watchID);
		}
	}

	onLocationChange({ coords })
	{
		const currentPosition =
		{
			lat: coords.latitude,
			lng: coords.longitude
		};

		this.setState({ currentPosition });

		if(this.state.defaultCenter == null)
		{
			this.setState({ defaultCenter: currentPosition });	
		}
	}

	filterFutureEvents(events)
	{
		// todo filter future events;
		return events;
	}

	onSelect(id)
	{
		// todo on event selected on map
	}

	render()
	{
		const { events } = this.props;
		const { currentPosition, defaultCenter, geolocation } = this.state;

		if(!geolocation || (geolocation && defaultCenter))
		{
			return	<div className="event-map">
						<GoogleMap
							yesIWantToUseGoogleMapApiInternals={true}
							bootstrapURLKeys={{ key: API_KEY }}
							defaultCenter={defaultCenter || DEFAULT_CENTER}
							defaultZoom={DEFAULT_ZOOM} >
							<CurrentPositionMarker lat={-23.603237600000003} lng={-46.6385656} />
							{ _.map(events, (event) => (
								<EventMarker
									lat={event.coords.lat}
									lng={event.coords.lng}
									event={event}
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
	events: PropTypes.array.isRequired,
	currentPosition: PropTypes.object
};

export default EventMap;