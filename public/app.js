$(document).ready(function(){
	console.log('doc is ready');


$.get('https://super-crud.herokuapp.com/books')
    .done(function(data){
      console.log(data);
    });

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