const playButton = document.querySelector('button.player__button');
const video = document.querySelector('video.player__video');
const audioSlider = document.querySelector('input.volume');
const playbackSlider = document.querySelector('input.playback');
const progress = document.querySelector('div.progress__filled')


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

audioSlider.addEventListener("input", () => {
  const audioLevel = audioSlider.value
  video.volume = audioLevel
})

playbackSlider.addEventListener("input", () => {
  const playbackSpeed = playbackSlider.value
  video.playbackRate = playbackSpeed
  console.log(video.duration)
})

function onDurationChange () {
  if (video.readyState > 0) {
    // var minutes = parseInt(video.currentTime / 60, 10);
		var seconds = video.currentTime;
    progress.style.flexBasis = `${(seconds/video.duration) * 100}%`
  }
}

video.addEventListener('timeupdate', onDurationChange)

