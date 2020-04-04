const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')

setInterval(() => {
  const time = new Date()

  second.style.transform = `rotate(${360 / 60 * time.getSeconds() - 90}deg)`
  minute.style.transform = `rotate(${360 / 60 * time.getMinutes() - 90}deg)`
  hour.style.transform = `rotate(${360 / 12 * time.getHours() - 90}deg)`
}, 1000)
