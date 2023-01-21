const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");


function error(input, message) {
    input.className = 'form-control mt-2 is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control mt-2 is-valid';
}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'hatalı email adresi');
    }
};


function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`);
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakterli olmalıdır`);
    } else {
        success(input);
    }
}

function checkPasswords(input1, input2) {
    if (input1.value.length !== input2.value.length) {
        error(input2, 'Parololar eşleşmiyor');
    }
}

function checkPhone(input) {
    let exp = /^\d{10}$/;
    if (!exp.test(input.value)) {
        error(input, 'Telefon numarası 10 karakterli olmalıdır')
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, phone, password, repassword]);
    checkEmail(email);
    checkLength(username, 7, 15);
    checkLength(password, 7, 15);
    checkPasswords(password, repassword);
    checkPhone(phone);
});