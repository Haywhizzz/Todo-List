import { createHtmlElement, setId } from './dom';

test('ensures function createHtmlElement returns element', () => {

    const createHtmlElement = (type, id, arrayClasses, content) => {
        const element = document.createElement(type);
        if (id) element.id = id;
        if (arrayClasses) { arrayClasses.forEach((myClass) => element.classList.add(myClass)); }
      
        if (content) element.innerText = content;
      
        expect(createHtmlElement).toReturn(element);
      }
    
  });

  test('check if the setId returns random string numbers', () => {
    const setId = () => {
        expect(setId).toReturn(Math.random().toString().split('.').join(''));
      }
  });