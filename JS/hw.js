// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число

for (let i = 0; i < 11; i++) {
    if (!i) console.log(`${i} - это ноль`);
    else if (i % 2 === 0) console.log(`${i} - это чётное число`);
    else console.log(`${i} - это нечётное число`);  
}

// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3
console.log('');

const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10));
console.log(randomArray);
console.log(randomArray.reduce((a, b) => a + b, 0));
console.log(Math.max(...randomArray));
console.log(randomArray.includes(3));

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
let line = 'x';

for (let i = 0; i < 20; i++) {
    console.log(line);
    line += 'x';
}