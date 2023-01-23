// Portfolio page

// get the modal div
var myModal = document.querySelector('.my-modal')

// get the image, cancel button and caption
var modalImage = document.querySelector('.image-modal')
var modalCaption = document.querySelector('.full-image-caption')

// gaining access to all of the thumbnails
var thumbnails = document.querySelectorAll('.thumbnails')


// function when clicking on a thumbnail
for (let index = 0; index < thumbnails.length; index++) {
    thumbnails[index].addEventListener('click', clicked => {
        closestSection = clicked.target.closest('section')
        if (closestSection.id === 'programmingport') return
        clicked = clicked.target
        modalImage.src = clicked.src.replace('thumbnails', 'gallerypics')
        myModal.style.display = 'block'
        modalCaption.innerHTML = clicked.alt
    })
}

// allow modal to be cancelled by clicking away from the picture (or the caption)
myModal.addEventListener('click', clicked => {
    clicked = clicked.target
    if (clicked != modalImage && clicked != modalCaption) return myModal.style.display = 'none'
})
