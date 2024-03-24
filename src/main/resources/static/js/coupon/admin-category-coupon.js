document.getElementById("categoryId").addEventListener("input", function () {
    $("#checkValidCategory").removeClass("ok");
    $("#checkValidCategory").empty();
});

document.getElementById("durationCategory").addEventListener("input", function () {
    var durationValue = parseInt(this.value);
    var durationCheck = document.getElementById("durationCheckCategory");
    var durationMinusCheck = document.getElementById("durationMinusCheckCategory");

    if (durationValue < 0 || isNaN(durationValue)) {
        durationCheck.style.display = "none";
        durationMinusCheck.style.display = "block";
    } else {
        durationCheck.style.display = "block";
        durationMinusCheck.style.display = "none";
    }
});

document.getElementById("formSubmitCategory").addEventListener("click", function (event) {
    let checkValidCategory = document.getElementById("checkValidCategory");
    let durationCategory = document.getElementById("durationCategory");
    let dateCategory = document.getElementById("dateCategory");

    console.log("execute js script");

    if (!checkValidCategory.classList.contains("ok")) {
        event.preventDefault(); // 기본 동작 중단
        showErrorAlert("도서가 존재하는지 확인 후 제출해주세요.");
        return false; // 폼 제출 중단
    } else if(dateCategory.value === "" && durationCategory.value === "") {
        event.preventDefault(); // 기본 동작 중단
        showErrorAlert("사용기한 혹은 만료일을 작성 후 제출해주세요.");
        return false; // 폼 제출 중단
    } else if (dateCategory.value && durationCategory.value) {
        event.preventDefault(); // 기본 동작 중단
        showErrorAlert("사용기한과 만료일을 같이 입력할 수 없습니다.");
        return false; // 둘 다 값이 있으면 제출 중단
    }
});

function getCurrentDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = String(now.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
    var day = String(now.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
}

document.getElementById('dateCategory').setAttribute('min', getCurrentDate());

function submitCategoryId() {
    let categoryId = document.getElementById("categoryId").value;
    let html = "";

    $.ajax({
        type: "GET",
        url: '/categories/name/' + categoryId,
        dataType: 'json',
        success: function (data) {
            console.log(categoryId);
            if (data) {
                html = "";
                html += `<p>카테고리 이름: ` + data.name + `</p>
                        <input class="hidden" name="name" id="categoryName" style="display: none">`;
            }
            $("#checkValidCategory").empty();
            $("#checkValidCategory").append(html);
            $("#checkValidCategory").addClass("ok");

            document.getElementById("checkCategoryId").style.display = "none";
            document.getElementById("checkValidCategory").style.display = "block";
            document.getElementById("categoryName").value = data.name;
            console.log(document.getElementById("categoryName").value);
        },
        error: function (error) {

            document.getElementById("checkValidCategory").style.display = "none";
            document.getElementById("checkCategoryId").style.display = "block";
        }
    });

}

function showErrorAlert(message) {
    Swal.fire({
        icon: 'error',
        title: '알림',
        text: message
    });
}
