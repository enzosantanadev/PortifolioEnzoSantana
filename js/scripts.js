function typeEffect() {
    const typingElement = document.querySelector('.typing-animation');

    if (forward) {
        typingElement.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            index = text.length; // Corrigir para garantir que index não exceda o limite
            forward = false;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = text.slice(0, index);
        index--;

        if (index < 0) {
            index = 0; // Corrigir para garantir que index não seja negativo
            forward = true;
            setTimeout(typeEffect, 500);
            return;
        }
    }
    setTimeout(typeEffect, 200);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// Seleciona os itens do menu e adiciona o efeito de teletransporte
document.querySelectorAll('header nav ul li a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        // Identifica a seção alvo
        const targetId = item.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Aplica o efeito de teletransporte à seção de destino
        targetSection.classList.add('teletransporte');
        
        // Define um timeout para rolar e remover o efeito
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            targetSection.classList.remove('teletransporte');
        }, 100); // Duração da animação em ms
    });
});

