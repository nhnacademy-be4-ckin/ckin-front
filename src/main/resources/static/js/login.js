document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login_form'); // 로그인 폼 요소 가져오기

    loginForm.addEventListener('submit', async event => {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        if (email === '') {
            event.preventDefault();
            alert('이메일을 입력해주세요.');
        } else if (password === '') {
            event.preventDefault();
            alert('비밀번호를 입력해주세요.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const error = urlParams.get('error');

    if (error === 'invalid') {
        alert('이메일이나 비밀번호를 확인하세요.');
    }
});