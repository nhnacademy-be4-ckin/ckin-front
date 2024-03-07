document.addEventListener('DOMContentLoaded', function () {
    fetch('/categories/topCategories')
        .then(response => response.json())
        .then(categories => {
            const categoryContainer = document.getElementById('categoryContainer');
            categories.forEach(category => {
                const categoryCol = document.createElement('div');
                categoryCol.setAttribute('data-category-id', category.categoryId);
                categoryCol.className = 'col-md-4 mb-3';
                categoryCol.innerHTML =
                    `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${category.categoryName}</h5>
                <button class="btn btn-primary" onclick="editCategory(${category.categoryId})">수정</button>
                <button class="btn btn-info" onclick="showSubcategories(${category.categoryId}, this)">하위 카테고리 보기</button>
                <button class="btn btn-success" onclick="showCreateCategoryModal(${category.categoryId})">하위 카테고리 생성</button>
            </div>
        </div>`;


                categoryContainer.appendChild(categoryCol);
            });
        })
        .catch(error => console.error('Error:', error));
});

function showSubcategories(categoryId, buttonElement, depth = 1) {
    let subcategoryList = buttonElement.nextElementSibling;

    // 하위 카테고리 목록이 이미 생성되었는지 확인합니다.
    if (subcategoryList && subcategoryList.classList.contains('subcategory-list')) {
        // 하위 카테고리 목록의 표시 상태를 토글합니다.
        if (subcategoryList.style.display === 'none') {
            subcategoryList.style.display = 'block';
            buttonElement.textContent = '하위 카테고리 닫기';
        } else {
            subcategoryList.style.display = 'none';
            buttonElement.textContent = '하위 카테고리 보기';
        }
    } else if (!buttonElement.dataset.loaded) {
        // 하위 카테고리 데이터를 로드합니다.
        fetch(`/categories/subcategories/${categoryId}`)
            .then(response => response.json())
            .then(subcategories => {
                subcategoryList = document.createElement('div');
                subcategoryList.className = 'subcategory-list';
                buttonElement.parentNode.appendChild(subcategoryList);

                subcategories.forEach(subcategory => {
                    const subcategoryCard = document.createElement('div');
                    subcategoryCard.className = 'card';
                    subcategoryCard.innerHTML = `
        <div class="card-body">
            <h5 class="card-title d-inline-block mr-2">${subcategory.categoryName}</h5>
            <button class="btn btn-primary btn-sm" onclick="editCategory(${subcategory.categoryId})">수정</button>
        </div>`;
                    // 2단계 카테고리에 '하위 카테고리 생성' 버튼 추가
                    if (depth === 1) {
                        subcategoryCard.innerHTML += `
            <button class="btn btn-success" onclick="showCreateCategoryModal(${subcategory.categoryId})">하위 카테고리 생성</button>`;
                    }

                    if (depth < 2) {
                        subcategoryCard.innerHTML += `
            <button class="btn btn-info" onclick="showSubcategories(${subcategory.categoryId}, this, ${depth + 1})">하위 카테고리 보기</button>`;
                    }

                    subcategoryList.appendChild(subcategoryCard);
                });

                buttonElement.textContent = '하위 카테고리 닫기';
                buttonElement.dataset.loaded = 'true';
            })
            .catch(error => console.error('Error:', error));
    }
}

window.showSubcategories = showSubcategories;

function editCategory(categoryId) {

}

document.addEventListener('DOMContentLoaded', function () {
    const parentCategorySelect = document.getElementById('parentCategoryId');
    const subcategoryContainer = document.getElementById('subcategoryContainer');

    parentCategorySelect.addEventListener('change', function () {
        const selectedParentId = this.value;
        if (selectedParentId) {
            fetch(`/categories/subcategories/${selectedParentId}`)
                .then(response => response.json())
                .then(subcategories => {
                    // 이전에 생성된 하위 카테고리 드롭다운을 삭제합니다.
                    while (subcategoryContainer.firstChild) {
                        subcategoryContainer.removeChild(subcategoryContainer.firstChild);
                    }

                    if (subcategories.length > 0) {
                        const subcategorySelect = document.createElement('select');
                        subcategorySelect.className = 'form-control';
                        subcategorySelect.id = 'subcategorySelect';
                        subcategorySelect.innerHTML = `<option value="">하위 카테고리 선택</option>`;
                        subcategories.forEach(subcategory => {
                            subcategorySelect.innerHTML += `<option value="${subcategory.categoryId}">${subcategory.categoryName}</option>`;
                        });

                        subcategoryContainer.appendChild(subcategorySelect);
                    }
                })
                .catch(error => console.error('Error:', error));
        } else {
            // 하위 카테고리 선택 드롭다운을 삭제합니다.
            while (subcategoryContainer.firstChild) {
                subcategoryContainer.removeChild(subcategoryContainer.firstChild);
            }
        }
    });
});

// 모달 표시 함수
function showCreateCategoryModal(parentCategoryId) {
    document.getElementById('parentCategoryId').value = parentCategoryId;
    $('#categoryCreateModal').modal('show');
}

function createCategory() {
    const parentCategoryId = document.getElementById('parentCategoryId').value;
    const categoryName = document.getElementById('newCategoryName').value; // ID가 'newCategoryName'인 요소의 값을 가져옵니다.

    fetch('/categories/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            parentCategoryId: parentCategoryId ? Number(parentCategoryId) : null,
            categoryName: categoryName
        })
    })
        .then(response => {
            if (response.ok) {
                // 성공 알림 (예: 모달 닫기, 성공 메시지 표시)
                alert('카테고리가 성공적으로 생성되었습니다.');
                $('#categoryCreateModal').modal('hide'); // 모달 닫기 (Bootstrap 기준)

                // 카테고리 리스트 새로고침 또는 UI 업데이트
                refreshCategoryList(); // 이 함수는 카테고리 리스트를 새로고침하는 로직을 구현해야 함
            } else {
                // 오류 메시지 처리
                response.json().then(data => {
                    alert('오류: ' + data.message); // 서버에서 제공하는 오류 메시지 출력
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('카테고리 생성 중 오류가 발생했습니다.'); // 네트워크 오류 등의 문제 발생 시
        });
}

function refreshCategoryList() {
    const categoryContainer = document.getElementById('categoryContainer');
    fetch('/categories/topCategories')
        .then(response => response.json())
        .then(categories => {
            // 기존 목록 제거
            while (categoryContainer.firstChild) {
                categoryContainer.removeChild(categoryContainer.firstChild);
            }

            // 새로운 카테고리 목록 구성 및 추가
            categories.forEach(category => {
                const categoryCol = document.createElement('div');
                categoryCol.setAttribute('data-category-id', category.categoryId);
                categoryCol.className = 'col-md-4 mb-3';
                categoryCol.innerHTML =
                    `<div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${category.categoryName}</h5>
                            <button class="btn btn-primary" onclick="editCategory(${category.categoryId})">수정</button>
                            <button class="btn btn-info" onclick="showSubcategories(${category.categoryId}, this)">하위 카테고리 보기</button>
                            <button class="btn btn-success" onclick="showCreateCategoryModal(${category.categoryId})">하위 카테고리 생성</button>
                        </div>
                    </div>`;

                categoryContainer.appendChild(categoryCol);
            });
        })
        .catch(error => console.error('Error:', error));
}


// 모달의 '생성' 버튼에 이벤트 리스너 추가
document.getElementById('createCategoryButton').addEventListener('click', createCategory);

function showCreateTopCategoryModal() {
    // 최상위 카테고리 이름 입력 필드 초기화
    document.getElementById('topCategoryName').value = '';

    // 모달 창 표시
    $('#topCategoryCreateModal').modal('show');
}

function createTopCategory() {
    const categoryName = document.getElementById('topCategoryName').value; // 최상위 카테고리 이름을 입력 필드에서 가져옵니다.

    fetch('/categories/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            parentCategoryId: null, // 최상위 카테고리는 부모 카테고리가 없으므로 null
            categoryName: categoryName
        })
    })
        .then(response => {
            if (response.ok) {
                alert('최상위 카테고리가 성공적으로 생성되었습니다.');
                $('#topCategoryCreateModal').modal('hide'); // 모달 닫기

                refreshCategoryList(); // 카테고리 리스트 새로고침
            } else {
                // 오류 메시지 처리
                response.json().then(data => {
                    alert('오류: ' + data.message);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('최상위 카테고리 생성 중 오류가 발생했습니다.');
        });
}


function closeModal(modalId) {
    $('#' + modalId).modal('hide');
}

$(document).ready(function() {
    // x 버튼 클릭 시 모달 닫기
    $('.modal .close').click(function() {
        closeModal($(this).closest('.modal').attr('id'));
    });
});

