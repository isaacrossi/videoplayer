const playButton = document.querySelector('button.player__button');
const video = document.querySelector('video.player__video');
const audioSlider = document.querySelector('input.volume');
const playbackSlider = document.querySelector('input.playback');
const progress = document.querySelector('div.progress__filled')
const progressHolder = document.querySelector('div.progress')
const skipButtons = document.querySelectorAll('button.player__button')

let seconds;


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
})

function onDurationChange () {
  if (video.readyState > 0) {
    seconds = video.currentTime;
    // var minutes = parseInt(video.currentTime / 60, 10);
    progress.style.flexBasis = `${(seconds/video.duration) * 100}%`
    console.log(video.currentTime + 'a')
  }
}

video.addEventListener('timeupdate', onDurationChange)

skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-skip')
    video.currentTime += parseFloat(value);
    console.log(video.currentTime + 'b')
  })
})

function scrub(e) {
  const scrubTime = (e.offsetX / progressHolder.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}

let mousedown = false;
progressHolder.addEventListener('click', scrub)
progressHolder.addEventListener('mousemove', () => mousedown && scrub)
progressHolder.addEventListener('mousdown', () => mousedown = true)
progressHolder.addEventListener('mousdown', () => mousedown = false)



