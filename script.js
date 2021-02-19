const container = document.getElementsByClassName('container');
const shapeContainer = document.getElementById('shape-container');

const shapeName = document.getElementById('sidepanel-shape-name');
const width = document.getElementById('sidepanel-width');
const height = document.getElementById('sidepanel-height');
const radius = document.getElementById('sidepanel-radius');
const area = document.getElementById('sidepanel-area')
const perimeter = document.getElementById('sidepanel-perimeter')

const rectangleBtn = document.getElementById('rectangle-btn');
const squareBtn = document.getElementById('square-btn');
const circleBtn = document.getElementById('circle-btn');
const triangleBtn = document.getElementById('triangle-btn');

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;

        this.div = document.createElement('div');
        this.div.className = 'shape';  
        this.getRandomLocation();     
        this.div.style.left = `${height}px`;
        this.div.style.top = `${width}px`;
        shapeContainer.appendChild(this.div);
        
    }   
    getRandomLocation() {
        let x = Math.floor(Math.random() * 600);
        let y = Math.floor(Math.random() * 600);
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;            
    }
      

}

class Square extends Shape {
    constructor(length) {
        super(height, width);
        this.length = length;

        this.div = document.createElement('div');
        this.div.className = 'square';
        this.div.style.width = `${length}px`;
        this.div.style.height = `${length}px`;
        this.getRandomLocation();
        shapeContainer.appendChild(this.div);
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.div.remove);
        
    }
    describe() {
        shapeName.innerText = this.className;
        width.innerText = this.length;
        height.innerText = this.length;
        let rad = (this.length / 2) * 1.414;
        radius.innerText = rad;
        let a = this.length * this.length;
        area.innerText = a;
        let p = this.length * 4;
        perimeter.innerText = p;
    }

}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);

        this.div = document.createElement('div');
        this.div.className = 'rectangle';
        this.div.style.height = `${height}px`;
        this.div.style.width = `${width}px`;
        this.getRandomLocation();
        shapeContainer.appendChild(this.div);
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.div.remove);
    }

    describe() {
        shapeName.innerText = this.className;
        width.innerText = this.width;
        height.innerText = this.height;
        // let rad = (this.length / 2) * 1.414;
        // radius.innerText = rad;
        let a = this.height * this.width;
        area.innerText = a;
        let p = (this.width * 2) + (this.height * 2);
        perimeter.innerText = p;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(height, width);
        this.radius = radius; 
        
        this.div = document.createElement('div');
        this.div.className = 'circle';
        this.div.style.borderBottom= `${radius}px solid rgb(253, 237, 91)`;        
        this.div.style.borderRight = `${radius}px solid transparent`; 
        this.getRandomLocation();
        shapeContainer.appendChild(this.div);
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.div.remove);
    }

    describe() {
        shapeName.innerText = this.className;
        // width.innerText = this.length;
        // height.innerText = this.length;
        // let rad = (this.length / 2) * 1.414;
        radius.innerText = this.radius;
        let a = Math.pow(Math.PI * (this.radius * this.radius))
        area.innerText = a;
        let p = Math.pow(2 * Math.PI * this.radius);
        perimeter.innerText = p;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, width);

        this.div = document.createElement('div');
        this.div.className = 'triangle';
        shapeContainer.appendChild(this.div);
        this.getRandomLocation();
        this.div.addEventListener('click', () => this.describe());
        this.div.addEventListener('dblclick', () => this.div.remove);
    }

    describe() {
        shapeName.innerText = this.className;
        //width.innerText = this.width;
        height.innerText = this.height;
        radius.innerText = this.radius;
        let a = 0.5 * this.height * this.height
        area.innerText = a;
        let p = (2 * this.height + (Math.pow.Square(2)) * this.height);
        perimeter.innerText = p;
    
}};

squareBtn.addEventListener('click', () => {
    const squareLengthInput = document.getElementById('square-length');
    new Square(squareLengthInput);
})

rectangleBtn.addEventListener('click', () => {
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleWidthInput = document.getElementById('rectangle-width');
    new Rectangle(rectangleHeightInput, rectangleWidthInput);
})

circleBtn.addEventListener('click', () => {
    const circleRadiusInput = document.getElementById('circle-radius');
    new Circle(circleRadiusInput); 
})

triangleBtn.addEventListener('click', () => {
    const triangleHeightInput = document.getElementById('triangle-height');
    new Triangle(triangleHeightInput);
})

