// // if else

// let result1 = confirm('Вам же есть 18 лет?')
// if(result1){
//     alert('Добро пожаловать!')
// }else{
//     alert('Доступ запрещен!')
// }

// // while

// let x1 = 0;
// while(x1 < 10){
//     x1+=1;
//     console.log(x);
// }

// while(true){
//     if(x<20){
//         x+=1;
//         console.log(x);
//     }else{
//         break
//     }
// }

// // for

// for (let index = 0; index < 5; index++) {
//     if(index == 2){
//         continue;
//     }
//     console.log(index);

//     if(index == 4){
//         break;
//     }
// }

//  // массивы 

// let array1 = [];
// let array2 = [0,1,2,3,4];
// let array3 = Array();
// let array4 = Array(0,1,2,3,4);

// console.log(array1, array2, array3, array4);
// console.log('Четвёртый элемент списка ', array2[4]);

// // метод push добавляет в конец
// array1.push(5,6,7);
// console.log('Список после добавления ',array1);

// // unshift добавляет в начало

// array1.unshift(10,12,11);
// console.log(array1);

// // reverse переворачивает список

// let revers_array = array1.reverse();
// console.log('После переворота ', revers_array);

// // pop 

// let last_remove = array1.pop();
// console.log(last_remove);
// console.log(array1);
// console.log(revers_array);

// // методы проверки вхождения эллементов в массив

// // includes

// if(array1.includes(7)){
//     console.log('Эллемент 7 есть в массиве' , array1);
// }

// if(!array1.includes(15)){
//     console.log('Эллемент 15 отсутствует' , array1);
// }

// // indexof

// if(array1.indexOf(7) != -1){
//     console.log('Эллемент 3 есть в массиве indexof');
// }

// if(array1.indexOf(15) == -1){
//     console.log('Эллемента 30 нет в массиве indexof');
// }

// // concat объяденяет массивы

// let concat_array1 = [1,2];
// let concat_array2 = [3,4];

// let concat_array = concat_array1.concat(concat_array2);
// console.log('Куда подселяем', concat_array1);
// console.log('Что подселяем', concat_array2);
// console.log('Итог', concat_array);

// // for в сочетании с array

// let for_array = ["0","1","2","3","4","5"];

// for (let index = 0; index < for_array.length; index++) {
//     console.log(for_array[index]);
    
// }

// // == и ===

// if(1=="1"){
//     console.log('1=="1" равны');
// }

// if(1==="1"){
//     console.log('1=="1" равны');
// }

// // №1
// let array_mounth = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентабрь","Октябрь","Ноябрь","Декабрь"];
// let revers_array_mouth = array_mounth.reverse();
// console.log(revers_array_mouth);
// array_mounth.reverse();
// console.log(array_mounth[11]);
// let mounth = array_mounth[11];
// array_mounth.pop(array_mounth[11]);
// console.log(array_mounth);
// array_mounth.push(mounth);
// console.log(array_mounth);

// // №2
// let number = Array();
// let counter = 0;
// while(counter<10){
//     let result = prompt('Введите число:');
//     console.log(result);
//     if(result % 2 == 0){
//         number.push(+result);
//     }
//     counter+=1;
    
// }
// console.log(number);

// // №3

// let days = Array('ПОНЕДЕЛЬНИК','ВТОРНИК','СРЕДА','ЧЕТВЕРГ','ПЯТНИЦА','СУББОТА','ВОСКРЕСЕНЬЕ');
// let count = 0;
// while(count<7){
//     let result = prompt('Введите день недели:');
//     if(days.includes(result.toUpperCase())){
//         console.log(result);
//     }
//     count+=1;
// }

// №4
let numbers_array = Array();

while(true){
    let result = prompt('Введите число:');
    if(result == +result && result !=0){
        numbers_array.push(+result)
    }else{
        break;
    }
}
let sort_number = numbers_array.sort((a,b)=>a-b);
console.log(sort_number);
console.log('Минимальное число ',sort_number[0],'Максимальное число ',sort_number[sort_number.length-1]);  // не работает корректно сортирует по первой цифре (102, 25, 3) он так и оставит

let result = 0;

for (let index = 0; index < sort_number.length; index++) {
    result = +result + +sort_number[index];
}
console.log('Сумма всех чисел равна = ', result);

let final_result = 0;
final_result = +result / +sort_number.length;
console.log('Среднее значение ',final_result);




