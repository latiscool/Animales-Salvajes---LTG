class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    //  Atributo privado (_)
    let _nombre = nombre;
    let _edad = edad;
    let _img = img;
    let _comentarios = comentarios;
    let _sonido = sonido;

    // Funciones internas
    this.getNombre = () => _nombre;
    this.getEdad = () => _edad;
    this.getImg = () => _img;
    this.getComentarios = () => _comentarios;
    this.getSonido = () => _sonido;
    this.setComentarios = (nuevo_comentario) =>
      (_comentarios = nuevo_comentario);

    //Agregando Getters y Setters
  }

  get nombre() {
    return this.getNombre();
  }

  get edad() {
    return this.getEdad();
  }

  get img() {
    return this.getImg();
  }

  get comentarios() {
    return this.getComentarios();
  }

  get sonido() {
    return this.getSonido();
  }

  set comentarios(nuevo_comentario) {
    return this.getComentarios(nuevo_comentario);
  }

  //Agregando Metodo Reproducir Sonido

  reproducirSonido() {
    const playSonido = document.getElementById('player');
    const audio = `/assets/sounds/${this.getSonido()}`;

    playSonido.setAttribute('src', audio);
    playSonido.load();
    playSonido.play();
  }
}
//Probando instancia
// console.log(new Animal('Lobo', '...', '0 - 1 años', 'blabla', '..'));

export default Animal;
