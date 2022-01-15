const sharp = require('sharp')

const tintImage = () => {
    sharp('./image/unsplash.jpg')
    .tint({r: 255, g: 0, b: 0})
    .toFile(__dirname + '/processed_image/tint_unsplash.jpg')
}

tintImage()