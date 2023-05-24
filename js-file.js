const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
button.addEventListener('click', () => {
    alert(button.id);
  });
});

// code below is exercise solutions

const stepOne = document.createElement('p');
const stepTwo = document.createElement('h3');
const stepThree = document.createElement('div');
const stepThree1 = document.createElement('h1');
const stepThree2 = document.createElement('p');

stepOne.style.color = 'red';
stepOne.textContent = "Hey I'm red!";

stepTwo.style.color = 'blue';
stepTwo.textContent = "I'm a blue h3!";

stepThree.setAttribute(
    'style',
    'background-color: pink; border: 5px solid black;'
);

stepThree1.textContent = "I'm in a div";
stepThree2.textContent = "ME TOO!";

stepThree.appendChild(stepThree1);
stepThree.appendChild(stepThree2);

container.appendChild(stepOne);
container.appendChild(stepTwo);
container.appendChild(stepThree);
