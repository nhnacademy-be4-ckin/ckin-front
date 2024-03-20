const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('re-password');
const btn = document.getElementById('btn-signup');
const msgSpan = document.getElementById('validMsg');

const isEqualPassword = () => {
    let password = passwordInput.value;
    let rePassword = rePasswordInput.value;

    return password === rePassword;
}

const validatePassword = () => {
    msgSpan.classList.remove( "hidden");
    if(isEqualPassword()) {
        msgSpan.innerText = "비밀 번호가 일치합니다."
        msgSpan.style.color = "green";
        btn.disabled = false;
    } else {
        msgSpan.innerText = "비밀 번호가 일치하지 않습니다."
        msgSpan.style.color = "red";
        btn.disabled = true;
    }
}

