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

const text = '<h1>Olá, Mundo!</h1>';
const texto2 = '<p>Meu nome é Witor Lomazzi, sou Dev front-end</p>'
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



//habilidades
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );
