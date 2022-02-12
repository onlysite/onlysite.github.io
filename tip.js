// 弹窗 第一次使用时弹出
$(document).ready(function() {
    const notice_v = "notice_6"
    Cookies.remove('notice_5')
    let first_use = Cookies.get("firstuse") || true
    let notice = Cookies.get(notice_v) || true
    if (first_use == true) {
        $.fancybox.open({
            type: 'html',
            src: `<div class="fc-content">
                <div  class="fc-title">欢迎来到太逸书签</div>
                <div class="fc-container">
                    <p>
                    为了不让您错过一些好用的功能<br>
                    使用之前<b>强烈建议</b>阅读使用指南<br>
                    如果<b>点击关闭</b>可能会<b>一直</b>弹出窗口<br>
                   </p>
                    <button data-value="1" data-fancybox-close class="fancybox_button button_firstuse_close">关闭</button><p>
                </div>
                <p>
            </div>`,
            opts: {
                animationDuration: 350,
                animationEffect: 'material',
                modal: true,
                baseTpl: '<div class="fancybox-container fc-container" role="dialog" tabindex="-1">' +
                    '<div class="fancybox-bg"></div>' +
                    '<div class="fancybox-inner">' +
                    '<div class="fancybox-stage"></div>' +
                    '</div>' +
                    '</div>',
            }
        })
        Cookies.set(notice_v, false, {
            expires: 10000,
            path: '/'
        })
    }

    $('.button_firstuse').on('click', function() {
        $('.button_firstuse_close').trigger('click')
        Cookies.set('firstuse', false, {
            expires: 10000,
            path: '/'
        })
    })

    $('.button_notice').on('click', function() {
        $('.botton_notice_close').trigger('click')
    })
})
