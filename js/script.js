const formulario = document.getElementById("formulario");
const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");

dolor.addEventListener("input", () => {
  valorDolor.textContent = dolor.value;
});

formulario.addEventListener("submit", function(e){

  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const sangre = document.getElementById("sangre").value;
  const nivelDolor = dolor.value;

  document.getElementById("resultado").innerHTML = `
  
    <strong>Nombre:</strong> ${nombre} <br>
    <strong>Edad:</strong> ${edad} años <br>
    <strong>Peso:</strong> ${peso} kg <br>
    <strong>Altura:</strong> ${altura} cm <br>
    <strong>Tipo de sangre:</strong> ${sangre} <br>
    <strong>Nivel de dolor:</strong> ${nivelDolor}
  
  `;

  document.getElementById("modal").style.display = "flex";

});

function cerrarModal(){

  document.getElementById("modal").style.display = "none";

}
