Date.isLeapYear = function (year) { 
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)); 
};
Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};
Date.prototype.isLeapYear = function () { 
    return Date.isLeapYear(this.getFullYear()); 
};
Date.prototype.getDaysInMonth = function () { 
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};
Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};
Date.prototype.addDays = function (value) {
    this.setDate(this.getDate() + value * 1);
    return this;
};


/* var myDate = new Date();
var result1 = myDate.addMonths(-744);
var dateRetirementLimit = result1.addDays(-139);
var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value); */

// alert(dateRetirementLimit.toLocaleDateString());
// alert(dateDatumNarodenia.toLocaleDateString());

// alert(result2-dateDatumNarodenia);



// window = onbeforeunload = chekRentirementlDate();

function checkRentirementDate(){
    var myDate = new Date();
    var result1 = myDate.addMonths(-744);
    var dateRetirementLimit = result1.addDays(-139);
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    if(dateDatumNarodenia < dateRetirementLimit){
        bDochodkovyVek = true;
        var arr =  document.getElementsByClassName("media-body info");
        if (document.getElementById('pohlavie').value == "Muž"){
            arr[0].innerHTML = "Žiadateľ zavŕšil dôchodkový vek. Postupujte v zmysle Rizikosmernice \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
        }
        else {
            arr[0].innerHTML = "Žiadateľka zavŕšila dôchodkový vek. Postupujte v zmysle Rizikosmernice \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
        }
    }
    else {
        bDochodkovyVek = false
        // alert(bDochodkovyVek); check či nie je viac ako polovica
    }
}

function checkLeasingToRentirementDate(){
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var result1 = dateDatumNarodenia.addMonths(744);
    var dateRetirementDate = result1.addDays(139); //dopracovať funkciu na výpočet dôchodkového veku žien narodených pred 01.01.1962 (array)
    var dateLeasingRuntimeHalf = new Date(myDate.addMonths((document.getElementById('dlzkaFinancovania'.value)/2)+1))

    if(dateLeasingRuntimeHalf > dateRetirementDate){
        var arr =  document.getElementsByClassName("media-body info");
        if (document.getElementById('pohlavie').value == "Muž"){
            arr[0].innerHTML = "Žiadateľ zavŕši dôchodkový vek skôr, ako skončí polovica doby financovania \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
        }
        else {
            arr[0].innerHTML = "Žiadateľka zavŕši dôchodkový vek skôr, ako skončí polovica doby financovania \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
        }
    }
    else {
        // alert(bDochodkovyVek); check či nie je viac ako polovica
    }
}

/*Kontrola dôchodkového veku u žien narodených pred 01.01.1962*/
var hideField = document.getElementsByClassName('form-group col-md-4h'), i;
var refDochodokZeny = new Date('1962-01-01');

function checkGender(){
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var chkPohlavie = ((document.getElementById('pohlavie').value) == "Muž") ? false: true;
    if ((dateDatumNarodenia < refDochodokZeny) && (chkPohlavie == true)){
        document.getElementById("hideclass").style.visibility = "visible";
        }
    else {
        document.getElementById("hideclass").style.visibility = "hidden";
    }
}

document.getElementById("inputDatumNarodenia").addEventListener("change", checkGender);
document.getElementById("inputDatumNarodenia").addEventListener("change", checkRentirementDate);
document.getElementById("dlzkaFinancovania").addEventListener("change", checkLeasingToRentirementDate);
document.getElementById("pohlavie").addEventListener("change", checkGender);
