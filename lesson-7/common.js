//1 The DOM (Document Object Model) is a "tree" for the browser containing an HTML document. When a tag/text/comment is located in a node, the page can be accessed and modified using JavaScript: elements can be added, viewed, and text, styles, and attributes can be changed.

//2 Document (document) - the entire document.
//Element - HTML tags (div, p, a...).
//Text - text in the middle of the tags.
//Comment — HTML comments <!-- ... -->

//3
const headerElementClass = document.getElementById("header");
const HeaderElemntIt = document.querySelector("#header");

//4
const parentElementMenu = document.querySelector(".menu");

console.log(parentElementMenu.children);

console.log(parentElementMenu.childNodes);

console.log(parentElementMenu.firstElementChild);
console.log(parentElementMenu.lastElementChild);

//5
const imgSelector = document.querySelector('img');
imgSelector.src = '/img/logo.png';
imgSelector.alt = 'Logo';

//6
const newElementCreate = document.createElement('p');

newElementCreate.className = 'text-section';
newElementCreate.textContent = 'Hello, I am a new element!';

//7
const parentList = document.querySelector('.list');
const itemList = document.createElement('li');
itemList.textContent = 'New item';

parentList.append(itemList);    
parentList.prepend(itemList);

const title = document.querySelector('h1');

title.after(itemList);
title.before(itemList);

//8
const elementToRemove = document.querySelector('.footer');
elementToRemove.remove();

//9
const textSection = document.querySelector('p');
console.log(textSection.textContent);

//10
const infoSection = document.querySelector('.user-info');

//inline styles
infoSection.style.width = '200px';
infoSection.style.backgroundColor = 'black';
infoSection.style.borderRadius = '12px';

//classes
infoSection.classList.add('active-hover');
infoSection.classList.remove('active-hover');
