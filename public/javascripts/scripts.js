
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
	

	
	// $(".index_name").click(
	// function(){
	//   $(window.location).attr('href', (this).attr('id'));
	// }	
	// );
	
	$(".index_box").mouseenter(
	function(){
	  $(this).children(".index_pic").hide();
	  $(this).children(".index_name").show();	
	}
	);
	$(".index_box").mouseleave(
	function(){
	  $(this).children(".index_name").hide();
	  $(this).children(".index_pic").show();	
	}
	);
	
	
	// this for home2 domains
	// breaks the rules of elegance, but I think it is the easiest to read!
	
	$("#headline").mouseenter(
	function(){
		$("#lead").fadeIn(100, function(){
		  $("#strat").fadeIn(400, function(){
		    $("#innov").fadeIn(90, function(){
		      $("#engage").fadeIn(180, function(){
			    $("#clarify").fadeIn(100, function(){
				  $("#learn").fadeIn(50);
			    });
		      });
		    });
		  });
		});
	}
	);

    $(".domain").hover(
	function(){
	  var target_id = ("#"+ $(this).attr("id") + "_text");
	  $(target_id).toggle();
		
	}
	);


});
