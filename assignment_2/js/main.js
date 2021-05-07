function validateForm(outcome) {
    let error
    let passed = true
    for (var key in outcome) {
        if (outcome[key] === "") {
            console.log(key + 'no text in the form')
            error = 'Not all fields are filled in, please fill in all fields'
            passed = false
        }

        if (key ==='name') {
            let letters = /^[A-Za-z]+$/.test(outcome[key]);
            if (letters === false) {
                console.log(key + "Field input should contain only letters")
                error = 'Name field should only contain letters, please fill in field correctly'
                passed = false
            }
        }

        if (key ==='City') {
            let letters = /^[A-Za-z]+$/.test(outcome[key]) ;
            if (letters === false) {
                console.log(key + "Field input should contain only letters")
                error = 'City field should only contain letters, please fill in field correctly'
                passed = false
            }
        }
        if (key === "number") {
        let numbers = /^\d+$/.test(outcome[key]) ;
        if (numbers === false) {
            console.log(key + "Field input should only contain digits")
            error = "Phone field should only contain digits, please fill in field correctly"
            passed = false
        }
        }

        if (key === "age") {
            let numbers = /^\d+$/.test(outcome[key]) ;
            if (numbers === false) {
                console.log(key + "Field input should only contain digits")
                error = "Age field should only contain digits, please fill in field correctly"
                passed = false

            }
        }

        if (key === "email") {
            let rightEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(outcome[key]) ;
            if (rightEmail === false) {
                console.log(key + "Field input does not contain correct email")
                error = "Email field only accepts correct email adres, please fill in field correctly"
                passed = false

            }
        }
    }
    console.log(error)
    if (error !== undefined) {
        $('#form-alert').show().text(error)
    }
    else {
        $('#form-alert').css('display', 'none')
    }
    return passed === true;
}

function writeFormData() {
    console.log("clink")
    let outcome = {
        name: $('#name').val(),
        age: $('#age').val(),
        city: $('#city').val(),
        email: $('#email').val(),
        phone: $('#number').val(),
    }
    return outcome
}

function showForm(outcome) {
    $('#inputName').text(outcome)['name']
    $('#inputEmail').text(outcome)['email']
    $('#inputAge').text(outcome)['age']
    $('#inputPhone').text(outcome)['phone']
    $('#inputCity').text(outcome)['city']
    $('#form-content').show()


}

function activeContactTab() {
    $('#links').toggle()
    $('#contact').toggle()
    $('#contact-tab').addClass('disabled')
    $('#contact-tab').addClass('active')
    $('#link-tab').removeClass('disabled')
    $('#link-tab').removeClass('active')
}



function activeLinkTab() {
    $('#contact').toggle()
    $('#links').toggle()
    $('#contact-tab').removeClass('disabled')
    $('#contact-tab').removeClass('active')
    $('#link-tab').addClass('disabled')
    $('#link-tab').addClass('active')
}


$(function() {
    $('#erase').click(function () {
        $('input').val('')
        $('#form-alert').hide()
        $('#form-content').hide()
    })
    $('#submit').click(function () {
        let outcome = writeFormData()
        console.log(outcome)
        let correctForm = validateForm(outcome)
        if (correctForm === true) {
            showForm(outcome)
        } else {
            $('#form-content').hide()
        }
    })
    $('#link-tab').click(function () {
        activeContactTab()
    })
    $('#contact-tab').click(function () {
        activeLinkTab()
    })
    console.log('readytorumble')

});
