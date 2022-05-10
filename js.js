$(function(){
	var centerShelfs,
		$body = $('body'),
		$topShelf = $('.shelf.top'),
		$middleShelf = $('.shelf.middle'),
		$bottomShelf = $('.shelf.bottom');
  
	centerShelfs = function(){
	  var topShelfPosition = $body.height()/2;
  
	  $topShelf.css('top', topShelfPosition);
	  $middleShelf.css('top', topShelfPosition + 200);
	  $bottomShelf.css('top', topShelfPosition + 400);
	};
  
	moveToShelf = function(e){
	  e.preventDefault();
	  $body.attr('class', '');
	  $body.addClass(e.target.id);
	};
  
	// bind events);
  
	// move to start position
	centerShelfs();
	
	window.setTimeout(function(){
	  $body.addClass('view-middle-shelf');
	}, 500);
  });
  


  $('#myModal').on('shown.bs.modal', function() {
	$('#myInput').focus()
  })
  