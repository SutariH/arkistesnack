const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  // Create canvas
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, width, height);

  // Add gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#111111');    // dark grey
  gradient.addColorStop(0.5, '#6A6A6A');  // mid grey
  gradient.addColorStop(1, '#FFFFFF');     // white
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add title
  ctx.font = 'bold 60px Inter';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText('What Should I Eat', width/2, height/2 - 40);
  ctx.fillText('While Rendering?', width/2, height/2 + 40);

  // Add subtitle with Arkiste green
  ctx.font = '32px Inter';
  ctx.fillStyle = '#00857F';
  ctx.fillText('A snack generator for architects', width/2, height/2 + 100);

  // Add emoji
  ctx.font = '72px Arial';
  ctx.fillText('🍕 ☕️ 📏', width/2, height/2 + 180);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, '../public/og-image.png'), buffer);
}

generateOGImage().catch(console.error); 