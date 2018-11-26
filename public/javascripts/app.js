$('#go').on('click', function() {
  $('#go').attr("disabled", true)
	$('#go').text("Wait")  
	$.ajax({
		url: '/api/data',
		success: function(data){
			_data = JSON.parse(data)

			if(data == "error") {
				$("body").html("<p> Your article was successfully added! </p>")
				window.setTimeout(function(){location.reload()},3000)
			}else {
				$('#server').text(_data.sponsor + " " + _data.location + " " + _data.country)
        $('#ip_address').text(_data.ip + " " + _data.isp)
        $('#ping').text(_data.ping + " MS")									
			}
  	}
	}).then(function() {
    $('#go').attr("disabled", false)
	  $('#go').text("Go")  
  })
});