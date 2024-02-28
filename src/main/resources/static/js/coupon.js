// TODO 1) 회원 ID
let memberId = 5;

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

        console.log("test")
        let book = bookInfo.get(parseInt(coupon.bookId));

        // 추후에 book.bookSalePrice * 수량 으로 변경해야함
        // 소수점은 반올림
        let price = (book.bookSalePrice * (coupon.discountPrice / 100)).toFixed();
        console.log(price);


        let priceRow;
        if (coupon.couponCodeId == 1) {
            priceRow = '<td>' + coupon.discountPrice + '원' + '<br/>' + '<span>' + '상품 가격이 최소 ' + coupon.minOrderPrice + '원 이상' + '</span></td>'
                + '<td style="color: dodgerblue">' + coupon.discountPrice + '원 </td>'
        } else {
            priceRow = '<td>' + coupon.discountRate + '%' + '<br/>' + '<span>' + '최대 할인 금액 ' + coupon.maxDiscountPrice + '원' + '</span></td>'
                + '<td style="color: dodgerblue">' + coupon.discountRate + '% </td>';
        }

        let row =
            '<tr>' +
            '<td><input type="radio" name="coupon" value="' + coupon.id + '"></td>' +
            '<td>' + coupon.name + '</td>' +
            priceRow +
            '</tr>';
        couponTableBody.innerHTML += row;
    });
}
