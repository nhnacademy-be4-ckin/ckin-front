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

function saveItemToCart(btn, uri) {
    let quantityInput = btn.parentNode.parentNode.querySelector('.search-result-quantity-number').value;
    let quantity = btn.parentNode.querySelector('.send-quantity');
    let form = btn.parentNode;
    if (quantityInput >= 1 && quantityInput <= 100) {
        quantity.value = quantityInput;
        form.submit();
    } else {
        showErrorAlert('올바른 수량을 입력해 주세요(1개 이상, 100개 이하)');
    }
}

function placeOrderOne(btn) {
    const element = btn.parentNode;
    const id = element.querySelector('input[name=id]').value;
    const name = element.querySelector('input[name=name]').value;
    const quantityElement = element.querySelector('input[name=quantity]');
    let quantityInput = btn.parentNode.parentNode.querySelector('.search-result-quantity-number').value;
    console.log(quantityInput)
    if(id==null || quantityInput==null || quantityInput < 1 || quantityInput > 100) {
        showErrorAlert('올바른 수량을 입력해 주세요(1개 이상, 100개 이하)');
        return;
    }
    quantityElement.value = quantityInput;
    const quantity = quantityElement.value;
    orderList = [];
    orderList.push({id, quantity, name});

    showConfirmAlert("해당 상품을 주문하시겠습니까?", "주문", "question")
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

function minusQuantity(btn) {
    let quantityInput = btn.parentNode.querySelector('.search-result-quantity-number')
    if (quantityInput.value > 1) {
        quantityInput.value--;
    } else {
        showErrorAlert('0개 이하의 수량은 담을 수 없습니다');
    }
}

function plusQuantity(btn) {
    let quantityInput = btn.parentNode.querySelector('.search-result-quantity-number')
    if (quantityInput.value < 100) {
        quantityInput.value++;
    } else {
        showErrorAlert('한 상품을 100개 이상 담을 수 없습니다');
    }
}

function showErrorAlert(message) {
    Swal.fire({
        icon: 'error',
        title: '알림',
        text: message
    });
}
