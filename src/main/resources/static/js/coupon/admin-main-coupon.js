function handleOptionSelection(selectedValue) {

    var searchValue = document.getElementById('searchContent').value;
    if (selectedValue != 5 && searchValue > 0) {
        window.location.href = '/admin/coupon?id=' + searchValue;
    } else {
        switch (selectedValue) {
            case '1':
                window.location.href = '/admin/coupon?id=' + searchValue;
                break;
            case '2':
            case '3':
            case '4':
                window.location.href = '/admin/coupon/' + selectedValue;
                break;
            case '5':
                window.location.href = '/admin/coupon/member?id=' + searchValue;
                break;
            default:
                break;
        }
    }
}

document.getElementById('searchButton').addEventListener('click', function () {
    // 여기에 검색 버튼 클릭 시 실행할 코드를 작성
    var selectedValue = document.getElementById('couponSelect').value;
    handleOptionSelection(selectedValue);
});