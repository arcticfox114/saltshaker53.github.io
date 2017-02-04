window.onload = function()
{
	var flash = 0;
	var colors  = [ "white", "black"];
	var current = 0;
	var backgroundColors  = [ "white"];
	var backgroundCurrent = 0;
	var object = document.getElementById("shame");
	var htmlObject = document.getElementById("html");
        var time = setInterval(timer, 1000);
	var timeLeft = 10;
	var audio = document.getElementById("audio");
	var rip = 0;
	var title = document.getElementById("title");
	var warning = document.getElementById("warning");
    function timer ()
    {
		if (timeLeft != 1)
		{
			timeLeft = timeLeft - 1;
			object.innerHTML = "Redirecting to the meme vault in " + timeLeft + " seconds!"
		}
