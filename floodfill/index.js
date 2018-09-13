function floodfill(){
	var rows = 10;
	var columns = 10;
	var map = [];

	for (var i = 0; i < rows; i++){
		map.push( [] );
	}
	
	for (var i = 0; i < rows; i++){
		for (var j = 0; j < columns; j++){
			map[i].push(Math.floor(Math.random()*2))
		}
	}

	$(document).ready(function(){
		$('.white').on('click', function(){
			$(this).removeClass('white').addClass('yellow');
		});
	});

	function displayMap(){
		var output = "";

		for (var i=0; i<map.length; i++){
			output += "<div class = 'row'>"
			for (var j=0; j<map[i].length; j++){
				if(map[i][j] == 0){
					output += "<div class = 'white'></div>";
				}
				else if(map[i][j] == 1){
					output += "<div class = 'black'></div>"
				}
				else if(map[i][j] == 2){
					output += "<div class = 'yellow'></div>"
				}
			}
			output += "</div>";
		}
		document.getElementById('map').innerHTML = output;
	}

	displayMap();
	console.log(map);
	return map;
}

floodfill();