let walker = [];
let t = 10;
let bgColor = [244, 246, 248]; // F4F6F8 converted to RGB

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1'); // Send canvas to the background
    background(bgColor); // Apply the new background color
    for (let i = 0; i < 400; i++) {
        walker.push(new Walker(random(width), random(height)));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    for (let i = 0; i < walker.length; i++) {
        walker[i].update();
        walker[i].show();
    }
}

// Walker Class
class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.color = color(random(128, 255), random(128, 255), random(128, 255));
        this.size = 1;
    }

    update() {
        let n = noise(t);
        t += 0.1;
        this.pos.x += n;

        let mouse = createVector(mouseX, mouseY);
        let acc = p5.Vector.sub(mouse, this.pos);
        acc.setMag(300);
        this.pos.add(acc);
    }

    show() {
        let m = noise(t);
        t += 0.001;
        stroke(lerpColor(this.color, color(160 + m * 40, 160 + m * 40, 160 + m * 40), 0.5));
        strokeWeight(this.size);
        point(this.pos.x, this.pos.y);
    }
}