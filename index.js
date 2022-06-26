function $(sele) {
    return document.querySelector(sele)
}

function $$(sele) {
    return document.querySelectorAll(sele);
}

var container = $('.container');
var leftImg = $('.left-img');
var rightImg = $('.right-img');
var bottomImg = $('.bottom-img');
var itemList = $('.item-list');
var mask = $('.mask');

var img = {
    small: ['imgA_1.jpg', 'imgB_1.jpg', 'imgC_1.jpg'],
    meddle: ['imgA_2.jpg', 'imgB_2.jpg', 'imgC_2.jpg'],
    lager: ['imgA_3.jpg', 'imgB_3.jpg', 'imgC_3.jpg'],
}

for (var i = 0; i < img.small.length; i++) {
    var li = document.createElement('li');
    li.className = 'nav';
    li.style.backgroundImage = `url(./images/${img.small[i]})`;
    itemList.appendChild(li);
    if (i === 0) {
        li.className = 'active-nav';
        leftImg.style.backgroundImage = `url(./images/${img.meddle[i]})`;
    }
}

itemList.onclick = function (e) {
    if (e.target.tagName !== 'LI') {
        return;
    }

    var activeItem = $('.active-nav');
    var items = $$('.item-list > li');

    activeItem.className = 'nav';
    var li = e.target;
    li.className = 'active-nav';
    var index = [].indexOf.call(items, li);
    leftImg.style.backgroundImage = `url(./images/${img.meddle[index]})`;
    rightImg.style.backgroundImage = `url(./images/${img.lager[index]})`;

}

leftImg.onmousemove = function(e) {
    rightImg.style.opacity = 1;
    mask.style.opacity = 1;

    // 获取鼠标当前的位置
    var left = e.clientX - leftImg.offsetLeft - mask.offsetWidth / 2;
    var top = e.clientY - leftImg.offsetTop - mask.offsetHeight / 2;

    if (left <= 0) {
        left = 0;
    }
    if (top <= 0) {
        top = 0;
    }
    if (left >= leftImg.offsetWidth - mask.offsetWidth) {
        left = leftImg.offsetWidth - mask.offsetWidth;
    }
    if (top >= leftImg.offsetHeight - mask.offsetHeight) {
        top = leftImg.offsetHeight - mask.offsetHeight;
    }

    mask.style.left = left + "px";
    mask.style.top = top + "px";

    rightImg.style.backgroundPositionX = -left + "px";
    rightImg.style.backgroundPositionY = -top + "px";
}

leftImg.onmouseleave = function() {
    rightImg.style.opacity = 0;
    mask.style.opacity = 0;
}