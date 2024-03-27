
let review_image_count = 0;

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
            review_image_count ++;

            if (review_image_count < 3) {
                var newListItem = document.createElement('li');
                newListItem.setAttribute('class', 'list_item');

                // li 요소 안에 들어갈 내용을 설정합니다.
                newListItem.innerHTML = `
                    <span class="file_item">
                        <span class="btn_box">
                            <input id="${newFileInputId}" name="imageList" type="file" accept="image/*">
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
    review_image_count --;
    listItem.remove();
}

// 로그인 여부 확인 후 리뷰 작성란 활성화
let bookId = document.getElementById("bookId").getAttribute("value");
console.log("bookId : {}", bookId);
$.ajax({
    type: "GET",
    url: '/review/use/' + bookId,
    dataType: 'text',
    success: function (data) {
        console.log(data);
        if (data === "true") {
            let html = `<button type="button" class="btn btn_primary" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" id="review_button" onclick="review_check()">
                                <span class="ico_review"></span>
                                <span class="text">리뷰 작성</span>
                            </button>`;
            $("#reviewButton").append(html);
        }
    },
    error: function (request, status, error) {
        console.log("code: " + request.status)
        console.log("message: " + request.responseText)
        console.log("error: " + error);
    }
})


//리뷰 사진 펼치기
function toggleButton(button) {
    // 버튼 클래스에 active 추가 및 제거
    button.classList.toggle("active");

    // span의 텍스트 값 변경
    var commentContentsInner = document.getElementById(button.value);
    var smallImageBox = document.getElementById('thumb' + button.value);
    var spanText = button.querySelector('.text');
    if (spanText.innerText === "펼치기") {
        spanText.innerText = "접기";
        commentContentsInner.style.maxHeight = 'none';
        smallImageBox.style.display = 'none';
    } else {
        spanText.innerText = "펼치기";
        commentContentsInner.style.maxHeight = '66px';
        smallImageBox.style.display = 'block';
    }
}

// 이미지 URL을 새 창에서 열기
function openImage(element) {
    var backgroundImage = element.style.backgroundImage;
    var imageUrl = backgroundImage.replace('url("', '').replace('")', ''); // 배경 이미지 URL 추출
    window.open(imageUrl, '_blank');
}

//도서 상세 페이지 적립 혜택 세부정보
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("pointInfo");
    const tooltipContent = document.querySelector(".tooltip_contents");

    button.addEventListener("click", function () {

        // 버튼의 텍스트도 변경
        const buttonText = button.querySelector("span.hidden");
        if (buttonText.textContent === "툴팁열기") {
            buttonText.textContent = "툴팁닫기";
            // 버튼 클릭 시 툴팁의 활성/비활성 상태를 변경
            $("#pointInfoDiv").addClass('active');
        } else {
            buttonText.textContent = "툴팁열기";
            $("#pointInfoDiv").removeClass('active');
        }
    });
});
//도서 상세 페이지 배송비 세부 정보
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("shipInfo");
    const tooltipContent = document.querySelector(".tooltip_contents");

    button.addEventListener("click", function () {
        const buttonText = button.querySelector("span.hidden");
        if (buttonText.textContent === "툴팁열기") {
            buttonText.textContent = "툴팁닫기";
            // 버튼 클릭 시 툴팁의 활성/비활성 상태를 변경
            $("#shipInfoDiv").addClass('active');
        } else {
            buttonText.textContent = "툴팁열기";
            $("#shipInfoDiv").removeClass('active');
        }
    });
});

//리뷰 점수 Validation
document.getElementById("review_rate").addEventListener("input", function () {
    let review_rate =  parseInt(this.value);
    let invalid_view = document.getElementById("invalid_view");
    let invalid_view_gt = document.getElementById("invalid_view_gt");

    console.log(review_rate);

    if (review_rate <= 0 || isNaN(review_rate)) {
        invalid_view_gt.style.display = "none";
        invalid_view.style.display = "block";
    } else if (review_rate > 5) {
        invalid_view_gt.style.display = "block";
        invalid_view.style.display = "none";
    } else {

    }
});

