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

anElement9 = new AutoNumeric('.mr-sm-2_collapseOne4 > input', 253.21, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement10 = new AutoNumeric('.mr-sm-2_collapseFive1 > input', 75.49, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement11 = new AutoNumeric('.mr-sm-2_collapseFive2 > input', 17.38, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement12 = new AutoNumeric('.mr-sm-2_collapseFive3 > input', 6.91, {
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

function checkRetirementDate(){
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

//Kontrola dôchodkového veku aj v súvislosti so splácaním posudzovaného úveru pre ľudí narodených pred rokom 1962
function checkLeasingToRetirementDate(){
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
    if (document.getElementById('pocetVychovanych').value <=5){
        var iNumberOfChildrenRaised = document.getElementById('pocetVychovanych').value;
        }
    else {
        var iNumberOfChildrenRaised = 5; //maximálny počet detí ovplyvňujúci dôchodkový vek je 5 - zároveň ohraničenie matice
    }
    var myDate = new Date();
    var iPocetMesiacov = (document.getElementById('dlzkaFinancovania').value/2)+1;
    var dateLeasingRuntimeHalf = new Date().addMonths(iPocetMesiacov);
    var dateRetirementDate = dateDatumNarodenia.addMonths(arrRetirementWomen56To61[iYearIndexW][iNumberOfChildrenRaised]);
    var arr = document.getElementsByClassName("media-body info");
    var chkPohlavie = ((document.getElementById('pohlavie').value) == "Muž") ? false: true;

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
    // alert ('false')
    if ((dateDatumNarodenia < refDochodokZeny) && (chkPohlavie == true)){
        document.getElementById("cPocetVychovanych").style.visibility = "visible";
        }
    else {
        document.getElementById("cPocetVychovanych").style.visibility = "hidden";
    }
}

//Kontrola typu splátok - pravidelné, nepravidelné
function checkPaymentType(){
    var chkPaymentType = ((document.getElementById("typSplatok").value) == "Pravidelné") ? true: false;
    if (chkPaymentType == true){
        document.getElementById("lblSplatkaILS").innerHTML = "Splátka s DPH a poistným";
    }
    else {
        document.getElementById("lblSplatkaILS").innerHTML = "Suma splátok s DPH s poistným";
    }
    }

////Výpočet stresovanej splátky 1 Variant 1 - navýšenie splátky percentom v počte zostávajúcich rokov

function stressTest1Var1 (){  
    
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
    // alert(stressPayment1Var1);    
}

////Výpočet stresovanej splátky 1 Variant 2 - navýšenie úrokovej sadzby
function stressTest1Var2 (){
    
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
    // alert(stressPayment1Var2);  
}
//POZOR - global variable!
var stressPayment1Var1 = 0;
var stressPayment1Var2 = 0;

$(function checkVisibilityUver1(){
    var isVisible = $('#collapseOne').is(":visible");

    if (isVisible == true){
        stressTest1Var1();
        stressTest1Var2();
        // alert(Math.min(stressPayment1Var1,stressPayment1Var2));
    }
})

// Náklady na životné potreby 

$(function lifeCosts(){
    var zivMinPlnoletaOsoba = 205.07;
    var zivMinNezaopatreneDieta = 93.61;
    var zivMinPlnoletaOsobaDalsia = 143.06;
    var pocetNeplnoletychDeti = document.getElementById("pocetNeplnoletychDeti").value;
    var pocetPlnoletychNezaopatrenychDeti = document.getElementById("pocetPlnoletychNezaopatrenychDeti").value;
    var pocetPlnoletychVyzivovanychOsob = document.getElementById("pocetVyzivovanychOsob").value;
    var c1Visibility = $('#collapseOne').is(":visible");
    var c2Visibility = $('#collapseTwo').is(":visible");
    var c3Visibility = $('#collapseThree').is(":visible");
    var c4Visibility = $('#collapseFour').is(":visible");
    var c5Visibility = $('#collapseFive').is(":visible");
    var zostatokIstinyPlusUrok1 = (c1Visibility == true) ? document.getElementById("zostatokIstinyUrok1").value: 0;
    var zostatokIstinyPlusUrok2 = (c2Visibility == true) ? document.getElementById("zostatokIstinyUrok2").value: 0;
    var zostatokIstinyPlusUrok3 = (c3Visibility == true) ? document.getElementById("zostatokIstinyUrok3").value: 0;
    var zostatokIstinyPlusUrok4 = (c4Visibility == true) ? document.getElementById("zostatokIstinyUrok4").value: 0;
    var povolenePrecerpania = document.getElementById("vycerpanePovolenePrecerpanieKK").value;
    var nevycerpanePovolenePrecerpania = document.getElementById("schvaleneNevycerpanePovolenePrecerpanie").value;
    var nevycerpanePovolenePrecerpaniaKK = document.getElementById("schvaleneUveroveRamceKK").value;
    var mesacnyPrijem = (document.getElementById('cistyPrijemZiadatela').value) + (document.getElementById('prijemSpoludlznika').value);
    var rocnyPrijem = ((document.getElementById('cistyPrijemZiadatela').value) + (document.getElementById('prijemSpoludlznika').value))*12;
    var koeficientRocnehoPrijmu = (document.getElementById('akontacia').value < 0.2) ? 1.5: 1;
    var platnostPoslednehoNavysenia = new Date('2019-07-01');
    var aktualnyDatum = new Date();
    var testPreKoeficient = DateDiff.inDays(platnostPoslednehoNavysenia,aktualnyDatum);
    if (testPreKoeficient > 0) {
        var koeficientNavysenieZivotnychNakladov = 0.15;
        }
    else {
        var koeficientNavysenieZivotnychNakladov = 0.2;
    }
    
    if (document.getElementById('typSplatok').value = "Pravidelné"){
        var sumaSplatok = (parseFloat((document.getElementById('splatkaILS').value).replace(",",".")) * (document.getElementById('dlzkaFinancovania').value));
    }
    else {
        var sumaSplatok = (document.getElementById('splatkaILS').value);
    }

    //náklady na živ. minimum žiadateľ + dospelé vyživované osoby
    if(pocetPlnoletychVyzivovanychOsob > 1){
        var nakladyNaZivotnePotreby = (zivMinPlnoletaOsobaDalsia*(pocetPlnoletychVyzivovanych-1) + zivMinPlnoletaOsoba);
    }
    else{
        if(pocetPlnoletychVyzivovanychOsob == 1){
            var nakladyNaZivotnePotreby = zivMinPlnoletaOsoba;
        }
        else{
            var nakladyNaZivotnePotreby = 0;
        }
        
    }

    //stress test životných nákladov -!!dopracovať kontrolu pre zahrnutie výsledkov - či je collapse window aktívne
    if (((zostatokIstinyPlusUrok1 + zostatokIstinyPlusUrok2 + zostatokIstinyPlusUrok3 + zostatokIstinyPlusUrok4 + sumaSplatok + povolenePrecerpania + nevycerpanePovolenePrecerpania + nevycerpanePovolenePrecerpaniaKK) / rocnyPrijem) <= koeficientRocnehoPrijmu){
        var stressTestZivotnychNakladov = 0;
        }
    else {
        // ((bMesacnyPrijem-(bZivMinPlnoletaOsoba+IF(bPocetPlnoletychVyzivovanych>1;(bZivMinPlnoletaOsobaDalsia*(bPocetPlnoletychVyzivovanych-1))+bZivMinPlnoletaOsoba;IF(bPocetPlnoletychVyzivovanych=1;bZivMinPlnoletaOsoba;0))+(bPocetPlnoletychNezaopatrenychDeti+bPocetNeplnoletychDeti)*bZivMinNezaopatreneDieta))*IF(TODAY()>43281;0,2;0,15))
        var stressTestZivotnychNakladov = (mesacnyPrijem - nakladyNaZivotnePotreby) * koeficientNavysenieZivotnychNakladov;
    }


    // alert (sumaSplatok.toFixed(2));
    alert (rocnyPrijem);

    // alert (nakladyNaZivotnePotreby + ((pocetPlnoletychNezaopatrenychDeti + pocetNeplnoletychDeti) * zivMinNezaopatreneDieta) + stressTestZivotnychNakladov);
    
    }
)



// alert (checkVisibilityUver1());


document.getElementById("inputDatumNarodenia").addEventListener("blur", checkGender);
document.getElementById("inputDatumNarodenia").addEventListener("blur", checkRetirementDate);
document.getElementById("inputDatumNarodenia").addEventListener("blur", checkLeasingToRetirementDate);

document.getElementById("pohlavie").addEventListener("change", checkGender);
document.getElementById("pohlavie").addEventListener("change", checkRetirementDate);
document.getElementById("pohlavie").addEventListener("change", checkLeasingToRetirementDate);

document.getElementById("dlzkaFinancovania").addEventListener("change", checkRetirementDate);
document.getElementById("dlzkaFinancovania").addEventListener("change", checkLeasingToRetirementDate);

document.getElementById("pocetVychovanych").addEventListener("change", checkRetirementDate);
document.getElementById("pocetVychovanych").addEventListener("change", checkLeasingToRetirementDate);

document.getElementById("typSplatok").addEventListener("change",checkPaymentType);
// document.getElementById("kolapse1").addEventListener("click",checkVisibilityUver1);








