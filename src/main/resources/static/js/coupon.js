
// TODO 1) 회원 ID
let memberId = 1;

// TODO 2) 주문할 책 ID 목록
let bookIds = [];
bookIds.push(1);
bookIds.push(2);



let couponList = [];

// 페이지가 로드되면 memberId와 bookId를 통해 사용 가능한 쿠폰 리스트를 받아옵니다.
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
document.getElementById('couponBtn').addEventListener('click', function () {

    // 쿠폰 적용할 책의 ID를 가져옵니다.
    let bookId = document.getElementById('couponBtn').value;

    // TODO 3) 쿠폰 적용할 책의 카테고리 ID 목록 (임시로 1, 2로 설정)
    let categoryIds = [];
    categoryIds.push(1);
    categoryIds.push(2);

    // 쿠폰을 렌더링합니다.
    renderCoupon(couponList, bookId, categoryIds);
});

function renderCoupon(couponList, bookId, categoryIds) {

    let couponTableBody = document.getElementById('couponTable').getElementsByTagName('tbody')[0];

    let selectableCoupons = [];
    let disabledCoupons = [];

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
            console.log(coupon);

        } else {
            disabledCoupons.push(coupon);
        }
    });

    // 쿠폰 목록을 비웁니다.
    couponTableBody.innerHTML = '';

    // 선택 가능한 쿠폰을 HTML로 변환하여 출력합니다.
    selectableCoupons.forEach(coupon => {

        /**
         * coupon.couponCodeId === 1 : 정액할인
         * coupon.couponCodeId === 2 : 정률할인
         *
         * 따라서, 1번이면 discountPrice를 표시하고, 2번이면 discountRate를 표시합니다.
         */
        let row
            = '<tr>'
            + '<td><input type="radio" name="coupon" value="' + coupon.id + '"></td>'
            + '<td>' + coupon.name + '</td>'
            + '<td>' + (coupon.couponCodeId == 1 ? coupon.discountPrice + '원' +
                '<br/> <span>' + '상품 가격이 최소 ' + coupon.minOrderPrice + '원 이상' + '</span>'
                : coupon.discountRate + '%' +
                '<br/> <span>' + '최대 할인 금액 ' + coupon.maxDiscountPrice + '원' + '</span>')
            + '</td>'
            + '<td style="color: dodgerblue">' + (coupon.couponCodeId == 1 ? coupon.discountPrice + '원' : coupon.discountRate + '%') + '</td>'
            + '</tr>';
        couponTableBody.innerHTML += row;
    });
}
