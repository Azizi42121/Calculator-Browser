document.addEventListener("DOMContentLoaded", function(){
    // Ambil elemen DOM
    const tombol_angka = document.querySelectorAll('.btnNumber');
    const display_angka = document.getElementById('display');
    const tombol_hapus = document.getElementById('btnHapus');
    const tombol_operator = document.querySelectorAll('.btnOperator');
    const tombol_hasil = document.getElementById('btnHasil')

    // variabel kosong
    let angkaSimpan = [[]];
    let operator_terpilih = "";
    let operatorDone = true;

    // fungsi untuk memisahkan bilangan 1 dan bilangan 2
    function inputNUM(value, save) {
        let indexAkhir = save.length - 1;
        return save[indexAkhir].push(value)
    }

    function inputOP(save) {
        return save.push([])
    }

    // event saat mengklik tombol angkaq
    tombol_angka.forEach(tombol => {
        tombol.addEventListener('click', function(){
            let teks = this.innerText;
            switch (teks) {
                case "1":
                    display_angka.innerText += "1";
                    inputNUM("1",angkaSimpan)
                    break;

                case "2":
                    display_angka.innerText += "2";
                    inputNUM("2",angkaSimpan)
                    break;

                case "3":
                    display_angka.innerText += "3";
                    inputNUM("3",angkaSimpan)
                    break;

                case "4":
                    display_angka.innerText += "4";
                    inputNUM("4",angkaSimpan)
                    break;

                case "5":
                    display_angka.innerText += "5";
                    inputNUM("5",angkaSimpan)
                    break;

                case "6":
                    display_angka.innerText += "6";
                    inputNUM("6",angkaSimpan)
                    break;
                
                case "7":
                    display_angka.innerText += "7";
                    inputNUM("7",angkaSimpan)
                    break;
                
                case "8":
                    display_angka.innerText += "8";
                    inputNUM("8",angkaSimpan)
                    break;

                case "9":
                    display_angka.innerText += "9";
                    inputNUM("9",angkaSimpan)
                    break;

                case "0":
                    if (display_angka.innerText.trim() === "") {
                        alert('jangan mengawali dengan angka 0')
                    } else {
                        display_angka.innerText += "0";
                        inputNUM("0",angkaSimpan)
                    }
                    break;
            }
        })
    })

    // event saat mengklik tombol hapus
    tombol_hapus.addEventListener("click", function(){
        let tekslama = display_angka.innerText;
        let teksbaru = tekslama.slice(0,-1);
        display_angka.innerText = teksbaru
    })

    // event saat mengklik tombol operator
    tombol_operator.forEach(tombol => {
        tombol.addEventListener("click", function(){
            let operator = tombol.innerText
            inputOP(angkaSimpan)
            switch (operator) {
                case "&times;":
                    operator_terpilih = "*"
                    break;
                
                case "+":
                    operator_terpilih = "+"
                    break;

                case "÷":
                    operator_terpilih = "/"
                    break;

                case "-":
                    operator_terpilih = "-"
                    break;
            }
        })
    })

    // event ketika mengklik tombol equal
    tombol_hasil.addEventListener("click",function(){
        console.table(angkaSimpan)
    })
})