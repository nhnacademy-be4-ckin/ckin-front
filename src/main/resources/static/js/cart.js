function clickUpdateBtn(btn) {
    const form = btn.parentNode;
    const currentQuantity = form.querySelector('input[name=quantity]').value;
    Swal.fire({
        title: "변경하실 수량을 입력해주세요",
        icon: "question",
        input: "range",
        inputAttributes: {
            min: "1",
            max: "100",
            step: "1"
        },
        inputValue: currentQuantity
    }).then(
        (result) => {
            if(result.isConfirmed) {
                const inputValue = Swal.getInput().value;
                form.querySelector('input[name=quantity]').value = inputValue;
                Swal.fire({
                    icon: "success",
                    title: "상품 수량이\n정상적으로 변경되었습니다",
                    showConfirmButton: false,
                    timer: 1500
                }).then(function () {
                    form.submit();
                })
            }
        }
    );
}

function showConfirmAlert(message, confirmText, icon) {
    return Swal.fire({
        title: "알림",
        text: message,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmText,
        cancelButtonText: "취소"
    });
}

function clickOrderBtn(orderBtn) {
    const checkboxes = document.querySelectorAll('.form-check-input');
    orderList = [];
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked && index !== 0) {
            const element = checkbox.parentNode;
            const selectedId = element.querySelector('#order_id');
            const selectedQuantity = element.querySelector('#order_quantity');
            const selectedName = element.querySelector('#order_name');

            const id = selectedId.value;
            const quantity = selectedQuantity.value;
            const name = selectedName.value;
            orderList.push({id, quantity, name});
        }
    })
    showConfirmAlert(orderList.length + " 개의 상품을 주문하시겠습니까?", "주문", "question")
        .then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'post',
                    url: '/cart/order',
                    async: true,
                    headers: {
                        "Content-Type": "application/json",
                        "X-HTTP-Method-Override": "POST"
                    },
                    dataType: 'json',
                    data: JSON.stringify(orderList),
                    complete: function () {
                        window.location.href = "/sale";
                    }
                })
            }
        })
}

function clickDeleteBtn(btn) {
    const form = btn.parentNode;
    showConfirmAlert("해당 상품을 장바구니에서 삭제하시겠습니까?", "삭제", "warning")
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "상품이 정상적으로 삭제되었습니다",
                    showConfirmButton: false,
                    timer: 1500
                }).then(function () {
                    form.submit();
                })
            }
        })
}

function checkAll(checkBox) {
    console.log(checkBox.checked);
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = checkBox.checked;
    })
}