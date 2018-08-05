/* //add collapse to all tags hiden and showed by select mystuff
$('.mystaff_hide').addClass('collapse');

//on change hide all divs linked to select and show only linked to selected option
$('#mystuff').change(function(){
    //Saves in a variable the wanted div
    var selector = '.mystaff_' + $(this).val();

    //hide all elements
    $('.mystaff_hide').collapse('hide');

    //show only element connected to selected option
    $(selector).collapse('show');
}); */