/**
 * @file views 测试文件
 * @author jamesjianpeng
 */
const greeting = (name: string, greetings: string, time: string): string => {
  return `${name}, ${ greetings }, now is ${ time }`;
}

export default {
    greeting
}
