
$(document).ready(function() {
    $("#col1b").hover(
	  function(){
      $("#col2").fadeIn("fast");},
	  function(){
	  $("#col2").fadeOut("fast");}    );
    $("#col1a").hover(
	  function(){
      $("#col3").fadeIn("fast");},
	  function(){
	  $("#col3").fadeOut("fast");}
    );
    $("#col1c").hover(
	  function(){
      $("#col4").fadeIn("fast");}
    );
    $("#col1d").hover(
	  function(){
      $("#col5").fadeIn("fast");},
	  function(){
	  $("#col5").fadeOut("fast");}
    );
    $('#col2').mouseenter(
	  function(){
	  $("html,body").stop(),
	  $(this).show()
	  },
	  function(){
	  $(this).fadeOut("fast")
	}
	);
	
	$('#menuWhatWeDo').click(
	  function(){
	  $('#col2').fadeIn("slow");
	}
	);
	
	
	// this to toggle image and employee name
	
	$(".emp_pic").mouseenter(
	function(){
	  $(this).children(".emp_pic_image").hide();
	  $(this).children().children(".emp_name").show();
	}	
	);
	$(".emp_pic").mouseleave(
	function(){
	  $(this).children().children(".emp_name").hide();
	  $(this).children(".emp_pic_image").show();
	}	
	);
	
	$(".emp_name").click(
	function(){
	  $(window.location).attr('href', (this).attr('id'));
	}	
	);
	

});
