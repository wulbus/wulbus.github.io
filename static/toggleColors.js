function toggleColors(num) {
    var imgboxes = document.querySelectorAll('.imgbox');
    for (var i = 0; i < imgboxes.length; i++) {
        imgboxes[i].style.display = i < num ? 'flex' : 'none';
    }
}

// Set default to 2 colors
window.onload = function() {
    toggleColors(2);
}