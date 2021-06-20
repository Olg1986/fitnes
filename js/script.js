window.addEventListener('DOMContentLoaded', () => {

   
  const slider = tns({
    container: '.slider_inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function ()  {
    slider.goTo('prev');
  });
 
  document.querySelector('.next').addEventListener('click', function ()  {
    slider.goTo('next');
  });
 
  $(document).ready(function() {

    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
      });

     

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
                $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
            })
        }); 
    };

    toggleSlide('.catalog-item_link');
    toggleSlide('.catalog-item_back');

  });

  // Modal
  $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
  });

  $('.modal_close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });

  

  $('.catalog-item_btn').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal_subtitle').text($('.catalog-item_title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    });
  });

$('#consultation form').validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: 'required',
        email: {
          reqired: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите свое имя",
          minlength: jQuery.validator.format("ВВедите {0} символов!")
        },
        phone: "Пожалуйста введите свой номер телефона",
        email: {
          required: "Пожалуйста введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
});
  

function validateForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: 'required',
          email: {
            reqired: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста введите свое имя",
            minlength: jQuery.validator.format("ВВедите {0} символов!")
          },
          phone: "Пожалуйста введите свой номер телефона",
          email: {
            required: "Пожалуйста введите свою почту",
            email: "Неправильно введен адрес почты"
          }
        }
    });
};

validateForms('#order form');
validateForms('#consultation_form form');
validateForms('#consultation form');

$('input[name=phone]').mask("+7(999) 999-99-99");

});