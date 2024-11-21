function tulos() {
    let nimi = document.getElementById("nimi").value;
    let sposti = document.getElementById("sposti").value;
    let puh = document.getElementById("puh").value;
    let hlomaara = document.getElementById("hlomaara").value;
    let pvm = document.getElementById("pvm").value;
    let aika = document.getElementById("aika").value;
    document.getElementById("tulos").innerHTML = "Kiitos varauksestasi, " + 
    nimi + "<br> Sähköpostisi: " + sposti + "<br> Puhelinnumerosi: " + puh + "<br> Varaustietosi: " 
    + hlomaara + " henkilöä, " + pvm + " klo " + aika;
    }