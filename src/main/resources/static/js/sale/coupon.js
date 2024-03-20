// 페이지가 로드되면 memberId와 bookId를 통해 사용 가능한 쿠폰 리스트를 받아옵니다.
let bookIds = [];
bookInfo.forEach(book => {
    return bookIds.push(book.bookId);
});

let couponList = [];
$(document).ready(function () {
    $.ajax({
        url: '/sale/coupon?memberId=' + memberId + '&' + bookIds.map(id => 'bookId=' + id).join('&'),
        method: 'GET',
        success: function (coupons) {
            coupons.forEach(coupon => {
                couponList.push(coupon);
            });
        },
        error: function (xhr, status, error) {
            console.error('Request failed with status', status, error);
        }
    });
});

// 쿠폰 목록을 렌더링합니다.
let appliedCoupons = new Map();

function renderCoupon(bookId) {

    let categoryIds = bookInfo.get(parseInt(bookId)).categoryIds;

    let tableId = 'couponTable-' + bookId;
    let couponTableBody = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    // 쿠폰 목록을 비웁니다.
    couponTableBody.innerHTML = '';


    let selectableCoupons = [];

    // 쿠폰을 분류합니다.
    couponList.forEach(coupon => {


        /**
         * 1. coupon.typeId === 1 : 모든 상품에 적용 가능
         * 2. coupon.typeId === 2 : coupon.bookId와 bookId가 같은 상품에 적용 가능
         * 3. coupon.typeId === 3 : coupon.categoryId가 categoryIds에 포함되어 있는 상품에 적용 가능
         */
        if ((coupon.typeId == 1)
            || ((coupon.typeId == 2 && coupon.bookId == bookId))
            || ((coupon.typeId == 3 && categoryIds.includes(coupon.categoryId)))) {
            selectableCoupons.push(coupon);
        }
    });


    // 이미 적용된 쿠폰이 있다면 해당 쿠폰을 selectableCoupons에서 제외
    appliedCoupons.forEach((appliedCouponId, appliedBookId) => {
        if (appliedBookId !== bookId) {
            selectableCoupons = selectableCoupons.filter(coupon => coupon.id !== appliedCouponId)
        }
    })


    // 선택 가능한 쿠폰을 HTML로 변환하여 출력합니다.
    selectableCoupons.forEach(coupon => {

        /**
         * coupon.couponCodeId == 1 : 정액할인
         * coupon.couponCodeId == 2 : 정률할인
         *
         * 따라서, 1번이면 discountPrice를 표시하고, 2번이면 discountRate를 표시합니다.
         */

        let discountPriceId = 'discountPrice-' + coupon.id;
        let bookSalePriceElement = document.getElementById(bookId + '-saleOrderPrice').innerText;
        let bookSalePrice = parseInt(bookSalePriceElement);

        if (coupon.minOrderPrice > bookSalePrice) {
            return;
        }

        let priceRow;
        if (coupon.couponCodeId == 1) {

            let price = coupon.discountPrice;

            priceRow = '<td>' + price + '원' + '<br/>' + '<span>' + '상품 가격이 최소 ' + coupon.minOrderPrice + '원 이상' + '</span></td>' +
                '<td style="color: dodgerblue" id=' + discountPriceId + '>' + price + '원 </td>'
        } else {

            if (price > coupon.maxDiscountPrice) {
                price = coupon.maxDiscountPrice;
            }

            let price = (bookSalePrice * (coupon.discountRate / 100)).toFixed();

            priceRow = '<td>' + coupon.discountRate + '%' + '<br/>' + '<span>' + '최대 할인 금액 ' + coupon.maxDiscountPrice + '원' + '</span></td>' +
                '<td style="color: dodgerblue" id=' + discountPriceId + '>' + price + '원 </td>';
        }

        let row = '<tr>' +
            '<td><input type="radio" id="coupon-' + bookId + '" name="coupon"  value="' + coupon.id + '"></td>' +
            '<td>' + coupon.name + '</td>' +
            priceRow +
            '</tr>';
        couponTableBody.innerHTML += row;
    });
}


function applyCoupon(bookId) {

    let check = 'coupon-' + bookId;
    let selectedCouponId = $("input[id='" + check + "']:checked").val();

    let couponApplyBtn = document.getElementById('couponApplyBtn-' + bookId);

    if (selectedCouponId) {
        let saleOrderPrice = parseInt(document.getElementById(bookId + '-saleOrderPrice').innerText) - parseInt(document.getElementById('discountPrice-' + selectedCouponId).innerText.replace('원', ''));

        let totalSalePrice = document.getElementById('totalSalePrice').value;

        // 적용하려는 쿠폰의 할인 금액보다 totalSalePrice 가 작다면 쿠폰을 적용할 수 없습니다.
        if (totalSalePrice - 100 < saleOrderPrice) {
            alert('쿠폰을 적용할 수 없습니다.');
            couponApplyBtn.removeAttribute('data-dismiss');
            return;
        }

        // 선택된 쿠폰을 적용합니다.
        appliedCoupons.set(parseInt(bookId), parseInt(selectedCouponId));

        alert('쿠폰이 적용되었습니다.');

        couponApplyBtn.setAttribute('data-dismiss', 'modal');

        document.getElementById(bookId + '-coupon').value = selectedCouponId;

        document.getElementById(bookId + '-saleOrderPrice').innerText
            = saleOrderPrice;

        // <input type="hidden" th:value="${bookSale.bookSalePrice} * 2" name="bookSalePrice">
        document.getElementById(bookId + '-inputPrice').value = saleOrderPrice;


        let couponBtn = document.getElementById('couponBtn-' + bookId);
        couponBtn.style.display = 'none';

        let cancelApplyBtn = document.getElementById('cancelApplyBtn-' + bookId);
        cancelApplyBtn.style.display = 'block';

        // 주문 금액 다시 계산 (bookId, 할인 금액 넘겨주기)
        let discountPriceElement = document.getElementById('discountPrice-' + selectedCouponId);
        let discountPriceText = discountPriceElement.innerText;
        let discountPrice = parseInt(discountPriceText.replace('원', ''));

        updateCouponDiscountPrice(bookId, discountPrice);
    } else {
        alert('쿠폰을 선택해주세요.');
        couponApplyBtn.removeAttribute('data-dismiss');
    }
}

function cancelCoupon(bookId) {

    // 쿠폰을 취소합니다.
    document.getElementById(bookId + '-coupon').value = '';

    let cancelCouponBookId = parseInt(bookId);
    let discountPriceElement = document.getElementById('discountPrice-' + appliedCoupons.get(cancelCouponBookId));
    let discountPrice = parseInt(discountPriceElement.innerText.replace('원', ''));

    appliedCoupons.delete(cancelCouponBookId);

    let saleOrderPrice = parseInt(document.getElementById(bookId + '-saleOrderPrice').innerText) + discountPrice;

    document.getElementById(bookId + '-saleOrderPrice').innerText = saleOrderPrice;

    document.getElementById(bookId + '-inputPrice').value = saleOrderPrice;

    let cancelApplyBtn = document.getElementById('cancelApplyBtn-' + bookId);
    cancelApplyBtn.style.display = 'none';

    let couponApplyBtn = document.getElementById('couponBtn-' + bookId);
    couponApplyBtn.style.display = 'block';

    alert('쿠폰이 취소되었습니다.');

    updateCouponDiscountPrice(bookId, -discountPrice);
}