const sharp = require('sharp')

const resizeImage = () => {
    const resize = sharp('./image/unsplash.jpg')
    .resize(350, 260)
    .toFile(__dirname + '/processed_image/resized_unsplash.jpg')

    console.log(resize)
}

resizeImage()