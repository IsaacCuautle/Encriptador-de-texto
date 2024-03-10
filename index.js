let entrada = document.getElementById('entrada-cifrar');
let salida = document.getElementById('entrada-descifrar');
let btnCifrar = document.getElementById('btn-cifrar');
let btnDescifrar = document.getElementById('btn-descifrar');
let btnCopiar = document.getElementById('btn-copiar');


// Validar entrada
const validacion = () => {
    let regexp = new RegExp(/^([a-z0-9]+)(\s[a-z0-9]+)*$/);
    let input = String(entrada.value);
    return !regexp.test(input) ? 
        alert('Tu entrada no debe contener mayusculas ni Caracteres especiales') :  
            input; 
    
};


// Cifrar texto
const cifrarEntrada = (entrada = '') => {
    let cifrado = [];
    for (let i in entrada) {
     
        if(entrada[i] === ' '){
            cifrado.push(entrada[i]);
            continue;
        }

        switch (entrada[i]) {
            case 'e':
                cifrado.push('enter');   
            break;
            case 'i':
                cifrado.push('imes')
            break;
            case 'a':
                cifrado.push('ai');
            break;
            case 'o':
                cifrado.push('orber'); 
            break;
            case 'u':
                cifrado.push('ufat'); 
            break;
            default:
                cifrado.push(entrada[i]);
            break;
        }
    };

    let resultado = cifrado.join('');
    return resultado;  
}


// Decrifra el texto
const descifrarEntrada = (entrada = '') => {
    let descrifrado = [];
    
    
    for(i in entrada){

        if(entrada[i].match(' ')){
            descrifrado.push(' ');

            if (entrada.matchAll('enter')) {
                // switch (entrada.match(entrada[])) {
                //     case 'enter':
                //         descrifrado.push('e');
                //     break;
                
                //     default:
                //         descrifrado.push(entrada[i]);
                //     break;
                // }
                descrifrado.push('e');
                continue;
            }
            continue;
        }

        
    }

    console.log(descrifrado.join(''));
    return;
}


// Copiar texto al porta papeles
const copiarPortapapeles = async() => {
    let resultado = document.getElementById('entrada-descifrar').innerHTML;
    try {
        await navigator.clipboard.writeText(resultado);
        alert('Contenido copiado al portapapeles');
    } catch (error) {
        console.log('Error al copiar: '+error);
    }
    return;
}

btnCifrar.addEventListener('click',() =>{
    salida.innerHTML = cifrarEntrada(validacion());
});

btnDescifrar.addEventListener('click',() =>{
    salida.innerHTML = descifrarEntrada(validacion());
});

btnCopiar.addEventListener('click',() =>{
    copiarPortapapeles();    
});

