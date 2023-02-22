window.onload=function() {
    var target = document.querySelectorAll('.de_img')
    var targetID;
    // 팝업 열기
    for(var i = 0; i < target.length; i++){
        target[i].addEventListener('click', function(){
            targetID = this.getAttribute('href');
            document.querySelector(targetID).style.display = 'block';
        });
    }
    // 팝업 닫기
    $('.project_d_popup_wrap').on('click', function(){
        $('.project_d_popup_wrap').hide();
    })
}