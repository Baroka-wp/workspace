$(function(){
  $('.tab li').on('click',function(){
    $('.tab li').removeClass('select');
    $(this).addClass('select');
    $('.content li' ).addClass('hide')
    let index = $('.tab li').index($(this));
    $('.content li').eq(index).removeClass('hide');
  });
})
