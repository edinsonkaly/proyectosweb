// Simple script to create a base64 favicon
const fs = require('fs');

// Create a simple 16x16 favicon data (ICO format header + bitmap)
const icoHeader = Buffer.from([
    0x00, 0x00, // Reserved
    0x01, 0x00, // Type: ICO
    0x01, 0x00, // Number of images: 1
    
    // Image directory entry
    0x10,       // Width: 16
    0x10,       // Height: 16
    0x00,       // Color palette: 0 (no palette)
    0x00,       // Reserved
    0x01, 0x00, // Color planes: 1
    0x20, 0x00, // Bits per pixel: 32
    0x00, 0x04, 0x00, 0x00, // Size of image data: 1024 bytes
    0x16, 0x00, 0x00, 0x00  // Offset to image data: 22 bytes
]);

// Create a simple 16x16 bitmap with EON SAM AI colors
const bitmapData = Buffer.alloc(1024); // 16x16x4 bytes (RGBA)

// Fill with gradient background and simple AI pattern
for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
        const index = (y * 16 + x) * 4;
        
        // Create a circular gradient effect
        const centerX = 8, centerY = 8;
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        
        if (distance <= 7) {
            // Inside circle - gradient from purple to blue
            const ratio = distance / 7;
            bitmapData[index] = Math.floor(99 + ratio * (59 - 99));     // Blue
            bitmapData[index + 1] = Math.floor(102 + ratio * (130 - 102)); // Green  
            bitmapData[index + 2] = Math.floor(241 + ratio * (246 - 241)); // Red
            bitmapData[index + 3] = 255; // Alpha
            
            // Add some neural network dots
            if ((x === 4 && y === 4) || (x === 12 && y === 4) || 
                (x === 8 && y === 8) || (x === 4 && y === 12) || (x === 12 && y === 12)) {
                bitmapData[index] = 255;     // White dots
                bitmapData[index + 1] = 255;
                bitmapData[index + 2] = 255;
                bitmapData[index + 3] = 255;
            }
        } else {
            // Outside circle - transparent
            bitmapData[index] = 0;
            bitmapData[index + 1] = 0;
            bitmapData[index + 2] = 0;
            bitmapData[index + 3] = 0;
        }
    }
}

// Combine header and bitmap data
const icoFile = Buffer.concat([icoHeader, bitmapData]);

// Write to favicon.ico
fs.writeFileSync('favicon.ico', icoFile);
console.log('Favicon created successfully!');
