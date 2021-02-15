let myCar = {
    make: "Chevy",
    model: "Tracker",
    year: 1989,
    price: 2000,
    color: "Olive Drab",
    sound: "CLINK BANG BANG VROOM"
}

let subby = {
    make: "Subaru",
    model: "Forester",
    year: 2017,
    price: 27000,
    sound: "vroom"
}

let cars = [myCar, subby]

class Car {
    constructor(make = "", model, year, price = "", color, sound = "vroom") {
        this.make = make
        this.model = model
        this.year = year
        this.price = price || 0
        this.color = color
        this.sound = sound
        this.startCar = startFn
    }

    start() {
    console.log(this.sound);
}

}

let tracker = new Car("Chevy", "Tracker", 1989, undefined, "Olive Drab", "CLINK BANG BANG VROOM")
let tracker2 = new Car("Chevy", "Tracker", 1989, undefined, "Olive Drab", "CLINK BANG BANG VROOM")
tracker == tracker2
constructedCars = [tracker, new Car("Subaru", "Forester", 2017, 27000, "Blue")]

constructedCars.forEach(car => car.start());
cars.forEach(car => console.log(car.color))

function start(car) {
    console.log(car.sound);
}