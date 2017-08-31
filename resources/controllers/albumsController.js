// controllers/albumsController.js

var albums = [];
albums.push({
              _id: 132,
              artistName: 'Nine Inch Nails',
              name: 'The Downward Spiral',
              releaseDate: '1994, March 8',
              genres: [ 'industrial', 'industrial metal' ]
            });
albums.push({
              _id: 133,
              artistName: 'Metallica',
              name: 'Metallica',
              releaseDate: '1991, August 12',
              genres: [ 'heavy metal' ]
            });
albums.push({
              _id: 134,
              artistName: 'The Prodigy',
              name: 'Music for the Jilted Generation',
              releaseDate: '1994, July 4',
              genres: [ 'electronica', 'breakbeat hardcore', 'rave', 'jungle' ]
            });
albums.push({
              _id: 135,
              artistName: 'Johnny Cash',
              name: 'Unchained',
              releaseDate: '1996, November 5',
              genres: [ 'country', 'rock' ]
            });


// GET /api/albums
function index(req, res) {
 // send back all albums as JSON
}

// POST /api/albums
function create(req, res) {
 // create an album based on request body and send it back as JSON
}

// GET /api/albums/:albumId
function show(req, res) {
 // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
 // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
 // find one album by id, update it based on request body,
 // and send it back as JSON
}

module.exports = {
 index: index,
 create: create,
 show: show,
 destroy: destroy,
 update: update
};