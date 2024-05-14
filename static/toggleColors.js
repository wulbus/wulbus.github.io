/* function toggleColors(num) {    // num is our parameter for number of imgboxes to display
    var imgboxes = document.querySelectorAll('.imgbox.img');    //var only works within scope of the function
    for (var i = 2; i < imgboxes.length; i++) {
        imgboxes[i].style.display = i < num ? 'block' : 'none';
    }
}

// Set default to 2 colors
window.onload = function() {
    toggleColors(2);
};

*/