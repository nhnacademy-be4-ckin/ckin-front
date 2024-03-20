const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('re-password');
const codeInput = document.getElementById('auth-code');
const btn = document.getElementById('btn-signup');
const btn_send = document.getElementById('btn-send');
const btn_check = document.getElementById('btn-check');
const msgSpan = document.getElementById('validMsg');

let emailCheck = false;
let passwordCheck = false;
let codeCheck = false;
let active = false;

const isActive = () => {
    active = (emailCheck && passwordCheck && codeCheck);
    btn.disabled = !active;
}

const isEqualPassword = () => {
    let password = passwordInput.value;
    let rePassword = rePasswordInput.value;

    if(password ==='' || rePassword === '') {
        return false;
    }

    return password === rePassword;
}

const validatePassword = () => {
    msgSpan.classList.remove( "hidden");

    if(isEqualPassword()) {
        msgSpan.innerText = "비밀 번호가 일치합니다."
        msgSpan.style.color = "green";

        passwordCheck = true;
        isActive();
    } else {
        msgSpan.innerText = "비밀 번호가 일치하지 않습니다."
        msgSpan.style.color = "red";

        passwordCheck = false;
        isActive();
    }
}

const validateEmail = async () => {
    const email= emailInput.value;

    try {
        const response = await fetch('/api/checkEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email
            })
        });

        const isDuplicate = await response.json();

        if(isDuplicate) {
            alert("이미 존재하는 이메일 입니다.");
            emailCheck = false;
            isActive();
        } else {
            alert("사용가능한 이메일 입니다.");
            emailCheck = true;
            emailInput.setAttribute('readonly', true);
            isActive();
        }
    } catch (error) {
        console.log(error);
        emailCheck = false;
        isActive();
    }
}

let responseCode;

const sendRequestCode = async () => {
    try {
        const response = await fetch('/codeRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        btn_send.classList.add("hidden");
        btn_check.classList.remove("hidden");

        responseCode = await response.json();
    } catch (error) {
        console.log(error);
    }
}

const checkCode = () => {
    const code = codeInput.value;
    if(code == responseCode) {
        alert("인증에 성공했습니다.")
        codeCheck = true;
        isActive();
    } else {
        alert("인증에 실패했습니다. 다시 시도해주세요");
        codeCheck = false;

        btn_check.classList.add("hidden");
        btn_send.classList.remove("hidden");
        isActive();
    }
}



