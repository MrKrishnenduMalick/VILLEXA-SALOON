import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { name: 'hero-salon-bg.jpg', id: 'photo-1560066984-138dadb4c035', params: 'q=80&w=1600&auto=format&fit=crop' },
  { name: 'carousel-colour.jpg', id: 'photo-1580618672591-eb180b1a973f', params: 'q=80&w=800&auto=format&fit=crop' },
  { name: 'carousel-styling.jpg', id: 'photo-1534528741775-53994a69daeb', params: 'q=80&w=800&auto=format&fit=crop' },
  { name: 'carousel-bridal.jpg', id: 'photo-1595476108010-b4d1f102b1b1', params: 'q=80&w=800&auto=format&fit=crop' },
  { name: 'carousel-mens.jpg', id: 'photo-1622286342621-4bd786c2447c', params: 'q=80&w=800&auto=format&fit=crop' },
  { name: 'about-hero.jpg', id: 'photo-1521590832167-7bcbfaa6381f', params: 'q=80&w=1200&auto=format&fit=crop' },
  { name: 'services-hero.jpg', id: 'photo-1522337360788-8b13dee7a37e', params: 'q=80&w=1200&auto=format&fit=crop' },
  { name: 'salon-storefront.jpg', id: 'photo-1620331311520-246422fd82f9', params: 'q=80&w=1000&auto=format&fit=crop' },
  { name: 'stylist-emma.jpg', id: 'photo-1573496359142-b8d87734a5a2', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'stylist-james.jpg', id: 'photo-1500648767791-00dcc994a43e', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'stylist-sophie.jpg', id: 'photo-1580489944761-15a19d654956', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'stylist-ava.jpg', id: 'photo-1544005313-94ddf0286df2', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-1.jpg', id: 'photo-1519699047748-de8e457a634e', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-2.jpg', id: 'photo-1605497788044-5a32c7078486', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-3.jpg', id: 'photo-1562004760-aceed7bb0fe3', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-4.jpg', id: 'photo-1527799820374-dcf8d9d4a388', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-5.jpg', id: 'photo-1503951914875-452162b0f3f1', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-6.jpg', id: 'photo-1595476108010-b4d1f102b1b1', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-7.jpg', id: 'photo-1582095133179-bfd08e2fc6b3', params: 'q=80&w=600&auto=format&fit=crop' },
  { name: 'gallery-8.jpg', id: 'photo-1507003211169-0a1dd7228f2d', params: 'q=80&w=600&auto=format&fit=crop' }
];

async function downloadAll() {
  for (const img of images) {
    const url = `https://images.unsplash.com/${img.id}?${img.params}`;
    const filePath = path.join(dir, img.name);
    console.log(`Downloading ${img.name}...`);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved ${img.name} (${Math.round(buffer.length / 1024)} KB)`);
    } catch (err) {
      console.error(`Failed ${img.name}:`, err.message);
    }
  }
}

downloadAll();

