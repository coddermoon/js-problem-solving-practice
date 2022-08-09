

/**
 *  === Math Table Function ===
 */
const numberOfMathTable = 10

function mathTable(number) {
    let result = ''
    for (let i = 1; i <= 10; i++) {
        result += number + '*' + i + '=' + number * i + '\n'

    }
    console.log(result)
}
const table = mathTable(numberOfMathTable)
