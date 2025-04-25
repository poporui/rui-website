const canvasSize = 450;
const baseSize = 500;
const resolution = Math.floor((canvasSize / baseSize) * 12);
const asciiDensity = " .,:;?#@R";

// ✅ Default text color
let characterColor = "#717011"; 

// yellow
let C1 = "#31312A";  
let C2 = "#31312A";  
let C3 = "#31312A";  
let hoverColor = "#F4F6F8"; 

// let C1 = "#00FFAE";  
// let C2 = "#00FFAE";  
// let C3 = "#00FFAE";  
// let hoverColor = "#FFFFFF"; 

///FF7FB4,3E3E28,6780FF-blue，9AABFF-lighter blue

const charColors = {
    ".": C1, ",": C1, ":": C1, 
    ";": C2, "?": C2,          
    "#": C3, "@": C3           
};

const canvas = document.getElementById("asciiCanvas");
const ctx = canvas.getContext("2d");
canvas.width = canvasSize;
canvas.height = canvasSize;

// ✅ Ensure Crisp Scaling
ctx.scale(1, 1);

let asciiGrid = [];
let mouseX = -1;
let mouseY = -1;

canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

canvas.addEventListener("mouseleave", () => {
    mouseX = -1;
    mouseY = -1;
});

let img = new Image();
img.crossOrigin = "anonymous";
img.src = "../public/girl.png"; // Relative path from `ascii-art-light/`

img.onload = function () {
    console.log("✅ Image loaded successfully!");
    processImage(img);
};

img.onerror = function () {
    console.error("❌ ERROR: Could not load girl.png. Check the file path!");
};

function processImage(image) {
    const imgCanvas = document.createElement("canvas");
    const imgCtx = imgCanvas.getContext("2d");
    imgCanvas.width = canvasSize / resolution;
    imgCanvas.height = canvasSize / resolution;
    imgCtx.drawImage(image, 0, 0, imgCanvas.width, imgCanvas.height);
    const imgData = imgCtx.getImageData(0, 0, imgCanvas.width, imgCanvas.height).data;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${resolution}px monospace`; 
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"; // ✅ Ensures text is properly aligned

    asciiGrid = [];

    for (let j = 0; j < imgCanvas.height; j++) {
        for (let i = 0; i < imgCanvas.width; i++) {
            let pixelIndex = (i + j * imgCanvas.width) * 4;
            let r = imgData[pixelIndex];
            let g = imgData[pixelIndex + 1];
            let b = imgData[pixelIndex + 2];
            let brightness = (r + g + b) / 3;
            brightness += Math.sin(performance.now() * 0.0005 + i * 0.3 + j * 0.3) * 10;

            let charIndex = Math.floor(map(brightness, 0, 255, asciiDensity.length - 1, 0));
            charIndex = Math.max(0, Math.min(asciiDensity.length - 1, charIndex));
            let asciiChar = asciiDensity[charIndex];

            // ✅ Round Positions to Avoid Subpixel Rendering Issues
            let x = Math.round(i * resolution + resolution * 0.5);  
            let y = Math.round(j * resolution + resolution * 1.0);  

            asciiGrid.push({ x, y, asciiChar });

            let dx = Math.abs(mouseX - x);
            let dy = Math.abs(mouseY - y);
            let hoverThreshold = resolution * (1 + Math.random() * 2);
            let isHovered = (dx < hoverThreshold * 1.4 && dy < hoverThreshold * 1.5);

            ctx.fillStyle = isHovered ? hoverColor : charColors[asciiChar] || characterColor;
            ctx.fillText(asciiChar, x, y);
        }
    }

    requestAnimationFrame(() => processImage(image));
}

function map(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}