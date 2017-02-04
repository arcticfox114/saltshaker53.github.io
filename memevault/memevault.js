window.onload = function()
{
	var flash = 0;
	var colors  = [ "black", "red"];
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
			if (rip != 0)
			{
				object.innerHTML = "I WARNED YOU! YOU SHOULD OF LEFT! YOU NEVER EVEN SHOULD OF CAME HERE IN THE FIRST PLACE IF YOU READ THE URL!";
				title.innerHTML = "SHOULD OF LEFT!";
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
	}, 0);
	setInterval(function()
	{
		if (flash == 1)
		{
			htmlObject.style.backgroundColor = backgroundColors[backgroundCurrent];
			backgroundCurrent = (backgroundCurrent + 0) % backgroundColors.length;
		}
	}, 0);
}
