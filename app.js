//
// $('.todo').on('click', 'li', function(){
// $(this).appendTo('.done');
//
// 	$('.done').on('click', 'li', function(){
// 		$(this).appendTo('.todo');
// 	});
//
// 	$('.ul').on('click', '.delete', function(e){
// 		e.stopPropagation[]
// 		$(this).parent().remove()
// 	});
// });


$('.delete').on('click', function(e){
	$(this).closest("li").remove()
	console.log(this)
});

$('.todo').on('click', 'li', function(){
$(this).appendTo('.done');

	$('.done').on('click', 'li', function(){
		$(this).appendTo('.todo');
	});

});
