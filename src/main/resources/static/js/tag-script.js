function openCreateModal() {
    document.getElementById('modal').classList.add('show');
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-title').innerText = '태그 추가';
    document.getElementById('modalExecuteBtn').innerText = '추가';
    document.getElementById('modalForm').action = '/admin/tag/create';
}

function closeModal() {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('modal').style.display = 'none';
    // inputbox 및 action 초기화
}

function openUpdateModal(button) {
    document.getElementById('modal').classList.add('show');
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal-title').innerText = '태그 수정';
    document.getElementById('modalExecuteBtn').innerText = '수정';
    document.getElementById('modalForm').action = '/admin/tag/update';
    const selectedTagId = button.parentNode.parentNode.querySelector('#tagId').value;
    const selectedTagName = button.parentNode.parentNode.querySelector('#tagName').innerText;
    document.getElementById('tagInputId').value = selectedTagId;
    document.getElementById('tagInputName').value = selectedTagName;
}

function executeModal() {
    const tagName = document.getElementById('tagInputName').value.trim();

    if (tagName !== '' && tagName.length > 1 && tagName.length <= 10) {
        // 여기에 태그 추가하는 로직을 작성
        // 이미 존재하는 태그라면? Ajax 써야함
        // exist한 이름인지 확인
        document.forms['modalForm'].submit();
        console.log(document.forms['modalForm'].action)

        // 태그 다시 초기화
        closeModal();
    }
}

function deleteModal() {
    document.getElementById('tagInputName').disabled;
    document.getElementById('modalForm').action = '/admin/tag/delete';
    document.forms['modalForm'].submit();

    closeModal();
}