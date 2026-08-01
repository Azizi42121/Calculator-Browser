document.addEventListener("DOMContentLoaded", function(){
    // Ambil elemen DOM
    const tombol_angka = document.querySelectorAll('.btnNumber');
    const display_angka = document.getElementById('display');
    const tombol_hapus = document.getElementById('btnHapus');
    const tombol_operator = document.querySelectorAll('.btnOperator');
    const tombol_hasil = document.getElementById('btnHasil')
    const tombol_clear = document.getElementById('clear')

    // variabel kosong
    let dataAngka = [[]];
    let operator_terpilih = [];
    let operatorDone = true;

    // fungsi untuk memisahkan bilangan 1 dan bilangan 2
    function inputNUM(value, save) {
        let indexAkhir = save.length - 1;
        return save[indexAkhir].push(value)
    }

    function inputOP(save,operan,option) {
        save.push([]);
        operan.push(option);
        return save,operan
    }

    // event saat mengklik tombol angkaq
    tombol_angka.forEach(tombol => {
        tombol.addEventListener('click', function(){
            let teks = this.innerText;
            switch (teks) {
                case "1":
                    display_angka.innerText += "1";
                    inputNUM("1",dataAngka)
                    break;

                case "2":
                    display_angka.innerText += "2";
                    inputNUM("2",dataAngka)
                    break;

                case "3":
                    display_angka.innerText += "3";
                    inputNUM("3",dataAngka)
                    break;

                case "4":
                    display_angka.innerText += "4";
                    inputNUM("4",dataAngka)
                    break;

                case "5":
                    display_angka.innerText += "5";
                    inputNUM("5",dataAngka)
                    break;

                case "6":
                    display_angka.innerText += "6";
                    inputNUM("6",dataAngka)
                    break;
                
                case "7":
                    display_angka.innerText += "7";
                    inputNUM("7",dataAngka)
                    break;
                
                case "8":
                    display_angka.innerText += "8";
                    inputNUM("8",dataAngka)
                    break;

                case "9":
                    display_angka.innerText += "9";
                    inputNUM("9",dataAngka)
                    break;

                case "0":
                    if (display_angka.innerText.trim() === "") {
                        alert('jangan mengawali dengan angka 0')
                    } else {
                        display_angka.innerText += "0";
                        inputNUM("0",dataAngka)
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
                    inputOP(dataAngka,operator_terpilih,"*")
                    break;
                    
                    
                case "+":
                    inputOP(dataAngka,operator_terpilih,"+")
                    break;

                case "÷":
                    inputOP(dataAngka,operator_terpilih,"/")
                    break;

                case "-":
                     inputOP(dataAngka,operator_terpilih,"-")
                    break;
            }
        })
    })

    // event ketika mengklik tombol equal
    tombol_hasil.addEventListener("click",function(){
        let angkaTersimpan = []
        dataAngka.forEach((bilangan) => {
            bilanganAkhir = bilangan.join("");
            angkaTersimpan.push(bilanganAkhir)
        })
        
        let ekspresi = `${angkaTersimpan[0]}`
        for (let i = 0; i < operator_terpilih.length; i++) {
            ekspresi += `${operator_terpilih[i]} ${angkaTersimpan[i + 1]}`
        }

        let hasilAkhir = eval(ekspresi);
        display_angka.innerText = hasilAkhir
    })
})