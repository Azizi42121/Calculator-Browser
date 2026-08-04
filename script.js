document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen DOM
  const tombol_angka = document.querySelectorAll(".btnNumber");
  const display_angka = document.getElementById("display-angka");
  const display_op = document.getElementById("display-op");
  const tombol_hapus = document.getElementById("btnHapus");
  const tombol_operator = document.querySelectorAll(".btnOperator");
  const tombol_hasil = document.getElementById("btnHasil");
  const tombol_clear = document.getElementById("clear");

  // variabel kosong
  let dataAngka = [[]];
  let operator_terpilih = [];
  let operatorDone = false;

  // fungsi untuk memisahkan bilangan 1 dan bilangan 2
  function inputNUM(value, save) {
    let indexAkhir = save.length - 1;
    return save[indexAkhir].push(value);
  }

  function inputOP(save, operan, option) {
    if (save[save.length - 1].length > 0) {
      save.push([]);
      operan.push(option);
    }
  }

  // event saat mengklik tombol angka
  tombol_angka.forEach((tombol) => {
    tombol.addEventListener("click", function () {
      let teks = this.innerText;

      if (operatorDone === true) {
        display_angka.innerText = "";
      }

      if (teks === "0") {
        if (display_angka.trim === "") {
            alert('jangan mengawali dengan 0');
            return
        }
      }

      display_angka.innerText += teks;
      operatorDone = false;
      inputNUM(teks,dataAngka)
    });
  });

  // event saat mengklik tombol hapus
  tombol_hapus.addEventListener("click", function () {
    let tekslama = display_angka.innerText;

    if (tekslama.trim() === "") return;

    if (tekslama.endsWith(" ")) {
        display_angka.innerText = tekslama.slice(0,-3)
    } else {
        display_angka.innerText = tekslama.slice(0,-1)
    }

    let indexAkhir = dataAngka.length - 1

    if (dataAngka[indexAkhir].length > 0) {
        dataAngka[indexAkhir].pop()
    }

    if (dataAngka[indexAkhir].length === 0 && dataAngka.length > 1) {
        dataAngka.pop()
        operator_terpilih.pop()
    }
  });

  // event saat mengklik tombol operator
  tombol_operator.forEach((tombol) => {
    tombol.addEventListener("click", function () {
      let operator = tombol.innerText;
      operatorDone = true;
      switch (operator) {
        case "×":
          display_op.textContent = " × ";
          inputOP(dataAngka, operator_terpilih, "*");
          break;

        case "+":
          display_op.textContent = " + ";
          inputOP(dataAngka, operator_terpilih, "+");
          break;

        case "÷":
          display_op.textContent = " ÷ ";
          inputOP(dataAngka, operator_terpilih, "/");
          break;

        case "-":
          display_op.textContent = " - ";
          inputOP(dataAngka, operator_terpilih, "-");
          break;
      }
    });
  });

  // event ketika mengklik tombol equal
  tombol_hasil.addEventListener("click", function () {
    let angkaTersimpan = [];
    dataAngka.forEach((bilangan) => {
      bilanganAkhir = Number(bilangan.join(""));
      angkaTersimpan.push(bilanganAkhir);
    });

    let ekspresi = angkaTersimpan.reduce((rumus, num, index) => {
      const op = operator_terpilih[index - 1];
      return `${rumus} ${op} ${num}`;
    });

    let hasilAkhir = eval(ekspresi);
    display_angka.textContent = hasilAkhir;
    display_op.textContent = "=";
  });

  // event ketika menklik tombol clear
  tombol_clear.addEventListener("click",function(){
    display_angka.innerText = ""
    display_op.innerText = ""
    operator_terpilih = []
    dataAngka = [[]]
  })
});
