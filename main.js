
var score = 0;
var myMusic = document.getElementById("music");
var isRunning = false;

$("body").keypress(GameLogic);
$("#play").click(Main);
$("#score").text("Score : " + score);

var tiles = InitTab();

function Main() {
	if (!isRunning) {
		isRunning = true;
		myMusic.play();
		
		for (var i = 0; i < tiles.length; ++i)
			window.setTimeout(LaunchGame, 400 * i, i, tiles);
	}
}

function LaunchGame(id, tiles) {
	for (var i = 0; i < tiles.length; ++i)
		window.setTimeout(InitLine, 400 * i, id, tiles[i]);
}

function InitLine(id, tile) {
	for (var i = 0; i < tile.length; ++i) {
		if (tile[i] === 1) {
			if (isRunning)
				ChangeColor("#line-" + id + "-" + (i + 1), i + 1);
		} else if (tile[i] === 2) {
			isRunning = false;
			$("#result").text("Good Job !");
		} else {
			ClearColor("#line-" + id + "-" + (i + 1));
		}
	}
}

function Rng(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function InitTab() {
	var newTab = [];
	
	for (var i = 0; i < 151; ++i)
		newTab.push([Rng(2), Rng(2), Rng(2), Rng(2)]);

	for (var i = 0; i < 9; ++i)
		newTab.push([0, 0, 0, 0]);

	newTab.push([2, 2, 2, 2]);
	
	return newTab;
}

function ChangeColor(id, nb) {
	switch (nb) {
		case 1:
			$(id).css("background-color", "rgb(104, 4, 4)");
			break;
		case 2:
			$(id).css("background-color", "rgb(254, 19, 16)");
			break;
		case 3:
			$(id).css("background-color", "rgb(224, 223, 229)");
			break;
		case 4:
			$(id).css("background-color", "rgb(9, 47, 0)");
			break;
	}
}

function ClearColor(id) {
	$(id).css("background-color", "transparent");
}

function GameLogic(event) {
	if (isRunning) {
		switch (event.keyCode) {
			case 97: // touche A
				if ($("#line-9-1").css("background-color") == "rgb(104, 4, 4)")
					++score;
				else
					--score;
				$("#line-9-1").css("background-color", "white");
				break;
				
			case 122: // touche Z
				if ($("#line-9-2").css("background-color") == "rgb(254, 19, 16)")
					++score;
				else
					--score;
				$("#line-9-2").css("background-color", "white");
				break;
				
			case 101: // touche E
				if ($("#line-9-3").css("background-color") == "rgb(224, 223, 229)")
					++score;
				else
					--score;
				$("#line-9-3").css("background-color", "white");
				break;
				
			case 114: // touche R
				if ($("#line-9-4").css("background-color") == "rgb(9, 47, 0)")
					++score;
				else
					--score;
				$("#line-9-4").css("background-color", "white");
				break;
		}
	}
	
	$("#score").text("Score : " + score);
	
	window.setTimeout(ClearColor, 100, "#line-9-1");
	window.setTimeout(ClearColor, 100, "#line-9-2");
	window.setTimeout(ClearColor, 100, "#line-9-3");
	window.setTimeout(ClearColor, 100, "#line-9-4");
}







