alert('Projeto em desenvolvimento pelo Dev John-orly');
document.addEventListener("DOMContentLoaded", () => {
    function animatefaixa(targetElement) {
        anime({
            targets: targetElement,
            scale: [0.5, 1],
            duration: 700,
            easing: 'easeInOutQuad'
        });
    }

    const faixas = document.querySelectorAll('.linha1, .linha2, .linha3, .linha4, .linha5, .linha6, .linha7');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, options) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatefaixa(entry.target.querySelector('div'));
                // observer.unobserve(entry.target); // Descomente para animar apenas uma vez
            }
        });
    }, options);

    faixas.forEach(faixas => {
        observer.observe(faixas);
    });
});

var menu = document.querySelector('#menu');
var menuheader = document.querySelector('.menuheader');

menu.addEventListener("mouseover", function () {
    if (menuheader.style.display === 'block') {
        menuheader.style.display = 'none';
    } else {
        menuheader.style.display = 'block';
    }
});

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
    } else {
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

