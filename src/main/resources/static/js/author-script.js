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

