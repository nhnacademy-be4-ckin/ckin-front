function activateAnbWrap(btn) {

    var btnId = btn.value;
    if(btnId == "none") {
        document.getElementById("category").style = "background-image: url(/images/icons/free-icon-cancel-3482248.png)";
        // anb_wrap에 'active'와 'animated' 클래스 추가
        $('.anb_wrap').addClass('active animated');

        // tabAnbCategory에 'ui-tabs-active'와 'ui-state-active' 클래스 추가
        $('#tabAnbCategory').addClass('ui-tabs-active ui-state-active');

        // '카테고리 전체보기' 탭 활성화, '서비스 전체보기' 탭 비활성화
        $('#ui-id-6').attr({
            'aria-selected': 'true',
            'tabindex': '0'
        });
        $('#ui-id-7').attr({
            'aria-selected': 'false',
            'tabindex': '-1'
        });

        var $ul = $('.tabs');

        // ::before를 추가
        $ul.prepend('<span class="before-element"></span>');
        document.getElementById("mainDiv").style.minHeight = "70vh";

        // ::after를 추가
        $ul.append('<span class="after-element"></span>');

        tabAndCategorySub01();
        let category = document.getElementById("category");
        // value 속성 변경
        category.value = "active";
        $('#category').addClass('active');

    } else {
        deactivateAnbWrap(btn);
    }

}

function deactivateAnbWrap(btn) {
    document.getElementById("category").style = "background-image: url(../images/main-category.png)";
    // 전체 메뉴가 감춰지도록 하는 로직 추가
    $('.anb_wrap').removeClass('active animated');
    document.getElementById("mainDiv").style.minHeight = "0vh";
    let category = document.getElementById("category");
    // value 속성 변경
    category.value = "none";
    $('#category').css("backgroud-image", "url(/images/icons/free-icon-x-657059.png)");


}

function tabAndCategorySub01() {
    $.ajax({
        type: "GET",
        url: '/categories/1', // Replace with your actual API endpoint
        dataType: 'json',
        success: function (data) {
            // Handle the success response

            if (data) {
                let html = "";

                data.forEach(function (category) {
                    console.log(category.categoryName);
                    html += `<li class="fold_box"><div class="fold_box_header" onmouseover="category(` + category.categoryId + `)" id="category` +
                        category.categoryId + `"><a href="/product/` +
                        category.categoryId + `?categoryName=`+ category.categoryName + `">`
                        + category.categoryName + `</a></div></li>`
                });

                $("#categoryList").empty();
                $("#categoryList").append(html);
            } else {
                console.error("No category found");
            }
        },
        error: function (error) {
            // Handle the error response
            console.error("Error fetching member list:", error);
        }
    });
    var tabSub01 = document.getElementById('tabSub02');
    if (tabSub01) {
        tabSub01.classList.remove('ui-state-active');
    }
    // 기존 배너 aria-hidden: true, style=display:none
    var tabAnbCategorySub01 = document.getElementById("tabAnbCategorySub02");
    tabAnbCategorySub01.setAttribute("aria-hidden", "true");
    tabAnbCategorySub01.style.display = "none";

    // simplebar-content-wrapper height:auto
    var simplebarContentWrapper = document.getElementById('simplebarContentWrapper2');
    simplebarContentWrapper.style.height = 'auto';

    // custom-scroll-inner height: 0
    var customScrollInner = document.getElementById('customScrollInner2');
    customScrollInner.style.height = '0';

    // simplebar-placeholder height: 0
    var simplebarPlaceholder = document.getElementById('simplebarPlaceholder2');
    simplebarPlaceholder.style.height = '0';

    // 02 ui-state-active 추가
    var tabSub02 = document.getElementById('tabSub01');
    if (tabSub02) {
        tabSub02.classList.add('ui-state-active');
    }

    var tabAnbCategorySub02 = document.getElementById("tabAnbCategorySub01");
    tabAnbCategorySub02.setAttribute("aria-hidden", "false");
    tabAnbCategorySub02.style.removeProperty("display");

    // simplebar-content-wrapper height:auto
    var simplebarContentWrapper2 = document.getElementById('simplebarContentWrapper');
    simplebarContentWrapper2.style.height = '100%';

    // custom-scroll-inner height: 0
    var customScrollInner2 = document.getElementById('customScrollInner');
    customScrollInner2.style.height = '370px';

    // simplebar-placeholder height: 0
    var simplebarPlaceholder2 = document.getElementById('simplebarPlaceholder');
    simplebarPlaceholder2.style.height = '370px';

}

function tabAndCategorySub02() {
    $.ajax({
        type: "GET",
        url: '/categories/2', // Replace with your actual API endpoint
        dataType: 'json',
        success: function (data) {
            // Handle the success response

            if (data) {
                let html = "";

                data.forEach(function (category) {
                    console.log(category.categoryName);
                    html += `<li class="fold_box"><div class="fold_box_header" onmouseover="category2(` + category.categoryId + `)" id="category` +
                        category.categoryId + `"><a href="/product/` +
                        category.categoryId + `?categoryName=`+ category.categoryName + `">`
                        + category.categoryName + `</a></div></li>`
                });

                $("#categoryList2").empty();
                $("#categoryList2").append(html);
            } else {
                console.error("No category found");
            }
        },
        error: function (error) {
            // Handle the error response
            console.error("Error fetching member list:", error);
        }
    });
    var tabSub01 = document.getElementById('tabSub01');
    if (tabSub01) {
        tabSub01.classList.remove('ui-state-active');
    }
    // 기존 배너 aria-hidden: true, style=display:none
    var tabAnbCategorySub01 = document.getElementById("tabAnbCategorySub01");
    tabAnbCategorySub01.setAttribute("aria-hidden", "true");
    tabAnbCategorySub01.style.display = "none";

    // simplebar-content-wrapper height:auto
    var simplebarContentWrapper = document.getElementById('simplebarContentWrapper');
    simplebarContentWrapper.style.height = 'auto';

    // custom-scroll-inner height: 0
    var customScrollInner = document.getElementById('customScrollInner');
    customScrollInner.style.height = '0';

    // simplebar-placeholder height: 0
    var simplebarPlaceholder = document.getElementById('simplebarPlaceholder');
    simplebarPlaceholder.style.height = '0';

    // 02 ui-state-active 추가
    var tabSub02 = document.getElementById('tabSub02');
    if (tabSub02) {
        tabSub02.classList.add('ui-state-active');
    }

    var tabAnbCategorySub02 = document.getElementById("tabAnbCategorySub02");
    tabAnbCategorySub02.setAttribute("aria-hidden", "false");
    tabAnbCategorySub02.style.removeProperty("display");

    // simplebar-content-wrapper height:auto
    var simplebarContentWrapper2 = document.getElementById('simplebarContentWrapper2');
    simplebarContentWrapper2.style.height = '100%';

    // custom-scroll-inner height: 0
    var customScrollInner2 = document.getElementById('customScrollInner2');
    customScrollInner2.style.height = '370px';

    // simplebar-placeholder height: 0
    var simplebarPlaceholder2 = document.getElementById('simplebarPlaceholder2');
    simplebarPlaceholder2.style.height = '370px';
}

function category(categoryId) {

    $.ajax({
        type: "GET",
        url: '/categories/' + categoryId, // Replace with your actual API endpoint
        dataType: 'json',
        success: function (data) {
            // Handle the success response

            if (data) {
                let html = "";

                data.forEach(function (category) {
                    console.log(category.categoryName);
                    html += `<li class="fold_box"><div class="fold_box_header"><a href="/product/` +
                        category.categoryId + `?categoryName=`+ category.categoryName + `">`
                        + category.categoryName + `</a></div></li>`
                });

                $("#subCategoryList").empty();
                $("#subCategoryList").append(html);
            } else {
                console.error("No category found");
            }
        },
        error: function (error) {
            // Handle the error response
            console.error("Error fetching member list:", error);
        }
    });
}

function category2(categoryId) {

    $.ajax({
        type: "GET",
        url: '/categories/' + categoryId, // Replace with your actual API endpoint
        dataType: 'json',
        success: function (data) {
            // Handle the success response

            if (data) {
                let html = "";

                data.forEach(function (category) {
                    console.log(category.categoryName);
                    html += `<li class="fold_box"><div class="fold_box_header"><a href="/product/` +
                        category.categoryId + `?categoryName=`+ category.categoryName + `">`
                        + category.categoryName + `</a></div></li>`
                });

                $("#subCategoryList2").empty();
                $("#subCategoryList2").append(html);
            } else {
                console.error("No category found");
            }
        },
        error: function (error) {
            // Handle the error response
            console.error("Error fetching member list:", error);
        }
    });
}

document.getElementById("mainDiv")

function birthCouponList(btn) {
    let couponBtn = document.getElementById("navbarDropdownMenuLink");

    if(btn.value == "none") {
        document.getElementById("mainDiv").style.minHeight = "0vh";
        couponBtn.value = "active";
    } else {
        document.getElementById("mainDiv").style.minHeight = "20vh";
        couponBtn.value = "none";
    }
}