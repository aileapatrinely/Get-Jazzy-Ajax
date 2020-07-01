# Get Jazzy AJAX

- Fork
- Clone
- `npm install` to get all of the dependencies (just `express` for now)j<X>

## Base

- Look at the pattern for the working `/artist` server code & AJAX request.<X>
- Add comments in the code to explain what you think is happening. Set break points on the client side to help you figure out the order of the code.<X>
- Add the server side code to return all the song data when a GET request is made for `/song`. Test this is working with the browser.<X>
- Set up a client AJAX request for `/song`, and display the song data on the DOM.<X>

## Stretch

- The `server.js` file is getting a little crowded. Move arrays into a `modules` folder inside of your `server` folder (names like `artist.js` and `song.js` would be good).<X>
- The `/artist` and `/song` requests are working! Add a third array for albums that has `title` and `year` for the release date.<X>
