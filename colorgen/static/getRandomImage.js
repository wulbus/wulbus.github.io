// this is a function we're creating

function getRandomImage() {
    // Math.random produces floating point # from 0-1(non-inclusive)
    // colors.length scales that up to how many indices are in the array
    // Math.floor is performed on the result to round to nearest integer, giving us a random index 0-69 as of now
    let randomIndex1, randomIndex2;     // let instead of const bc numbers will be reassigned in the loop
    do {
        randomIndex1 = Math.floor(Math.random() * colors.length);
        randomIndex2 = Math.floor(Math.random() * colors.length);
    } while (randomIndex1 === randomIndex2);
    // gets us the random color object associated with the integers assigned to randomIndex1 and 2
    const randomColor1 = colors[randomIndex1];
    const randomColor2 = colors[randomIndex2];
    // Get the image element by its ID (the randomImage box in the html)
    const imageElement1 = document.getElementById('randomImage1');
    const imageElement2 = document.getElementById('randomImage2');
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
