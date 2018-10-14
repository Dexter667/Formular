anElement1 = new AutoNumeric('.mr-sm-2_1 > input', 2000, {
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

anElement3 = new AutoNumeric('.mr-sm-2_3 > input', 15000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement4 = new AutoNumeric('.mr-sm-2_4 > input', 15, {
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    emptyInputBehavior: "max",
    maximumValue: "99.99",
    minimumValue: "0"
});

anElement5 = new AutoNumeric('.mr-sm-2_5 > input', 152, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement6 = new AutoNumeric('.mr-sm-2_collapseOne1 > input', 25000, {
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

anElement8 = new AutoNumeric('.mr-sm-2_collapseOne3 > input', 18597.54, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement9 = new AutoNumeric('.mr-sm-2_collapseOne4 > input', 383.99, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement10 = new AutoNumeric('.mr-sm-2_collapseTwo1 > input', 65000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement11 = new AutoNumeric('.mr-sm-2_collapseTwo2 > input', 1.15, {
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    emptyInputBehavior: "max",
    maximumValue: "99.99",
    minimumValue: "0"
});

anElement12 = new AutoNumeric('.mr-sm-2_collapseTwo3 > input', 2000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement13 = new AutoNumeric('.mr-sm-2_collapseTwo4 > input', 173.21, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement14 = new AutoNumeric('.mr-sm-2_collapseThree1 > input', 65000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement15 = new AutoNumeric('.mr-sm-2_collapseThree2 > input', 1.15, {
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    emptyInputBehavior: "max",
    maximumValue: "99.99",
    minimumValue: "0"
});

anElement16 = new AutoNumeric('.mr-sm-2_collapseThree3 > input', 12000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement17 = new AutoNumeric('.mr-sm-2_collapseThree4 > input', 753.21, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement18 = new AutoNumeric('.mr-sm-2_collapseFour1 > input', 65000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement19 = new AutoNumeric('.mr-sm-2_collapseFour2 > input', 1.15, {
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    emptyInputBehavior: "max",
    maximumValue: "99.99",
    minimumValue: "0"
});

anElement20 = new AutoNumeric('.mr-sm-2_collapseFour3 > input', 21000, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement21 = new AutoNumeric('.mr-sm-2_collapseFour4 > input', 653.21, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement22 = new AutoNumeric('.mr-sm-2_collapseFive1 > input', 600, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement23 = new AutoNumeric('.mr-sm-2_collapseFive2 > input', 136.54, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement24 = new AutoNumeric('.mr-sm-2_collapseFive3 > input', 75, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

anElement25 = new AutoNumeric('.mr-sm-2_collapseFive4 > input', 10, {
    currencySymbol: " ",
    decimalCharacter: ",",
    digitGroupSeparator: " ",
    minimumValue: "0"
});

//Funkcia toSpaces nahradí autonumeric, tam kde nefunguje, napr. obsah tabuľky <td> tag

function toSpaces(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

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

//Výpočet stresovanej splátky 1 Variant 1 - navýšenie splátky percentom v počte zostávajúcich rokov
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
        stressPayment1Var1 = Math.round(buffPayment1*mult1*mult2*100)/100;
    }   
}

////Výpočet stresovanej splátky 1 Variant 2 - navýšenie úrokovej sadzby
function stressTest1Var2 (){
    
    var buffPayment1 = parseFloat(((document.getElementById("splatkaUveru1").value).replace(/ /g, '')).replace(/,/, "."));
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy1").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie1").value); 
    var iZostavajucaDlzkaUveru1 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie1 = DateDiff.inMonths(d1, d3);
    var lurAdd = (iZostavajucaDlzkaFixacie1 >= 120) ? 0.01: 0.02;
    var zabezpNehnutelnostou = (document.getElementById("zabezpecenyNehnutelnostou1").value == "Nie") ? false: true;
    var lur = parseFloat((document.getElementById('urokovaMiera1').value).replace(/ /g,'').replace(/,/g,'.'))/100; 
    var zostatokIstiny1 = parseFloat(((document.getElementById("zostatokIstiny1").value).replace(/ /g, '')).replace(/,/, ".")); //zostatokIstiny1

    if(iZostavajucaDlzkaUveru1 <=96){
        stressPayment1Var2 = buffPayment1;
    }
    else
    {
        if((zabezpNehnutelnostou == true) && ((lur + lurAdd) > 0.06)){
            stressPayment1Var2 = Math.round(PMT(0.06/12,360,-zostatokIstiny1,0,0)*100)/100;
        }
        else 
        {
            stressPayment1Var2 = Math.round(PMT((lur + lurAdd)/12,360,-zostatokIstiny1,0,0)*100)/100; 
        }
    }
    if(stressPayment1Var2 < buffPayment1){
        stressPayment1Var2 = buffPayment1;
    }
}

//Výpočet stresovanej splátky 2 Variant 1 - navýšenie splátky percentom v počte zostávajúcich rokov

function stressTest2Var1 (){    
    var buffPayment2 = ((document.getElementById("splatkaUveru2").value).replace(/ /g, '')).replace(/,/, '.');
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy2").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie2").value); 
    var iZostavajucaDlzkaUveru2 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie2 = DateDiff.inMonths(d1, d3);
    var mult1 = 1 + (iZostavajucaDlzkaUveru2/12/100);
    var mult2 = (iZostavajucaDlzkaFixacie2 >= 120) ? 0.5: 1;

    if(iZostavajucaDlzkaUveru2 <=96){
        stressPayment2Var1 = buffPayment2;
    }
    else{    
        stressPayment2Var1 = parseFloat(buffPayment2*mult1*mult2).toPrecision(5);
    }
}

////Výpočet stresovanej splátky 2 Variant 2 - navýšenie úrokovej sadzby
function stressTest2Var2 (){
    
    var buffPayment2 = parseFloat(((document.getElementById("splatkaUveru2").value).replace(/ /g, '')).replace(/,/, "."));
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy2").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie2").value); 
    var iZostavajucaDlzkaUveru2 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie2 = DateDiff.inMonths(d1, d3);

    var lurAdd = (iZostavajucaDlzkaFixacie2 >= 120) ? 0.01: 0.02;
    var zabezpNehnutelnostou = (document.getElementById("zabezpecenyNehnutelnostou2").value == "Nie") ? false: true;
    var lur = parseFloat((document.getElementById('urokovaMiera2').value).replace(/ /g,'').replace(/,/g,'.'))/100; 
    var zostatokIstiny2 = parseFloat(((document.getElementById("zostatokIstiny2").value).replace(/ /g, '')).replace(/,/, ".")); //zostatokIstiny1

    if(iZostavajucaDlzkaUveru2 <=96){
        stressPayment2Var2 = buffPayment2;
    }
    else
    {
        if((zabezpNehnutelnostou == true) && ((lur + lurAdd) > 0.06)){
            stressPayment2Var2 = PMT(0.06/12,360,-zostatokIstiny2,0,0); 
        }
        else 
        {
            stressPayment2Var2 = PMT((lur + lurAdd)/12,360,-zostatokIstiny2,0,0); 
        }
    }
    if(stressPayment2Var2 < buffPayment2){
        stressPayment2Var2 = buffPayment2;
    }
}

//Výpočet stresovanej splátky 3 Variant 1 - navýšenie splátky percentom v počte zostávajúcich rokov

function stressTest3Var1 (){    
    var buffPayment3 = ((document.getElementById("splatkaUveru3").value).replace(/ /g, '')).replace(/,/, '.');
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy3").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie3").value); 
    var iZostavajucaDlzkaUveru3 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie3 = DateDiff.inMonths(d1, d3);
    var mult1 = 1 + (iZostavajucaDlzkaUveru3/12/100);
    var mult2 = (iZostavajucaDlzkaFixacie3 >= 120) ? 0.5: 1;

    if(iZostavajucaDlzkaUveru3 <=96){
        stressPayment3Var1 = buffPayment3;
    }
    else{    
        stressPayment3Var1 = parseFloat(buffPayment3*mult1*mult2).toPrecision(5);
    }
}

////Výpočet stresovanej splátky 3 Variant 2 - navýšenie úrokovej sadzby
function stressTest3Var2 (){
    
    var buffPayment3 = parseFloat(((document.getElementById("splatkaUveru3").value).replace(/ /g, '')).replace(/,/, "."));
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy3").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie3").value); 
    var iZostavajucaDlzkaUveru3 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie3 = DateDiff.inMonths(d1, d3);

    var lurAdd = (iZostavajucaDlzkaFixacie3 >= 120) ? 0.01: 0.02;
    var zabezpNehnutelnostou = (document.getElementById("zabezpecenyNehnutelnostou3").value == "Nie") ? false: true;
    var lur = parseFloat((document.getElementById('urokovaMiera3').value).replace(/ /g,'').replace(/,/g,'.'))/100; 
    var zostatokIstiny3 = parseFloat(((document.getElementById("zostatokIstiny3").value).replace(/ /g, '')).replace(/,/, ".")); //zostatokIstiny1

    if(iZostavajucaDlzkaUveru3 <=96){
        stressPayment3Var2 = buffPayment3;
    }
    else
    {
        if((zabezpNehnutelnostou == true) && ((lur + lurAdd) > 0.06)){
            stressPayment3Var2 = PMT(0.06/12,360,-zostatokIstiny3,0,0); 
        }
        else 
        {
            stressPayment3Var2 = PMT((lur + lurAdd)/12,360,-zostatokIstiny3,0,0); 
        }
    }
    if(stressPayment3Var2 < buffPayment3){
        stressPayment3Var2 = buffPayment3;
    }
}

//Výpočet stresovanej splátky 4 Variant 1 - navýšenie splátky percentom v počte zostávajúcich rokov

function stressTest4Var1 (){    
    var buffPayment4 = ((document.getElementById("splatkaUveru4").value).replace(/ /g, '')).replace(/,/, '.');
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy4").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie4").value); 
    var iZostavajucaDlzkaUveru4 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie4 = DateDiff.inMonths(d1, d3);
    var mult1 = 1 + (iZostavajucaDlzkaUveru4/12/100);
    var mult2 = (iZostavajucaDlzkaFixacie4 >= 120) ? 0.5: 1;

    if(iZostavajucaDlzkaUveru4 <=96){
        stressPayment4Var1 = buffPayment4;
    }
    else{    
        stressPayment4Var1 = parseFloat(buffPayment4*mult1*mult2).toPrecision(5);
    }
}

////Výpočet stresovanej splátky 4 Variant 2 - navýšenie úrokovej sadzby
function stressTest4Var2 (){
    
    var buffPayment4 = parseFloat(((document.getElementById("splatkaUveru4").value).replace(/ /g, '')).replace(/,/, "."));
    var d1 = new Date();
    var d2 = new Date(document.getElementById("ukoncenieZmluvy4").value);
    var d3 = new Date(document.getElementById("koniecAktualnejFixacie4").value); 
    var iZostavajucaDlzkaUveru4 = DateDiff.inMonths(d1, d2);
    var iZostavajucaDlzkaFixacie4 = DateDiff.inMonths(d1, d3);

    var lurAdd = (iZostavajucaDlzkaFixacie4 >= 120) ? 0.01: 0.02;
    var zabezpNehnutelnostou = (document.getElementById("zabezpecenyNehnutelnostou4").value == "Nie") ? false: true;
    var lur = parseFloat((document.getElementById('urokovaMiera4').value).replace(/ /g,'').replace(/,/g,'.'))/100; 
    var zostatokIstiny4 = parseFloat(((document.getElementById("zostatokIstiny4").value).replace(/ /g, '')).replace(/,/, ".")); //zostatokIstiny1

    if(iZostavajucaDlzkaUveru4 <=96){
        stressPayment4Var2 = buffPayment4;
    }
    else
    {
        if((zabezpNehnutelnostou == true) && ((lur + lurAdd) > 0.06)){
            stressPayment4Var2 = PMT(0.06/12,360,-zostatokIstiny4,0,0); 
        }
        else 
        {
            stressPayment4Var2 = PMT((lur + lurAdd)/12,360,-zostatokIstiny4,0,0); 
        }
    }
    if(stressPayment4Var2 < buffPayment4){
        stressPayment4Var2 = buffPayment4;
    }
}

//POZOR - global variable!
var stressPayment1Var1 = 0;
var stressPayment1Var2 = 0;
var stressPayment2Var1 = 0;
var stressPayment2Var2 = 0;
var stressPayment3Var1 = 0;
var stressPayment3Var2 = 0;
var stressPayment4Var1 = 0;
var stressPayment4Var2 = 0;
var stressPayment1 = 0;
var stressPayment2 = 0;
var stressPayment3 = 0;
var stressPayment4 = 0;

function checkVisibilityUver(){
    var isVisible1 = $('#collapseOne').is(":visible");
    var isVisible2 = $('#collapseTwo').is(":visible");
    var isVisible3 = $('#collapseThree').is(":visible");
    var isVisible4 = $('#collapseFour').is(":visible");

    if (isVisible1 == true){
        stressTest1Var1();
        stressTest1Var2();
        // alert('stressPayment1Var2');
        stressPayment1 = Math.min(stressPayment1Var1,stressPayment1Var2);  //dotiahne nižšiu z dvoch spôsobov stresovania splátok
    }
    else{
        stressPayment1 = 0
    }
    if (isVisible2 == true){
        stressTest2Var1();
        stressTest2Var2();
        stressPayment2 = Math.min(stressPayment2Var1,stressPayment2Var2);
    }
    else{
        stressPayment2 = 0
    }
    if (isVisible3 == true){
        stressTest3Var1();
        stressTest3Var2();
        stressPayment3 = Math.min(stressPayment3Var1,stressPayment3Var2);
    }
    else{
        stressPayment3 = 0
    }
    if (isVisible4 == true){
        stressTest4Var1();
        stressTest4Var2();
        stressPayment4 = Math.min(stressPayment4Var1,stressPayment4Var2);
    }
    else{
        stressPayment4 = 0
    }
}

// Náklady na životné potreby 

function checkLifeCosts(){
    var zivMinPlnoletaOsoba = 205.07;
    var zivMinNezaopatreneDieta = 93.61;
    var zivMinPlnoletaOsobaDalsia = 143.06;
    var pocetNeplnoletychDeti = document.getElementById("pocetNeplnoletychDeti").value;
    var pocetPlnoletychNezaopatrenychDeti = document.getElementById("pocetPlnoletychNezaopatrenychDeti").value;
    var pocetPlnoletychVyzivovanychOsob = parseInt((document.getElementById('pocetVyzivovanychOsob').value).replace(/ /g,'').replace(/,/g,'.')) + 1;
    var c1Visibility = $('#collapseOne').is(":visible");
    var c2Visibility = $('#collapseTwo').is(":visible");
    var c3Visibility = $('#collapseThree').is(":visible");
    var c4Visibility = $('#collapseFour').is(":visible");
    var c5Visibility = $('#collapseFive').is(":visible");
    var zostatokIstinyPlusUrok1 = (c1Visibility == true) ? parseFloat((document.getElementById('zostatokIstinyUrok1').value).replace(/ /g,'').replace(/,/g,'.')): 0;
    var zostatokIstinyPlusUrok2 = (c2Visibility == true) ? parseFloat((document.getElementById('zostatokIstinyUrok2').value).replace(/ /g,'').replace(/,/g,'.')): 0;
    var zostatokIstinyPlusUrok3 = (c3Visibility == true) ? parseFloat((document.getElementById('zostatokIstinyUrok3').value).replace(/ /g,'').replace(/,/g,'.')): 0;
    var zostatokIstinyPlusUrok4 = (c4Visibility == true) ? parseFloat((document.getElementById('zostatokIstinyUrok4').value).replace(/ /g,'').replace(/,/g,'.')): 0;
    var povolenePrecerpania = parseFloat((document.getElementById('vycerpanePovolenePrecerpanieKK').value).replace(/ /g,'').replace(/,/g,'.')); 
    var nevycerpanePovolenePrecerpania = parseFloat((document.getElementById('schvaleneNevycerpanePovolenePrecerpanie').value).replace(/ /g,'').replace(/,/g,'.')); 
    var nevycerpanePovolenePrecerpaniaKK = parseFloat((document.getElementById('schvaleneUveroveRamceKK').value).replace(/ /g,'').replace(/,/g,'.')); 
    var mesacnyPrijem = parseFloat((document.getElementById('cistyPrijemZiadatela').value).replace(/ /g,'').replace(/,/g,'.')) + parseFloat((document.getElementById('prijemSpoludlznika').value).replace(/ /g,'').replace(/,/g,'.')); 
    var rocnyPrijem = (parseFloat((document.getElementById('cistyPrijemZiadatela').value).replace(/ /g,'').replace(/,/g,'.')) + parseFloat((document.getElementById('prijemSpoludlznika').value).replace(/ /g,'').replace(/,/g,'.')))*12;
    var splatkaSpoludlznik = (c5Visibility == true) ? parseFloat((document.getElementById('splatkaSpoludlznik').value).replace(/ /g,'').replace(/,/g,'.')): 0;
    var triPercPovolenychPrecerpani = (c5Visibility == true) ? (parseFloat((document.getElementById('schvaleneNevycerpanePovolenePrecerpanie').value).replace(/ /g,'').replace(/,/g,'.')))*5*0.03: 0;
    var triPercPovolenychLimitov = (c5Visibility == true) ? (parseFloat((document.getElementById('schvaleneUveroveRamceKK').value).replace(/ /g,'').replace(/,/g,'.')))*5*0.03: 0;
    var koeficientRocnehoPrijmu = ((parseFloat((document.getElementById('akontacia').value).replace(/ /g,'').replace(/,/g,'.')))/100 < 0.2) ? 0: 1.5; 
    var mesacnaSplatka = parseFloat((document.getElementById('splatkaILS').value).replace(/ /g,'').replace(/,/g,'.'));
    var dlzkaFinancovania = parseFloat((document.getElementById('dlzkaFinancovania').value).replace(/ /g,'').replace(/,/g,'.'));

    //mesačná splátka
    if (document.getElementById('typSplatok').value == "Pravidelné"){
        var splatkaILSMesacne = mesacnaSplatka; 
    }
    else {
        var splatkaILSMesacne = mesacnaSplatka/dlzkaFinancovania; //v prípade, že je typ splátok 'Nepravidelné', tak sa v poli mesacnej splátky uvádza suma splátok s DPH a poistným a berie sa podiel mesačnej splátky a dĺžky financovania
    }

    //suma splátok
   
    if (document.getElementById('typSplatok').value == "Pravidelné"){
        var sumaSplatok = mesacnaSplatka * dlzkaFinancovania; 
    }
    else {
        var sumaSplatok = mesacnaSplatka; //v prípade, že je typ splátok 'Nepravidelné', tak sa v poli mesacnej splátky uvádza suma splátok s DPH a poistným a berie sa priamo táto hodnota 
    }

    //náklady na živ. minimum žiadateľ + dospelé vyživované osoby
    if(pocetPlnoletychVyzivovanychOsob > 1){
        var nakladyNaZivotnePotrebyDospely = (zivMinPlnoletaOsobaDalsia*(pocetPlnoletychVyzivovanych-1) + zivMinPlnoletaOsoba);
    }
    else{
        if(pocetPlnoletychVyzivovanychOsob == 1){
            var nakladyNaZivotnePotrebyDospely = zivMinPlnoletaOsoba;
        }
        else{
            var nakladyNaZivotnePotrebyDospely = 0;
            } 
        }

    //náklady vyživované deti
    if(pocetPlnoletychVyzivovanychOsob > 1){
        var nakladyNaDeti = (pocetPlnoletychNezaopatrenychDeti+pocetNeplnoletychDeti) * zivMinNezaopatreneDieta;
    }
    else{
        var nakladyNaDeti = 0;
    }
    
    //stress test životných nákladov
    if (((zostatokIstinyPlusUrok1 + zostatokIstinyPlusUrok2 + zostatokIstinyPlusUrok3 + zostatokIstinyPlusUrok4 + sumaSplatok + povolenePrecerpania + nevycerpanePovolenePrecerpania + nevycerpanePovolenePrecerpaniaKK) / rocnyPrijem) <= koeficientRocnehoPrijmu){
        var stressTestZivotnychNakladov = 0;
        }
    else {
        var stressTestZivotnychNakladov = (mesacnyPrijem - (nakladyNaZivotnePotrebyDospely + nakladyNaDeti))*0.2;
    }

    var rozdielPrijmovZavazkov = (mesacnyPrijem-(nakladyNaZivotnePotrebyDospely + nakladyNaDeti + stressTestZivotnychNakladov)-(splatkaSpoludlznik+stressPayment1+stressPayment2+stressPayment3+stressPayment4+splatkaILSMesacne+triPercPovolenychPrecerpani+triPercPovolenychLimitov));
    // alert(triPercPovolenychPrecerpani);
    // alert(rozdielPrijmovZavazkov);  
    // document.getElementById("vysledokTabulka").rows[2].cells[1].innerHTML = (rozdielPrijmovZavazkov.toFixed(2)+'€'); //console.log(toCommas(123456789));
    document.getElementById("vysledokTabulka").rows[2].cells[1].innerHTML = toSpaces(rozdielPrijmovZavazkov.toFixed(2).replace('.',',')+'€'); //(rozdielPrijmovZavazkov.toFixed(2)+'€'); //console.log(toCommas(123456789));
    }

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
document.getElementById("typSplatok").addEventListener("change",checkVisibilityUver);
document.getElementById("typSplatok").addEventListener("change",checkLifeCosts);


document.getElementById("pocetNeplnoletychDeti").addEventListener("blur",checkVisibilityUver);
document.getElementById("pocetNeplnoletychDeti").addEventListener("blur",checkLifeCosts);

document.getElementById("cistyPrijemZiadatela").addEventListener("blur",checkVisibilityUver);
document.getElementById("cistyPrijemZiadatela").addEventListener("blur",checkLifeCosts);
document.getElementById("prijemSpoludlznika").addEventListener("blur",checkVisibilityUver);
document.getElementById("prijemSpoludlznika").addEventListener("blur",checkLifeCosts);




// document.getElementById("kolapse1").addEventListener("click",checkVisibilityUver1);








