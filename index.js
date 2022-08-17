class Usuario {
    constructor(nombre, apellido, libro, mascota) {
        this.nombre = String(nombre);
        this.apellido = String(apellido);
        this.libros = [{nombre: libro.nombre, autor: libro.autor}];
        this.mascotas = [String(mascota)];
    }

    getFullName() {
        return `Nombre: ${this.nombre}\nApellido: ${this.apellido}`
    }

    addMascota(mascotaNueva) {
        this.mascotas.push(String(mascotaNueva));
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(a,b) {
        this.libros.push({nombre: a, autor: b});   
    }

    getBookNames() { 
        return this.libros.map((x) => x.nombre);
    }
}

const usuario = new Usuario('Juan', 'Gabriel', {nombre: 'El señor de los anillos', autor: 'Tolkien'}, 'Garfield');

console.log(usuario);

console.log(usuario.getFullName());

console.log(usuario.countMascotas());

usuario.addMascota('Firu');

console.log(usuario.countMascotas());

usuario.addBook('Las aventuras de Tom Sawyer', 'Mark Twain');
usuario.addBook('El necronomicon', 'Lovercraft');

console.log(usuario.getBookNames());

console.log(usuario);