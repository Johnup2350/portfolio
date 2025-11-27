alert('Este é um potifolio e projeto em desenvolvimento pelo Dev John-orly');

function motraseA() {
    const aside = document.getElementById("aside_R");
    aside.classList.toggle("oculto");
    let h1 = document.getElementById("title_h1_aside");
    h1.textContent = "A Descrição";
    let p = document.getElementById("parag_aside");
    p.textContent = "É fazendo que se aprende a fazer aquilo que se deve fazer e seus frutos " +
        "são doces.Técnico de Suporte de TI, atuando com computação e Infraestrutura de Rede. Aspirando" +
        "crescimento na minha carreira estou, em busca de oportunidades mais pra contratação de profissional" +
        " autônomo, atuando na área de atendimento ao usuário oferecendo suporte e comodidade, realizando " +
        "atendimento remoto e presencial. Possuindo experiência em Instalação de câmeras, configuração de" +
        "softwares, eletrônico “de conserto até montagem de qualquer computador”, conhecimentos em rotina" +
        "de Backup, Itil, Experiência em Windows, Linux, Mac, Monitoramento, CSS / Html, Java, Photoshop e" +
        "Gráfico 3D, Falo Francês fluentemente, inglês intermediário Com CNH AD-EAR, Faculdade em ciência da" +
        "computação. Trabalhei para inúmeras " + "pessoas da comunidade local e também empresas como Farma Brasília," +
        "Pedras do rio, Odontoclinic, Atelier da Thereza etc... em vista disso ganhei boas avaliações que consequentemente" +
        "me ajudou a Evoluir e Melhorar. Atualmente trabalhando como Técnico de Suporte Local" +
        " na CTC uma Grande Empresa de Tecnologia Transformadora."
}
function motraseC() {
    const aside = document.getElementById("aside_R");
    aside.classList.toggle("oculto");
    let h1 = document.getElementById("title_h1_aside");
    h1.textContent = "Atualment N2 CTC";
    let p = document.getElementById("parag_aside");
    p.textContent = "Atendimento ao Usuário:\n " +
        "Realizo atendimentos presenciais ou remotos para solucionar problemas técnicos reportados pelos usuários ”+” Diagnóstico e Solução de Problemas: ”+” Identificando a causa de falhas em equipamentos, softwares e redes, e aplico as soluções adequadas. Instalo e configuro softwares, hardwares e equipamentos de acordo com as necessidades dos usuários e da empresa. Realizo verificações periódicas e manutenções preventivas em equipamentos para evitar problemas futuros." +
        "Registro detalhadamente as atividades realizadas incluindo diagnósticos soluções e tempos de execução além de elaborar relatórios de incidentes Mantenho uma comunicação clara e eficaz com os usuários equipes de suporte e fornecedores para garantir a resolução dos problemas. escalo problemas complexos ou que não podem ser resolvidos no local para níveis superiores de suporte. Mantenho-me atualizado sobre as novas tecnoçogias."
}
document.addEventListener("DOMContentLoaded", () => {
    function animatedivimain(targetElement) {
        anime({
            targets: targetElement,
            scale: [0.5,1],
            duration: 700,
            easing: 'easeInOutQuad'
        });
    }
    const faixas = document.querySelectorAll('.divimain');
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, options) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedivimain(entry.target.querySelector('div')); 
            }
        });
    }, options);
    
    faixas.forEach(divimain => {
        observer.observe(divimain);
    });
});
var menu = document.querySelector('#menu');
var menuheader = document.querySelector('.menuheader');

menu.addEventListener("click", function () {
    if (menuheader.style.display === 'block') {
        menuheader.style.display = 'none';
    } else {
        menuheader.style.display = 'block';
    }
});
function motraseB() {
    document.body.style.backgroundColor = "white";
}

function cleann() {
    document.getElementById("barra").value = "";
}
function srch() {
    let barra = document.getElementById("barra").value;

    if (barra == "" || barra == null) {
        let p = document.getElementById("textinput");
        p.innerHTML = "please fill in the field";
        p.style.color = "red";
        p.style.fontSize = "20px";
    }  else {
        let p = document.getElementById("textinput");
        p.innerHTML = "John-orly, is being developed";
        p.style.color = "white";
        p.style.fontSize = "20px";
    }    
    function transformers() {
        let div = document.getElementById("bodypajlan");
        div.style.backgroundColor = "red";
    }
}

