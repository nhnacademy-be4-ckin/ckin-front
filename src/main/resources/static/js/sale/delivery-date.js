
// 현재 날짜 기준으로 2일을 더한 날짜를 가져오는 함수
function getDefaultDeliveryDate() {
    var today = new Date();
    var deliveryDate = new Date(today);

    // 최소 예약 배송일자는 현재 날짜 + 2일
    deliveryDate.setDate(deliveryDate.getDate() + 2);

    var dd = deliveryDate.getDate();
    var mm = deliveryDate.getMonth() + 1;
    var yyyy = deliveryDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
}

function getMaxDeliveryDate() {
    var today = new Date();
    var deliveryDate = new Date(today);

    // 최대 예약 배송일자는 현재 날짜 + 59일
    deliveryDate.setDate(deliveryDate.getDate() + 59);

    var dd = deliveryDate.getDate();
    var mm = deliveryDate.getMonth() + 1;
    var yyyy = deliveryDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    return yyyy + '-' + mm + '-' + dd;
}


// 배송 날짜 input 요소의 최소, 최대 날짜를 설정하는 함수
function setMinDeliveryDate() {
    var deliveryDateInput = document.getElementById('saleDeliveryDate');
    if (deliveryDateInput) {
        deliveryDateInput.value = getDefaultDeliveryDate();
        deliveryDateInput.min = getDefaultDeliveryDate();
        deliveryDateInput.max = getMaxDeliveryDate();
    }
}


// 문서가 로드되면 최소 배송 날짜를 설정합니다.
window.onload = function () {
    setMinDeliveryDate();
};