$(document).ready(function(){
  $('.icon').on('click', function(e){
    e.preventDefault();
    var url = $(this).data('url');
    window.location.replace(url);
  });
});
