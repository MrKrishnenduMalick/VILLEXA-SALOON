import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');

const hdImages = [
  // 1. Hair Colour: Gorgeous blonde dimensional balayage model
  {
    name: 'carousel-colour.jpg',
    url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=90&w=1200&auto=format&fit=crop'
  },
  // 2. Hair Styling: Voluminous glowing brunette waves supermodel
  {
    name: 'carousel-styling.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=90&w=1200&auto=format&fit=crop'
  },
  // 3. Bridal Hair: Elegant romantic bridal hair with jewelry
  {
    name: 'carousel-bridal.jpg',
    url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=90&w=1200&auto=format&fit=crop'
  },
  // 4. Men's Grooming: Sharp modern executive fade and sculpted beard
  {
    name: 'carousel-mens.jpg',
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=90&w=1200&auto=format&fit=crop'
  }
];

async function downloadHD() {
  for (const img of hdImages) {
    console.log(`Downloading HD ${img.name}...`);
    try {
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(dir, img.name), buffer);
      console.log(`Saved HD ${img.name} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (e) {
      console.error(`Failed ${img.name}:`, e.message);
    }
  }
}

downloadHD();

