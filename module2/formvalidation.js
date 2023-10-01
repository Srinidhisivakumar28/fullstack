
const btn = document.getElementById('btn_login');
const uName = document.getElementById('uName');
const uPass = document.getElementById('uPassword');

const uName_val = uName.Value;
const uPass_val = uPass.Value;

btn.addEventListener("click",function () {
    if (checkValidValues(uName_val) && checkValidValues(uPass_val)) {
      console.log({
        uName_val,
        uPass_val,
    });
} else {
    window.alert("wrongvalues");
}
});

function checkUserNameValidity(userName) {
    return userName.includes("@gmail.com");
}

function checkPasswordValidity(Password) {
    return Password.length <= 6;
}


function checkValidValues(inputFeild) {
    return inputFeild !== '' || inputFeild !== null || inputFeild !== undefined;
}