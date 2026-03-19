// Card Hover Parallax Effect
const cards = document.querySelectorAll('.glass-card');

document.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    cards.forEach(card => {
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
});

// Reset position when mouse leaves
document.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = "all 0.5s ease";
    });
});