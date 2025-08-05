/**
 * Icon themes for AndbLogger
 * 10 different themes for 4 logging methods
 */

const ICONS = {
  // Theme 1: Classic - Traditional logging icons
  classic: {
    info: 'ℹ️',
    error: '❌', 
    warn: '⚠️',
    dev: '🔧',
    description: 'Traditional logging icons - clean and professional'
  },

  // Theme 2: Emoji - Expressive emoji icons
  emoji: {
    info: '📝',
    error: '💥',
    warn: '🚨',
    dev: '⚙️',
    description: 'Expressive emoji icons - colorful and fun'
  },

  // Theme 3: Symbols - Simple ASCII symbols
  symbols: {
    info: '✓',
    error: '✗',
    warn: '!',
    dev: '⚡',
    description: 'Simple ASCII symbols - lightweight and universal'
  },

  // Theme 4: Arrows - Directional arrow icons
  arrows: {
    info: '→',
    error: '↯',
    warn: '↻',
    dev: '⚡',
    description: 'Directional arrows - modern and sleek'
  },

  // Theme 5: Circles - Circular indicators
  circles: {
    info: '●',
    error: '●',
    warn: '●',
    dev: '●',
    description: 'Circular indicators - minimal and clean'
  },

  // Theme 6: Squares - Square block icons
  squares: {
    info: '■',
    error: '■',
    warn: '■',
    dev: '■',
    description: 'Square blocks - geometric and structured'
  },

  // Theme 7: Tech - Technology-focused icons
  tech: {
    info: '💻',
    error: '🔥',
    warn: '⚡',
    dev: '🔧',
    description: 'Technology-focused icons - perfect for dev environments'
  },

  // Theme 8: Nature - Natural element icons
  nature: {
    info: '🌱',
    error: '🌋',
    warn: '🌩️',
    dev: '🌿',
    description: 'Natural elements - organic and calming'
  },

  // Theme 9: Faces - Expressive face emojis
  faces: {
    info: '😊',
    error: '😱',
    warn: '😰',
    dev: '🤔',
    description: 'Expressive faces - emotional and relatable'
  },

  // Theme 10: Minimal - Single letter indicators
  minimal: {
    info: 'i',
    error: 'e',
    warn: 'w',
    dev: 'd',
    description: 'Single letters - ultra-minimal and fast'
  }
};

module.exports = ICONS;
