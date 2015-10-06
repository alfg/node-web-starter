var client = new WebTorrent();
var magnetUri = 'magnet:?xt=urn:btih:f5fabc952fbb5f095a1d89175d1c6e91ee5cf1d3&dn=images.png&tr=wss%3A%2F%2Ftracker.webtorrent.io';

client.add(magnetUri, function (torrent) {
    // Got torrent metadata!
    console.log('Client is downloading:', torrent.infoHash);
    console.log(torrent);

    torrent.files.forEach(function (file) {
        console.log(file);
        // Display the file by appending it to the DOM. Supports video, audio, images, and
        // more. Specify a container element (CSS selector or reference to DOM node).
        file.appendTo('body');
    });
});
