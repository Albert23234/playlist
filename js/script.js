/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["the one","no time","all my friends","swervin","re up","a lonley night"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["Jorja Smith","PnB Rock","21 Savage","A Boggie wit da hoodie","Belly","the weeknd" ];
var links = ["https://www.youtube.com/watch?v=80J2YroXH3g","https://www.youtube.com/watch?v=1idtRZyTruw","https://www.youtube.com/watch?v=Uqvqbi7iZeA","https://www.youtube.com/watch?v=v-rxFHRTrJc","https://www.youtube.com/results?search_query=re+up+nav","https://www.youtube.com/watch?v=w0nZWYrds9o"];
var imgLinks = ["https://images.genius.com/467c61d48cff59c00694b1b3a2e1559a.850x850x1.jpg","https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F2ae153a81de0e8de784287ae35882df3.500x500x1.jpg","https://app.hiphopdx.com/app/uploads/2018/12/181220-21-savage-i-am-i-was-album-cover.jpg","https://i.ytimg.com/vi/3CdiUfQ5_AE/hqdefault.jpg","https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Ffaca2754ba991ad8ec56320f13b5ae99.1000x1000x1.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/The_Weeknd_-_Starboy_%28single%29.jpg/220px-The_Weeknd_-_Starboy_%28single%29.jpg"]; 
var songLength = [245,248,331,308,419,340];

function displaySongInfo(){
    imgLinks.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   

    });
    
     $(".numSongs").html("number of songs " + artists.length);
    
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>")
    });
    
    links.forEach(function(links) {
         $("#links").append("<a href=" + links + ">" + "click here to go to the song" + "</a>")
    });
}
function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#songLength").empty();
}





function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    
    imgLinks.push($("#image").val());
    songs.push($("#song").val());
    artists.push($("#artist").val());
    links.push($("#link").val());
    songLength.push($("#length").val());

    console.log($("#image").val());
    console.log(imgLinks);
}


$("#add").click(function() {
    
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
  
  

