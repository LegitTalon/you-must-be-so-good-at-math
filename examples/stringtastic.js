import StringPlus from './StringPlus'

const hello = StringPlus('hello world')

const exclaim = message => message + '!'

console.log(hello.map(exclaim).toString())
