let entradaCifrar = document.getElementById('entrada-cifrar');
let entradaDescifrar = document.getElementById('entrada-descifrar');
let btnCifrar = document.getElementById('btn-cifrar');
let btnDescifrar = document.getElementById('btn-descifrar');
let btnCopiar = document.getElementById('btn-copiar');



// Cifrar texto
const cifrar = () => {
    let regexp = new RegExp(/^([a-z0-9]+)(\s[a-z0-9]+)*$/);
    let input = String(entradaCifrar.value);
    !regexp.test(input) ? 
        alert('Tu entrada no debe contener mayusculas ni Caracteres especiales') :  
            console.log('todo ok');
    
};




btnCifrar.addEventListener('click',() =>{
    return cifrar();
})