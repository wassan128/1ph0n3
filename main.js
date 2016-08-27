/* When start up skin */
function onload() {
	meta_update();
}

/* Control about meta data(playlist, track) */
function meta_update() {
	// related playlist
	pl_denom.value = player.currentPlaylist.count;
	pl_numer.value = getIdx();

	// update album art work
	album_art_work.backgroundImage = "WMPImage_AlbumArtlarge";

	// update track author name text
	author_text.value = player.currentMedia.getItemInfo("author");
	if (author_text.value == "") {
		author_text.value = "undefined";
	}
}

/* Current media index */
function getIdx() {
	var pl = player.currentPlaylist;
	for (var i = 0; i < pl.count; i++) {
		if (pl.item(i).name == trackname.value) {
			break;
		}
	}
	return i + 1;
}
