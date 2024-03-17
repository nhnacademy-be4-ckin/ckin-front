// 사용 기한을 입력하는 input 요소의 id를 가져옴
var durationInput = document.getElementById('duration');

// 사용 기한 입력 이벤트 리스너 추가
durationInput.addEventListener('input', function() {
    // 현재 날짜 생성
    var currentDate = new Date();

    // 입력된 사용 기한 값 가져오기
    var duration = parseInt(durationInput.value);

    // 사용 기한이 유효한지 확인하고, 현재 날짜에 사용 기한을 더한 날짜 계산
    if (!isNaN(duration) && duration >= 0) {
        var expirationDate = new Date(currentDate.getTime() + duration * 24 * 60 * 60 * 1000);

        // 날짜를 yyyy-MM-dd 형식으로 변환
        var formattedDate = expirationDate.toISOString().split('T')[0];

        // 날짜 입력 input 요소에 값 설정
        document.getElementById('date').value = formattedDate;
    }
});

// 현재 날짜를 가져오는 함수
function getCurrentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
    var day = String(now.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

// 현재 날짜를 구해서 min 속성에 할당
document.getElementById('date').setAttribute('min', getCurrentDate());