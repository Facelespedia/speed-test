$('#go').on('click', function() {
  $('#go').attr("disabled", true)
  $('#go').text("Wait")
  $('#server').text('-')
  $('#ip_address').text('-')
  $('#ping').text('-')
  $("#download").text('-')
  $("#upload").text('-')
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
        $("#download").text(_data.downloadspeed.toFixed(2) + " Mbps")
        $("#upload").text(_data.uploadspeed.toFixed(2) + " Mbps")
			}
  	}
	}).then(function() {
    $('#go').attr("disabled", false)
	  $('#go').text("Go")  
  })
});