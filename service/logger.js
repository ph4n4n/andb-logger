"use strict";
/*
 * Author: ANPH
 * Create: 01/08/2018 10:11:50
 */
const _COLOR = require('../configs/color.js');
const _ICONS = require('../configs/icons.js');

const LEVELS = {
  INFO: 'info',
  ERROR: 'error',
  WARN: 'warn',
  DEV: 'dev'
};

/**
 * Alog - Simple logging utility with color support and file logging
 */
class AndbLogger {

  /**
   * @param {Object} options - Configuration options
   * @param {string} [options.mode='production'] - Logging mode
   * @param {string} [options.dirpath=__dirname] - Directory path for logs
   * @param {string} [options.logName='ALOG'] - Logger name prefix
   * @param {string} [options.theme='classic'] - Icon theme
   */
  constructor(options = {}) {
    this.mode = options.mode || 'production';
    this.dirpath = options.dirpath || __dirname;
    this.logName = options.logName || 'ANDB';
    this.timeZone = options.timeZone || 7; // GMT+7
    this.theme = options.theme || 'classic';
    this.icons = _ICONS[this.theme] || _ICONS.classic;
  }

  /**
   * Set icon theme
   * @param {string} theme - Theme name
   */
  setTheme(theme) {
    this.theme = theme;
    this.icons = _ICONS[theme] || _ICONS.classic;
  }
  /**
   * Log structured message
   * @param {string} level - Level of the message
   * @returns {string} Formatted message
   */
  logStructured(level) {
    return `${this.logTime()} ${this.icons[level]} ${this.logName}-${level.toUpperCase()}`;
  }

  /**
   * Log info level message
   * @param {...any} args - Arguments to log
   */
  info(...args) {
    args.unshift(`${_COLOR.FgCyan} ${this.logStructured(LEVELS.INFO)} >${_COLOR.Reset}`);
    console.log(...args);
  }

  /**
   * Log error level message
   * @param {...any} args - Arguments to log
   */
  error(...args) {
    args.unshift(`${_COLOR.FgRed} ${this.logStructured(LEVELS.ERROR)} >${_COLOR.Reset}`);
    console.log(...args);
  }

  /**
   * Log warning level message
   * @param {...any} args - Arguments to log
   */
  warn(...args) {
    args.unshift(`${_COLOR.FgYellow} ${this.logStructured(LEVELS.WARN)} >${_COLOR.Reset}`);
    console.log(...args);
  }

  /**
   * Log development message (only in dev mode)
   * @param {...any} args - Arguments to log
   */
  dev(...args) {
    if (['development', 'dev'].includes(this.mode.toLowerCase())) {
      args.unshift(`${_COLOR.FgMagenta} ${this.logStructured(LEVELS.DEV)} >${_COLOR.Reset}`);
      console.log(...args);
    }
  }

  /**
   * Write log to file
   * @param {string} txt - Text to write
   * @param {string} [fname='combined'] - File name prefix
   */
  write(txt, fname = 'combined') {
    const os = require('os');
    const fs = require('fs');
    const date = new Date();
    const realFName = [fname, os.hostname(), date.getDate(), date.getMonth() + 1, date.getFullYear(), '.log'].join('-');
    const folder = this.dirpath + '/logs/';
    const path = folder + realFName;

    try {
      !fs.existsSync(folder) && fs.mkdirSync(folder);
      fs.writeFileSync(path, txt + '\n', { flag: 'a' });
    } catch (err) {
      this.error('Failed to write log file:', err.message);
    }
  }

  /**
   * Get formatted current time with time zone default (GMT+7)
   * @returns {string} Formatted time string
   */
  logTime() {
    const date = new Date();
    return this.dateFmt(date) + ' ' + this.hmsFmt(date);
  }

  /**
   * Pad number with leading zero
   * @param {number} num - Number to pad
   * @returns {string} Padded number
   */
  padLeft(num) {
    return num < 10 ? '0' + num : num;
  }

  /**
   * Format date as DD/MM/YYYY
   * @param {Date} date - Date to format
   * @returns {string} Formatted date
   */
  dateFmt(date) {
    return [
      this.padLeft(date.getDate()),
      this.padLeft(date.getMonth() + 1),
      date.getFullYear()
    ].join('/');
  }

  /**
   * Format time as HH:MM:SS (GMT+7)
   * @param {Date} date - Date to format
   * @returns {string} Formatted time
   */
  hmsFmt(date) {
    const gmt7Hours = date.getUTCHours() + this.timeZone;
    return [
      this.padLeft(gmt7Hours),
      this.padLeft(date.getUTCMinutes()),
      this.padLeft(date.getUTCSeconds())
    ].join(':');
  }
}

// Singleton instance
let instance = null;

/**
 * Get singleton logger instance
 * @param {Object} options - Logger options
 * @returns {Alog} Logger instance
 */
function getInstance(options) {
  if (!instance) {
    instance = new AndbLogger(options);
  }
  return instance;
}

module.exports = {
  getInstance,
  getLogger: getInstance,
};