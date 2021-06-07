<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Weather Scraper</title>
  <meta name="description" content="GET">
  <meta name="author" content="SitePoint">
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

  <!-- Optional theme -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
  
  <style>
  
  	html, body {
  		height:100%;
  	}
  
  	.container {
  		background-image:url("trees-mist.jpg");	
  		width:100%;
  		height:100%;
  		background-size:cover;
  		background-position:center;
  		padding-top:150px;
  	}
  	
  	.center {
  		text-align: center;
  	}
  	
  	.white {
  		background-color: white;
  		opacity:.75;
  	}
  	
  	p {
  		padding-top:15px;
  		padding-bottom:15px;
  	}
  	
  	button {
  		margin-top:15px;
  	}
  	
  	.alert {
  		display:none;
  	}
  	
  </style>
  

</head>

<body>
	
	<div class="container">
		
		<div class="row">
		
			<div class="col-md-6 col-md-offset-3 center">
			
				<h1 class="white">Get your WEATHER ON:</h1>
				
				<p class="lead white">
					Enter your city below to get a forecast for the weather. :) Have a Nice Day!
				</p>
				
				<form>
					
					<div class="form-group">
					
						<input type="text" class="form-control" name="city" id="city" placeholder="Eg. Austin, Laredo, London..."/>
					
					</div>
					
					<div id="success" class="alert alert-success">Success!</div>
					
					<div id="fail" class="alert alert-danger">Could not find weather data for that city. Make sure youre spelling it correctly, dumb fuck.</div>
					
					<div id="noCity" class="alert alert-danger">Please enter a city</div>
				
					<button id="findMyWeather" class="btn btn-success btn-lg center">Find Weather!</button>
				
				</form>
			
			</div>
		
		</div>
		

	</div>
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>  
  <!-- jQuery CDN-->
  <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  
  <script>
  
  	$("#findMyWeather").click(function(event) {
  	
  		event.preventDefault();
  		
  			$(".alert").hide();
  		
  		if ($("#city").val()!="") {
  		
  		$.get("scraper.php?city="+$("#city").val(), function(data) {
  		
  			
  			
  			if(data=="") {
  			
  				$("#fail").fadeIn();
  				
  			} else {
  			
  			$("#success").html(data).fadeIn();
  			
  			}
  		});
  		
  		} else {
  		
  			$("#noCity").fadeIn();
  		}
  	});
  	
  </script>
  

</body>
</html>