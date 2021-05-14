console.log('+----------Objetos-----------+');

const persona = {
    nombre: 'Luis',
    apellidoPaterno: 'Ferreira',
    apellidoMaterno: 'Rangel',
    fechaNacimiento: '1981-11-11',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '43',
        nombreVia: 'San Pedro',
        placa: '70a-66',
        barrio: 'Villa Magna',
        locacion: 'Sur Oriente',
        comuna: '16'
    }
};

console.table(persona);

let otraPersona01 = {...persona}

otraPersona01.nombre = 'Mario'
otraPersona01.apellidoMaterno = 'Bros'
otraPersona01.fechaNacimiento = '2009-02-22'

console.log('+----------------------------+');
console.table(persona);
console.table(otraPersona01);

console.log('+---------Objetos dinamicos--------+');

const personaDinamica = {
    nombre: 'Luis',
    apellidoPaterno: 'Ferreira',
    apellidoMaterno: 'Rangel',
    fechaNacimiento: '1981-11-11',
    direccion: {
        viaPrincipal: 'Calle',
        numeroVia: '43',
        nombreVia: 'San Pedro',
        placa: '70a-66',
        barrio: 'Villa Magna',
        locacion: 'Sur Oriente',
        comuna: '16'
    },
    fxNombreCompleto(){
        console.log(` Mi nombre es ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);

    },
    fxTabularAtributos(){
        console.table(this);
    }
};

let obj = Object.create(personaDinamica)

obj.nombre = 'Adriana'
obj.apellidoPaterno = 'Uribe'
obj.fxNombreCompleto();
obj.fxTabularAtributos();


console.log('+----------FIN-----------+');

