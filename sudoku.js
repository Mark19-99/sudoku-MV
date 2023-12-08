const fs = require('fs')
const path = require('path')
function read() {
  const fileName = './puzzles.txt'
  const pathToFile = path.join(__dirname, fileName)
  const readFile = fs.readFileSync(pathToFile, 'utf-8').trim().split('\n')[0]
  
  return readFile
}
read()

const firstGame = read()
function solve() {
  function solvingSudoku(){
  }
  return firstGame
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}
console.log(solve());
function isSolved() {
  if (firstGame) {
    return false
  }
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}
console.log(isSolved());
function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
