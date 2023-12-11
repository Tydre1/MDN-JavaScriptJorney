
const customName = document.createElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

const insertX = `Willy the Goblin
Big Daddy
Father Christmas`;

const insertY = `the soup kitchen
Disneyland
the White House`;

const insertZ = `spontaneously combusted
melted into a puddle on the sidewalk
turned into a slug and crawled away`;

randomize.addEventListener('click', result);

function result() {
    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    } 

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300) / 14 + ' stone';
        const tempeture = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    }

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    let newStory = storyText;
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

// their explanation was not that accurate as I expected. As u can see, it is very different compared to the original one. And thats was how I understand that should be done.
// the 'only thing' that don't work in my code is the 'click' thing, so my text dont show on the page... Well, maybe i don't really understood everuthing, but I think that i'm progressing on this.