// 1.  Детально розписано програму:
// 1) оголосити numbers
// 2) присвоїти numbers масив з 7 елементів 5, 8, -1, '-6', 11, 'ololo', '-2': numbers = [5, 8, -1, '-6', 11, 'ololo', '-2']
// 3) оголосити sum
// 4) присвоїти sum 0: sum = 0
// 5) оголосити i
// 6) присвоїти i 0: i = 0
// 7) перевірити, чи i менше довжини масиву: 0 < 7 - так
// 8) присвоїти sum попереднє значення додане до 0-го елементу масиву: sum = 0 + 5 = 5
// 9) збільшити i на одиницю: i = 1
// 10) перевірити, чи i менше довжини масиву: 1 < 7 - так
// 11) присвоїти sum попереднє значення додане до 1-го елементу масиву: sum = 5 + 8 = 13
// 12) збільшити i на одиницю: i = 2
// 13) перевірити, чи i менше довжини масиву: 2 < 7 - так
// 14) присвоїти sum попереднє значення додане до 2-го елементу масиву: sum = 13 + (-1) = 12
// 15) збільшити i на одиницю: i = 3
// 16) перевірити, чи i менше довжини масиву: 3 < 7 - так
// 17) присвоїти sum попереднє значення додане до 3-го елементу масиву: sum = 12 + '-6' = '12-6'
// 18) збільшити i на одиницю: i = 4
// 19) перевірити, чи i менше довжини масиву: 4 < 7 - так
// 20) присвоїти sum попереднє значення додане до 4-го елементу масиву: sum = '12-6' + 11 = '12-611'
// 21) збільшити i на одиницю: i = 5
// 22) перевірити, чи i менше довжини масиву: 5 < 7 - так
// 23) присвоїти sum попереднє значення додане до 5-го елементу масиву: sum = '12-611' + 'ololo' = '12-611ololo'
// 24) збільшити i на одиницю: i = 6
// 25) перевірити, чи i менше довжини масиву: 6 < 7 - так
// 26) присвоїти sum попереднє значення додане до 6-го елементу масиву: sum = '12-611ololo' + '-2' = '12-611ololo-2'
// 27) збільшити i на одиницю: i = 7
// 28) перевірити, чи i менше довжини масиву: 7 < 7 - ні
// 29) вивести повідомлення Sum is '12-611ololo-2'

// 2. Програма перестала коректно рахувати суму чисел при (i = 3)

// 3. щоб сума правильно рахувалась і видавало 15, треба:

const numbers = [5, 8, -1, '-6', 11, 'ololo', '-2'];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if(!isNaN(parseInt(numbers[i]))){
        sum += +numbers[i];
    }
}

alert('Sum is ' + sum);