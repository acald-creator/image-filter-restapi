const sharp = require('sharp')

const convertToGrayscale = () => {
    sharp('./image/unsplash.jpg')
    .grayscale()
    .toFile(__dirname + '/processed_image/grayscale_unsplash.jpg')
}

convertToGrayscale()