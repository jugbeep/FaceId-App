$(document).ready(function(){
	console.log('doc is ready');

$('.findName').submit(function(event) {
	event.preventDefault();

	$.ajax({
		data: $('.findName').val(),
		url: '/dbperson',
		dataType: JSON,
	} console.log(data))
	.done(function(res) {
		if(res.msg === '') {
			console.log('successful query');
		} else {
			console.log('unsuccesful query');
		}
	})
})



// /// ajax ///

// let headers = {
// 	url: 'https://api.kairos.com/v2/media/',
// 	headers: {
// 		'app_id': id,
// 		'app_key': key
// 	}
// };

// $('.btn btn-primary').submit(function(){
// 	event.preventDefault();
	
// 	request(headers, function(err, res, body) {
// 		let resData = JSON.parse(body);
// 		console.log(resData);
// 		res.send(body);
// 	});
// });
});