const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

function flyShip(event) {
    if (event.key === 'ArrowUp') {
        event.preventDefault();
        moveuUp();
    } else if (event.key === 'arrowDown') {
        event.preventDefaul();
        moveDown();
    } else if (event.key === ' ') {
        event.preventDefault();
        fireLaser();
    }
}

function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if (topPosition === '0px') {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}