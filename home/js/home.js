function setRem(){
    var windw = document.documentElement.clientWidth || document.body.clientWidth;
    var uiw = 750;
    document.documentElement.style.fontSize = (windw/uiw)*10+'px'
  }
  setRem();
  window.onresize = setRem;


// 轮播图
$.ajax({
  url:'http://192.168.1.94:3000/home',
  type:"get",
  data:{
    type:'banner',
  },
  success:function(res){
    bannerlb(res);
  }
});

function bannerlb(data) {
    var dot_tem = doT.template($('#templates').text());
    $('.swiper-wrapper').html(dot_tem(data.imglist));
    console.log(data);
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay:{
          delay:1000,
          stopOnLastSlide:false,
          disableOnInteraction:true,
      },
      effect:'fade',
      pagination: {
        el: '.swiper-pagination',
      },
    });       
}


  function inHtml(data){
    var dot_tem = doT.template($('#list_template').text());
    $('.main-bottom ul').html(dot_tem(data.musicList));
    console.log(data.musicList);
}

  $('.p-new').on('touchstart',function(){
    $(this).css('color','#EC32A5');
    $(this).find('img').css('display','block');
    $('.p-new').next('.p-recommend').css('color','#333333');
    $('.p-new').next('.p-recommend').find('img').css('display','none');
    $.ajax({
        url:'http://192.168.1.94:3000/home',
        type:"get",
        data:{
          type:'new',
        },
        success:function(res){
            inHtml(res);
        }
      });
 });

 $('.p-recommend').on('touchstart',function(){
    $(this).css('color','#EC32A5');
    $(this).find('img').css('display','block');
    $('.p-recommend').prev('.p-new').css('color','#333');
    $('.p-recommend').prev('.p-new').find('img').css('display','none');
    $.ajax({
        url:'http://192.168.1.94:3000/home',
        type:"get",
        data:{
          type:'recommend',
        },
        success:function(res){
            inHtml(res);
        }
      });
});