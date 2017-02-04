function updateTime()
{
	var time = document.getElementById("time");
	var date = new Date();
	time.innerHTML = date.toLocaleString();
	var update = setTimeout(updateTime, 500);
}
function checkJS()
{
	var js_enabled = document.getElementById("javascript_enabled");
	js_enabled.innerHTML = "JavaScript: <font class = \"enabled\">Enabled</font>";
}
