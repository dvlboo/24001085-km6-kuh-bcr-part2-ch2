const findCarCard = document.getElementById('listCars')

const findCarFilter = () => {
  let passengerCount = document.getElementById('passengerCount').value

  console.log(passengerCount)

  setTimeout(() => {
    const getCarFil = car.searchCars(passengerCount)
    let carCardWithFilterCap = ""
    getStudentFil.map((student) => {
      studentCardWithFilterStudents += `<div class="col-md-4">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.address.city}, ${student.address.province}</p>
          </div>
        </div>
      </div>`
    })

    console.log(getStudentFil)
    studentCard.innerHTML = studentCardWithFilterStudents
  

    // const allStudents = students.getAllStudent()
    // let studentCardWithAllStudents = ""
    // allStudents.map((student) => {
    //   studentCardWithAllStudents += `<div class="col-md-4">
    //       <div class="card">
    //           <div class="card-body">
    //               <h5 class="card-title">${student.name}</h5>
    //               <p class="card-text">${student.address.city}, ${student.address.province}</p>
    //           </div>
    //       </div>
    //   </div>`
    // })
  
    // console.log(allStudents)
    // studentCard.innerHTML = studentCardWithAllStudents
  
    navbarBrand[0].innerHTML = "hahahahha"
  }, 2000)
}