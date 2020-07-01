$(document).ready(onReady);

let artist = [];

let song = [];

function onReady() {
  $.ajax({
    type: 'GET',
    url: '/artist',
  }).then(function (response) {
    artist = response;
    for (let info of artist) {
      $('#artistTableBody').append(`
                <tr>
                    <td>${info.name}</td>
                    <td>${info.born}</td>
                    <td>${info.died}</td>
                </tr>
            `);
    }
  });

  // TODO Add ajax request for /songs and display on DOM
  $.ajax({
    type: 'GET',
    url: '/song',
  }).then(function (response) {
    song = response;
    for (let info of song) {
      $('#songTableBody').append(`
                <tr>
                    <td>${info.title}</td>
                    <td>${info.artist}</td>
                </tr>
            `);
    }
  });
}
