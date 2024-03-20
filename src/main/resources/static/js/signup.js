const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rePasswordInput = document.getElementById('re-password');
const codeInput = document.getElementById('auth-code');
const btn = document.getElementById('btn-signup');
const btn_send = document.getElementById('btn-send');
const btn_check = document.getElementById('btn-check');
const msgSpan = document.getElementById('validMsg');

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
        btn.disabled = false;
    } else {
        msgSpan.innerText = "비밀 번호가 일치하지 않습니다."
        msgSpan.style.color = "red";
        btn.disabled = true;
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
            btn.disabled = true;
        } else {
            alert("사용가능한 이메일 입니다.");
            btn.disabled = false;
        }
    } catch (error) {
        console.log(error);
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
    console.log(responseCode);
    console.log(code);
    if(code == responseCode) {
        alert("인증에 성공했습니다.")
        btn.disabled = false;
    } else {
        alert("인증에 실패했습니다. 다시 시도해주세요");

        btn.disabled = true;
        btn_check.classList.add("hidden");
        btn_send.classList.remove("hidden");
    }
}

