let tamaño = 3;

function ocultar(){
    reiniciar();
    let elementos = document.querySelectorAll('.OC');
    elementos.forEach(el => {el.classList.add= 'oculto';});


    document.getElementById('z1').style.display = 'none';
    document.getElementById('z2').style.display = 'none';
    document.getElementById('z3').style.display = 'none';
    document.getElementById('z4').style.display = 'none';
    document.getElementById('z').style.display = 'none';
    document.getElementById('Contenedor-matriz').style.display = 'flex';
    document.getElementById('calcular').style.display = 'flex';
    tamaño = 2;
}
function mostrar(){
    reiniciar();
    let elementos = document.querySelectorAll('.OC');
    elementos.forEach(el => {el.classList.remove= 'oculto';});

    document.getElementById('z1').style.display = 'flex';
    document.getElementById('z2').style.display = 'flex';
    document.getElementById('z3').style.display = 'flex';
    document.getElementById('z4').style.display = 'flex';
    document.getElementById('z').style.display = 'flex'; 
    document.getElementById('Contenedor-matriz').style.display = 'flex';
    document.getElementById('calcular').style.display = 'flex';
    tamaño = 3;
}
function mostrarmatrices(){
    let matrizA;
    let matrizB;
    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('matrices').style.display = 'flex';
    if (tamaño === 2){
        let inputX = document.getElementById('x').querySelectorAll('input');
        let inputY = document.getElementById('y').querySelectorAll('input');
        let inputB = document.getElementById('igual').querySelectorAll('input');
        
        matrizA = [
            [parseFloat(inputX[0].value),parseFloat(inputY[0].value)],
            [parseFloat(inputX[1].value),parseFloat(inputY[1].value)]
        ]
        matrizB = [
            parseFloat(inputB[0].value),parseFloat(inputB[1].value)
        ]

    }else{
        let inputX = document.getElementById('x').querySelectorAll('input');
        let inputY = document.getElementById('y').querySelectorAll('input');
        let inputZ = document.getElementById('z').querySelectorAll('input');
        let inputB = document.getElementById('igual').querySelectorAll('input');

        matrizA = [
            [parseFloat(inputX[0].value),parseFloat(inputY[0].value),parseFloat(inputZ[0].value)],
            [parseFloat(inputX[1].value),parseFloat(inputY[1].value),parseFloat(inputZ[1].value)],
            [parseFloat(inputX[2].value),parseFloat(inputY[2].value),parseFloat(inputZ[2].value)]
        ]
        matrizB = [
            parseFloat(inputB[0].value),parseFloat(inputB[1].value),parseFloat(inputB[2].value)
        ]
    }
    let D;
    if (tamaño === 2){
        D = determinante2x2(matrizA);
    } else{
        D = determinante3x3(matrizA)
    }

    if (D === 0){
        alert("El istema no tiene solucion, division por 0")
        return;
    }else{
        let matrizAx = JSON.parse(JSON.stringify(matrizA));
        for(let i = 0; i < tamaño; i++){
            matrizAx[i][0] = matrizB[i];
        }

        let matrizAy = JSON.parse(JSON.stringify(matrizA));
        for(let i = 0; i < tamaño; i++){
            matrizAy[i][1] = matrizB[i];
        }

        let matrizAz = null;
        if (tamaño === 3){
            matrizAz = JSON.parse(JSON.stringify(matrizA));
            for(let i = 0; i < tamaño; i++){
                matrizAz[i][2] = matrizB[i];
            }
        }
        let Dx = (tamaño === 2) ? determinante2x2(matrizAx) : determinante3x3(matrizAx)
        let Dy = (tamaño === 2) ? determinante2x2(matrizAy) : determinante3x3(matrizAy)
        let Dz = (tamaño === 3) ? determinante3x3(matrizAz) : 0


        let X = Dx/D;
        let Y = Dy/D;
        let Z = (tamaño === 3) ? Dz/D : null;

        let colsAx = document.querySelectorAll('.matrizAx .ColumnasAx');
        for (let j = 0; j < tamaño; j++) {
            let h1s = colsAx[j].querySelectorAll('h1');
            for (let i = 0; i < tamaño; i++) {
                h1s[i].innerText = matrizAx[i][j];
            }
        }

        let colsAy = document.querySelectorAll('.matrizAy .ColumnasAy');
        for (let j = 0; j < tamaño; j++) {
            let h1s = colsAy[j].querySelectorAll('h1');
            for (let i = 0; i < tamaño; i++) {
                h1s[i].innerText = matrizAy[i][j];
            }
        }

        if (tamaño === 3) {
            let colsAz = document.querySelectorAll('.matrizAz .ColumnasAz');
            for (let j = 0; j < 3; j++) {
                let h1s = colsAz[j].querySelectorAll('h1');
                for (let i = 0; i < 3; i++) {
                    h1s[i].innerText = matrizAz[i][j];
                }
            }
        }

        document.querySelector('#res-x h2').innerText = X;
        document.querySelector('#res-y h2').innerText = Y;
        if (tamaño === 3) {
            document.querySelector('#res-z h2').innerText = Z;
        }


    }
}

function determinante2x2(matriz){
    return (matriz[0][0])*(matriz[1][1])-(matriz[1][0])*(matriz[0][1])
}

function determinante3x3(matriz){
    let parte1 = ((matriz[0][0] * matriz[1][1] * matriz[2][2])+(matriz[1][0] * matriz[2][1] * matriz[0][2])+(matriz[2][0] * matriz[0][1] * matriz[1][2]))
    let parte2 = ((matriz[2][0] * matriz[1][1] * matriz[0][2])+(matriz[2][1] * matriz[1][2] * matriz[0][0])+(matriz[2][2] * matriz[1][0] * matriz[0][1]))
    return parte1-parte2
}

function reiniciar() {

    let todosLosInputs = document.querySelectorAll('input');
    todosLosInputs.forEach(function(input) {
        input.value = '';
    });

    let celdasMatrices = document.querySelectorAll('.matrices h1');
    celdasMatrices.forEach(function(h1) {
        h1.innerText = '';
    });

    let celdasResultados = document.querySelectorAll('.resultado h2');
    celdasResultados.forEach(function(h2) {
        h2.innerText = '';
    });

    let seccionResultado = document.getElementById('resultado');
    if (seccionResultado) seccionResultado.style.display = 'none';

    let seccionMatrices = document.getElementById('matrices');
    if (seccionMatrices) seccionMatrices.style.display = 'none';
}