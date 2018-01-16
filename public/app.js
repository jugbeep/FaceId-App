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


});

/*
    <% function setPerson(data) { %> 
      <% for (var i in data) {%>
        <% if (data.hasOwnProperty(i)){ %>
      
        <input placeholder= <%= data[i] %> >
        
        </input>
 
    
        <% }%>
      <% };%>
    <% } %>
  <% setPerson(doc) %>
 */
 