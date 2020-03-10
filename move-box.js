document.body.style.backgroundColor = 'orange';


//controls
const right = document.getElementById('Right');
const left = document.getElementById('Left');
const up = document.getElementById('Up');
const down = document.getElementById('Down');
//elements
const container = document.getElementById('container');
const box = document.getElementById('box');
// setTimeout(() => {
//     box.style.transition = 'all 0.5s';
//   }, 300)

//initial box state
box.style.top = '200px';
box.style.left = '50px';

function movement(event){
    const boxCoords = document.getElementById('box').getBoundingClientRect();
    const parentCoords = container.getBoundingClientRect();
    const distance = 50;
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


class Box {
    constructor(x, y, speed, color){
        this.box = document.getElementById('box2');
        this.parent = document.getElementById('container');
        this.box.style.width = '30px';
        this.box.style.height = '30px';
        this.box.style.backgroundColor = color;
        this.box.style.position = 'absolute';
        this.box.style.top = `${x}px`;
        this.box.style.left = `${y}px`;
        this.distance = speed;
    }
    get coordinates(){
        return this.box.getBoundingClientRect();
    }

    set coordinates([top='100px', left='100px']){
        [this.box.style.top, this.box.style.left] = [`${top}px`, `${left}px`];
    }
    setControls(){
        const right = document.getElementById('Right');
        const left = document.getElementById('Left');
        const up = document.getElementById('Up');
        const down = document.getElementById('Down');
        return [right, left, up, down];
    }
    move(event){
        const verticalPos = this.coordinates.top;
        const horizontalPos = this.coordinates.left;
        const btn = event.target.id || event.keyIdentifier;
        
        switch(btn){
            case 'Down':
                if(!(this.coordinates.bottom + this.distance <= this.parent.getBoundingClientRect().bottom)) break;
                this.box.style.top = `${verticalPos + this.distance}px`;
            break;
            case 'Up':
                if(!(this.coordinates.top - this.distance >= this.parent.getBoundingClientRect().top)) break; 
                this.box.style.top = `${verticalPos - this.distance}px`;
            break;
            case 'Right':
                if((this.coordinates.right + this.distance >= this.parent.getBoundingClientRect().right)) break;
                this.box.style.left = `${horizontalPos + this.distance}px`;
            break;
            case 'Left':
                if(!(this.coordinates.left - this.distance >= this.parent.getBoundingClientRect().left)) break;
                this.box.style.left = `${horizontalPos - this.distance}px`;
            break;
        }
    }

    start(){
        window.addEventListener('keydown', this.move.bind(this));
        this.setControls().forEach(control => {
            control.addEventListener('click', this.move);
        })
    }
}

const pinkBox = new Box(50, 50, 50, 'red');
// pinkBox.coordinates = [150, 40];
pinkBox.start();

const b = document.createElement('div');
b.style.backgroundColor = 'red';
function show(element){
    console.log(this.style);
}
show.call(b);