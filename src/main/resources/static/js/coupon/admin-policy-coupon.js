

// select 요소를 가져옵니다.
let selectElement = document.querySelector('select[name="couponCodeId"]');
let fixed = document.getElementById("fixed");
let percentage = document.getElementById("percentage");
let fixed_max = document.getElementById("fixed_max");

// select 요소의 변경 이벤트에 대한 리스너를 추가합니다.
selectElement.addEventListener('change', function(event) {
    // 선택된 옵션의 값을 가져옵니다.
    var selectedValue = event.target.value;

    // 선택된 값에 따라 실행할 동작을 정의합니다.
    if (selectedValue === "1") {
        // 정률에 대한 동작을 실행합니다.
        console.log("정률을 선택했습니다.");
        fixed.style.display = "none";
        percentage.style.display = "block";
        fixed_max.style.display = "block";

    } else if (selectedValue === "2") {
        // 정액에 대한 동작을 실행합니다.
        console.log("정액을 선택했습니다.");
        percentage.style.display = "none";
        fixed.style.display = "block";
        fixed_max.style.display = "none";
    } else {
        // 다른 선택지에 대한 처리를 추가할 수도 있습니다.
    }
});
