window.onload = function() {
  code = "gluten free pasta";
  code_input = document.getElementById("code_input");
  lock_status = document.getElementById("lock_status");
  lock_button = document.getElementById("lock_button");
  unlock_button = document.getElementById("unlock_button");
  hint = document.getElementById("hint");
  meme = document.getElementById("meme");
  locked = true;
};
function check() {
	if (locked)
	{
		if (code_input.value == code)
		{
      if (code_input.className == "invalid")
      {
        code_input.className = "";
      }
			unlock();
		}
    else
    {
      code_input.className = "invalid";
    }
	}
}
function unlock() {
	lock_status.className = "lockstatus unlocked";
	lock_status.innerHTML = "<i class = \"fa fa-unlock\"></i> Unlocked";
	code_input.value = "";
	code_input.disabled = true;
	lock_button.disabled = false;
	unlock_button.disabled = true;
	locked = false;
	showMeme();
}
function lock() {
	lock_status.className = "lockstatus locked";
	lock_status.innerHTML = "<i class = \"fa fa-lock\"></i> Locked";
	code_input.disabled = false;
	lock_button.disabled = true;
	unlock_button.disabled = false;
	locked = true;
	hideMeme();
}
function showHint() {
	hint.outerHTML = "Hint: Group Chat";
}
function showMeme() {
	meme.innerHTML = "<img width = \"445\" height = \"445\" src = \"/img/thedankestmeme.png\"/>"
}
function hideMeme() {
	meme.innerHTML = "";
}
