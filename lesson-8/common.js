//1
const itemsAll = document.querySelectorAll('.test');

//2
const itemFirst = document.querySelector('.test');

//3
//classList is a “class management” of an element (convenient to add/remove/check).
itemFirst.classList.add('active');
itemFirst.classList.remove('active');
itemFirst.classList.toggle('active');

//4
itemFirst.classList.contains('active');

//5
//An attribute is what is written in HTML: <input value="123">
//A property is what is in the JS object of the element: input.value

//6
const simpleLink = document.querySelector('.simple-link');
simpleLink.getAttribute('href');

//7
simpleLink.setAttribute('href', 'https://www.google.com');

//8
simpleLink.hasAttribute('href');

//9
document.querySelectorAll('.highlight').forEach(findedElement => {
 findedElement.textContent = 'Highlighted!';
});  

//10
const box = document.querySelector('div.box');
if(box) box.classList.add('selected');

//11
document.querySelectorAll('a').forEach(allLinkPage => {
  allLinkPage.setAttribute('target', '_blank');
});

//12
document.querySelectorAll('input[type="text"], textarea').forEach(formInputElement => {
  if (!formInputElement.hasAttribute('placeholder')) {
    formInputElement.setAttribute('placeholder', 'Введіть дані');
  }
});

//13
document.querySelectorAll('img').forEach(imageElement => {
    const thisImgAlt = imageElement.getAttribute('alt');
    if (!thisImgAlt || thisImgAlt.trim() === '') {
        imageElement.setAttribute('alt', 'image info');
    }
});