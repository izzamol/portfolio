function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}


//apresentação / tela de inicio

const apresentacao = document.querySelector('.p1')
const apresentacao2 = document.querySelector('.p2')

const text = '<h1> Olá, Mundo!</h1>';
const texto2 = '<p> Meu nome é Witor Lomazzi, sou desenvolvedor front-end</p>'
const interval = 100;
const text3 = "|"


function addP3(t){
    t.classList.add('p3')
 }

function removeP3(t){
 }

function mostrarTexto(apresentacao, texto2, texto, interval){

    const ch = text.split("").reverse();
    


    const typer = setInterval(() =>{

       
        if(!ch.length){
            return clearInterval(typer);
        }

        addP3(apresentacao)
        const next = ch.pop();
        apresentacao.innerHTML += next



 


       
    }, interval)
   

setTimeout(p2,4000)

}

function p2(){
    apresentacao.classList.remove('p3')
    addP3(apresentacao2)
    const ch2 = texto2.split("").reverse();

    

    const typer2 = setInterval(() =>{
        if(!ch2.length){
            return clearInterval(typer2);
        }

        const next2 = ch2.pop();
        apresentacao2.innerHTML += next2 




    }, interval)
   
}



mostrarTexto(apresentacao, texto2, text, interval)