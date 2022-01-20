"use strict";
/*
 * Author: ANPH
 * Create: 01/08/2018 10:11:50
 */
const _COLOR = require('./configs/color.js');
class Alog {

  constructor(dirpath) {
    this.dirpath = dirpath;
  }
  /**
  * 
  * 
  */
  info() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`${_COLOR.FgCyan} ALOG-INFO - ${this.logTime()} >${_COLOR.Reset}`);
    console.log.apply(console, args);
  }
  /**
   * 
   */
  error() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`${_COLOR.FgRed} ALOG-ERROR - ${this.logTime()} >${_COLOR.Reset}`);
    console.log.apply(console, args);
  }
  /**
   * 
   */
  warning() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`${_COLOR.FgYellow} ALOG-WARNING - ${this.logTime()} >${_COLOR.Reset}`);
    console.log.apply(console, args);
  }
  /**
   * 
   */
  dev() {
    const { NODE_ENV: env = 'development' } = process.env;
    if (env === 'development') {
      const args = Array.prototype.slice.call(arguments);
      args.unshift(`${_COLOR.FgMagenta} ALOG-DEV - ${this.logTime()} >${_COLOR.Reset}`);
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
exports.getInstance = (dirpath = __dirname) => {
  if (!instance) {
    instance = new Alog(dirpath);
  }
  return instance;
}