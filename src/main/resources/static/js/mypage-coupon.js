

let totalElement = document.getElementById("totalElement").innerText;
console.log(totalElement);
if(parseInt(totalElement) > 0) {
    console.log("true");
    $('#couponContent').removeClass('hidden');
    $('#couponNoData').addClass('hidden');
} else {
    console.log("false");
    $('#couponContent').addClass('hidden');
    $('#couponNoData').removeClass('hidden');
}