document.addEventListener(`DOMContentLoaded`, function () {
    var currentURL = new URL(window.location.href);
    const filterList = currentURL.searchParams.getAll('filter');

    const checkboxes = document.querySelectorAll('input[name=filter]');
    checkboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function (event) {
            selectFilter(checkbox);
        })
        if (filterList !== null && filterList.indexOf(checkbox.value) !== -1) {
            checkbox.checked = true;
        }
    })


    $.ajax({
        type: 'get',
        url: '/categories/topCategories',
        async: true,
        headers: {
            "Content-Type": "application/json",
            "X-HTTP-Method-Override": "GET"
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            let addElement = '';
            data.forEach((item) => {
                console.log(item);
                console.log(item.categoryName);
                addElement += '<li class="search-filter-items-wrap" value="' + item.categoryId + '" data-clicked="false" data-step="1">';
                addElement += '<input name="category" type="checkbox" value="' + item.categoryName + '" id="' + item.categoryId + '" onclick="selectCategory(this)">';
                addElement += '<label value="' + item.categoryId + '" onclick="getSubCategories(this.parentNode)">';
                addElement += item.categoryName;
                addElement += '</label>';
                addElement += '</li>';
                console.log(addElement);
            })
            const a = document.querySelector('.filter-category-main');
            a.insertAdjacentHTML('afterend', addElement);
        }
    }).then(function () {
        updateCategoryInputStat();
    });
})

function updateCategoryInputStat() {
    var currentURL = new URL(window.location.href);
    const categoryList = currentURL.searchParams.getAll('category');

    const categoryFilters = document.querySelectorAll('input[name=category]');
    categoryFilters.forEach((checkbox) => {
        if (categoryList !== null && categoryList.indexOf(checkbox.value) !== -1) {
            checkbox.checked = true;
        }
    })
}

function getSubCategories(label) {
    console.log("click")
    console.log(label.getAttribute("data-clicked"));
    const currentStep = parseInt(label.getAttribute("data-step")) + 1;
    const currentMargin = currentStep * 20;
    console.log(currentStep + ", " + currentMargin);
    if (label.getAttribute("data-clicked") === "false") {
        label.setAttribute("data-clicked", "true");
        $.ajax({
            type: 'get',
            url: '/categories/' + label.value,
            async: true,
            headers: {
                "Content-Type": "application/json",
                "X-HTTP-Method-Override": "GET"
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                let addElement = '';
                data.forEach((item) => {
                    console.log(item);
                    console.log(item.categoryName);
                    addElement += '<li class="search-filter-items-wrap" value="' + item.categoryId + '" data-clicked="false" data-step="' + currentStep + '" style="margin-left: ' + currentMargin + 'px !important;">';
                    addElement += '<input name="category" type="checkbox" value="' + item.categoryName + '" id="' + item.categoryId + '" onclick="selectCategory(this)">';
                    addElement += '<label value="' + item.categoryId + '" onclick="getSubCategories(this.parentNode)">';
                    addElement += item.categoryName;
                    addElement += '</label>';
                    addElement += '</li>';
                    console.log(addElement);
                })
                label.insertAdjacentHTML('afterend', addElement);
            }
        }).then(function () {
            updateCategoryInputStat();
        });
    }
}

function getNavAndRedirect(move) {
    var currentURL = new URL(window.location.href);
    const currentPage = currentURL.searchParams.get('page');
    let page;
    if (currentPage !== null) {
        page = parseInt(currentPage) + parseInt(move);
    } else {
        page = 1 + parseInt(move);
    }
    movePage(page.toString());
}

function getPageAndRedirect(a) {
    movePage(a.text);
}

function movePage(page) {
    var currentURL = new URL(window.location.href);
    currentURL.searchParams.set('page', page);
    window.location.href = currentURL.toString();
}

function selectCategory(input) {
    var url = new URL(window.location.href);
    if (input.checked) {
        const filterStr = url.searchParams.get('category');
        if (filterStr !== null) {
            url.searchParams.append('category', input.value);
        } else {
            url.searchParams.set('category', input.value);
        }
    } else {
        url.searchParams.delete('category', input.value);
    }
    window.location.href = url.toString();
}

function selectFilter(input) {
    var url = new URL(window.location.href);
    if (input.checked) {
        const filterStr = url.searchParams.get('filter');
        if (filterStr !== null) {
            url.searchParams.append('filter', input.value);
        } else {
            url.searchParams.set('filter', input.value);
        }
    } else {
        url.searchParams.delete('filter', input.value);
    }
    window.location.href = url.toString();
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
    if (id == null || quantityInput == null || quantityInput < 1 || quantityInput > 100) {
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


// 상품 상세에서 장바구니로 담는 함수
function saveItemToCartFromProductDetail(btn) {

    let quantityInput = document.getElementById('productQuantity').value;
    let quantity = document.getElementById('quantity');
    let form = btn.parentNode;
    if (quantityInput >= 1 && quantityInput <= 100) {
        quantity.value = quantityInput;
        form.submit();
    } else {
        showErrorAlert('올바른 수량을 입력해 주세요(1개 이상, 100개 이하)');
    }
}


function orderFromProductDetail(btn) {

    const form = btn.parentNode;
    const id = form.querySelector('input[name=id]').value;
    const name = form.querySelector('input[name=name]').value;
    const quantityElement = form.querySelector('input[name=quantity]');

    const quantityInput = document.getElementById('productQuantity').value;

    if (id == null || quantityInput == null || quantityInput < 1 || quantityInput > 100) {
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