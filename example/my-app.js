
const logger = require('../service/logger').getInstance({
  mode: 'development',
  dirpath: __dirname,
  theme: 'classic'  // Start with classic theme
});

console.log('=== AndbLogger - All 10 Themes Demo ===\n');

// Theme 1: Classic
logger.setTheme('classic');
console.log('🎭 Theme: Classic');
logger.info('Traditional logging icons');
logger.error('Clean and professional');
logger.warn('Standard warning style');
logger.dev('Development mode active');

console.log('\n');

// Theme 2: Emoji
logger.setTheme('emoji');
console.log('🎭 Theme: Emoji');
logger.info('Expressive emoji icons');
logger.error('Colorful and fun');
logger.warn('Eye-catching warnings');
logger.dev('Playful development logs');

console.log('\n');

// Theme 3: Symbols
logger.setTheme('symbols');
console.log('🎭 Theme: Symbols');
logger.info('Simple ASCII symbols');
logger.error('Lightweight and universal');
logger.warn('Fast rendering');
logger.dev('Minimal overhead');

console.log('\n');

// Theme 4: Arrows
logger.setTheme('arrows');
console.log('🎭 Theme: Arrows');
logger.info('Directional arrow icons');
logger.error('Modern and sleek');
logger.warn('Smooth visual flow');
logger.dev('Dynamic development');

console.log('\n');

// Theme 5: Circles
logger.setTheme('circles');
console.log('🎭 Theme: Circles');
logger.info('Circular indicators');
logger.error('Minimal and clean');
logger.warn('Geometric simplicity');
logger.dev('Uniform appearance');

console.log('\n');

// Theme 6: Squares
logger.setTheme('squares');
console.log('🎭 Theme: Squares');
logger.info('Square block icons');
logger.error('Geometric and structured');
logger.warn('Bold visual impact');
logger.dev('Solid foundation');

console.log('\n');

// Theme 7: Tech
logger.setTheme('tech');
console.log('🎭 Theme: Tech');
logger.info('Technology-focused icons');
logger.error('Perfect for dev environments');
logger.warn('Modern tech stack');
logger.dev('Developer friendly');

console.log('\n');

// Theme 8: Nature
logger.setTheme('nature');
console.log('🎭 Theme: Nature');
logger.info('Natural element icons');
logger.error('Organic and calming');
logger.warn('Environmental awareness');
logger.dev('Growth and development');

console.log('\n');

// Theme 9: Faces
logger.setTheme('faces');
console.log('🎭 Theme: Faces');
logger.info('Expressive face emojis');
logger.error('Emotional and relatable');
logger.warn('Human touch');
logger.dev('Personality in logs');

console.log('\n');

// Theme 10: Minimal
logger.setTheme('minimal');
console.log('🎭 Theme: Minimal');
logger.info('Single letter indicators');
logger.error('Ultra-minimal and fast');
logger.warn('Maximum performance');
logger.dev('Clean and simple');

console.log('\n=== File Logging Demo ===\n');

// File logging examples
logger.write('=== Theme Demo Log ===', 'themes');
logger.write('Classic: ℹ️❌⚠️🔧', 'themes');
logger.write('Emoji: 📝💥🚨⚙️', 'themes');
logger.write('Symbols: ✓✗!⚡', 'themes');
logger.write('Arrows: →↯↻⚡', 'themes');
logger.write('Circles: ●●●●', 'themes');
logger.write('Squares: ■■■■', 'themes');
logger.write('Tech: 💻🔥⚡🔧', 'themes');
logger.write('Nature: 🌱🌋🌩️🌿', 'themes');
logger.write('Faces: 😊😱😰🤔', 'themes');
logger.write('Minimal: i e w d', 'themes');

console.log('✅ All 10 themes demonstrated successfully!');
console.log('📁 Check example/logs/themes-*.log for file output');