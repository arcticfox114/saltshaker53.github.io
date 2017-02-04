window.onload = function()
{
	var flash = 0;
	var colors  = [ "red", "black"];
	var current = 0;
	var backgroundColors  = [ "red", "orange", "yellow", "green", "blue", "purple"];
	var backgroundCurrent = 0;
	var object = document.getElementById("shame");
	var htmlObject = document.getElementById("html");
        var time = setInterval(timer, 1000);
	var timeLeft = 10;
	var rip = 0;
	var title = document.getElementById("title");
	var warning = document.getElementById("warning");
    function timer ()
    {
		if (timeLeft != 0)
		{
			timeLeft = timeLeft - 1;
			object.innerHTML = "Redirecting to the meme vault in " + timeLeft + " seconds!";
		}
		else
		{
			if (rip != 1)
			{
				object.innerHTML = "I WARNED YOU! YOU SHOULD OF LEFT! YOU NEVER EVEN SHOULD OF CAME HERE IN THE FIRST PLACE IF YOU READ THE URL!";
				title.innerHTML = "SHOULD OF LEFT!";
        warning.outerHTML = "";
				flash = 1;
				time =  setTimeout(timer, 0);
				rip = 1;
			}
	    }
	}
	setInterval(function()
	{
		if (flash == 1)
		{
			object.style.color = colors[current];
			current = (current + 1) % colors.length;
		}
	}, 500);
	setInterval(function()
	{
		if (flash == 1)
		{
			htmlObject.style.backgroundColor = backgroundColors[backgroundCurrent];
			backgroundCurrent = (backgroundCurrent + 1) % backgroundColors.length;
		}
	}, 100);
}
