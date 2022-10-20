const displayedImage = document.querySelector('.display-image');
const thumbBar = document.querySelector('.thumb-bar')

const imgarray = [
    {src: "images/frog1.jpg"},
    {src: "images/frog2.jpg"},
    {src: "images/frog3.jpg"},
    {src: "images/frog4.jpg"},
    {src: "images/frog5.jpg"}
]

for (const image of imgarray) {
    const newImage = document.createElement('img');
    newImage.src = image.src;
    newImage.alt = image.src;
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', ()=>{
        displayedImage.src = image.src;
        displayedImage.alt = image.alt
    })
}