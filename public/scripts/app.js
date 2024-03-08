class App {
  constructor() {
    this.searchCar = document.getElementById('search-car')
    this.carsArea = document.getElementById('view-cars')
  }

  run = () => {
    let passengerCount = document.getElementById('passengerCount').value
    console.log(passengerCount)
    
    const filtererCars = Car.list.filter(cars => cars.capacity == passengerCount)
    console.log(filtererCars)

    filtererCars.forEach((car) => {
      this.carsArea.innerHTML += 
      `<div class="col-md-4 d-flex">
      <div class="card" style="width: 20rem;">
        <div class="card-body">
          <img src="${car.image}" class="card-img-top mb-5" alt="${car.manufacture}">
          <h6 class="card-subtitle mb-4">${car.manufacture} / ${car.model} ${car.type}</h6>
          <h5 class="card-title">Rp ${car.rentPerDay} / Hari</h5>
          <p class="card-text">${car.description}</p>
          <div class="flex d-flex m-auto mb-2 gap-2">
            <img src="images/assets/fi_users.png" alt="" width="25">
            <p class="mb-0">${car.capacity} orang</p>
          </div>
          <div class="flex d-flex m-auto mb-2 gap-2">
            <img src="images/assets/fi_settings.png" alt="" width="25">
            <p class="mb-0">${car.transmission}</p>
          </div>
          <div class="flex d-flex m-auto mb-2 gap-2">
            <img src="images/assets/fi_calendar.png" alt="" width="25">
            <p class="mb-0">Tahun ${car.year}</p>
          </div>
          <a href="#" class="btn btn-primary">Pilih Mobil</a>
        </div>
      </div>
    </div>`
    })
  }

  async load() {
    const cars = await Binar.listCars()
    console.log(cars)
    Car.init(cars)
  }

  async init() {
    
    await this.load()

    // click listenernya
    this.searchCar.onclick = this.run
  }

}