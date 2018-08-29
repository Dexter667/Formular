anElement1 = new AutoNumeric('.mr-sm-2_1 > input', 1123.35, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement2 = new AutoNumeric('.mr-sm-2_2 > input', 0, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement3 = new AutoNumeric('.mr-sm-2_3 > input', 10507.82, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});


anElement4 = new AutoNumeric('.mr-sm-2_4 > input', 33.33, {
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    emptyInputBehavior: "max",
    maximumValue: "99",
    minimumValue: "0"
});

anElement3 = new AutoNumeric('.mr-sm-2_5 > input', 504.29, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

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

// window = onbeforeunload = chekRentirementlDate();

function checkRentirementDate(){
    var myDate = new Date();
    var result1 = myDate.addMonths(-744);
    var dateRetirementLimit = result1.addDays(-139);
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var arr =  document.getElementsByClassName("media-body info");
    // alert(dateDatumNarodenia);
    // alert(dateRetirementLimit);
    if(dateDatumNarodenia < dateRetirementLimit){
        bDochodkovyVek = true;
        // alert("pohlavie");
        if (document.getElementById('pohlavie').value == "Muž"){
            arr[0].innerHTML = "Žiadateľ zavŕšil dôchodkový vek. Postupujte v zmysle Rizikosmernice \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
            arr[0].style.fontWeight = "bold"; 
        }
        else {
            arr[0].innerHTML = "Žiadateľka zavŕšila dôchodkový vek. Postupujte v zmysle Rizikosmernice \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
            arr[0].style.fontWeight = "bold"; 
        }
    }
    else {
        arr[0].innerHTML = "";
    }
}
//
function checkLeasingToRentirementDate(){
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var arrRetirementWomen56To61 = [[744,744,732,711,711,690],[744,744,741,720,720,699],[744,744,744,729,729,708],[744,744,744,738,738,717],[744,744,744,744,744,726],[744,744,744,744,744,735]];
    var iYearIndexW;
    var iYearOfBirth = dateDatumNarodenia.getFullYear();
    switch (iYearOfBirth) {
    case 1956:
        iYearIndexW = 0;
        break;
    case 1957:
        iYearIndexW = 1;
        break;
    case 1958:
        iYearIndexW = 2;
        break;
    case 1959:
        iYearIndexW = 3;
        break;
    case 1960:
        iYearIndexW = 4;
        break;
    case 1961:
        iYearIndexW = 5;
        break;
    default:
        iYearIndexW = 5;
        break;
    }
    var iNumberOfChildrenRaised = document.getElementById('pocetVychovanych').value;   
    var myDate = new Date();
    var iPocetMesiacov = (document.getElementById('dlzkaFinancovania').value/2)+1
    var dateLeasingRuntimeHalf = new Date().addMonths(iPocetMesiacov);
    var dateRetirementDate = dateDatumNarodenia.addMonths(arrRetirementWomen56To61[iYearIndexW][iNumberOfChildrenRaised]);
    var arr = document.getElementsByClassName("media-body info");
    var chkPohlavie = ((document.getElementById('pohlavie').value) == "Muž") ? false: true;
    alert(dateLeasingRuntimeHalf);
    alert(dateRetirementDate);
    alert(chkPohlavie);
    if(chkPohlavie = false){
        if((iYearOfBirth < 1956) || (dateRetirementDate < myDate)){
            arr[0].innerHTML = "Žiadateľka zavŕšila dôchodkový vek. Postupujte v zmysle Rizikosmernice \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
            arr[0].style.fontWeight = "bold";
        }
        else
        if(dateLeasingRuntimeHalf > dateRetirementDate){
            arr[0].innerHTML = "Žiadateľka zavŕši dôchodkový vek skôr ako uplynie polovica doby financovania. \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
            arr[0].style.fontWeight = "bold";
        }
    }
    else{
        if((iYearOfBirth < 1956) || (dateRetirementDate < myDate)){
            arr[0].innerHTML = "Žiadateľ zavŕšil dôchodkový vek. Postupujte v zmysle Rizikosmernice \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
            arr[0].style.fontWeight = "bold";
        }
        else
        if(dateLeasingRuntimeHalf > dateRetirementDate){
            arr[0].innerHTML = "Žiadateľ zavŕši dôchodkový vek skôr ako uplynie polovica doby financovania. \
            Skráťte dobu financovania alebo prepočítajte priemerný príjem s odhadovaným dôchodkom.";
            arr[0].style.fontWeight = "bold";
        }
    }
}
//Kontrola dôchodkového veku u žien narodených pred 01.01.1962
var hideField = document.getElementsByClassName('form-group col-md-4h'), i;
var refDochodokZeny = new Date('1962-01-01');

function checkGender(){
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    var chkPohlavie = ((document.getElementById('pohlavie').value) == "Muž") ? false: true;
    if ((dateDatumNarodenia < refDochodokZeny) && (chkPohlavie == true)){
        document.getElementById("cPocetVychovanych").style.visibility = "visible";
        }
    else {
        document.getElementById("cPocetVychovanych").style.visibility = "hidden";
    }
}

document.getElementById("inputDatumNarodenia").addEventListener("blur", checkGender);
document.getElementById("inputDatumNarodenia").addEventListener("blur", checkRentirementDate);
document.getElementById("inputDatumNarodenia").addEventListener("blur", checkLeasingToRentirementDate);

document.getElementById("pohlavie").addEventListener("change", checkGender);
document.getElementById("pohlavie").addEventListener("change", checkRentirementDate);
document.getElementById("pohlavie").addEventListener("change", checkLeasingToRentirementDate);

document.getElementById("dlzkaFinancovania").addEventListener("change", checkRentirementDate);
document.getElementById("dlzkaFinancovania").addEventListener("change", checkLeasingToRentirementDate);

document.getElementById("pocetVychovanych").addEventListener("change", checkRentirementDate);
document.getElementById("pocetVychovanych").addEventListener("change", checkLeasingToRentirementDate);

