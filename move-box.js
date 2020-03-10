document.body.style.backgroundColor = 'orange';

//controls
const right = document.getElementById('Right');
const left = document.getElementById('Left');
const up = document.getElementById('Up');
const down = document.getElementById('Down');
//elements
const container = document.getElementById('container');
const box = document.getElementById('box');
// const parentCoords = container.getBoundingClientRect();
//initial box state
box.style.top = '200px';
box.style.left = '51px';

function movement(event){
    const boxCoords = document.getElementById('box').getBoundingClientRect();
    const parentCoords = container.getBoundingClientRect();
    const distance = 33;
    const verticalPos = parseInt(box.style.top);
    const horizontalPos = parseInt(box.style.left);
    const btn = event.target.id || event.keyIdentifier;
    // console.log(btn);

    if(btn === 'Down') {
        if(!(boxCoords.bottom + distance <= parentCoords.bottom)) return;
        box.style.top = `${verticalPos+distance}px`;
    }
    if(btn === 'Up') {
        if(!(boxCoords.top - distance >= parentCoords.top)) return; 
        box.style.top = `${verticalPos-distance}px`;
    }
    if(btn === 'Right') {
        if((boxCoords.right + distance >= parentCoords.right)) return;
        box.style.left = `${horizontalPos+distance}px`;
    }
    if(btn === 'Left') {
        if(!(boxCoords.left - distance >= parentCoords.left)) return;
        box.style.left = `${horizontalPos-distance}px`;
    }
}

down.addEventListener('click', movement);
up.addEventListener('click', movement);
left.addEventListener('click', movement);
right.addEventListener('click', movement);

window.addEventListener('keydown', movement);