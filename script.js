let isDragging = false
let offSetX, offSetY

let card = document.querySelector('.card')

card.addEventListener('mousedown', mouseDown)
document.addEventListener('mouseup', mouseUp)
document.addEventListener('mousemove', mouseMove)

function mouseDown(e) {
    isDragging = true

    offSetX = e.clientX - card.offsetLeft
    offSetY = e.clientY - card.offsetTop
    card.style.cursor = 'grabbing';
}

function mouseMove(e) {
    if (isDragging) {
        card.style.position = 'absolute'
        const x = e.clientX - offSetX;
        const y = e.clientY - offSetY;
        card.style.left = x + 'px';
        card.style.top = y + 'px';
    }
}

function mouseUp(e) {
    isDragging = false
    card.style.cursor = 'grab'
}