import $ from 'jquery';
import _ from 'lodash';
// import WebTorrent from '../../lib/webtorrent.min.js';

// Underscore JS settings.
// @see http://underscorejs.org
_.templateSettings = {
	evaluate: 		/\{\{#([\s\S]+?)\}\}/g, 			// {{# console.log("blah") }}
	interpolate: 	/\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g, 	// {{ title }}
	escape: 		/\{\{\{([\s\S]+?)\}\}\}/g, 			// {{{ title }}}
}

export default class Torrent {
	constructor(options) {

		this._defaults = {

			getCategoriesApi: '/api/categories',

			userPlaylistTemplate: '/static/tmpl/userPlaylist.html',

		};

		this._options = $.extend(true, {}, this._defaults, options);

		this.init();
	}

	init() {
		var client = new WebTorrent();
		var magnetUri = '76772db771ad9a9a7272819487897682e9a9770f';

		console.log('torrent init.');

		client.add(magnetUri, function (torrent) {
			// Got torrent metadata!
			console.log('Client is downloading:', torrent.infoHash);
			console.log(torrent);

			torrent.files.forEach(function (file) {
				console.log(file);
				// Display the file by appending it to the DOM. Supports video, audio, images, and
				// more. Specify a container element (CSS selector or reference to DOM node).
				file.appendTo('#content');
			});
		});
	}
}
