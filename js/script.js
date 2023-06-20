document.addEventListener('DOMContentLoaded', () => {
    const draw = (count) => {
        const drawCircles = document.querySelector(".circles-block");
        for(let i=0; i < count; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            circle.style.position = 'absolute';
            circle.style.left = Math.random() * 1024 + 'px';
            circle.style.top = Math.random() * 768 + 'px';
            circle.style.background = 'rgb(' + Math.random() * 256 + ',' + Math.random() * 256 + ',' + Math.random() * 256 + ')';
            drawCircles.append(circle);
        }
    };
    draw(30);
});