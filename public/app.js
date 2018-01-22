$(document).ready(function(){
	console.log('doc is ready');


$('#apiSubmit').on('submit', function(event) {
 	event.preventDefault();
 	let formData = $(this).serialize();
 	console.log('form data is: ',formData);

 	$.post('/api/post', formData, function() {
 	console.log('from submitted!')
 	})
 	//Do something else here
 	})
});


