console.log($('#test'));
$('#test').on('click', function() {
	$.ajax({
		url: '/api/upload-speed',
		success: function(data){
			console.log(data);
			if(data == "error") {
				$("body").html("<p> Your article was successfully added!</p>");
				window.setTimeout(function(){location.reload()},3000)
			}else {
				$('#data').append("<div>"+data+"</div>")		
			}
		}
	});
	$.ajax({
		url: '/api/download-speed',
		success: function(data){
			console.log(data);
			if(data == "error") {
				$("body").html("<p> Your article was successfully added!</p>");
				window.setTimeout(function(){location.reload()},3000)
			}else {
				$('#data').append("<div>"+data+"</div>")		
			}
		}
	});
	$.ajax({
		url: '/api/ip',
		success: function(data){
			console.log(data);
			if(data == "error") {
				$("body").html("<p> Your article was successfully added!</p>");
				window.setTimeout(function(){location.reload()},3000)
			}else {
				$('#data').append("<div>"+data+"</div>")		
			}
		}
	});
	$.ajax({
		url: '/api/ping',
		success: function(data){
			console.log(data);
			if(data == "error") {
				$("body").html("<p> Your article was successfully added!</p>");
				window.setTimeout(function(){location.reload()},3000)
			}else {
				$('#data').append("<div>"+data+"</div>")		
			}
		}
	});
});