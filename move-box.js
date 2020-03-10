document.body.style.backgroundColor = 'orange';

class Box {
    constructor(x, y, speed, color){
        this.box = document.createElement('div');
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
    set coordinates([top=0, left=0]){
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
        const parentCoords = this.parent.getBoundingClientRect();

        switch(btn){
            case 'Down':
                if(!(this.coordinates.bottom + this.distance <= parentCoords.bottom)) break;
                this.box.style.top = `${verticalPos + this.distance}px`;
            break;
            case 'Up':
                if(!(this.coordinates.top - this.distance >= parentCoords.top)) break; 
                this.box.style.top = `${verticalPos - this.distance}px`;
            break;
            case 'Right':
                if((this.coordinates.right + this.distance >= parentCoords.right)) break;
                this.box.style.left = `${horizontalPos + this.distance}px`;
            break;
            case 'Left':
                if(!(this.coordinates.left - this.distance >= parentCoords.left)) break;
                this.box.style.left = `${horizontalPos - this.distance}px`;
            break;
        }
    }
    start(){
        this.parent.append(this.box);
        window.addEventListener('keydown', this.move.bind(this));
        this.setControls().forEach(control => {
            control.addEventListener('click', this.move.bind(this));
        });
    }
}

const pinkBox = new Box(50, 50, 50, 'red');
// pinkBox.coordinates = [150, 40];
pinkBox.start();

const greenBox = new Box(10, 10, 30, 'green');
greenBox.start();

const whiteBox = new Box(30, 80, 20, 'white');
whiteBox.start();

// const b = document.createElement('div');
// b.style.backgroundColor = 'red';
// function show(element){
//     console.log(this.style);
// }
// show.call(b);