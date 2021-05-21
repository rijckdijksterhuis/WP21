function nameValidation(name){
    let letters =  /^[A-Za-z]+$/.test(name);
    if (letters === false) {
        $('#name').addClass('is-invalid');
        return false
    }
    else {
        $('#name').addClass('is-valid');
        return true;
    }
}

function ageValidation(age){
    let numbers = /^\d+$/.test(age) ;
    if (numbers === false) {
        $('#age').addClass('is-invalid');
        return false
    }
    else {
        $('#age').addClass('is-valid');
        return true;
    }
}

function emailValidation(email) {
    let goodEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ;
    if (goodEmail === false) {
        $('#email').addClass('is-invalid');
        return false
    }
    else {
        $('#email').addClass('is-valid');
        return true;
    }
}

function residenceValidation(residence){
    let letters =  /^[A-Za-z]+$/.test(residence);
    if (letters === false) {
        $('#residence').addClass('is-invalid');
        return false
    }
    else {
        $('#residence').addClass('is-valid');
        return true;
    }
}
/// could not get document.ready function to work nor the everything valid...

$(function() {
    nameValidation();
    ageValidation();
    emailValidation();
    residenceValidation();
});