const idInput = document.getElementById("gradeId");
const nameInput = document.getElementById("name");
const ratioInput = document.getElementById("ratio");
const conditionInput = document.getElementById("condition");
const btnModalForm = document.getElementById("btn-modal-form");
const modalForm = document.getElementById("modal-form");

const resetInput = () => {
    idInput.value = "";
    nameInput.value = "";
    ratioInput.value = "";
    conditionInput.value = "";
    btnModalForm.innerText = "추가";
    modalForm.setAttribute("action", "/admin/policy/grade/add");
}

const convertForm = id => {
    const gradeId = document.getElementById(id + "-id");
    const name = document.getElementById(id + "-name");
    const ratio = document.getElementById(id + "-pointRatio");
    const condition = document.getElementById(id + "-condition");

    idInput.value = gradeId.textContent;
    nameInput.value = name.textContent;
    ratioInput.value = parseInt(ratio.textContent.replace("%", ""));
    conditionInput.value = condition.textContent;
    btnModalForm.innerText = "수정";
    modalForm.setAttribute("action", "/admin/policy/grade/update");
}