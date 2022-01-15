import sharp from "sharp"

export async function filterImageFromURL(inputURL: string): Promise<string> {
    return new Promise(async resolve => {
        const photo = sharp(inputURL)
        const outpath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';

        await photo.resize(256, 256)
            .jpeg({
                quality: 60
            })
            .grayscale()
            .toFile(__dirname + outpath, (img) => {
                resolve(__dirname + outpath)
            })

        console.log(photo)
    })
}