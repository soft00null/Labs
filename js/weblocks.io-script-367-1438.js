var j, attribute_name, texttitle;


$('.link_menu').click(function() {
      var we_clicks = $(this).data('we_clicks');
      if (!we_clicks) {
          $('body').css({
    'overflow-y':'hidden',
  });

      } else {
          $('body').css({
    'overflow-y':'visible',
  });

      }
      $(this).data("we_clicks", !we_clicks);
    });
$('.class').attr('attribute_name');

$('.text_title').attr('texttitle');

$('.service-dropdown-text').text(texttitle);
$('.class-name').text('Text');

$( ".inner" ).wrap( "
<div class=`background`></div> " );

j = 0;

var j_list = '.class-name';
for (var j_index in j_list) {
  j = j_list[j_index];
}
