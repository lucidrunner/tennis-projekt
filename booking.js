function validateForm(identifier) {
    switch (identifier) {
        case "bastu":
            return validateBastu();
        case "omkl":
            return validateOmkl();
        case "bana":
            return validateBana();
        default:
            alert("Incorrect form submitted, please contact the site owner.");
            return false;
    }
}

function validateBastu() {

    return true;
}

function validateBana() {
    return true;
}

function validateOmkl() {
    return true;
}

function validateTime() {
    return true;
}

function validatePersonalInfo() {
    return true;
}
