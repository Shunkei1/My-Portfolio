$(function(){
    $('#second-nav').hide();
    $('#click-menu').click(function(){
        if($(this).hasClass('open')){
            $(this).text('Menu').fadeIn(500).addClass('close').removeClass('open');
            $('#second-nav').slideUp(500);
            setTimeout(function(){
                $('#header-title').fadeIn(0);
            },1000);
            $('#click-menu').show();
        }else if($(this).hasClass('close')){
            $(this).addClass('open').removeClass('close').text('Close');
            $('#header-title').hide();
            $('#second-nav').slideDown(500);
            $('header').show();
        }
    });


    $('.second-header-link-item').click(function(){
        $('#click-menu').text('Menu').addClass('close').removeClass('open');
        $('#second-nav').hide();
        $('#header-title').fadeIn(0);
    });

    $('#second-nav').offset({
        top:0,
        left:0
    });

    $('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
        let elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
        let wW = $(window).width;
        var pos = $(elmHash).offset().top-70;
        $('body,html').animate({scrollTop: pos}, 200); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
        return false;
    });
});
