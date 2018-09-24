/**
 * @file views 测试文件
 * @author jamesjianpeng
 */

/**
 * @param {string} name
 * @param {string} greetings
 * @param {string} time
 * @returns {string}
 */
const greeting = (name, greetings, time) => {
  return `${name}, ${ greetings }, now is ${ time }`;
}

export default {
    greeting
}
