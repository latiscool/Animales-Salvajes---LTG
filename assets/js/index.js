import { Leon, Lobo, Oso, Serpiente, Aguila } from './Fauna/Sonidos.js';

import Animales from './Consulta.js';

let animalitosVacio = [];
const btnAgregar = document.getElementById('btnRegistrar');

let nombreSelector = document.getElementById('animal');

// Evento "change" al seleccion  para devolver el objeto json de animales completo
nombreSelector.addEventListener('change', async (e) => {
  const { animales } = await Animales.getData();
  const preview = document.getElementById('preview');
  //, en donde necesita el atributo animales (el arreglo animales, para esto se hace un destruncturing)
  //SELECCION IMAGEN
  //for of para seleccion de imagen con un condicional if adentro // ITERANDO OBJETOS

  let seleccionAnimal = animales.find((s) => s.name == nombreSelector.value);

  preview.innerHTML = `<img width="200" src="/assets/imgs/${seleccionAnimal.imagen}" />`;
  // playerSound.innerHTML = ` <source src="/assets/sounds/${x.sonido}"  type="audio/mpeg">`;
});

btnAgregar.addEventListener('click', async () => {
  const { animales } = await Animales.getData();
  let edadSelector = document.getElementById('edad');
  let comentarioBox = document.getElementById('comentarios');
  let previewElement = document.getElementById('preview');

  let seleccionAnimal = animales.find((s) => s.name == nombreSelector.value);

  //En vez de instancia la clase Animal para cada objeto/lobo,leon,serpiente,aguila,oso se crea un aaray para guardar argumentos (que dependera de un condicional)
  let instanciaGeneral = [
    nombreSelector.value,
    edadSelector.value,
    seleccionAnimal.imagen,
    comentarioBox.value,
    seleccionAnimal.sonido,
  ];

  //if ternario para seleccionar la instancia a guardar
  let instancias = () => {
    nombreSelector.value === 'Leon'
      ? animalitosVacio.push(new Leon(...instanciaGeneral))
      : nombreSelector.value === 'Lobo'
      ? animalitosVacio.push(new Lobo(...instanciaGeneral))
      : nombreSelector.value === 'Oso'
      ? animalitosVacio.push(new Oso(...instanciaGeneral))
      : nombreSelector.value === 'Serpiente'
      ? animalitosVacio.push(new Serpiente(...instanciaGeneral))
      : nombreSelector.value === 'Aguila'
      ? animalitosVacio.push(new Aguila(...instanciaGeneral))
      : 'Debe selecionar una Opcion';
    return instanciaGeneral;
  };

  // console.log(instancias());

  //Reseteando Formulario (if igual true)
  if (nombreSelector.value && edadSelector.value && comentarioBox.value) {
    animalitosVacio.push(instancias());
    console.log(animalitosVacio);

    nombreSelector.selectedIndex = 0;
    edadSelector.selectedIndex = 0;
    comentarioBox.value = '';
    previewElement.innerHTML = `<img src="">`;
    reloadTable();
  } else {
    alert('Faltan datos por llenar');
  }
});

const reloadTable = () => {
  const animalPlantilla = document.getElementById('Animales');
  animalPlantilla.innerHTML = '';
  animalitosVacio.forEach((a, i) => {
    animalPlantilla.innerHTML += `
    <div class="m-2">
    <div data-fighter="${a.getNombre()}">
    <div class="card">
    <div  style="width: 10rem;">
    <img src="assets/imgs/${
      a.img
    }" alt="animal_svg" width="100%" height="200" " />
    <div class="py-1" style="background-color: grey;">
    <button class="btn btn-warning mt-1" onclick="activarHabilidad('${i}')">Sonido!</button>
    </div>
    </div>
    </div>
    </div>`;
  });
};

window.activarHabilidad = (i) => {
  const animalitos = animalitosVacio[i];
  if (animalitos.nombre == 'Leon') {
    animalitos.Rugir();
  } else if (animalitos.nombre == 'Lobo') {
    animalitos.Aullar();
  } else if (animalitos.nombre == 'Oso') {
    animalitos.Grunir();
  } else if (animalitos.nombre == 'Serpiente') {
    animalitos.Sisear();
  } else if (animalitos.nombre == 'Aguila') {
    animalitos.Chillar();
  }
};
