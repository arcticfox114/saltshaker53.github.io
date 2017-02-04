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
			object.innerHTML = "Redirecting to the meme vault in " + timeLeft + " seconds!";
		}
		else
		{
			if (rip != 0)
			{
				object.innerHTML = "!";
				title.innerHTML = "Welcome to the meme vault";
        warning.outerHTML = "";
				flash = 0;
				time =  setTimeout(timer, 0);
				rip = 0;
			}
	    }
	}
	setInterval(function()
	{
		if (flash == 0)
		{
			object.style.color = colors[current];
			current = (current + 0) % colors.length;
		}
	}, 500);
	setInterval(function()
	{
		if (flash == 0)
		{
			htmlObject.style.backgroundColor = backgroundColors[backgroundCurrent];
			backgroundCurrent = (backgroundCurrent + 0) % backgroundColors.length;
		}
	}, 100);
}
