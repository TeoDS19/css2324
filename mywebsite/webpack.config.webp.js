import imagemin from "imagemin"
import webp from "imagemin-webp"
imagemin(['src/images/*.{jpg,png}'], {
    destination: 'dist/images',
    plugins: [
        webp(
            {
                quality: 60,
                resize: { width: 150, height: 0 }

            })
    ]
})