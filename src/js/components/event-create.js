import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function onFormSubmit(form, callback)
{
	const event =
	{
		title: form.title.value,
		address: form.address.value,
		imageURL: form.imageURL.value
	};

	if(event.title && event.address && event.imageURL)
	{
		callback(event);
	}
}

const EventCreate = ({ onSave }) => (
	<div className="event-detail">
		<h1>Event Create</h1>
		<form onSubmit={(event) => {
			event.preventDefault();
			onFormSubmit(event.target, onSave);
		}}>
			<div>
				<label>Title</label>
				<input name="title" />
			</div>
			<div>
				<label>Address</label>
				<input name="address" />
			</div>
			<div>
				<label>Image URL</label>
				<input name="imageURL" />
			</div>
			<div>
				<button>Save</button>
			</div>
		</form>
	</div>
);

EventCreate.propTypes =
{
	onSave: PropTypes.func.isRequired
};

export default EventCreate;