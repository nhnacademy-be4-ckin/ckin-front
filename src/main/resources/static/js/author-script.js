// ID로 요소를 가져오는 유틸리티 함수
const getElement = (id) => document.getElementById(id);

// 요소의 값을 설정하는 유틸리티 함수
const setElementValue = (id, value) => {
    const element = getElement(id);
    if (element) element.value = value;
};

// 폼 액션을 설정하는 유틸리티 함수
const setFormAction = (formId, actionPath) => {
    const form = getElement(formId);
    if (form) form.action = actionPath;
};

// 부모 카테고리에 따라 서브카테고리를 로드하는 함수
function loadSubcategories(parentId, level) {
    const container = getElement('subcategoryContainer');
    // 여기에 서브카테고리를 로드하는 추가 로직을 넣을 수 있습니다
}

// 선택된 카테고리 ID 업데이트
function updateSelectedCategoryId(selectedId) {
    setElementValue('selectedCategoryId', selectedId);
}

// DOMContentLoaded 이벤트 리스너
document.addEventListener('DOMContentLoaded', () => {
    const parentCategorySelect = getElement('parentCategoryId');
    parentCategorySelect?.addEventListener('change', () => {
        updateSelectedCategoryId(parentCategorySelect.value);
        loadSubcategories(parentCategorySelect.value, 1);
    });
});

// 편집 모달 준비
function prepareEditModal(button) {
    const authorId = button.getAttribute('data-author-id');
    const authorName = button.getAttribute('data-author-name');

    setFormAction('authorEditForm', `/admin/authors/${authorId}`);
    setElementValue('editAuthorName', authorName);
}

// 삭제 모달 준비
function prepareDeleteModal(button) {
    const authorId = button.getAttribute('data-author-id');
    setFormAction('authorDeleteForm', `/admin/authors/${authorId}`);
}

