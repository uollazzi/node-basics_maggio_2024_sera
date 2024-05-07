import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {

})

window.onload = async () => {

}

interface Album {
    userId: number;
    id: number;
    title: string;
}

console.log(34);

axios.get<Album>("https://jsonplaceholder.typicode.com/albums/1")
    .then(res => {
        axios.get("https://jsonplaceholder.typicode.com/photos?albumId=" + res.data.id)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));


// async/await
const getPhotos = async () => {
    try {
        let album = (await axios.get<Album>("https://jsonplaceholder.typicode.com/albums/1")).data;
        let photos = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=" + album.id);

        return photos.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

try {
    getPhotos()
        .then(photos => console.log(photos));
} catch (error) {

}

