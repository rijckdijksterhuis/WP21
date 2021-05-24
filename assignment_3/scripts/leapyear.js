function nameValidation(){
    let letters =  /^[A-Za-z]+$/;
    let name_input_string = $('#name');
    let value = name_input_string.val();
    if (value.match(letters) && value !== "") {
        name_input_string.removeClass("is-invalid");
        name_input_string.addClass("is-valid");
        return true;
    } else {
        name_input_string.removeClass("is-valid");
        name_input_string.addClass("is-invalid");
        return false;
    }
}

function ageValidation(){
    let numbers = /^\d+$/;
    let age_input_string = $('#age');
    let value = age_input_string.val();
    if (value.match(numbers) && value !== "") {
        age_input_string.removeClass("is-invalid");
        age_input_string.addClass("is-valid");
        return true;
    } else {
        age_input_string.removeClass("is-valid");
        age_input_string.addClass("is-invalid");
        return false;
    }
}

function emailValidation() {
    let goodEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email_input_string = $('#email');
    let value = email_input_string.val();
    if (value.match(goodEmail) && value !== "") {
        email_input_string.removeClass("is-invalid");
        email_input_string.addClass("is-valid");
        return true;
    } else {
        email_input_string.removeClass("is-valid");
        email_input_string.addClass("is-invalid");
        return false;
    }

}

function residenceValidation(){
    let letters =  /^[A-Za-z]+$/;
    let residence_input_string = $('#residence');
    let value = residence_input_string.val();
    if (value.match(letters) && value !== "") {
        residence_input_string.removeClass("is-invalid");
        residence_input_string.addClass("is-valid");
        return true;
    } else {
        residence_input_string.removeClass("is-valid");
        residence_input_string.addClass("is-invalid");
        return false;
    }
}



$(function() {
    $("#name").keyup(function () {
        nameValidation();
    });
    $("#age").keyup(function () {
        ageValidation();
    });
    $("#email").keyup(function () {
        emailValidation();
    });
    $("#residence").keyup(function () {
        residenceValidation();
    });

    $("#submit").click(function () {
        if (nameValidation() && ageValidation() && emailValidation() && residenceValidation()) {
            $("form").submit()
        }
    })
});
