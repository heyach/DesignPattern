// 多种轮播图
function Swiper(imgs, container) {
    this.imgs = imgs
    this.container = container
    this.currentIndex = 0
}
Swiper.prototype = {
    init: function() {
        this.imgs.forEach(item => {
            var img = document.createElement("img")
            img.src = item
            this.container.appendChild(img)
        })
    },
    next: function() {
        // 显示下一张图
        this.currentIndex++
        // show/hide img by index
    },
    prev: function() {
        // 显示上一张图
        this.currentIndex--
        // show/hide img by index
    }
}
// 切换图片的方式为淡入淡出
function FadeSwiper(imgs, container) {
    Swiper.call(this, imgs, container)
}
FadeSwiper.prototype = new Swiper()
FadeSwiper.prototype.next = function() {
    this.currentIndex++
    // fade/fadeout img by index
}
FadeSwiper.prototype.prev = function() {
    this.currentIndex--
    // fade/fadeout img by index
}
// 切换图片的方式为划入
function SlideSwiper(imgs, container) {
    Swiper.call(this, imgs, container)
}
SlideSwiper.prototype = new Swiper()
SlideSwiper.prototype.next = function() {
    this.currentIndex++
    // slide/slideout img by index
}
SlideSwiper.prototype.prev = function() {
    this.currentIndex--
    // slide/slideout img by index
}
