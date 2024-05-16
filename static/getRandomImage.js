document.addEventListener('DOMContentLoaded', function() {     
    document.getElementById('randomButton').addEventListener('click', function() {
        getRandomImage();
    });
});

function getRandomImage() {

    const selectedTone1 = document.getElementById('select-tone1').value;
    const selectedTone2 = document.getElementById('select-tone2').value;
    const selectedTone3 = document.getElementById('select-tone3').value;

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

    let filteredColors3;
        if (selectedTone3 === 'all') {
            filteredColors3 = colors;
        } else {
    filteredColors3 = colors.filter(color => color.tone === selectedTone3);
        }

        let randomIndex1 = Math.floor(Math.random() * filteredColors1.length);
        let randomIndex2 = Math.floor(Math.random() * filteredColors2.length);
        let randomIndex3 = Math.floor(Math.random() * filteredColors3.length);
        let randomColor1 = filteredColors1[randomIndex1];
        let randomColor2 = filteredColors2[randomIndex2];
        let randomColor3 = filteredColors3[randomIndex3];     

    // Get the image element by its ID (the randomImage box in the html)
    const imageElement1 = document.getElementById('randomColor1');
    const imageElement2 = document.getElementById('randomColor2');
    const imageElement3 = document.getElementById('randomColor3');
    // Set the src attribute of the image element to the URL of the random color
    imageElement1.src = randomColor1.url;
    imageElement2.src = randomColor2.url;
    imageElement3.src = randomColor3.url;
        // Set the alt attribute of the image element to the name of the random color
    imageElement1.alt = randomColor1.name;
    imageElement2.alt = randomColor2.name;
    imageElement3.alt = randomColor3.name;
    // displays name associated with generated integer where called
    const imageName1 = document.getElementById('randomColorName1');
    const imageName2 = document.getElementById('randomColorName2');
    const imageName3 = document.getElementById('randomColorName3');
    // sets content of imageName element to randomColor.name
    imageName1.textContent = randomColor1.name;
    imageName2.textContent = randomColor2.name;
    imageName3.textContent = randomColor3.name;
}
