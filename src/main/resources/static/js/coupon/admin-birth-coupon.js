
function getCurrentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
    var day = String(now.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

// 현재 날짜를 구해서 min 속성에 할당
document.getElementById('date').setAttribute('min', getCurrentDate());

document.getElementById("duration").addEventListener("input", function () {
    var durationValue = parseInt(this.value);
    var durationCheck = document.getElementById("durationCheck");
    var durationMinusCheck = document.getElementById("durationMinusCheck");

    if (durationValue < 0 || isNaN(durationValue)) {
        durationCheck.style.display = "none";
        durationMinusCheck.style.display = "block";
    } else {
        durationCheck.style.display = "block";
        durationMinusCheck.style.display = "none";
    }
});

document.getElementById("formSubmitBook").addEventListener("click", function (event) {
    let duration = document.getElementById("duration");
    let date = document.getElementById("date");
    console.log("execute js script");
    if(parseInt(duration.value) < 0 ) {
        event.preventDefault(); // 기본 동작 중단
        alert("사용기한은 음수가 될 수 없습니다.");
        return false; // 폼 제출 중단
    } else if(date.value === "" && duration.value === "") {
            event.preventDefault(); // 기본 동작 중단
            alert("사용기한 혹은 날짜를 작성 후 제출해주세요.");
            return false; // 폼 제출 중단
    } else if (date.value && duration.value) {
            event.preventDefault(); // 기본 동작 중단
            alert("사용기한과 만료일을 같이 입력할 수 없습니다.");
            return false; // 둘 다 값이 있으면 제출 중단
    }
});
