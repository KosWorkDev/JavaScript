let one_number = +prompt('Введите первое число:');
while(true){
    if(one_number == +one_number){
        break;
    }
}

let two_number = +prompt('Введите первое число:');
while(true){
    if(two_number == +two_number){
        break;
    }
}

let key = prompt('Введите символ (+, -, /, *):');
switch (key) {
    case '+':
        console.log('Сумма чисел =', one_number + two_number);
        break;
    case '-':
        console.log('Разность чисел =', one_number - two_number);
        break;
    case '/':
        if(two_number == 0){
            console.log('На ноль делить нельзя!');
        }else{
            console.log('Частное чисел =', one_number / two_number);
        }
        break;
    case '*':
        console.log('Произведение чисел =', one_number * two_number);
        break;    

    default:
        break;
}