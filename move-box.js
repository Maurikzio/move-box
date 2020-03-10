document.body.style.backgroundColor = 'orange';

//controls
const rigth = document.getElementById('r');
const left = document.getElementById('l');
const up = document.getElementById('u');
const down = document.getElementById('d');
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
    const btn = event.target.id

    if(btn === 'd') {
        if(!(boxCoords.bottom + distance <= parentCoords.bottom)) return;
        box.style.top = `${verticalPos+distance}px`;
    }
    if(btn === 'u') {
        if(!(boxCoords.top - distance >= parentCoords.top)) return; 
        box.style.top = `${verticalPos-distance}px`;
    }
    if(btn === 'r') {
        if((boxCoords.right + distance >= parentCoords.right)) return;
        box.style.left = `${horizontalPos+distance}px`;
    }
    if(btn === 'l') {
        if(!(boxCoords.left - distance >= parentCoords.left)) return;
        box.style.left = `${horizontalPos-distance}px`;
    }
}

down.addEventListener('click', movement);
up.addEventListener('click', movement);
left.addEventListener('click', movement);
rigth.addEventListener('click', movement);

/*
to check if box reaches the edge in the next move
if(btn === 'd') {
    console.log(`box top: ${boxCoords.top + 30 + distance}`);
    console.log(`parent bottom: ${parentCoords.bottom}`);
    if(boxCoords.top + 30 + distance > parentCoords.bottom){
         const toReachEdge = parentCoords.bottom - (boxCoords.top + 30);
         box.style.top = `${verticalPos+toReachEdge}px`;
         return;
    }
    box.style.top = `${verticalPos+distance}px`;
}*/