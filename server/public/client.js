$(document).ready(onReady);

let artist = [];

function onReady() {
  $.ajax({
    type: 'GET',
    url: '/artist',
  }).then(function (response) {
    artist = response;
    for (let info of artist) {
      $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
    }
  });

  // TODO Add ajax request for /songs and display on DOM
}
