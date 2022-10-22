/* Katherine Nayelhi Flores Figueroa 0909-22-1883 */
/* Jennifer Janeth de León Chuy 0909-22-6024 */

/* traemos del archivo html lo que vamos a necesitar */
const form = document.getElementById('form');
const tarjeta = document.getElementById('tarjeta');
const pin = document.getElementById('pin');

/* declaramos el saldo inicial para la moneda Quetzales y la moneda Dolares */
let Quetzales = 10000;
let Dolares = 1500;

/* Enviamos el valor de las variables al localStorage para después extraer los datos en la siguiente página */
localStorage.setItem("saldoQ", Quetzales);
localStorage.setItem("saldoD", Dolares);

/* Utilizamos submit para enviar el resultado del formulario al precionar el botón ingresar */
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs(); /* Llamamos a la función checkInputs */
});

function checkInputs(){
    const tarjetaValue = tarjeta.value.trim() /* Declaramos una constante donde guardamos el valor que se recibe en la variable tarjeta y utilizamos trim() para eliminar los espacio en blanco que pudiesen estar en ambos extremos de la cadena de texto */
    const pinValue = pin.value.trim() /* Realizamos lo mismo que en la linea anterios pero ahora para el pin */
    if(tarjetaValue === ''){ /* Condición si en el campo de tarjeta no escriben nada */
        setErrorFor(tarjeta, 'El numero de tarjeta no puede estar en blanco');
    }else if(tarjetaValue === '0909-22-1883' || tarjetaValue === '0909-22-6024' || tarjetaValue === '0909226024' || tarjetaValue === '0909221883'){ /* Si la tarjeta ingresada es una de las permitidas*/
        setSucessFor(tarjeta);
    } else{ /* De lo contrario mostrar mensaje de tarjeta inválida */
        setErrorFor(tarjeta, 'Numero de tarjeta inválido');
    }
    if(pinValue === ''){ /* Si el campo de PIN esta en blanco */
        setErrorFor(pin, 'El PIN no puede estar en blanco');
    }else if(pinValue !== '2022'){ /* Si PIN es diferente al permitido */
        setErrorFor(pin, 'PIN inválido');
    } else{ /* De lo contrario el PIN es correcto */
        setSucessFor(pin);
    }
    if(tarjetaValue === '0909-22-1883' && pinValue === '2022' || tarjetaValue === '0909-22-6024' && pinValue === '2022' || tarjetaValue === '0909221883' && pinValue === '2022' ||tarjetaValue === '0909226024' && pinValue === '2022'){/* Cuando tarjeta y PIN sean correctos enviar a la siguiernte página */
        setTimeout(function(){
            window.location.href = 'cajero.html';
        }, 1000);
    }
    /* Enviamos el PIN y el número de tarjeta ingresado al localStorage para ser utilizados en la siguiente página */    
    localStorage.setItem('numTarjeta', tarjetaValue);
    localStorage.setItem('numPin', pinValue);
}

/* Función de error */
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

/* Función de éxito */
function setSucessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control exito';
}
