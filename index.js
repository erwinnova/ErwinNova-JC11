// =============================== 1 ==================================== //
// Fungsi .filter buat memfilter setiap item di dalam array
// item => item merupakan parameter yang mewakili setiap isi dalam array dan item bisa diganti menjadi apapun

// var nama = ['lian', 'andi', 'susilo', 'afif', 'sandy']
// var nama4 = nama.filter(item => item.length > 4)

// console.log(nama4)

// var data = [
//     {
//         nama : 'andi',
//         usia : 22
//     },
//     {
//         nama : 'afif',
//         usia : 13
//     },
//     {
//         nama : 'bunga',
//         usia : 17
//     },
//     {
//         nama : 'susilo',
//         usia : 20
//     }
// ]
// var usia18 = data.filter(umur => umur.usia > 17)

// console.log(usia18)

// =============================== 2 ==================================== //
// Fungsi .map adalah untuk memproses setiap data di array

// var w = [1,4,9,16,25]
// var x = w.map(Math.sqrt);
// var y = w.map(val => val * 2);
// var z = w.map(val => val!==9);

// console.log(x);
// console.log(y);
// console.log(z);

// =============================== 3 ==================================== //
// Destructuring array

// let buah = [
// 'Apel',
// 'Duku',
// 'Leci'
//     ]

// var [ x, y, z ] = buah;

//     console.log(x);
//     console.log(y);
//     console.log(z);

// // Destructuring Object

// let andi = {
//     nama: 'Andi',
//     usia: 24,
//     job: 'PNS'
//     }

// var { nama, usia, job } = andi;

//     console.log(nama);
//     console.log(usia);
//     console.log(job);

// =============================== 4 ==================================== //
// Membuat function perulangan dengan .repeat

// var nama = ['lian', 'andi', 'susilo', 'afif', 'sandy']
// function perulangan(map){
//     return map.map(item => item.repeat(2))   
// }
// console.log(perulangan(nama))

// =============================== 5 ==================================== //
// Membuat function didalam function

// var data = [
//         {
//             nama : 'andi',
//             usia : 22
//         },
//         {
//             nama : 'afif',
//             usia : 13
//         },
//         {
//             nama : 'bunga',
//             usia : 17
//         },
//         {
//             nama : 'susilo',
//             usia : 20
//         }
// ];
// function orang(manusia, fn){
//     var dibawah20 = manusia.filter(val => val.usia <20);
//     var ambilNamaAja = dibawah20.map(val => val.nama);
//     return fn(ambilNamaAja);
// };
// function dibawahUmur(string){
//     return `${string} dibawah umur`
// };
// console.log(orang(data, dibawahUmur))

// =============================== 5 ==================================== //
// Tugas membuat perulangan dalam array tanpa menggunakan .repeat

var nama = ['lian', 'andi', 'susilo', 'afif', 'sandy'];

function ulang(arr, banyakPerulangan){
    var output = [];
    for (i = 0; i<arr.length; i++){
        var isi = '';
        for (j = 0; j<banyakPerulangan; j++){
            isi += arr[i];
        }
        output.push(isi);
    }
    return output;
}
console.log(ulang(nama,2))


function diulang(input){
    let output = [];
    for (i = 0; i<input.length; i++){
        let isi = '';
        for (j = 0; j < input[i].length; j++){
            isi += input[i];
        }
        output.push(isi)
    }
    return output;
}
console.log(diulang(nama))

