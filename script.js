
// get the modal div
var myModal = $(".my-modal");

// get the image, cancel button and caption
var modalImage = $(".image-modal")[0];
var modalCaption = $(".full-image-caption")[0];
var modalCancel = $(".modal-cancel");

console.log(modalImage, modalCaption)

// gaining access to all of the thumbnails
var thumbnails = $(".thumbnails");

// function when clicking on a thumbnail
thumbnails.click(function() {
    myModal.css("display", "block");
    //debug show path
    console.log($("img", this).attr("src"))

    //set source to the path of the clicked image
    modalImage.src = $("img", this).attr("src").replace("thumbnails", "gallerypics");
    modalCaption.innerHTML = $("img", this).attr("alt");
});

// allow modal to be cancelled by clicking away from the picture
myModal.click(function(e) {
    if (!$(e.target).is(modalImage) && !$(e.target).is(modalCaption)) {
        myModal.css("display", "none");
        console.log("Clicked away from image");
    }
    else {
        console.log("Clicked on the picture")
    }
});