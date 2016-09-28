import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function onFormSubmit(form, callback)
{
	let tags = form.tags.value.replace(/ /g,'');

	const event =
	{
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

const EventCreate = ({ onSave }) => (
	<form className="event-create panel panel-default"
		onSubmit={(e) => {
			e.preventDefault();
			onFormSubmit(e.target, onSave);
		}}>
		<div className="panel-heading">Create a new event</div>
		<div className="panel-body">
			<div className="form-group">
				<label>Title</label>
				<input className="form-control" name="title" />
			</div>
			<div className="form-group">
				<label>Address</label>
				<input className="form-control" name="address" />
			</div>
			<div className="form-group">
				<label>Date</label>
				<input className="form-control" name="date" type="date" />
			</div>
			<div className="form-group">
				<label>Image URL</label>
				<input className="form-control" name="imageURL" />
			</div>
			<div className="form-group">
				<label>Tags (separate with commas)</label>
				<input className="form-control" name="tags" />
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
	onSave: PropTypes.func.isRequired
};

export default EventCreate;