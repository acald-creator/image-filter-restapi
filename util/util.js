const sharp = require('sharp')
const mkdirp = require('mkdirp')

const filterImageFromURL = new Promise((resolve, reject) => {
    return new Promise(async resolve => {
        await mkdirp('processed_image')

        const photo = sharp('./image/unsplash.jpg')
        const outPath = '/processed_image/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';

        photo
            .resize(256, 256)
            .jpeg({
                quality: 60
            })
            .grayscale()
            .toFile(__dirname + outPath, (img) => {
                resolve(__dirname + outPath)
            })
            console.log(photo)
    })
})