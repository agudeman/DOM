// get reference to the main tag
const main = document.querySelector('main');

// three jokes
const joke1 = "Why don't pirates take showers? Because they wash up on shore.";
const joke2 = "What do you call a cow with no legs? Ground beef!";
const joke3 = "What is Forrest Gump's email password? 1forrest1.";
// HTML template
const jokeTemplate = `
<h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;

// add template to main tag
main.innerHTML = jokeTemplate;

// create a new paragraph element
const paragraph = document.createElement('p');

// add text to paragraph element
paragraph.textContent = "That's all folks!";

// append paragraph element to body
document.body.appendChild(paragraph);
