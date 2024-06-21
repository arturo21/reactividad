// Ejemplo de escritura de HTML dentro de JavaScript sin compilar

const nombre = 'Juan';
const edad = 25;
const miHTML = `
  <div>
    <h2>Hola, ${nombre}!</h2>
    <p>Tienes ${edad} años de edad.</p>
  </div>
`;

// Insertar el HTML en el DOM
document.getElementById('miContenedor').innerHTML = miHTML;