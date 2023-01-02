const playButton = document.querySelector('button.player__button');
const video = document.querySelector('video.player__video');


//when we click the play button, toggle the pause/play state of the video and also toggle the symbol shown on the button
playButton.addEventListener('click', togglePlayPause)
video.addEventListener('click', togglePlayPause)

function togglePlayPause () {
  if (video.paused) {
    video.play();
    playButton.innerHTML = "⏸"
  }  
  else if (!video.paused) {
    video.pause();
    playButton.innerHTML = "►"
  }
}