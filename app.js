$('.list').on('click', 'span', function(){
	// $(this).appendTo('.done');
	$('li:last').remove()

});

$('.list').on('click', 'li', function(){
	$(this).appendTo('.done');

	console.log(this)
});

	// $('span').on('click', function(){
	// 	$('li').remove()
	// })


  // $('.list').on('click', 'li .delete', function(){
  //   $(this).remove();
  // })

//
// $('#lista').on('click', 'span', function(){
// 			var input = ($('input:text[name=nombre]').val());
// 			$(this).remove();
// 			console.log(this)
// 		});
