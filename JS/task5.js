const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const result = {};

if (en.length === ru.length) {
    for (let i = 0; i < en.length; i++) {
        result[en[i]] = ru[i];        
    }
} else {
    console.log('не равные массивы');
}

console.log(result);