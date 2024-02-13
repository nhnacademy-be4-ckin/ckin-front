document.addEventListener("DOMContentLoaded", function () {
    loadTags();
});

function loadTags() {
    fetch('http://localhost:8080/tags')
        .then(response => response.json())
        .then(data => {
            const tagList = document.getElementById('tagList');
            tagList.innerHTML = '';
            data.forEach(tag => {
                const li = document.createElement('li');
                li.classList.add('tag', 'bg-white', 'p-4', 'rounded-md', 'shadow-md', 'flex', 'justify-between', 'items-center');
                li.innerHTML = `
                    <span>${tag}</span>
                    <button onclick="deleteTag(this)" class="text-red-600">&times;</button>
                `;
                tagList.appendChild(li);
            });
        });
}

function openModal() {
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function addTag() {
    const tagInput = document.getElementById('tagInput');
    const tagName = tagInput.value.trim();

    if (tagName !== '') {
        fetch('http://localhost:8080/tags', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tagName: tagName
            })
        })
            .then(response => {
                if (response.ok) {
                    loadTags(); // 태그 추가 후 목록 다시 로드
                    closeModal(); // 모달 닫기
                } else {
                    throw new Error('태그 추가 실패');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

function deleteTag(button) {
    const li = button.parentNode;
    const tagName = li.querySelector('span').textContent;

    fetch('http://localhost:8080/tags/' + encodeURIComponent(tagName), {
        method: 'DELETE'
    })
        .then(response => {
            if (response.ok) {
                loadTags(); // 태그 삭제 후 목록 다시 로드
            } else {
                throw new Error('태그 삭제 실패');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
