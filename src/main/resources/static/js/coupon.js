// TODO 1) 회원 ID

let memberId = 1;

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

// couponBtn 버튼 클릭 이벤트를 처리합니다.

let couponButtons = document.querySelectorAll('.couponBtn');
couponButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        // 쿠폰 적용할 책의 ID를 가져옵니다.
        let bookId = this.value;
        let categoryIds = bookInfo.get(parseInt(bookId)).categoryIds;

        // 쿠폰 목록을 렌더링 합니다.
        renderCoupon(couponList, bookId, categoryIds);
    })
})


// 쿠폰 목록을 렌더링합니다.
let appliedCoupons = new Map();

function renderCoupon(couponList, bookId, categoryIds) {

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


    // 선택 가능한 쿠폰을 HTML로 변환하여 출력합니다.
    selectableCoupons.forEach(coupon => {


        /**
         * coupon.couponCodeId === 1 : 정액할인
         * coupon.couponCodeId === 2 : 정률할인
         *
         * 따라서, 1번이면 discountPrice를 표시하고, 2번이면 discountRate를 표시합니다.
         */


        let book = bookInfo.get(parseInt(bookId));

        let priceRow;
        if (coupon.couponCodeId == 1) {

            let price = coupon.discountPrice;
            if (coupon.minOrderPrice > book.bookSalePrice) {
                return;
            }

            priceRow = '<td>' + coupon.discountPrice + '원' + '<br/>' + '<span>' + '상품 가격이 최소 ' + coupon.minOrderPrice + '원 이상' + '</span></td>'
                + '<td style="color: dodgerblue">' + coupon.discountPrice + '원 </td>'
        } else {

            let price = (book.bookSalePrice * (coupon.discountRate / 100)).toFixed();

            if (price > coupon.maxDiscountPrice) {
                price = coupon.maxDiscountPrice;
            }

            priceRow = '<td>' + coupon.discountRate + '%' + '<br/>' + '<span>' + '최대 할인 금액 ' + coupon.maxDiscountPrice + '원' + '</span></td>'
                + '<td style="color: dodgerblue">' + price + '원 </td>';
        }

        let row =
            '<tr>' +
            '<td><input type="radio" name="coupon" value="' + coupon.id + '"></td>' +
            '<td>' + coupon.name + '</td>' +
            priceRow +
            '</tr>';
        couponTableBody.innerHTML += row;
    });

    // couponApplyBtn 버튼이 눌리면 쿠폰을 적용
    let couponApplyBtn = document.getElementById('couponApplyBtn-' + bookId);

    couponApplyBtn.addEventListener('click', function () {

        let selectedCouponId = $("input[name='coupon']:checked").val();
        if (selectedCouponId) {

            // 선택된 쿠폰을 적용합니다.
            appliedCoupons.set(parseInt(bookId), parseInt(selectedCouponId));

            // 쿠폰 적용 후 동작을 추가하세요.
            console.log('쿠폰이 적용된 상품 ID와 쿠폰 ID = ' + bookId + ' ' + selectedCouponId);
            console.log(appliedCoupons);

            alert('쿠폰이 적용되었습니다.');

            $('#applyCouponBtn-' + bookId).modal('hide');
        } else {
            alert('쿠폰을 선택해주세요.');
        }
    });
}