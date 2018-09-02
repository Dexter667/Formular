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
    maximumValue: "99.99",
    minimumValue: "0"
});

anElement5 = new AutoNumeric('.mr-sm-2_5 > input', 504.29, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement6 = new AutoNumeric('.mr-sm-2_collapseOne1 > input', 78654.32, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement7 = new AutoNumeric('.mr-sm-2_collapseOne2 > input', 2.15, {
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    emptyInputBehavior: "max",
    maximumValue: "99.99",
    minimumValue: "0"
});

anElement8 = new AutoNumeric('.mr-sm-2_collapseOne3 > input', 63500.49, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement8 = new AutoNumeric('.mr-sm-2_collapseOne4 > input', 253.21, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

//EDATE Functions
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

//DATEDIFF Functions
var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

//PMT
function PMT(rate, nper, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return -(pv + fv)/nper;
    
    var pvif = Math.pow(1 + rate, nper);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };
    return pmt;
}

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
    // alert(dateLeasingRuntimeHalf);
    // alert(dateRetirementDate);
    // alert(chkPohlavie);
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

////Výpočet stresovanej splátky 1 Variant 1 - navýšenie splátky percentom v počte zostávajúcich rokov

function stressTest1Var1 (){  
    var stressPayment1Var1 = 0;
    var buffPayment1 = ((document.getElementById("splatkaUveru1").value).replace(/ /g, '')).replace(/,/, '.');
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy1").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie1").value); 
    var iZostavajucaDlzkaUveru1 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie1 = DateDiff.inMonths(d1, d3);
    var mult1 = 1 + (iZostavajucaDlzkaUveru1/12/100);
    var mult2 = (iZostavajucaDlzkaFixacie1 >= 120) ? 0.5: 1;

    if(iZostavajucaDlzkaUveru1 <=96){
        stressPayment1Var1 = buffPayment1;
    }
    else{    
        stressPayment1Var1 = parseFloat(buffPayment1*mult1*mult2).toPrecision(5);
    }
    alert(stressPayment1Var1);    
}

////Výpočet stresovanej splátky 1 Variant 2 - navýšenie úrokovej sadzby
function stressTest1Var2 (){
    var stressPayment1Var2 = 0;
    var buffPayment1 = document.getElementById("splatkaUveru1").value;
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy1").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie1").value); 
    var iZostavajucaDlzkaUveru1 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie1 = DateDiff.inMonths(d1, d3);

    var lurAdd = (iZostavajucaDlzkaFixacie1 >= 120) ? 0.01: 0.02;
    var zabezpNehnutelnostou = (document.getElementById("zabezpecenyNehnutelnostou1").value == "Nie") ? false: true;
    var lur = parseFloat((document.getElementById("urokovaMiera1").value).replace(",","."))/100;
    var zostatokIstiny1 = parseFloat(((document.getElementById("zostatokIstiny1").value).replace(/ /g, '')).replace(/,/, "."));

    if(iZostavajucaDlzkaUveru1 <=96){
        stressPayment1Var2 = buffPayment1;
    }
    else
    {
        if((zabezpNehnutelnostou == true) && ((lur + lurAdd) > 0.06)){
            stressPayment1Var2 = PMT(0.06/12,360,-zostatokIstiny1,0,0); 
        }
        else 
        {
            stressPayment1Var2 = PMT((lur + lurAdd)/12,360,-zostatokIstiny1,0,0); 
        }
    }
    alert(stressPayment1Var2);  
}

$(function VisibilityUver1(){
    var isVisible = $('#collapseOne').is(":visible");
    if (isVisible == true){
        stressPayment1Var1();
        stressPayment1Var2();
    }
    // alert(isVisible);
})

// $(
//     if(VisibilityUver1 == true){
//     alert("collapse One je vidietelny";)
// })


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

document.getElementById("kolapse1").addEventListener("click",checkVisibilityUver1);
