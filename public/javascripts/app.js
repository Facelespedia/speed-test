console.log($('#test'));
$('#test').on('click', function() {
	$.ajax({
		url: '/api/upload-speed',
		success: function(data){
			console.log(data);
			$('#data').append("<div>"+data+"</div>")		
		}
	});
	$.ajax({
		url: '/api/download-speed',
		success: function(data){
			console.log(data);
			$('#data').append("<div>"+data+"</div>")		
		}
	});
	$.ajax({
		url: '/api/ip',
		success: function(data){
			console.log(data);
			$('#data').append("<div>"+data+"</div>")		
		}
	});
	$.ajax({
		url: '/api/ping',
		success: function(data){
			console.log(data);
			$('#data').append("<div>"+data+"</div>")		
		}
	});
});