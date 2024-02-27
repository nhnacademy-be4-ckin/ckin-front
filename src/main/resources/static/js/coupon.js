let memberId = 1;

let bookIds = [];
bookIds.push(1);
bookIds.push(2);

console.log(document.getElementById('couponBtn').value);

let couponMap = new Map();
// 페이지가 로드되면 memberId와 bookId를 통해 사용 가능한 쿠폰 리스트를 받아온다.
$(document).ready(function () {
    $.ajax({
        url: '/sale/coupon?memberId=' + memberId + '&' + bookIds.map(id => 'bookId=' + id).join('&'),
        method: 'GET',
        success: function (coupons) {
            coupons.forEach(coupon => {
                couponMap.set(coupon.id, coupon);
            });
            console.log(couponMap);
        },
        error: function (xhr, status, error) {
            console.error('Request failed with status', status, error);
        }
    });
});

document.getElementById('couponBtn').addEventListener('click', function () {
    let bookId = document.getElementById('couponBtn').value;
    console.log('couponBtn clicked');
    couponMap.forEach(value => {
        renderCoupon(value);
    });
})

function renderCoupon(coupon) {
    let couponTableBody = document.getElementById('couponTable').getElementsByTagName('tbody')[0];
    coupon.forEach(function (coupon) {
        let row =
            '<tr>' +
            '<td><input type="radio" name="coupon" value="' + coupon.id + '"></td>' +
            '<td>' + coupon.name + '</td>' +
            '<td style="color: dodgerblue">' + coupon.discountRate + '%</td>' +
            '<td style="color: dodgerblue">' + coupon.discountPrice + '원</td>' +
            '</tr>';
        couponTableBody.append(row);
    });

    console.log('renderCoupons');
}


// 사용자가 쿠폰 적용 버튼을 누르면 해당 bookId에 대한 적용 가능한 쿠폰 리스트를 빼서 화면에 보여준다.

// 쿠폰 적용 버튼을 누르면 해당 bookId에 대한 적용 가능한 쿠폰 리스트를 빼서 화면에 보여준다.

$(document).ready(function () {
    $('#couponBtn').click(function (id) {
        console.log('renderCoupons');
        renderCoupons(couponMap, id);
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

// function renderCoupons(couponMap, bookId) {
//     let couponTableBody = $('#couponTable tbody');
//     couponTableBody.empty();
//
//     let selectableCoupons = [];
//
//     $.each(couponMap, function (index, coupon) {
//         console.log("coupon = " + coupon);
//
//         if (coupon.couponTemplateId !== 1 && coupon.bookId !== bookId) {
//             console.log('not append coupon : ' + coupon);
//             // 선택 불가능한 쿠폰은 disabledCoupons 배열에 추가합니다.
//             disabledCoupons.push(coupon);
//         } else if (coupon.couponTemplateId === 1 || coupon.bookId === bookId) {
//             console.log('append coupon : ' + coupon);
//             console.log(coupon);
//             // 선택 가능한 쿠폰은 selectableCoupons 배열에 추가합니다.
//             selectableCoupons.push(coupon);
//         }
//     });
//
//     selectableCoupons.forEach(function (coupon) {
//         let row =
//             '<tr>' +
//             '<td><input type="radio" name="coupon" value="' + coupon.id + '"></td>' +
//             '<td>' + coupon.name + '</td>' +
//             '<td style="color: dodgerblue">' + coupon.discountRate + '%</td>' +
//             '<td style="color: dodgerblue">' + coupon.discountPrice + '원</td>' +
//             '</tr>';
//         couponTableBody.append(row);
//     });
//
// }


function displayDiscountInfo(discountInfo) {
    // 할인 정보를 화면에 표시하는 코드를 구현
    console.log('할인 정보:', discountInfo);
}