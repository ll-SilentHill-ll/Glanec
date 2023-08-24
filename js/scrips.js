$(document).ready(function(){
  $('.heder-line').click(function(){
    $('.adapive_menu').toggleClass('show_menu')
    $('body').addClass('nooverflow')
  })

  $('.adaptive__list').click(function(){
    $('.adapive_menu').removeClass('show_menu')
  })
})
