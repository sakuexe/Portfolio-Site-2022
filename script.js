
// get the modal div
var myModal = $(".my-modal");

// get the image, cancel button and caption
var modalImage = $(".image-modal");
var modalCaption = $(".full-image-caption");
var modalCancel = $(".modal-cancel");

// gaining access to all of the thumbnails
var thumbnails = $(".portthumbnail");

// function when clicking on a thumbnail
thumbnails.click(function() {
    myModal.css("display", "block")
});

// allow modal to be cancelled by clicking away from the picture
myModal.click(function(e) {
    if (!$(e.target).is(modalImage) && !$(e.target).is(modalCaption)) {
        myModal.css("display", "none")
        console.log("Clicked away from image");
    }
    else {
        console.log("Clicked on the picture")
    }
});