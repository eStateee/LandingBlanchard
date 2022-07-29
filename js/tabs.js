document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(`[data-target="one"]`).classList.add('detail-view-active')
    const BottomContent = document.querySelectorAll(".bottom-content__li-anim")
    count = 1
    BottomContent.forEach(function(ul_elem) {
        ul_elem.addEventListener('click', function(event) {

            count += 1
            if (count % 2 == 0) {

                BottomContent.forEach(function(tabContent) {
                    tabContent.classList.remove('bottom-content__li-active')
                })
                ul_elem.classList.add('bottom-content__li-active')
                count = 1
            } else {
                ul_elem.classList.remove('bottom-content__li-active')
            }
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.detail-view').forEach(function(tabContent) {

                tabContent.classList.remove('detail-view-active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('detail-view-active')
        })
    })

})