import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function onFormSubmit(form, originalEvent, callback)
{
	let tags = form.tags.value.replace(/ /g,'');

	const event =
	{
		...originalEvent,
		title: form.title.value,
		address: form.address.value,
		date: form.date.value,
		tags: tags.length > 0 ? tags.split(',') : null,
		imageURL: form.imageURL.value
	};

	if(event.title && event.address && event.date)
	{
		callback(event);
	}
}

const EventCreate = ({ event, onDelete, onSave }) => (
	<form className="event-update panel panel-default"
		onSubmit={(e) => {
		e.preventDefault();
		onFormSubmit(e.target, event, onSave);
	}}>
		<div className="panel-heading">Update event</div>
		<div className="panel-body">
			<div className="form-group">
				<label>Title</label>
				<input className="form-control" name="title" defaultValue={event.title} />
			</div>
			<div className="form-group">
				<label>Address</label>
				<input className="form-control" name="address" defaultValue={event.address}  />
			</div>
			<div className="form-group">
				<label>Date</label>
				<input className="form-control" name="date" type="date" defaultValue={event.date}  />
			</div>
			<div className="form-group">
				<label>Image URL</label>
				<input className="form-control" name="imageURL" defaultValue={event.imageURL}  />
			</div>
			<div className="form-group">
				<label>Tags (separate with commas)</label>
				<input className="form-control" name="tags" defaultValue={(event.tags || []).join(',')}  />
			</div>
		</div>
		<div className="panel-footer text-right">
			<Link className="btn btn-default" to="/">Cancel</Link>
			{' '}
			<button className="btn btn-primary">Save</button>
		</div>
	</form>
);

EventCreate.propTypes =
{
	event: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default EventCreate;