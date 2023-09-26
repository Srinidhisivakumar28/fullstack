
/* const h1 = document.querySelector("h1");
h1.innerText = "Hello Srinidhi";
const customDiv = document.getElementById("customerDiv");
//customDiv.innerText = "lets learn html";

//customDiv.innerHTML = "<h2> lets learn react </h2>";
const h2 = document.createElement("h2");
//console.log(h2);
//customDiv.innerHTML = h2;
h2.textContent = "Hello, how are you";
console.log(h2);
customDiv.appendChild(h2);


const div = document.querySelector('div');
const input = document.createElement('input');
input.value = 'Angular Course';
input.type = 'text';
input.placeholder = 'Enter some content';
input.id = 'course_field';
const h1 = document.createElement('h1');
h1.innerText = 'Dynamic content In Html';
const button = document.createElement("button");
button.textContent = 'Click Me';
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);
button.addEventListener('click', function() {
    window.alert("hey, this is a button");
});


const html = document.createElement('html');
const head = document.createElement('head');
const title = document.createElement('title');
const body = document.createElement('body');
const div = document.createElement('div');

//body.appendChild(div);
//head.appendChild(title);

//const body_div = document.createElement("div");
//console.log(body_div);
div.innerHTML = "<h2>Hello World</h2>";
html.append(body);
body.append(div);
*/
const div = document.querySelector("div");
const dateInput = document.createElement("input");
dateInput.type = "date";
div.appendChild(dateInput);
    //document.createElement('input')

