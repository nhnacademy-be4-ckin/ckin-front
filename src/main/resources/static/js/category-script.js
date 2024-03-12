let categoryCreateModal, topCategoryCreateModal, editCategoryModal;

document.addEventListener('DOMContentLoaded', function () {
    categoryCreateModal = new bootstrap.Modal(document.getElementById('categoryCreateModal'));
    topCategoryCreateModal = new bootstrap.Modal(document.getElementById('topCategoryCreateModal'));
    editCategoryModal = new bootstrap.Modal(document.getElementById('editCategoryModal'));


    fetch('/categories/topCategories')
        .then(response => response.json())
        .then(categories => {
            const categoryContainer = document.getElementById('categoryContainer');
            categories.forEach(category => {
                const categoryCol = document.createElement('div');
                categoryCol.setAttribute('data-category-id', category.categoryId);
                categoryCol.className = 'col-md-4';
                categoryCol.innerHTML = `
            <div class="category-card card">
                <div class="card-body">
                    <h5 class="card-title">${category.categoryName}</h5>
                    <button class="btn btn-primary category-button" onclick="openEditCategoryModal(${category.categoryId}, '${category.categoryName}')">수정</button>
                    <button class="btn btn-info category-button" onclick="showSubcategories(${category.categoryId}, this)">하위 카테고리 보기</button>
                    <button class="btn btn-success category-button" onclick="showCreateCategoryModal(${category.categoryId})">하위 카테고리 생성</button>
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
        fetch(`/categories/${categoryId}`)
            .then(response => response.json())
            .then(subcategories => {
                subcategoryList = document.createElement('div');
                subcategoryList.className = 'subcategory-list';
                buttonElement.parentNode.appendChild(subcategoryList);

                subcategories.forEach(subcategory => {
                    const subcategoryCard = document.createElement('div');
                    subcategoryCard.className = 'subcategory-card card';
                    subcategoryCard.innerHTML = `
           <div class="card-body">
                <h5 class="card-title d-inline-block mr-2">${subcategory.categoryName}</h5>
                <button class="btn btn-primary" onclick="openEditCategoryModal(${subcategory.categoryId}, '${subcategory.categoryName}')">수정</button>
                <!-- 추가 버튼 -->
            </div>`;

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


document.addEventListener('DOMContentLoaded', function () {
    const parentCategorySelect = document.getElementById('parentCategoryId');
    const subcategoryContainer = document.getElementById('subcategoryContainer');

    parentCategorySelect.addEventListener('change', function () {
        const selectedParentId = this.value;
        if (selectedParentId) {
            fetch(`/categories/${selectedParentId}`)
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
    categoryCreateModal.show();  // jQuery 대신 Bootstrap 5 API 사용
}

function createCategory() {
    const parentCategoryId = document.getElementById('parentCategoryId').value;
    const categoryName = document.getElementById('newCategoryName').value; // ID가 'newCategoryName'인 요소의 값을 가져옵니다.

    fetch('/categories/admin', {
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
    fetch('/admin/categories')
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


function showCreateTopCategoryModal() {
    document.getElementById('topCategoryName').value = '';
    topCategoryCreateModal.show();  // jQuery 대신 Bootstrap 5 API 사용
}

function createTopCategory() {
    const categoryName = document.getElementById('topCategoryName').value; // 최상위 카테고리 이름을 입력 필드에서 가져옵니다.

    fetch('/categories/admin', {
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


// closeModal 함수를 수정합니다.
function closeModal(modalId) {
    document.getElementById(modalId);
    let modalInstance;

    switch(modalId) {
        case 'categoryCreateModal':
            modalInstance = categoryCreateModal;
            break;
        case 'topCategoryCreateModal':
            modalInstance = topCategoryCreateModal;
            break;
        case 'editCategoryModal':
            modalInstance = editCategoryModal;
            break;
        default:
            console.error("Invalid modal ID");
            return;
    }

    if (modalInstance) {
        modalInstance.hide();
    } else {
        console.error("Modal instance not found for:", modalId);
    }
}



// 수정 모달을 열고 카테고리 ID를 설정하는 함수
function openEditCategoryModal(categoryId, categoryName) {
    document.getElementById('editCategoryId').value = categoryId;
    document.getElementById('editCategoryName').value = categoryName;
    editCategoryModal.show();  // jQuery 대신 Bootstrap 5 API 사용
}


function editCategory() {
    // 수정할 카테고리의 ID와 새로운 카테고리 이름을 가져와서 요청 본문에 포함합니다.
    const categoryId = document.getElementById('editCategoryId').value;
    const categoryName = document.getElementById('editCategoryName').value;
    const requestBody = {
        categoryId: categoryId,
        categoryName: categoryName
    };

    // 수정할 카테고리의 ID를 이용하여 수정 요청을 보냅니다.
    fetch(`/categories/admin/${categoryId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => {
            if (response.ok) {
                alert('카테고리가 성공적으로 수정되었습니다.');
                $('#editCategoryModal').modal('hide'); // 모달 닫기

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
            alert('카테고리 수정 중 오류가 발생했습니다.');
        });
}





