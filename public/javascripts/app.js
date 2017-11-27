$('#test').on('click', function() {
	$.ajax({
		url: '/api/data',
		success: function(data){
			_data = JSON.parse(data)
			console.log("Download speed : " + _data.downloadspeed);
			console.log("Upload speed : " + _data.uploadspeed);
			console.log("Ip : " + _data.ip);
			console.log("Ping : " + _data.ping);
			console.log("Sponsor : " + _data.sponsor);
			console.log("Location : " + _data.location);
			console.log("Country : " + _data.country);
			console.log("Isp : " + _data.isp);

			if(data == "error") {
				$("body").html("<p> Your article was successfully added!</p>");
				window.setTimeout(function(){location.reload()},3000)
			}else {
				$('#server').text("" + _data.sponsor + " " + _data.location + " " + _data.country)
				$('#ping').text(_data.ping + " MS")
				$('#ip_address').text(_data.ip + "\n" + _data.isp)
				$("#upload").text(_data.uploadspeed + " Mbps")
				$("#download").text(_data.downloadspeed + " Mbps")										
			}
		}
	});
});