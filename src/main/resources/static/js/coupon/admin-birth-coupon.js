// 모든 요소에 대한 text-danger 클래스를 가진 요소를 선택합니다.
var textDangerElements = document.querySelectorAll('.text-danger');

// 사용중이라는 글씨가 있는지 확인할 변수를 초기화합니다.
var isUsageTextPresent = false;

// 각 요소에 대해 반복하면서 "사용중"이라는 글씨가 있는지 확인합니다.
textDangerElements.forEach(function (element) {
    if (element.textContent.trim() === "사용중") {
        isUsageTextPresent = true;
    }
});

// isUsageTextPresent 변수의 값을 확인합니다.
if (isUsageTextPresent) {
    console.log("사용중인 요소가 있습니다.");
} else {
    console.log("사용중인 요소가 없습니다.");
}


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
    let policy = document.getElementById("policy");
    console.log($("#policy").is(":checked")==true);

    if (parseInt(duration.value) < 0) {
        event.preventDefault(); // 기본 동작 중단
        alert("사용기한은 음수가 될 수 없습니다.");
        return false; // 폼 제출 중단
    } else if (date.value === "" && duration.value === "") {
        event.preventDefault(); // 기본 동작 중단
        alert("사용기한 혹은 날짜를 작성 후 제출해주세요.");
        return false; // 폼 제출 중단
    } else if (date.value && duration.value) {
        event.preventDefault(); // 기본 동작 중단
        alert("사용기한과 만료일을 같이 입력할 수 없습니다.");
        return false; // 둘 다 값이 있으면 제출 중단
    } else if ($("#policy").is(":checked")==true && isUsageTextPresent) {
        event.preventDefault(); // 기본 동작 중단
        alert("이미 사용중인 정책이 있습니다. \n새로운 정책을 등록하시려면 기존 정책을 해지한 이후에 다시 시도하세요.");
        return false; // 폼 제출 중단
    }
});
