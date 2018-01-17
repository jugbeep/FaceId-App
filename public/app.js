$(document).ready(function(){
	console.log('doc is ready');

let baseUrl = '/api/post'

$('#apiSubmit').on('click', function(event, req, res, err) {
 	event.preventDefault();
 	$.ajax({
 		method: 'POST',
 		url: baseUrl,
 		success: function onFoundSuccess(data) {
 			console.log(data)
 		}
 	})
});
});


