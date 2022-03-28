const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/pokemon-sad.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            //PARA NOMBRE
            let nombre= data.name;
            pokeNombre (nombre);
            console.log(nombre);

            //PARA TIPO
            let tipo = data.types[0].type.name;
            pokeTipo (tipo);
            console.log(tipo);

            //------------------------------PARA ESTADISTICAS---------------------------------------------
            
            //PARA ATAQUE
            let ataque= data.stats[1].base_stat;
            pokeAtaque (ataque);
            console.log(ataque);

            //PARA DEFENSA
            let defensa= data.stats[2].base_stat;
            pokeDefensa (defensa);
            console.log(defensa);

            //PARA ATAQUE ESPECIAL
            let ataqueE= data.stats[3].base_stat;
            pokeAtaqueE (ataqueE);
            console.log(ataqueE);

            //PARA DEFENSA ESPECIAL
            let defensaE= data.stats[4].base_stat;
            pokeDefensaE (defensaE);
            console.log(defensaE);

            //PARA VELOCIDAD
            let velocidad = data.stats[5].base_stat;
            pokeVelocidad (velocidad);
            console.log(velocidad);

            //PARA MOVIMIENTOS
            let movimientos = data.moves.length;
            pokeMovimientos (movimientos);
            console.log(movimientos);

            
            //PARA ALTURA
            let altura= data.height;
            pokeAltura (altura);
            console.log(altura);

            //PARA PESO
            let peso= data.weight;
            pokePeso (peso);
            console.log(peso);
            

            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    
}

const pokeNombre = (url) => {
    const inputfieldname = document.getElementById("nombre"); 
    inputfieldname.value = url;
}

const pokeTipo = (url) => {
    const inputfieldtype = document.getElementById("tipo"); 
    inputfieldtype.value = url;
}

const pokeAtaque = (url) => {
    const inputfieldattack = document.getElementById("ataque"); 
    inputfieldattack.value = url;
}

const pokeDefensa = (url) => {
    const inputfielddefense= document.getElementById("defensa"); 
    inputfielddefense.value = url;
}

const pokeAtaqueE = (url) => {
    const inputfieldattackE = document.getElementById("ataqueE"); 
    inputfieldattackE.value = url;
}

const pokeDefensaE = (url) => {
    const inputfielddefenseE = document.getElementById("defensaE"); 
    inputfielddefenseE.value = url;
}

const pokeVelocidad = (url) => {
    const inputfieldvel = document.getElementById("velocidad"); 
    inputfieldvel.value = url;
}

const pokeMovimientos = (url) => {
    const inputfieldmov = document.getElementById("movimientos"); 
    inputfieldmov.value = url;
}



const pokeAltura = (url) => {
    const inputfieldaltura = document.getElementById("altura"); 
    inputfieldaltura.value = url;
}

const pokePeso= (url) => {
    const inputfieldpeso = document.getElementById("peso"); 
    inputfieldpeso.value = url;
}
 

