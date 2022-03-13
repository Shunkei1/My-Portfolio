$(function(){

    setTimeout(function(){
        $('#home-name').css('transform','translateY(0)');
    },2500);

    setTimeout(function(){
        $('#about-title').removeClass('endAnime');
    },2351);

    function headerClose(){
        if($('#mobile-header').hasClass('hide')){
            $('#mobile-header').slideDown(500).toggleClass('show').toggleClass('hide');
        }else{
            $('#mobile-header').slideUp(500).toggleClass('show').toggleClass('hide');
        };
    };

    /* particle */
    $(window).on('load',function() {
        $("#particle").particleText({
            text: "Shunkei<br>Web engineer", // 表示させたいテキスト。改行の場合は<br>追加
            colors:["#49beaa","#456990","#ef767a"], // パーティクルの色を複数指定可能
            speed: "middle", // slow, middle, high の3つから粒子が集まる速さを選択
        });
    });
    
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        headerClose();
    });

    $('.mobile-header-link').click(function(){
        headerClose();
    });
    $('.header-sns-link').click(function(){
        headerClose();
    });

    $(".works-openbtn").click(function(){
        let wH = $('.works-mobile-header');
        if(wH.hasClass('hide')){
            wH.slideDown(500).toggleClass('show').toggleClass('hide');
        }else{
            wH.slideUp(500).toggleClass('show').toggleClass('hide');
        }
    });


    $('.mobile-header-link').click(function(){
        $('.mobile-header').hide().addClass('hide').removeClass('show');
        $('.openbtn').removeClass('active');
    });

    $('html,body').animate({ scrollTop: 0 }, '1');

});


//JS

$('.fadeInUpTrigger').on('inview', function(event, isInView) {
    if (isInView) {//表示領域に入った時
      $(this).addClass('animate__animated animate__fadeInUp');//クラス名が付与
    } else {//表示領域から出た時
      $(this).removeClass('animate__animated animate__fadeInUp');//クラス名が除去
    }
  });


$('a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    let elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    let wW = $(window).width;
    if(wW <= 1100){
        var pos = $(elmHash).offset().top-60;
    }else{
        var pos = $(elmHash).offset().top-70;
    };
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});

//テキストのカウントアップ+バーの設定
let bar = new ProgressBar.Line(splash_text,{
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.25,//進捗ゲージの太さ
    color: '#2a9d8f',//進捗ゲージのカラー
    trailWidth: 0.25,//ゲージベースの線の太さ
    trailColor: '#264653',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定               
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',//バーより上に配置
            transform:'translate(-50%,-50%)',
            'font-size':'1rem',
            color: '#ffffff',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(0).fadeOut(0);//アニメーションが終わったら#splashエリアをフェードアウト
});  

$(window).on('load',function(){
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1000).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
    
    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    
    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function() { 
    //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
    
    });


    let arr = []
    //初期値の設定
    function TypingInit() {
        $('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
            arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
        });
    };
    //スクロールした際のアニメーションの設定
    function TypingAnime() {
        $(".js_typing").each(function (i) {
            let elemPos = $(this).offset().top - 50;//要素より、50px上の
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
                if(!$(this).hasClass("endAnime")){//endAnimeのクラスがあるかチェック
                    arr[i].start();
                    arr[i].duration = 750;//テキストが最終変化するまでの時間※規定値600
                    $(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
                };
            }else{
                $(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
            };
        });
    };
    
    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
        TypingAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
    // 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    TypingInit(); //初期設定
    TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    $('#about-title').removeClass('endAnime');
});
