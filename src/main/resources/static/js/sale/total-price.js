// 주문 도서 금액 계산
let totalOrderPrice = 0;
let salePrice = document.querySelectorAll('.salePrice');

salePrice.forEach(price => {
    totalOrderPrice += parseInt(price.innerText);
})
document.getElementById('totalOrderPrice').textContent = totalOrderPrice.toFixed(0);

//-------------------------------

// 배송 금액 계산
let deliveryPriceElement = document.getElementById('deliveryPrice');
let deliveryPrice = parseInt(deliveryPriceElement.innerText); // parseInt 추가
if (totalOrderPrice >= freeDeliveryPrice) {
    deliveryPrice = 0;
    deliveryPriceElement.textContent = deliveryPrice;
}

document.getElementById('deliveryFee').value = deliveryPrice;

//-------------------------------

// 포장 금액 계산
let selectedPackagingId = document.querySelectorAll('select.packaging');

let totalPackagingPrice = 0;
selectedPackagingId.forEach(selectElement => {
    totalPackagingPrice += packagingPrices.get(parseInt(selectElement.value));
});

selectedPackagingId.forEach(selectElement => {
    selectElement.addEventListener('change', function (event) {
        // 변경될 때마다 totalPrice 초기화
        totalPackagingPrice = 0;
        // 변경된 각 요소의 값을 totalPrice에 더함
        selectedPackagingId.forEach(selectElement => {
            totalPackagingPrice += packagingPrices.get(parseInt(selectElement.value));
        });
        updateTotalPackagingPrice(totalPackagingPrice);
        updateTotalPrice(); // 포장 금액이 변경되었으므로 결제 총 금액을 다시 계산
    });
});

// 포장지 선택 시 금액을 업데이트하는 함수
function updateTotalPackagingPrice(packagingPrice) {
    let totalPriceElement = document.getElementById('totalPackagingPrice');
    totalPriceElement.textContent = packagingPrice.toFixed(0);
}

//-------------------------------

// 결제 총 금액 계산
function updateTotalPrice() {
    let totalPrice = document.getElementById('totalPrice');
    let totalCouponDiscount = parseInt(document.getElementById('totalCouponDiscount').textContent);
    let pointUsage = parseInt(document.getElementById('pointUsage').value);

    totalPrice.textContent = (totalOrderPrice + totalPackagingPrice + deliveryPrice - totalCouponDiscount - pointUsage).toFixed(0);

    document.getElementById('totalSalePrice').value = totalPrice.textContent;
}

updateTotalPrice(); // 페이지 로드 시 결제 총 금액을 계산하여 업데이트

//-------------------------------

// 쿠폰 적용 시 쿠폰 할인 금액을 업데이트하는 함수
function updateCouponDiscountPrice(bookId, discountPrice) {
    // 쿠폰 할인 금액 업데이트
    let totalCouponDiscountElement = document.getElementById('totalCouponDiscount');

    let totalCouponDiscount = parseInt(totalCouponDiscountElement.textContent);
    totalCouponDiscount += discountPrice;

    totalCouponDiscountElement.textContent = totalCouponDiscount;

    // 결제 총 금액 업데이트
    updateTotalPrice();
}

//-------------------------------

// 포인트 사용시 총 금액을 업데이트하는 함수
function applyPoint() {
    let applyMemberPoint = document.getElementById('memberPoint').value.trim();
    let checkPoint = new RegExp("^[0-9]*$");
    if (!checkPoint.test(applyMemberPoint)) {
        alert('숫자만 입력해주세요.');
        return;
    }


    let holdingMemberPoint = parseInt(document.getElementById('holdingMemberPoint').textContent);

    // 결제할 금액보다 많이 사용하지 못해야 함.
    let totalSalePrice = document.getElementById('totalSalePrice').value;

    // 보유한 포인트보다 더 많이 사용하지 못해야 함.
    applyMemberPoint = parseInt(applyMemberPoint);
    if (isNaN(applyMemberPoint)) {
        alert('사용할 포인트를 숫자로 입력해주세요.');
        return;
    } else if (applyMemberPoint > holdingMemberPoint) {
        alert('보유한 포인트보다 더 많이 사용할 수 없습니다.');
        return;
    } else if (applyMemberPoint < 0) {
        alert('0보다 작은 값을 입력할 수 없습니다.');
        return;
    } else if (applyMemberPoint > totalSalePrice - 100) {
        alert('최대 사용 가능한 포인트는 ' + (totalSalePrice - 100) + ' 포인트 입니다.');
        return;
    }

    alert('포인트를 사용하였습니다.');

    document.getElementById('pointDiscount').textContent = applyMemberPoint;
    document.getElementById('pointUsage').value = applyMemberPoint;

    updateTotalPrice();
}