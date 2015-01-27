$(document).ready(function(){
  $('button').on('click' ,function(){
    $(this).html('Playing...');
    $(this).attr('disabled', true);

    var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
    var song = parseSong(songString);
    playSong(song, 20, function(){
      $('button').html('Play');
      $('button').attr('disabled', false);
    });

  });
});
