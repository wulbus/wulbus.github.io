document.addEventListener('DOMContentLoaded', function() {     
    document.getElementById('randomButton').addEventListener('click', function() {
        getRandomImage();
    });
});

function getRandomImage() {
    const selectedTone1 = document.getElementById('select-tone1').value;
    const selectedTone2 = document.getElementById('select-tone2').value;

    let filteredColors1;
        if (selectedTone1 === 'all') {
            filteredColors1 = colors; // Display all colors if 'All' is selected
        } else {
            filteredColors1 = colors.filter(color => color.tone === selectedTone1);
        }

    let filteredColors2;
        if (selectedTone2 === 'all') {
            filteredColors2 = colors;
    } else {
        filteredColors2 = colors.filter(color => color.tone === selectedTone2);
    }

    let randomColor1, randomColor2;
    do {
        randomIndex1 = Math.floor(Math.random() * filteredColors1.length);
        randomIndex2 = Math.floor(Math.random() * filteredColors2.length);
        randomColor1 = filteredColors1[randomIndex1];
        randomColor2 = filteredColors2[randomIndex2];
    } while (randomColor1 === randomColor2);

    // Get the image element by its ID (the randomImage box in the html)
    const imageElement1 = document.getElementById('randomColor1');
    const imageElement2 = document.getElementById('randomColor2');
    // Set the src attribute of the image element to the URL of the random color
    imageElement1.src = randomColor1.url;
    imageElement2.src = randomColor2.url;
        // Set the alt attribute of the image element to the name of the random color
    imageElement1.alt = randomColor1.name;
    imageElement2.alt = randomColor2.name;
    // displays name associated with generated integer where called
    const imageName1 = document.getElementById('randomColorName1');
    const imageName2 = document.getElementById('randomColorName2');
    // sets content of imageName element to randomColor.name
    imageName1.textContent = randomColor1.name;
    imageName2.textContent = randomColor2.name;
}
