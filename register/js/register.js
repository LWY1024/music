
$('.enroll').on('touchstart',function(){
  var phoneNumber = $('#phone').val();
  var verifyCode = $('#verify').val();
  var pwdNumber = $('#pwd').val();
  $.ajax({
    url:"http://192.168.1.94:3000/users",
    type:"post",
    data:{
      type:"register",
      phone:phoneNumber,
      pass:pwdNumber,
    },
    success:function(res){
      console.log(res);
      if(res.msg == "注册成功"){
        window.open('./../login/login.html');
      }
      else {
        alert("注册失败，请重试!")
      }
    }
  });
});

var phones = /^1[3|4|5|7|8][0-9]{9}$/;
$('#phone').on('blur',function(){
  if($('#phone').val() == '' || phones.test($('#phone').val())==false){
    $('#phone').next('span').show();
    $('#phone').prev().siblings('#pwd').find('span').hide();
  }else{
    $('#phone').next('span').hide();
  }
});
$('#phone').on('touchstart',function(){
  $(this).next().hide();
});


// 密码
var pwds = /^[0-9a-zA-Z_]{6,12}$/;
$('#pwd').on('blur',function(){
  if($('#pwd').val() == '' || pwds.test($('#pwd').val())==false){
      $('#pwd').next('span').show();
      $('#pwd').prev().siblings('#phone').find('span').hide();
  }else{
      $('#pwd').next('span').hide();
  }
});
$('#pwd').on('touchstart',function(){
  $(this).next().hide();
});