import fs from "fs"
import sharp from "sharp"

export async function filterImageFromURL(inputURL: string): Promise<string> {
    return new Promise(async resolve => {
        let temp_dir = '/tmp'

        if (!fs.existsSync(temp_dir)) {
            fs.mkdirSync(temp_dir, {
                recursive: true
            })
        }

        const photo = sharp(inputURL)
        const outpath = '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';

        console.log(outpath)

        photo
            .metadata()
            .then((metadata) => {
                return photo
                    .resize(Math.round(metadata.width), 256)
                    .jpeg({
                        quality: 60
                    })
                    .grayscale()
                    .toFile(`${outpath}`, (img) => {
                        resolve(__dirname + outpath)
                    })
            })
    })
}

export async function deleteLocalFiles(files: Array<string>) {
    for (let file of files) {
        fs.unlinkSync(file)
    }
}