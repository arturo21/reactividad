// Función para crear elementos en el DOM a partir del JSX
function createElement(tag, props, ...children) {
  const element = document.createElement(tag);
  for (let prop in props) {
    if (prop.startsWith('on') && typeof props[prop] === 'function') {
      const eventName = prop.substring(2).toLowerCase();
      element.addEventListener(eventName, props[prop]);
    }
    else{
      element[prop] = props[prop];
    }
  }

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));

    }
    else{
      element.appendChild(child);
    }
  });
  return element;
}

// Función para renderizar JSX en el DOM
function render(element, container) {
  container.appendChild(element);
}

// Ejemplo de Uso
/*
const miJSX = createElement('div', { className: 'container' },

  createElement('h1', null, 'Hola, soy un componente JSX'),

  createElement('p', null, '¡Estoy siendo renderizado sin React!')

);

const contenedorDOM = document.getElementById('miContenedor');

render(miJSX, contenedorDOM);
*/