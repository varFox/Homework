$(document).ready(function() {
  $('.for__overlay').on('click', () => {
    $('.overlay').animate(
      {
        opacity: 'toggle'
      }, 1500
    );
    $('.modal').fadeIn().animate(
      {
        top: '0px',
        width: '40%'
      }, 1500
    );
    
  });
  $('.close').on('click', () => {
    $('.overlay').animate(
      {
        opacity: 'toggle'
      }, 1000
    );
    $('.modal').animate(
      {
        top: '-600px',
        width: '20%'
      }, 1000
    ).fadeOut();
  });

  $("#submit").on('click', (e) => {
    e.preventDefault();
    let name = $('.contactform_name').val();
        phone = $('.contactform_phone.form-control').val(),
        mail = $('.contactform_mail.form-control').val(),
        text = $('textarea').val();
    $.ajax({
     url: "server.php",
     type: "POST",
     dataType: "text",
     data: ("name=" + name + "&phone=" + phone + "&mail=" + mail + "&text=" + text),
     success: function(data){
      $("#block").text(data);
     }
     });
    });
});