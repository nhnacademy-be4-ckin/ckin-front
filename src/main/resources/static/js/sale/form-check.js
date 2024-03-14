// 폼 전송 이벤트 리스너 등록

console.log("form-check.js");

// 폼 전송 이벤트 리스너 등록
document.getElementById('submit-btn').addEventListener('click', function (event) {
    // 필드의 레이블과 값을 매핑하는 객체
    const fieldLabels = {
        'saleOrdererName': '주문자 이름',
        'saleOrdererContact': '주문자 연락처',
        'saleReceiverName': '수령자 이름',
        'saleReceiverContact': '수령자 연락처',
        'postcode': '우편번호',
        'address': '도로명/지번 주소',
        'detailAddress': '상세 주소'
    };

    // 필드의 ID와 값을 매핑하는 객체
    const fieldValues = {
        'saleOrdererName': document.getElementsByName('saleOrdererName')[0].value.trim(),
        'saleOrdererContact': document.getElementsByName('saleOrdererContact')[0].value.trim(),
        'saleReceiverName': document.getElementsByName('saleReceiverName')[0].value.trim(),
        'saleReceiverContact': document.getElementsByName('saleReceiverContact')[0].value.trim(),
        'postcode': document.getElementById('postcode').value.trim(),
        'address': document.getElementById('address').value.trim(),
        'detailAddress': document.getElementById('detailAddress').value.trim()
    };

    // 누락된 입력을 확인하기 위한 배열
    const missingFields = [];

    // 모든 필드 반복
    for (const fieldId in fieldValues) {
        if (!fieldValues[fieldId]) {
            missingFields.push(fieldLabels[fieldId] || '필드 이름');
        }
    }

    // 누락된 입력이 있을 경우 알림 메시지 표시
    if (missingFields.length > 0) {
        event.preventDefault(); // 폼 전송 취소

        // 누락된 필드에 대한 알림 메시지 생성
        const missingFieldsMessage = '입력되지 않은 항목이 존재합니다. 아래의 항목을 입력해주세요 👀\n\n' + missingFields.join('\n');
        alert(missingFieldsMessage);
    }
});
