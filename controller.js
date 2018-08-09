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

window = onbeforeunload = chekRentirementlDate();

function chekRentirementlDate(){
    var myDate = new Date();
    var result1 = myDate.addMonths(-744);
    var dateRetirementLimit = result1.addDays(-139);
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var datePolovicaLeasingu = new Date(myDate.addMonths(document.getElementById()))
    var bDochodkovyVek
    if(dateDatumNarodenia < dateRetirementLimit){
        bDochodkovyVek = true;
        // alert(bDochodkovyVek);
    }
    else {
        bDochodkovyVek = false
        // alert(bDochodkovyVek);
    }

}

/*Kontrola dôchodkového veku u žien narodených pred 01.01.1962*/
var hideField = document.getElementsByClassName('form-group col-md-4h'), i;
var refDochodokZeny = new Date('1962-01-01');

function checkGender(){
    var DatumNarodenia = document.getElementById("inputDatumNarodenia");
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var chkPohlavie = ((document.getElementById('Pohlavie').value) == "Muž") ? false: true;
    if ((dateDatumNarodenia < refDochodokZeny) && (chkPohlavie == true)){
        document.getElementById("hideclass").style.visibility = "visible";
        }
    else {
        document.getElementById("hideclass").style.visibility = "hidden";
    }
}

document.getElementById("inputDatumNarodenia").addEventListener("change", checkGender);
document.getElementById("inputDatumNarodenia").addEventListener("change", chekRentirementlDate);
document.getElementById("Pohlavie").addEventListener("change", checkGender);
