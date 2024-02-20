// Функция для отображения времени в формате чч:мм:сс
function displayTime(hours, minutes, seconds) {
    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}

// Функция для изменения времени на переданное количество секунд
function changeTimeSeconds(hours, minutes, seconds, secsToAdd) {
    seconds += secsToAdd;
    minutes += Math.floor(seconds / 60);
    seconds %= 60;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 24;
    
    return { hours, minutes, seconds };
}

// Функция для изменения времени на переданное количество минут
function changeTimeMinutes(hours, minutes, seconds, minsToAdd) {
    minutes += minsToAdd;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 24;
    
    return { hours, minutes, seconds };
}

// Функция для изменения времени на переданное количество часов
function changeTimeHours(hours, minutes, seconds, hoursToAdd) {
    hours += hoursToAdd;
    hours %= 24;
    
    return { hours, minutes, seconds };
}

let hours = 20;
let minutes = 30;
let seconds = 45;

displayTime(hours, minutes, seconds);
let newTime = changeTimeSeconds(hours, minutes, seconds, 30);
displayTime(newTime.hours, newTime.minutes, newTime.seconds);
newTime = changeTimeMinutes(newTime.hours, newTime.minutes, newTime.seconds, 5);
displayTime(newTime.hours, newTime.minutes, newTime.seconds);
newTime = changeTimeHours(newTime.hours, newTime.minutes, newTime.seconds, 1);
displayTime(newTime.hours, newTime.minutes, newTime.seconds);
