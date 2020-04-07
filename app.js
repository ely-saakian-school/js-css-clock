const root = document.querySelector(':root')

setInterval(() => {
  const time = new Date()

  root.style.setProperty('--second', `${360 / 60 * time.getSeconds() - 90}deg`)
  root.style.setProperty('--minute', `${360 / 60 * time.getMinutes() - 90}deg`)
  root.style.setProperty('--hour', `${360 / 12 * time.getHours() - 90}deg`)
}, 1000)
