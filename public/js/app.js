window.addEventListener('load', () => {
	//Chat platform

	const chatTemplate = Handlebars.compile($('#chat-template').html());

	const chatContentTemplate = Handlebars.compile($('#chat-content-template').html());

	const chatEl = $('#chat');

	const formEl = $('.form');

	const messages = [];

	let username;

	// Local Video

	const localImageEl = $('#local-image');

	const localVideoEl = $('#local-video');

	// Add validation rules to Create/Join Room Form

	formEl.form({
		fields: {
			roomName: 'empty',

			username: 'empty',
		},
	});

});