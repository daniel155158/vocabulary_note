const voices = document.getElementsByClassName("voice")
const voicesArray = Array.from(voices)

voicesArray.forEach(voice => {
  voice.addEventListener('click', (event) => {
    event.preventDefault()
    const vocabulary = voice.dataset.vocabulary
    const audio = new Audio(`../../download/voices/${vocabulary}.mp3`)
    audio.play()
  })
})
