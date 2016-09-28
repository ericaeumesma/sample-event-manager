import React, { PropTypes } from 'react';

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
	<div className="event-detail">
		<h1>Event Create</h1>
		<form onSubmit={(e) => {
			e.preventDefault();
			onFormSubmit(e.target, onSave);
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
				<label>Date</label>
				<input name="date" type="date" />
			</div>
			<div>
				<label>Image URL</label>
				<input name="imageURL" />
			</div>
			<div>
				<label>Tags (separate with commas)</label>
				<input name="tags" />
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