document.addEventListener('DOMContentLoaded', function() {     
    document.getElementById('randomButton').addEventListener('click', function() {
        getRandomImage();
    });
});

function getRandomImage() {
    // Arrays to store the IDs of select elements, image elements, name elements, and lock elements:
    const imgboxIds = ['imgbox1', 'imgbox2', 'imgbox3'];
    const selectToneIds = ['selectTone1', 'selectTone2', 'selectTone3'];
    const imageElementIds = ['randomColor1', 'randomColor2', 'randomColor3'];
    const imageNameIds = ['randomColorName1', 'randomColorName2', 'randomColorName3'];
    const lockIds = ['lock1', 'lock2', 'lock3'];

    // Loop through each set of elements
    for (let i = 0; i < imgboxIds.length; i++) {
        // Only runs code for imgboxes that are currently visible
        if (document.getElementById(imgboxIds[i]).style.display !== 'none') {
           // Check if the lock is in the unlocked state; if not, code not executed
            const lockElement = document.getElementById(lockIds[i]);
            if (lockElement.classList.contains('fa-unlock'))  {
                const selectedTone = document.getElementById(selectToneIds[i]).value;
                //  Replaces the following x3: const selectedTone1 = document.getElementById('selectTone1').value;
                let filteredColors;
                if (selectedTone === 'all') {
                    filteredColors = colors;
                } else {
                    filteredColors = colors.filter(color => color.tone === selectedTone);
                }

                const randomIndex = Math.floor(Math.random() * filteredColors.length);
                const randomColor = filteredColors[randomIndex];

                // Update image element
                const imageElement = document.getElementById(imageElementIds[i]);
                imageElement.src = randomColor.url;
                imageElement.alt = randomColor.name;

                // Update image name
                const imageName = document.getElementById(imageNameIds[i]);
                imageName.textContent = randomColor.name;
            }
        }
    }
}