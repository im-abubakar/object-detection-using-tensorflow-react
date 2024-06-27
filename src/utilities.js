// utilities.js

export const drawRect = (detections, ctx) => {
  console.log("drawRect called with detections:", detections);
  
  detections.forEach(prediction => {
    // Get prediction results
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];
    
    console.log(`Drawing rectangle: ${text} at [${x}, ${y}, ${width}, ${height}]`);

    // Set styling
    ctx.strokeStyle = '#00FFFF';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#00FFFF';
    ctx.font = '18px Arial';

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};
