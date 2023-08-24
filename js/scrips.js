$(document).ready(function(){
  $('.heder-line').click(function(){
    $('.adapive_menu').toggleClass('show_menu')
    $('body').toggleClass('nooverflow')
  })

  $('.adaptive__list').click(function(){
    $('.adapive_menu').removeClass('show_menu')
    $('body').removeClass('nooverflow')
  })
})
