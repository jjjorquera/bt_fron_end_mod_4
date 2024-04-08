//* Objetos en javascript, son estructuras de datos que dando por clave y valor
//* Objeto con valores dinamicos

const persona = {
    nombre: 'Amanda',
    edad : 27,
    lenguajesFavoritos: ['java', 'Javascript', 'python', '.net'],
    profesion: 'Ing de Software',
    isActive: true,
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/amanda',
            nombreUsuario: 'Amanda'
        },
        instagram: {
            enlace: 'instragram.com/Amanda',
            nombreUsuario: '@Amanda'
        }
    }
}

console.log(persona.redesSociales.instagram.nombreUsuario);
console.log(persona.edad);
console.log(persona.lenguajesFavoritos);
console.log(persona.profesion);
console.log(persona.isActive);
console.log(persona.redesSociales.instagram);
console.log(persona.redesSociales.instagram.enlace);
console.log(persona.redesSociales.youtube.enlace);

//* Destructuring

const {enlace, nombreUsuario: userInstagram} = persona.redesSociales.instagram;
console.log(`Este es el nombre de usuario: ${userInstagram}`);

//* Como obtener mediante destructuring el nombre de usuario de amanda de youtube y un ALIAS es despues del (:)

const {enlace: enlaceYT, nombreUsuario: userYT} = persona.redesSociales.youtube;
console.log(`Este es el nombre de usuario: ${userYT}`);

//* ¿Se podria destructurar un solo valor?, Si se puede como se hace entonces?

const { redesSociales: {instagram: {nombreUsuario}}} = persona;
console.log(`Este es el nombre de Amanda de instagram, se accedio directamente a el :${nombreUsuario}`);

// * Realice el ejercicio de traer el enlace de youtube de amanda directamente con el 
// * ejemplo anterior

// const {redesSociales: {youtube: {enlace}}} = persona;
// console.log(`Este es el enlace de youtube ${enlace}`);