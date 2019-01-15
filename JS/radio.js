var showBtn = document.getElementById('showsBtn');
var scheduleBtn = document.getElementById('scheduleBtn');
var playlistBtn = document.getElementById('playlistBtn');
var newsBtn = document.getElementById('newsBtn');
var contactBtn = document.getElementById('contactBtn');
var aboutBtn = document.getElementById('aboutBtn');
var joinBtn = document.getElementById('joinBtn');

var x = document.getElementById('extra');
var y = document.getElementById('schedule');

showBtn.addEventListener('click', function(){
    x.classList.toggle("extra2");
});

scheduleBtn.addEventListener('click', function(){
    y.classList.toggle("tableStyle");
});

playlistBtn.addEventListener('click', function(){
    x.classList.toggle("extra2");
});
newsBtn.addEventListener('click', function(){
    x.classList.toggle("extra2");
});
contactBtn.addEventListener('click', function(){
    x.classList.toggle("extra2");
});
aboutBtn.addEventListener('click', function(){
    x.classList.toggle("extra2");
});
joinBtn.addEventListener('click', function(){
    x.classList.toggle("extra2");
});


function openSideMenu(){
//add this function to all buttons on nav to open menu and load info of their profile.
}


