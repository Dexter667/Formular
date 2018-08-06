/* var datum1 = document.getElementById('inputDatumNarodenia').value;
var refDochodokZeny = new date('1961-01-01'); */

// document.write(datum1);


// alert('hell')

var appBanners = document.getElementsByClassName('form-group col-md-4h'), i;
var refDochodokZeny = new Date('1961-01-01');
var DatumNarodenia = document.getElementById("inputDatumNarodenia");
var Pohlavie = ((document.getElementById('gender').value) == "Muž") ? false: true;

DatumNarodenia.onchange = function(){
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    if ((dateDatumNarodenia < refDochodokZeny) && (Pohlavie = true)){
        // alert('zobraz input box');
        for (i = 0; i < appBanners.length; i += 1) {
            appBanners[i].style.display = '';
        };
        }
    else {
        // alert('skry input box');
        for (i = 0; i < appBanners.length; i += 1) {
        appBanners[i].style.display = 'none';
        };
    }
}


function checkGender(){
    var dateDatumNarodenia = new Date(document.getElementById('inputDatumNarodenia').value);
    if ((dateDatumNarodenia < refDochodokZeny) && (Pohlavie = true)){
        // alert('zobraz input box');
        for (i = 0; i < appBanners.length; i += 1) {
            appBanners[i].style.display = '';
        };
        }
    else {
        // alert('skry input box');
        for (i = 0; i < appBanners.length; i += 1) {
        appBanners[i].style.display = 'none';
        };
    }
}

/* if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
} */

//Dátum

/* $('document').ready(function(){
    $('#inputDatumNarodenia').on('click', function () {
        var end = $('#datetimepicker').val()
        alert(end);
    });
)} */
// alert("Hello world");

/* var myHeading = document.querySelector("#test1");
myHeading.textContent = "pojebali kone voz!"; */

/* var labelle = document.getElementById("test1").innerHTML;
alert(labelle);

var labelle = document.getElementById("test1").innerHTML;
alert(labelle); */

// document.getElementById("nSplatkaILS").style.display = 'none';

/* $(document).ready(function(){
    $("#baton").click(function(event){
        $("form-group col-md-4 s1").hide();
        // $("#item").show();
    });
  });
 */




/* var choicefile = document.getElementById("inputMenoZiadatela");

    choicefile.onchange = function(){
    alert('File selected')
    } */

    // alert('hekk');


/*     var appBanners = document.getElementsByClassName('form-group col-md-4-h'), i;

    for (i = 0; i < appBanners.length; i += 1) {
    appBanners[i].style.display = '';
    } */

// alert('hello world');

/*     var datum1 = document.getElementById('inputDatumNarodenia').value;
    var refDochodokZeny = new date('1961-01-01'); */

    // document.write(datum1);

/*     $(document).ready(function() {
        var datum1 = 11 /*document.getElementById('inputDatumNarodenia').value;
        alert("your total is :"+ datum1 +"rs");
        }); */

    // alert('datum1');

/*     if (choicefile > refDochodokZeny) {
        var appBanners = document.getElementsByClassName('form-group col-md-4-h'), i;

        for (i = 0; i < appBanners.length; i += 1) {
        appBanners[i].style.display = '';
        }}
    else {
    var appBanners = document.getElementsByClassName('form-group col-md-4-h'), i;

    for (i = 0; i < appBanners.length; i += 1) {
    appBanners[i].style.display = 'none';
    }} */
