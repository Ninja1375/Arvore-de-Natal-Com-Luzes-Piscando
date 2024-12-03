// Seleciona todas as luzes
const lights = document.querySelectorAll('.light');

// Função para alternar as cores das luzes
function twinkleLights() {
  lights.forEach(light => {
    const colors = ['red', 'yellow', 'blue', 'green', 'orange', 'white'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    light.style.backgroundColor = randomColor;
    light.style.boxShadow = `0 0 15px ${randomColor}`;
  });
}

// Alterna as cores a cada 500ms
setInterval(twinkleLights, 500);
