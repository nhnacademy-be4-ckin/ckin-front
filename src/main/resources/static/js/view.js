//리뷰 등록시 이미지 미리보기
function handleFiles(fileInputId, imgViewId) {
    const fileInput = document.getElementById(fileInputId);
    const imgViewElement = document.getElementById(imgViewId);

    fileInput.addEventListener("change", function () {
        const selectedFile = [...fileInput.files];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(selectedFile[0]);

        fileReader.onload = function () {
            $('.file_item').addClass('attached');
            imgViewElement.style = "background-image: url(" + fileReader.result + ")";

            // 새로운 파일 입력 요소의 id 생성
            var newFileInputId = "image" + (parseInt(fileInputId.replace("image", "")) + 1);
            var newImgViewId = "attach" + (parseInt(imgViewId.replace("attach", "")) + 1);

            if (newFileInputId.replace("image", "") != '4') {
                var newListItem = document.createElement('li');
                newListItem.setAttribute('class', 'list_item');

                // li 요소 안에 들어갈 내용을 설정합니다.
                newListItem.innerHTML = `
                    <span class="file_item">
                        <span class="btn_box">
                            <input id="${newFileInputId}" type="file" accept="image/*">
                            <label for="${newFileInputId}">
                                <span class="hidden">첨부파일 추가</span>
                            </label>
                            <span class="attach_img_box">
                                <span class="attach_img_view" id="${newImgViewId}"></span>
                                <button class="btn_remove_img" type="button" onclick="removeFileListItem(this)">
                                    <span class="hidden">첨부파일 삭제</span>
                                </button>
                            </span>
                        </span>
                    </span>
                `;

                document.getElementById('fileList').appendChild(newListItem);

                // 다음 파일 입력 요소에 대한 이벤트 핸들러 등록
                handleFiles(newFileInputId, newImgViewId);
            }
        };

    });


}

// 초기 파일 입력 요소에 대한 이벤트 핸들러 등록
handleFiles("image1", "attach1");

function removeFileListItem(buttonElement) {
    // 버튼의 부모 요소인 li 요소를 찾아서 삭제합니다.
    var listItem = buttonElement.closest('.list_item');
    listItem.remove();
}
