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


var myDate = new Date();
var result1 = myDate.addMonths(-744);

var myDate2 = result1;
var result2 = myDate2.addDays(-139);

alert(result2.toLocaleDateString());

function chekRentirementlDate(){

}

/*Kontrola dôchodkového veku u žien narodených pred 01.01.1962*/
var hideField = document.getElementsByClassName('form-group col-md-4h'), i;
var refDochodokZeny = new Date('1962-01-01');

function checkGender(){
    var DatumNarodenia = document.getElementById("inputDatumNarodenia");
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var chkPohlavie = ((document.getElementById('Pohlavie').value) == "Muž") ? false: true;
    if ((dateDatumNarodenia < refDochodokZeny) && (chkPohlavie == true)){
        document.getElementById('hideclass').style.visibility = "visible";
        // alert('zobraz input box');
/*         for (i = 0; i < hideField.length; i += 1) {
            hideField[i].style.display = '';
        }; */
        }
    else {
        document.getElementById('hideclass').style.visibility = "hidden";
        // alert('skry input box');
/*         for (i = 0; i < hideField.length; i += 1) {
            hideField[i].style.display = 'none';
        }; */
    }
}

document.getElementById("inputDatumNarodenia").addEventListener("change", checkGender);
document.getElementById("Pohlavie").addEventListener("change", checkGender);
