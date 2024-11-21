function vastausviesti() {
    let nimi = document.getElementById("nimi_palaute").value;
    let sposti = document.getElementById("sposti_palaute").value;
    let puh = document.getElementById("puh_palaute").value;
    let palaute = document.getElementById("palaute").value;

    var parasta = "Sydämesi valloitti ";
    var radios = document.getElementsByName("parasta");
    var length = radios.length;

    for (var i = 0; i < length; i++) {
        if (radios[i].checked) {
            parasta = parasta + radios[i].value;
        }

    }
    var monivalinnat = "Haluaisit kahvilaamme lisää: ";
    var boksit = document.getElementsByName("lisaa");
    var length = boksit.length;

    for (var i = 0; i < length; i++) {
        if (boksit[i].checked) {
            monivalinnat = monivalinnat + "<br>" +boksit[i].value;
        }
    }

    var valinta = "Vierailisitko uudelleen kahvilassamme? : "; 
    var x = document.getElementById("loytyiko").selectedIndex;
    var y = document.getElementById("loytyiko").options;
    valinta = valinta + y[x].text;


    document.getElementById("vastausviesti").innerHTML = "Kiitos palautteestasi, "
        + nimi + "<br> Sähköpostisi: " + sposti + "<br> Puhelinnumerosi: " + puh 
        + "<br> Palautteesi: " + palaute + "<br> " + parasta + "<br> " 
        + monivalinnat + "<br>" + valinta;
}