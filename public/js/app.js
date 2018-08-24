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

	//create our WebRtc connection

	const webrtc = new SimpleWebRTC({
		//the id/element dom element that will hold "our" video
		localVideoEl: 'local-video',

		//the id/element dom element that will hold remote videos
		remoteVideoEl: 'remote-videos',

		//immediately as for camera access
		autoRequestMedia: true,
	});

	//We got access to local camera
	webrtc.on('localStream', () => {
		localImageEl.hide();
		localVideoEl.show();
	});

});