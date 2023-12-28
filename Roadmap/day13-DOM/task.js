let div = document.createElement('div');
div.setAttribute('class', 'container');
let h1 = document.createElement("h1");
h1.innerText = "DOM Tasks";
let p = document.createElement("p");
p.innerText = "All the DOM Tasks will be added here!";
let button = document.createElement("button");
button.innerText = "Click Me";
let ul = document.createElement("ul");
ul.setAttribute("class", 'list');
for (let i = 1; i <= 5; i++) {
    let list = document.createElement("li");
    list.innerText = "list item";
    ul.appendChild(list);
}
p.style.color = 'red';
p.style.fontSize = '20px';
button.style.color = 'white';
button.style.backgroundColor = 'green';


document.body.appendChild(div);
div.append(h1,p,button,ul);
