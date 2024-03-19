// // 사용 기한을 입력하는 input 요소의 id를 가져옴
// var durationInput = document.getElementById('duration');
//
// // 사용 기한 입력 이벤트 리스너 추가
// durationInput.addEventListener('input', function () {
//     // 현재 날짜 생성
//     var currentDate = new Date();
//
//     // 입력된 사용 기한 값 가져오기
//     var duration = parseInt(durationInput.value);
//
//     // 사용 기한이 유효한지 확인하고, 현재 날짜에 사용 기한을 더한 날짜 계산
//     if (!isNaN(duration) && duration >= 0) {
//         var expirationDate = new Date(currentDate.getTime() + duration * 24 * 60 * 60 * 1000);
//
//         // 날짜를 yyyy-MM-dd 형식으로 변환
//         var formattedDate = expirationDate.toISOString().split('T')[0];
//
//         // 날짜 입력 input 요소에 값 설정
//         document.getElementById('date').value = formattedDate;
//     }
// });

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

function submitBookId() {
    let bookId = document.getElementById("bookId").value;
    let html = "";

    $.ajax({
        type: "GET",
        url: '/admin/books/' + bookId,
        dataType: 'json',
        success: function (data) {
            console.log(bookId);
            if (data) {
                html = "";
                html += `<p>도서 이름: ` + data.bookTitle + `</p>
                        <input class="hidden" name="name" id="bookName" style="display: none">`;
            }
            $("#checkValidBook").empty();
            $("#checkValidBook").append(html);
            $("#checkValidBook").addClass("ok");

            document.getElementById("checkBookId").style.display = "none";
            document.getElementById("checkValidBook").style.display = "block";
            document.getElementById("bookName").value = data.bookTitle;
        },
        error: function (error) {

            document.getElementById("checkValidBook").style.display = "none";
            document.getElementById("checkBookId").style.display = "block";
        }
    });

}

document.getElementById("bookId").addEventListener("input", function () {
    $("#checkValidBook").removeClass("ok");
    $("#checkValidBook").empty();
});
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
    let checkValidBook = document.getElementById("checkValidBook");
    let duration = document.getElementById("duration");
    let date = document.getElementById("date");
    console.log("execute js script");
    if (!checkValidBook.classList.contains("ok")) {
        event.preventDefault(); // 기본 동작 중단
        alert("도서가 존재하는지 확인 후 제출해주세요.");
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

