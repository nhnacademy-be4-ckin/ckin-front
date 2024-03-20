function clickAddCartBtn(btn) {
    let quantityInput = btn.parentNode.parentNode.querySelector('.search-result-quantity-number').value;
    let quantity = btn.parentNode.querySelector('.send-quantity');
    let form = btn.parentNode;
    if (quantityInput >= 1 && quantityInput <= 100) {
        form.action = "/cart/create"
        quantity.value = quantityInput;
        form.submit();
    } else {
        showErrorAlert('올바른 수량을 입력해 주세요(1개 이상, 100개 이하)');
    }
}

function clickCheckoutBtn(btn) {

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
