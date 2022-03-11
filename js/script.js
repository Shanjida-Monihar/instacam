$(function(){
    
    //==========Searchbar===============
    $('.nav-search').on('click', function () {
      $('.search-bar').addClass('search-bar-show');
    });
    $('.search-cross').on('click', function () {
      $('.search-bar').removeClass('search-bar-show');
    });
      //=================serch bar part end=================
      
  $('.center').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow: ".t-left",
      nextArrow: ".t-right",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
  $('.news-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow: ".n-left",
      nextArrow: ".n-right",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
      ]
    });
    new VenoBox({
      selector: ".video-play-button",
      autoplay:true,
  });
  $(".navbar-toggler").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();
  
    $("body").toggleClass("overflow-hidden");
  });
  
  //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 100
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 400;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  
  })
  
  $(window).scroll(function(){
    var top = $(this).scrollTop()
  
    if(top > 300){
          $(".navbar").addClass("sticky-menu")
    }
    else{
      $(".navbar").removeClass("sticky-menu")
    }
    if(top > 300){
      $(".back-to-top").fadeIn(300)
    }
    else{
      $(".back-to-top").fadeOut(300)
    }
  })
  $(".back-to-top").click(function(){
    $("html,body").animate({scrollTop: 0},1000)
  })