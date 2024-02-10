//Welcome Message
document.addEventListener('DOMContentLoaded', function() {
    var welcomeAlertShown = localStorage.getItem('welcomeAlertShown');

    if (!welcomeAlertShown) {
        alert('YURRRRR~! @WaincelLanceDumanghi at GitHub :>');
        localStorage.setItem('welcomeAlertShown', true);
    }
});

//Valid Forms
function formValidation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelectorAll('input[name="gender_fnm"]:checked');
    var termsAndConditions = document.getElementById('checkbox');

    if (!email.match(/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/)) {
        alert("That is not a valid Email address");
        return false;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        alert("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more charactes");
        return false;
    }

    if (gender.length === 0) {
        alert("Gender must be selected")
    }

    if (!termsAndConditions.checked) {
        alert("Tick the box for Terms and Conditions")
        return falsee;
    }

    return true;
}

//Congratulatory Form Submission Notification
document.getElementById('submit').onclick = function() {
    alert('Congratulations! You have submitted ň̸͇̫̖̣̗̬̩͉̙͎̟̲͈͈̂̉̊͌͗͋̋͂̾́͌͌̉͗̓ͅͅo̸̬̮̭̞̖̝̤̖̳͍͎̪̜͚̬͕̘̠̬̞͇͍͇̔̒͊̎̀̾͒̅́̓̾̇́͗͑̿̇̓t̷̞̩̜̳̦̣̠̗̜̗̲̥͔͔̏̎̃̉̇̎̔̒̀̾̃̈́͗̑̀̑̂͆͋̏͋̚̚ͅḥ̸̞̥̟̬͓͔̥͙̫̫̤͖̦̰̠̀̈̅̿͂̌̎̅͌́͋́͛͐̂͊͐̽ͅͅḯ̴̱͚̲̖̟̳̲̖̦̟̰̗̤͙͙̜̩̥̮͍̙͈͗́͒̌͊͌͂͋̒̽̍̾̇̿ͅṅ̴̫̥̯̤̙̥͖͉̘̳̣̫͕̮͔̠͚͕̯̦̌̽͆̈́̅̍̉͆͆͛̌̂̌͗͑̚ͅͅg҈̦͎͔̖̜̠͉̠̱̫͔̯̱̳̫̩̗̖͈͍͇͈̿̅̅̿̓̋̓̊̉͆̄̎̈̄͐̚g̸̯͙̲̣͚̦͖̪͈̤̩͎͔̲͚͔̞̿͛̃̈͐̀̓̄̃͂́̐̉͂̉̄̅̾͗͐̚g̷̳̰͇̪͍͚̜͚̣̳̤̯̠̬̞̰͓͙̰̞͕͉͔̩̀͊̌̈̾̑͋́͋̀̿͒̅̇̽̓͛͂̓̿̇!')
};

