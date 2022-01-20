"use strict";
/*
 * Author: ANPH
 * Create: 01/08/2018 10:11:50
 */
const _COLOR = require('./configs/color.js');
class Alog {

  constructor(mode, dirpath, logName) {
    this.mode = mode;
    this.dirpath = dirpath;
    this.logName = logName;
  }
  /**
  * 
  * 
  */
  info() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`${_COLOR.FgCyan} ${this.logName}-INFO - ${this.logTime()} >${_COLOR.Reset}`);
    console.log.apply(console, args);
  }
  /**
   * 
   */
  error() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`${_COLOR.FgRed} ${this.logName}-ERROR - ${this.logTime()} >${_COLOR.Reset}`);
    console.log.apply(console, args);
  }
  /**
   * 
   */
  warning() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`${_COLOR.FgYellow} ${this.logName}-WARNING - ${this.logTime()} >${_COLOR.Reset}`);
    console.log.apply(console, args);
  }
  /**
   * 
   */
  dev() {
    if (this.mode === 'development') {
      const args = Array.prototype.slice.call(arguments);
      args.unshift(`${_COLOR.FgMagenta} ${this.logName}-DEV - ${this.logTime()} >${_COLOR.Reset}`);
      console.log.apply(console, args);
    }
  }
  /**
   * write log to file at path __dirname/logs
   * @param {*} fname 
   * @param {*} txt 
   */
  write(txt, fname = 'combined') {
    const os = require('os'),
      fs = require('fs'),
      date = new Date(),
      realFName = [fname, os.hostname(), date.getDate(), date.getMonth() + 1, date.getFullYear(), '.log'].join('-'),
      folder = this.dirpath + '/logs/',
      path = folder + realFName;
    !fs.existsSync(folder) && fs.mkdirSync(folder);
    fs.writeFile(path, txt + '\n', { flag: 'a' }, err => {
      if (err)
        throw new Error(err);
    });
  }

  /**
  * 
  * @returns 
  */
  logTime() {
    const date = new Date()//+ 7 in hour -> GMT +7
    const datime = new Date(date.valueOf() + date.getTimezoneOffset() * 60000);
    return this.dateFmt(datime) + ' ' + this.hmsFmt(datime);
  }

  padLeft = num => num < 10 ? '0' + num : num

  dateFmt = (datime) => [
    this.padLeft(datime.getDate()),
    this.padLeft(datime.getMonth() + 1),
    datime.getFullYear()
  ].join('/')

  hmsFmt = (datime) => [
    this.padLeft(datime.getHours() + 7),
    this.padLeft(datime.getMinutes()),
    this.padLeft(datime.getSeconds())
  ].join(':')
}

// singleton
let instance = null;
exports.getInstance = (mode, dirpath = __dirname, logName = 'ALOG') => {
  if (!instance) {
    instance = new Alog(mode, dirpath, logName);
  }
  return instance;
}