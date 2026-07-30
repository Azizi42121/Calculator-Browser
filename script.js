document.addEventListener("DOMContentLoaded", function(){
    // Ambil elemen DOM
    const tombol_angka = document.querySelectorAll('.btnNumber');
    const display_angka = document.getElementById('display');
    const tombol_hapus = document.getElementById('btnHapus');
    const tombol_operator = document.querySelectorAll('.btnOperator');
    const tombol_hasil = document.getElementById('btnHasil')

    // variabel kosong
    let angkaSimpan1 = ""
    let operator_terpilih = "";

    // event saat mengklik tombol angkaq
    tombol_angka.forEach(tombol => {
        tombol.addEventListener('click', function(){
            let teks = this.innerText;
            switch (teks) {
                case "1":
                    display_angka.innerText += "1";
                    angkaSimpan1 += "1";
                    break;

                case "2":
                    display_angka.innerText += "2";
                    angkaSimpan1 += "2";
                    break;

                case "3":
                    display_angka.innerText += "3";
                    angkaSimpan1 += "3";
                    break;

                case "4":
                    display_angka.innerText += "4";
                    angkaSimpan1 += "4";
                    break;

                case "5":
                    display_angka.innerText += "5";
                    angkaSimpan1 += "5";
                    break;

                case "6":
                    display_angka.innerText += "6";
                    angkaSimpan1 += "6";
                    break;
                
                case "7":
                    display_angka.innerText += "7";
                    angkaSimpan1 += "7";
                    break;
                
                case "8":
                    display_angka.innerText += "8";
                    angkaSimpan1 += "8";
                    break;

                case "9":
                    display_angka.innerText += "9";
                    angkaSimpan1 += "9";
                    break;

                case "0":
                    if (display_angka.innerText.trim() === "") {
                        alert('jangan mengawali dengan angka 0')
                    } else {
                        display_angka.innerText += "0";
                        angkaSimpan1 += "0";
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
        console.log(angkaSimpan1)
    })
})