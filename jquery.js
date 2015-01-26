$(document).ready(function(){
  $('button').on('click' ,function(){
    $(this).html('Playing...');
    var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
    var song = parseSong(songString);
    playSong(song, 20);
    $(this).html('Play');
  });
});