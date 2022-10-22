/* Katherine Nayelhi Flores Figueroa 0909-22-1883 */
/* Jennifer Janeth de León Chuy 0909-22-6024 */

const texto = document.getElementById('saludo');
const letras = texto.innerText.split("");

texto.innerText = '';

letras.forEach((letra)=>{
    texto.innerHTML = texto.innerHTML + `
        <div class="animacion">
            <span>${letra}</span>
            <span class = "segunda-linea">${letra}</span>
        </div>
    `;
});

texto.addEventListener('mouseenter', ()=>{
    let cuenta = 0;

    const intervalo = setInterval(()=>{
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.add('animacion');
            cuenta += 1;
        }else{
            clearInterval(intervalo)
        }
    }, 30);
});

texto.addEventListener('mouseleave', ()=>{
    let cuenta = 0;

    const intervalo = setInterval(()=>{
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.remove('animacion');
            cuenta += 1;
        }else{
            clearInterval(intervalo)
        }
    }, 30);
});