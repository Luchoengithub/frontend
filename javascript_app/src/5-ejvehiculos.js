let vehiculo = {
    kmLitro: 0,
    llantaPerimetro: 0,
    radioLlantas: 0,    
    capacidadTanque: 100,
    girosAceleracion: 0,
    cantidadCombustible: 0,
    aceleracionesAlcanzadas: 0,
    color: "Rosado",
    estado: false,
    odometro: 0,

    encender(){
    
        this.tanquearVehiculo();

        if (this.cantidadCombustible >= 2) {

            this.estado= true,
            console.log(`Estado del vehiculo-Encendido: ${this.estado}`);
            console.log("");

        }else if(this.cantidadCombustible < 2){
            
            this.estado = false,

            console.log(`Falla de encendido`);

            console.log(`Estado del vehiculo-Encendido: ${this.estado}`);

            console.log(`Combustible insuficiente`);
        }
    },

    recorridoXgiroLlanta(){ 
        this.radioLlantas = 40,
        this.llantaPerimetro = (2*(Math.PI*this.radioLlantas));

        console.log(`Distancia que recorre por cada giro: ${this.llantaPerimetro.toFixed(2)} cm`);
    },

    tanquearVehiculo(){
        if (this.cantidadCombustible < this.capacidadTanque) {
            this.cantidadCombustible += Math.round(Math.random()*(1,100));

        }else if(this.cantidadCombustible > this.capacidadTanque){
            this.cantidadCombustible = this.capacidadTanque;

        }
        console.log(`Cantidad de combustible: ${this.cantidadCombustible} Litros`);

        console.log("");
    },

    acelerar(){
        let numRan = Math.round(Math.random()*(1,100));
        this.girosAceleracion = 7;
        console.log(`Numero de aceleraciones: ${numRan}`);

        console.log(`Giros por aceleracion: ${this.girosAceleracion}`);

        console.log("");

        console.log("------------Realizando Simulación--------------")

        console.log("........................");

        console.log("");
        
        let j = 0;

        for (let i = 0; i < numRan; i++) {
            j++;

            if (this.cantidadCombustible > 0) {
                this.odometro = this.odometro + (this.llantaPerimetro * this.girosAceleracion);
                this.aceleracionesAlcanzadas++;

            }else if(this.cantidadCombustible == 0){
                this.apagar();
                numRan = 0;
            }
            
            if (j == 2) {
                this.cantidadCombustible= this.cantidadCombustible - 1;
                j = 0;

                if (this.kmLitro == 0) {
                   this.kmLitro = (this.odometro *(1/100000));
                }
            }
        }
                     
        this.odometro = (this.odometro *(1/100000));
        
        console.log("Resultados");

        console.log("---------------------------");

        console.log(`Aceleraciones alcanzadas: ${this.aceleracionesAlcanzadas}`);

        console.log(`Km recorridos: ${this.odometro.toFixed(2)} Km`);  

        console.log(`Combustible restante: ${this.cantidadCombustible} Litros`); 

        console.log(`Km por Litro: ${this.kmLitro.toFixed(2)}Km/1L`);

    },

    apagar(){
        console.log(`Reserva de combustible agotada`);

        this.estado = false

        console.log(`Estado del vehiculo- Encendido: ${this.estado}`);

        console.log("");
    }
}

let NewVehiculo = Object.create(vehiculo);

console.log("");

console.log(`Color del vehiculo: ${NewVehiculo.color}` );

console.log("");

NewVehiculo.encender();
NewVehiculo.recorridoXgiroLlanta();
NewVehiculo.acelerar();
