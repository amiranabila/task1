// string "nama saya"
// number
// integer 123
// float 12.5
//Aray ["nama" 123 "saya"]
// object{
//     nama="amira"
//     alamat="bmy"
// }
// var bisa dideklarsi ulang 
// let tidak biss dideklarasi ulang
// conts nilai nya tidak akan berubah contoh phi 22/7

// var nama="amira"
// var umur="24"
// console.log(`Hello World ${nama}, umur saya adalah ${umur}`)

// let angka1=100
// let angka2=50
// console.log(angka1 % angka2)

// condition (if else, switch case)
// const nilai= 75
// if (nilai < 80){
//     console.log("Nilai B")
// }else if(nilai > 50){
//     console.log("nilai c")
// }else if(nilai< 20) {
//     console.log("nilai D")
// }else{
//     console.log("nilai z")
// }
//  function
// named function
// function Hello(){
//     const nama = "Amira"
//     console.log(nama)
// }
// Hello()


// arrow function
// let arrowFunction = () => {
//     console.log('hello')
// }

// arrowFunction();

// function Hello dengan parameter dinamisnya -> output : Hello, namanya
// let fullName = "Amira"
// let address = "Bumiayu"
// function Hello(nama, alamat){
//     console.log(`Hallo nama saya ${nama} alamat saya di ${alamat}`)
// }

// Hello(fullName, address)

// function hello(name){
//     console.log(`hello ${name}`)
// }
// hello("amira")

// challenge : anonymous function
function submitData() {
    const inputName = document.getElementById("inputName").value
    const inputEmail = document.getElementById("inputEmail").value
    const inputPhone = document.getElementById("inputPhone").value
    const inputSubject = document.getElementById("inputSubject").value
    const inputMessage = document.getElementById("inputMessage").value

    // kondisi (memunculkan sebuah alert "{field} harus diisi")
    if (inputName == "") {
        alert('Nama harus diisi')
    } else if (inputEmail == "") {
        alert('Email harus diisi')
    } else if (inputPhone == "") {
        alert('Phone number harus diisi')
    } else if (inputSubject == "") {
        alert('Subject harus diisi')
    } else if (inputMessage == "") {
        alert('Message harus diisi')
    } else {
        // harus tervalidasi dulu

        console.log(`Name : ${inputName}\nEmail: ${inputEmail}\nPhone: ${inputPhone}\nSubject: ${inputSubject}\nMessage: ${inputMessage}`)

        let a = document.createElement('a')
        a.href = `mailto:${inputEmail}?subject=${inputSubject}&body=${inputMessage}`
        a.click()
    }
}

// const buah = ["apel", "nanas", "mangga"]

// console.log(buah)

// const data = {
//     nama: inputName,
//     email: inputEmail,
//     phone: inputPhone,
//     subject: inputSubject,
//     message: inputMessage
// }

// console.log([data, data, data])

// 1 == "1" -> true
// 1 === "1" -> false