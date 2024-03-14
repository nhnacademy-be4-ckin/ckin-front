function checkCoupon(templateId) {

    $.ajax({
        type: "POST",
        url: '/coupon/' + templateId,
        dataType: 'json',
        success: function (response) {
            // 성공적으로 쿠폰 발급 요청이 처리된 경우
            console.log(response);

            if (response) {
                // 쿠폰이 발급되었음을 사용자에게 알림
                alert("쿠폰이 발급되었습니다.");
            } else {
                alert("이미 발급된 쿠폰입니다.")
            }

        },
        error: function (xhr, status, error) {
            // 쿠폰 발급 요청이 실패한 경우
            console.error(xhr.responseText);
            // 사용자에게 로그인 후 이용 가능함을 알림
            // alert("쿠폰 발급에 실패했습니다.");
            alert("로그인 후 이용 가능합니다.");
        }
    });
}
