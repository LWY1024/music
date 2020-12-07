function setRem(){
    var windw = document.documentElement.clientWidth || document.body.clientWidth;
    var uiw = 750;
    document.documentElement.style.fontSize = (windw/uiw)*10+'px'
  }
  setRem();
  window.onresize = setRem;


$('.logined').on('touchstart',function(){
  $.ajax({
    url:"http://192.168.1.94:3000/users",
    type:"post",
    data:{
      type:"login",
      phone:$('.user').val()-0,
      pass:$('.pwd').val()-0,
    },
    success:function(res){
      console.log(res);
      if(res.msg == "登录成功"){
        window.open('./../home/home.html');
      }
      else {
        alert("登录失败，请重试!")
      }
    },
  });
});


  var users = /^1[3|4|5|7|8][0-9]{9}$/;
  $('.user').on('blur',function(){
    if($('.user').val() == '' || users.test($('.user').val())==false){
      $('.user').next('span').show();
      // $('.user').next().siblings('.pwd').find('span').hide();
    }else{
      $('.user').next('span').hide();
    }
  });
  $('.user').on('touchstart',function(){
    $(this).next().hide();
  });



  // 密码
var pwds = /^[0-9a-zA-Z_]{6,12}$/;
$('.pwd').on('blur',function(){
  if($('.pwd').val() == '' || pwds.test($('.pwd').val())==false){
      $('.pwd').next('span').show();
      $('.pwd').prev().siblings('.user').find('span').hide();
  }else{
      $('.pwd').next('span').hide();
  }
});
$('.pwd').on('touchstart',function(){
  $(this).next().hide();
});