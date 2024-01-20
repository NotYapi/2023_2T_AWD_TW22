function changeColors() {
    const body = document.body;

    const randomColor = () => Math.floor(Math.random() * 256);
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    body.style.backgroundColor = bgColor;
}