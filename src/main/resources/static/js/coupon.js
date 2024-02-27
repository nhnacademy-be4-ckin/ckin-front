let memberId = 1;

let bookId = [];
bookId.push(1);
bookId.push(2);

$(document).ready(function () {
    $('#couponBtn').click(function () {
        $.ajax({
            url: '/sale/coupon?memberId=' + memberId + '&' + bookId.map(id => 'bookId=' + id).join('&'),
            method: 'GET',
            success: function (coupons) {
                renderCoupons(coupons, bookId);
            },
            error: function (xhr, status, error) {
                console.error('Request failed with status', status, error);
            }
        });
    });

    $('#selectCouponBtn').click(function () {
        let selectedCouponId = $('input[name="coupon"]:checked').val();
        if (selectedCouponId) {
            $.ajax({
                url: '/coupon/',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({couponId: selectedCouponId}),
                success: function (discountInfo) {
                    displayDiscountInfo(discountInfo);
                },
                error: function (xhr, status, error) {
                    console.error('Request failed with status', status, error);
                }
            });
        } else {
            alert('쿠폰을 선택해주세요.');
        }
    });
});

function renderCoupons(coupons, bookId) {
    let couponTableBody = $('#couponTable tbody');
    couponTableBody.empty();

    // 선택 가능한 쿠폰과 선택 불가능한 쿠폰을 담을 배열을 초기화합니다.
    let selectableCoupons = [];
    let disabledCoupons = [];

    $.each(coupons, function (index, coupon) {
        console.log("coupon = " + coupon);
        if (coupon.couponTemplateId !== 1 && coupon.bookId !== bookId) {
            console.log('not append coupon : ' + coupon);
            // 선택 불가능한 쿠폰은 disabledCoupons 배열에 추가합니다.
            disabledCoupons.push(coupon);
        } else if (coupon.couponTemplateId === 1 || coupon.bookId === bookId) {
            console.log('append coupon : ' + coupon);
            console.log(coupon);
            // 선택 가능한 쿠폰은 selectableCoupons 배열에 추가합니다.
            selectableCoupons.push(coupon);
        }
    });

    // 선택 가능한 쿠폰을 먼저 추가합니다.
    selectableCoupons.forEach(function (coupon) {
        let row =
            '<tr>' +
            '<td><input type="radio" name="coupon" value="' + coupon.id + '"></td>' +
            '<td>' + coupon.name + '</td>' +
            '<td style="color: dodgerblue">' + coupon.discountRate + '%</td>' +
            '<td style="color: dodgerblue">' + coupon.discountPrice + '원</td>' +
            '</tr>';
        couponTableBody.append(row);
    });

    // 선택 불가능한 쿠폰을 추가합니다.
    disabledCoupons.forEach(function (coupon) {
        let row =
            '<tr>' +
            '<td><input type="radio" name="coupon" value="' + coupon.id + '" disabled></td>' +
            '<td>' + coupon.name + '</td>' +
            '<td style="color: dodgerblue">' + coupon.discountRate + '%</td>' +
            '<td style="color: dodgerblue">' + coupon.discountPrice + '원</td>' +
            '</tr>';
        couponTableBody.append(row);
    });
}


function displayDiscountInfo(discountInfo) {
    // 할인 정보를 화면에 표시하는 코드를 구현
    console.log('할인 정보:', discountInfo);
}