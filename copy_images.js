const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\meetk\\.gemini\\antigravity-ide\\brain\\e19509d4-32fd-46e2-80de-0e7ccef45e51';
const publicImagesDir = 'c:\\Users\\meetk\\Downloads\\shasuma-spices-website-development\\public\\images';

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

const files = fs.readdirSync(artifactDir);

const mapping = {
  'hero_cumin': 'hero-cumin.png',
  'hero_spices': 'hero-spices.png',
  'about_main': 'about-main.png',
  'product_jeera': 'product-jeera.png',
  'product_dhaniya': 'product-dhaniya.png',
  'product_ajwain': 'product-ajwain.png',
  'product_fennel': 'product-fennel.png'
};

files.forEach(file => {
  if (file.endsWith('.png')) {
    for (const [prefix, newName] of Object.entries(mapping)) {
      if (file.startsWith(prefix)) {
        fs.copyFileSync(path.join(artifactDir, file), path.join(publicImagesDir, newName));
        console.log(`Copied ${file} to ${newName}`);
      }
    }
  }
});
