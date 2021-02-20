const container = document.getElementsByClassName('container');
const shapeContainer = document.getElementById('shape-container');
// Sidepanel variables
const shapeName = document.getElementById('sidepanel-shape-name');
const width = document.getElementById('sidepanel-width');
const height = document.getElementById('sidepanel-height');
const radius = document.getElementById('sidepanel-radius');
const area = document.getElementById('sidepanel-area')
const perimeter = document.getElementById('sidepanel-perimeter')
// Buttons
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
        this.addEvents();
        this.render();    
        shapeContainer.appendChild(this.div); 
    }   

    addEvents() {
        this.div.addEventListener('dblclick', () => this.destroy());
        this.div.addEventListener('click', () => this.describe());
    }

    render() {
        this.div.style.top = `${this.getRandomPos(this.height)}px`;
        this.div.style.left = `${this.getRandomPos(this.width)}px`;
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;        
    };           

    describe() {
        shapeName.innerText = this.div.className;
        width.innerText = this.width;
        height.innerText = this.height;        
    }

    destroy() {
        this.div.remove();
        document.getElementsByClassName('sidepanel-labels').innerText = " ";  // not clearing the text ?
    }

    getRandomPos(offset) {
        return Math.floor(Math.random() * (600 - offset));                    
    }     

};

class Square extends Shape {
    constructor(side) {
        super(side, side);
        this.side = side;
        this.div.className = 'square';       
        this.area = this.side * this.side;
        this.perimeter = (2 * this.side) + (2 * this.side);        
    }

    describe() {
        super.describe();
        area.innerText = this.area;
        perimeter.innerText = this.perimeter;        
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width);
        this.div.className = 'rectangle'; 
        this.area = this.height * this.width;  
        this.perimeter = (this.width * 2) + (this.height * 2);   
    }

    describe() {
        super.describe();
        area.innerText = this.area;
        perimeter.innerText = this.perimeter;    
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.radius = radius;                
        this.div.className = 'circle';
        this.area = Math.PI * Math.pow(this.radius, 2);
        this.perimeter = 2 * Math.PI * this.radius; 
        
    }

    describe() {
        super.describe();     
        radius.innerText = this.radius;   
        area.innerText = this.area;
        perimeter.innerText = this.perimeter;
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.className = 'triangle';
        this.div.style.height = "0px";
        this.div.style.width = "0px";
        this.div.style.borderTop = `${this.height}px solid #0091ea`;
        this.div.style.borderRight = `${this.height}px solid transparent`;
        this.area = 0.5 * this.height * this.height;
        this.perimeter = (2 * this.height + Math.sqrt(2) * this.height);
    }

    describe() {
        super.describe();        
        radius.innerText = this.radius;
        area.innerText = this.area;
        perimeter.innerText = this.perimeter;    
}};


squareBtn.addEventListener('click', () => {
    const side = document.getElementById('square-length').value;
    new Square(side);    
})

rectangleBtn.addEventListener('click', () => {
    const height = document.getElementById('rectangle-height').value;
    const width = document.getElementById('rectangle-width').value;
    new Rectangle(height, width);
})

circleBtn.addEventListener('click', () => {
    const radius = document.getElementById('circle-radius').value;
    new Circle(radius); 
})

triangleBtn.addEventListener('click', () => {
    const height = document.getElementById('triangle-height').value;
    new Triangle(height);
})

