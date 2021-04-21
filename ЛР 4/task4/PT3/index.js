const photoUrls = [
  'https://wallpapershome.ru/images/pages/pic_h/23225.jpg',
  'https://wallpapershome.ru/images/pages/pic_h/23315.jpg',
  'https://wallpapershome.ru/images/pages/pic_h/23143.jpg',
  'https://wallpapershome.ru/images/pages/pic_h/23047.jpg',
  'https://wallpapershome.ru/images/pages/pic_h/17391.jpg'
]

const $imgTag = document.getElementById('slider')

const sliderGo = () => {
  let photoIndex = 0

  setInterval(() => {
    $imgTag.setAttribute('src', photoUrls[photoIndex])
    photoIndex++
    
    if(photoIndex > 5) {
      photoIndex = 0
    }
  }, 2500)
}

sliderGo()

