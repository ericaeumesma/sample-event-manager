import React, { PropTypes } from 'react';

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

	if(event.title && event.address && event.date && event.imageURL)
	{
		callback(event);
	}
}

const EventCreate = ({ event, onDelete, onSave }) => (
	<div className="event-detail">
		<h1>Event Update</h1>
		<form onSubmit={(e) => {
			e.preventDefault();
			onFormSubmit(e.target, event, onSave);
		}}>
			<div>
				<label>Title</label>
				<input name="title" defaultValue={event.title} />
			</div>
			<div>
				<label>Address</label>
				<input name="address" defaultValue={event.address}  />
			</div>
			<div>
				<label>Date</label>
				<input name="date" type="date" defaultValue={event.date}  />
			</div>
			<div>
				<label>Image URL</label>
				<input name="imageURL" defaultValue={event.imageURL}  />
			</div>
			<div>
				<label>Tags (separate with commas)</label>
				<input name="tags" defaultValue={(event.tags || []).join(',')}  />
			</div>
			<div>
				<button>Save</button>
			</div>
		</form>
	</div>
);

EventCreate.propTypes =
{
	event: PropTypes.object.isRequired,
	onSave: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default EventCreate;