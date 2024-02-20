// Создаем объект, описывающий автомобиль
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 100 // км/ч
}

// Функция для вывода информации об автомобиле
function displayCarInfo(car) {
    console.log(`Производитель: ${car.manufacturer}`)
    console.log(`Модель: ${car.model}`)
    console.log(`Год выпуска: ${car.year}`)
    console.log(`Средняя скорость: ${car.averageSpeed} км/ч`)
}

// Функция для расчета необходимого времени для преодоления переданного расстояния
function calculateTravelTime(distance) {
    let travelTime = distance / car.averageSpeed; // время в часах
    let restTime = (travelTime / 4) // количество перерывов на 1 час
    
    travelTime += restTime // добавляем время на перерывы
    
    return travelTime
}

// Вывод информации об автомобиле
displayCarInfo(car)

// Расчет времени для преодоления расстояния 400 км
let distance = 400 // км
let totalTime = calculateTravelTime(distance)
console.log(`Для преодоления расстояния ${distance} км потребуется ${totalTime} часов`)