import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');
const filePath = path.join(dir, 'luxury-marble-gold.jpg');

// High resolution black and gold marble texture
const url = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=85&w=1800&auto=format&fit=crop';

async function downloadMarble() {
  console.log('Downloading luxury black & gold marble...');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log(`Saved luxury-marble-gold.jpg (${Math.round(buffer.length / 1024)} KB)`);
  } catch (err) {
    console.error('Failed to download:', err.message);
  }
}

downloadMarble();

