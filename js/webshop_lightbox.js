function openLightbox(src){ //funktion som tar argumentet src (i det här fallet en sökväg till en bild)
    var lightbox = document.createElement('div') //skapar en ny <div> och sätter den till lightbox
    lightbox.className='lightbox' //sätter den nya <div>ens class till "lightbox"
    lightbox.onclick=function(){ //stänger lightbox vid klick på lightbox
        lightbox.remove()
    }
    var imageWrapper=document.createElement('div') //skapar en ny <div> och sätter den till imageWrapper
    imageWrapper.className='lightbox-image-wrapper' //sätter den nya <div>ens class till "lightbox-image-wrapper"
    var image = document.createElement('img') //skapar en ny <img> och sätter den till "image"
    image.className='lightbox-image' //sätter den nya <img>ens class till "lightbox-image"
    image.src = src //sätter den nya <img>ens sökväg till src
    imageWrapper.appendChild(image) //sätter image som ett child till imageWrapper
    lightbox.appendChild(imageWrapper) //sätter imageWrapper som ett child till lightbox
    document.body.appendChild(lightbox) //sätter in lightbox som ett child till body i HTML dokumentet
    //Stylingen för allt sker i webshop_lightbox.css
}