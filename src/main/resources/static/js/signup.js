const emailInput = document.getElementById('email');
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

