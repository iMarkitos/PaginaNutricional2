// script.js

function calcularIMC() {
    // Obtener los valores del peso y la altura
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;


    if (peso < 30) {
        alert("El peso mínimo permitido es 30 kg.");
        return;
    }

    if (altura < 90) {
        alert("La altura mínima permitida es 90 cm.");
        return;
    }
    // Verificar si los campos están vacíos
    if (!peso || !altura) {
        document.getElementById("resultadoIMC").innerHTML = '<p style="color:red;">Por favor, llene la información que corresponde</p>';
        return; // Salir de la función si faltan datos
    }

    // Convertir la altura de cm a metros
    altura = altura / 100;

    // Calcular el IMC
    var imc = peso / (altura * altura);

    // Mostrar el resultado del IMC
    var resultadoIMC = document.getElementById("resultadoIMC");
    resultadoIMC.textContent = "Tu IMC actual es: " + imc.toFixed(2);
}





function calcularMacronutrientes() {
    // Obtener los valores de los campos de entrada
    var sexo = document.getElementById("sexo").value;
    var edad = document.getElementById("edad").value;
    var actividad = document.getElementById("actividad").value;
    var peso = document.getElementById("pesoCarb").value;
    var altura = document.getElementById("alturaCarb").value;

    if (edad < 18) {
        alert("La edad mínima permitida es 18 años.");
        return;
    }

    if (peso < 30) {
        alert("El peso mínimo permitido es 30 kg.");
        return;
    }

    if (altura < 90) {
        alert("La altura mínima permitida es 90 cm.");
        return;
    }

    // Verificar si todos los campos están llenos y si no están en "Seleccione"
    if (sexo === "" || edad === "" || actividad === "" || peso === "" || altura === "") {
        document.getElementById("resultadoMacronutrientes").innerHTML = '<p style="color:red;">Por favor, llene los campos solicitados</p>';
        return;
    }

    // Convertir los valores a números
    edad = parseInt(edad);
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Calcular la tasa metabólica basal (TMB)
    var tmb;
    if (sexo === "male") {
        tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
    } else {
        tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
    }

    // Aplicar el factor de actividad física
    var factorActividad;
    if (actividad === "sedentary") {
        factorActividad = 1.2;
    } else if (actividad === "light") {
        factorActividad = 1.375;
    } else if (actividad === "moderate") {
        factorActividad = 1.55;
    } else {
        factorActividad = 1.725;
    }

    // Calcular las necesidades calóricas diarias
    var caloriasDiarias = tmb * factorActividad;

    // Calcular los macronutrientes
    var porcentajeProteinas = 0.15; // 15% de las calorías de proteínas
    var porcentajeGrasas = 0.25; // 25% de las calorías de grasas
    var porcentajeCarbohidratos = 0.60; // 60% de las calorías de carbohidratos

    var gramosProteinas = (caloriasDiarias * porcentajeProteinas) / 4; // 4 kcal por gramo de proteínas
    var gramosGrasas = (caloriasDiarias * porcentajeGrasas) / 9; // 9 kcal por gramo de grasas
    var gramosCarbohidratos = (caloriasDiarias * porcentajeCarbohidratos) / 4; // 4 kcal por gramo de carbohidratos

    // Mostrar el resultado en la página
    var resultadoElemento = document.getElementById("resultadoMacronutrientes");
    resultadoElemento.innerHTML = 
        "Su consumo recomendado es:<br>" + 
        gramosProteinas.toFixed(2) + "g de proteínas (" + (gramosProteinas * 4).toFixed(2) + " kcal),<br>" + 
        gramosGrasas.toFixed(2) + "g de grasas (" + (gramosGrasas * 9).toFixed(2) + " kcal),<br>" + 
        gramosCarbohidratos.toFixed(2) + "g de carbohidratos (" + (gramosCarbohidratos * 4).toFixed(2) + " kcal).";
}









function valorarNutricion() {
    var sexo = document.getElementById("sexoVal").value;
    var edad = document.getElementById("edadVal").value;
    var peso = document.getElementById("pesoVal").value;
    var altura = document.getElementById("alturaVal").value;
    var enfermedad = document.getElementById("enfVal").value;

    if (edad < 18) {
        alert("La edad mínima permitida es 18 años.");
        return;
    }

    if (peso < 30) {
        alert("El peso mínimo permitido es 30 kg.");
        return;
    }

    if (altura < 90) {
        alert("La altura mínima permitida es 90 cm.");
        return;
    }


    if (!sexo || !edad || !peso || !altura || !enfermedad) {
        document.getElementById('resultadoValoracion').innerHTML = '<p style="color:red;">Por favor, llene la información que corresponde</p>';
        return;
    }

    let alimentosDesayuno;
    let alimentosComida;
    let alimentosCena;
    
    switch (enfermedad) {
        case "0": // Ninguna
            alimentosDesayuno = ["Huevo c/ Jamon (2 Pzas Huevo, 1 Jamon)", "Huevos Estrallados (2 Pzas de Huevo)", "Huevo c/ Sopa (2 Pzas de Huevo, 1 Pza tortilla)", "Omelet de Huevo (2 Pzas Huevo, 1 Reb Pechuga Pavo, 30gr Q/ Oaxaca)", "Quesadillas (2 Pzas Tortillas Nopasl, 30 gr Q/Oaxaca","Pan Frances (2 Rebamadas de pan, 1 Pza Huevo)","Huevo Cocido (2 Pzas de Huevo)","Sopa c/ Verdura"];
            alimentosComida = ["Tostadas de pollo (70 gr pechuga pollo, 2 pzas Tostada)", "Pechuga de Pollo a la plancha (70 gr Pechuga pollo, Media taza arroz integral)", "Cazuela (70 gr de Carne, Garbanzo, Zanahoria, Papa, Chayote)", "Pechuga rellena de queso (70gr pechuga de pollo, 30gr Q/Oaxaca)", "Frijoles en caldo c/ Quesadillas (2Pzas Tortillas de nopal, 30 gr Q/Oaxaca)","Filete de pescado empapelado (70gr Filete de pescado, Media taza arroz integral)","Albodingas (90gr Carne Molida)","Chop Suey","Pollo Asado (90 gr Pechuga de pollo, Verdura a elegir)"];
            alimentosCena = ["Yogurt con Fruta", "Sandwich de Aguacate", "Burritos Jamon c/ Queso", "Pan Tostado c/ Aguacate", "Sandwich","Cereal s/ Azucar"];
            break;
        case "1": // Dislipidemia
            alimentosDesayuno = ["Lentejas en estofado con cebolla y zanahoria", "Cereal s/ Azucar", "Huevo Cocido (2 Pzas de Huevo)", "Quesadillas (2 Pzas Tortillas Nopasl, 30 gr Q/Oaxaca", "Pan Frances (2 Rebamadas de pan, 1 Pza Huevo)","Sopa c/ Verdura"];
            alimentosComida = ["Estofado de Lentejas", "Porcion de carne encebollada (90 gr de carne)", "Cocido de Garbanzos", "Ensalada de Lechuga", "Rebanada de Pan integral Acompañado de fruta al gusto", "Pechuga de Pollo a la plancha (70 gr Pechuga pollo, Media taza arroz integral)","Filete de pescado empapelado (70gr Filete de pescado, Media taza arroz integral)","Ensalada de Espinacas"];
            alimentosCena = ["Cereal s/ Azucar", "Sopa de verduras", "Salmón a la plancha", "Pan integral y fruta (Picadillo de tomate, pimiento, cebolla y atún)", "Ensalada de espinacas, tomate y elote (maíz)","Yogurt con Fruta", "Pan Tostado c/ Aguacate","Sandwich" ];
            break;
        case "2": // Hígado graso
            alimentosDesayuno = ["Café con leche desnatada 1 tostada de pan integral con queso fresco", "Pan Tostado c/ Aguacate", "Plato de frutas rojas con yogur natural bajo en grasa y nueces mixtas", "Huevos Estrallados (2 Pzas de Huevo)","Omelet de Huevo (2 Pzas Huevo, 1 Reb Pechuga Pavo, 30gr Q/ Oaxaca)","Huevo Cocido (2 Pzas de Huevo)"];
            alimentosComida = ["Pescado al vapor", "Estofado de Lentejas", "Ensalada de Lechuga", "Pechuga de Pollo a la plancha (70 gr Pechuga pollo, Media taza arroz integral)", "Tostadas de pollo (70 gr pechuga pollo, 2 pzas Tostada)","1 taza de arroz integral (con pescado y verduras al gusto 1 pieza de fruta)"];
            alimentosCena = ["Pan Tostado c/ Aguacate", "Sopa de verduras", "Pechuga de pollo a la plancha", "Frutas","Yogurt con Fruta","Sandwich de Aguacate(pan integral)","2 rebanada de pan integral(Sola o acompañadas de mermelada)","Café con leche desnatada 1 tostada de pan integral con queso fresco"];
            break;
        case "3": // Obesidad
        alimentosDesayuno = ["Huevo c/ Jamon (2 Pzas Huevo, 1 Jamon)", "Huevos Estrallados (2 Pzas de Huevo)", "Huevo c/ Sopa (2 Pzas de Huevo, 1 Pza tortilla)", "Omelet de Huevo (2 Pzas Huevo, 1 Reb Pechuga Pavo, 30gr Q/ Oaxaca)", "Quesadillas (2 Pzas Tortillas Nopasl, 30 gr Q/Oaxaca","Pan Frances (2 Rebamadas de pan, 1 Pza Huevo)","Huevo Cocido (2 Pzas de Huevo)","Sopa c/ Verdura"];
        alimentosComida = ["Tostadas de pollo (70 gr pechuga pollo, 2 pzas Tostada)", "Pechuga de Pollo a la plancha (70 gr Pechuga pollo, Media taza arroz integral)", "Cazuela (70 gr de Carne, Garbanzo, Zanahoria, Papa, Chayote)", "Pechuga rellena de queso (70gr pechuga de pollo, 30gr Q/Oaxaca)", "Frijoles en caldo c/ Quesadillas (2Pzas Tortillas de nopal, 30 gr Q/Oaxaca)","Filete de pescado empapelado (70gr Filete de pescado, Media taza arroz integral)","Albodingas (90gr Carne Molida)","Chop Suey","Pollo Asado (90 gr Pechuga de pollo, Verdura a elegir)"];
        alimentosCena = ["Yogurt con Fruta", "Sandwich de Aguacate", "Burritos Jamon c/ Queso", "Pan Tostado c/ Aguacate", "Sandwich","Cereal s/ Azucar","Cereal bajo en grasas"];
            break;
        case "4": // Diabetes
            alimentosDesayuno = ["Huevos en torta (2pzas de huevo, 1 tortilla)", "Repollo con verdura (Verdura al gusto)", "Entomatadas (3 pzas tortillas, Salsa de tomate al gusto)", "Huevos con verdura", "Sandwich de atun(2 Pzas Pan integral, 90gr Atun)","Huevo c/ Chile Morron (2 Pzas Huevo, 1 Chile morron)","Ejotes c/ Verdura","Huevo c/ Nopales(2pzas Huevo)","Quesadillas (2 Pzas Tortillas Nopasl, 30 gr Q/Oaxaca"];
            alimentosComida = ["Caldo de pollo(90 gr Pechuga de pollo, Verduras al gusyo)", "Ensalada de Lechuga", "Filete Salteado c/ Verduras (120 gr Filete de res, Verduras al gusto)", "Carne Asada (120 gr de carne de res)", "Ceviche de atun (120 gr de Atun, una taza de verduras picadas)","Pechuga de Pollo a la plancha (70 gr Pechuga pollo, Media taza arroz integral)","Filete de pescado empapelado (70gr Filete de pescado, Media taza arroz integral)","Filete de pescado empapelado (70gr Filete de pescado, Media taza arroz integral)"];
            alimentosCena = ["Sandwich de panela(2 Pzasm de pan integrales, 30gr de queso panela)", "Tacos de queso (3 Pzas de tortilla, 60 gr de queso fresco)", "Tostadas c/ Aguacate (3 Tostadas horneadas, 2/3 de aguacate)", "Ensalada de espinacas, tomate y elote (maíz)", "Lácteos bajos en grasa","Yogurt con Fruta","Cereal bajo en grasas saturadas","Ensalada Verde c/ Nopales(Verduras al gusto, 120 gr de nopal"];
            break;
        default:
            alimentosDesayuno = [];
            alimentosComida = [];
            alimentosCena = [];
    }
    
    const colacionOptions = ["1 porción de fruta", "1 taza de gelatina sin azúcar", "1 taza de verduras", "1 paquete de galletas de avena", "2 tazas de palomitas"];
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const comidas = ["Desayuno", "Colación", "Comida", "Colación", "Cena"];

    let tabla = '<table><thead><tr><th></th>';
    diasSemana.forEach(dia => {
        tabla += `<th>${dia}</th>`;
    });
    tabla += '</tr></thead><tbody>';

    comidas.forEach(comida => {
        tabla += `<tr><td class="comida">${comida}</td>`;
        diasSemana.forEach(() => {
            let alimento;
            if (comida === "Desayuno") {
                alimento = alimentosDesayuno[Math.floor(Math.random() * alimentosDesayuno.length)];
            } else if (comida === "Comida") {
                alimento = alimentosComida[Math.floor(Math.random() * alimentosComida.length)];
            } else if (comida === "Cena") {
                alimento = alimentosCena[Math.floor(Math.random() * alimentosCena.length)];
            } else {
                alimento = colacionOptions[Math.floor(Math.random() * colacionOptions.length)];
            }
            tabla += `<td>${alimento}</td>`;
        });
        tabla += '</tr>';
    });

    tabla += '</tbody></table>';

    document.getElementById('resultadoValoracion').innerHTML = tabla;
}