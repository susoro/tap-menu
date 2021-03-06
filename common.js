// 탭메뉴

$(document).ready(function () {
  var $tabButtonItem = $('#tab-button'),
    $tabSelect = $('#tab-select'),
    $tabContents = $('.tab-contents'),
    activeClass = 'is-active';

  $tabButtonItem.first().addClass(activeClass);
  $tabContents.not(':first').hide();

  // button
  $tabButtonItem.find('a').on('click', function (e) {
    var target = $(this).attr('href');
    $tabButtonItem.removeClass(activeClass);
    $(this).parent().addClass(activeClass);
    $tabSelect.val(target);
    $tabContents.hide();
    $(target).show();
    e.preventDefault();
  });

  // select
  $tabSelect.on('change', function () {
    var target = $(this).val(),
      targetSelectNum = $(this).prop('selectedIndex');
    $tabButtonItem.removeClass(activeClass);
    $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
    $tabContents.hide();
    $(target).show();
  });
});

  $(".notice li:first").click(function(){
	$("#modal").addClass("active");
  });
  $(".btn").click(function(){
	$("#modal").removeClass("active");
  });