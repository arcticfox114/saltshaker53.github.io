window.onload = function() {
  code = "i solemnly swear i'm upto no good";
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
	lock_status.innerHTML = "<i class = \"fa fa-unlock\"></i> Access Granted";
	code_input.value = "";
	code_input.disabled = true;
	lock_button.disabled = false;
	unlock_button.disabled = true;
	locked = false;
	showMeme();
}
function lock() {
	lock_status.className = "lockstatus locked";
	lock_status.innerHTML = "<i class = \"fa fa-lock\"></i> Access Denied";
	code_input.disabled = false;
	lock_button.disabled = true;
	unlock_button.disabled = false;
	locked = true;
	hideMeme();
}
function showMeme() {
	meme.innerHTML = "<a href="/unlocked/home/"Access the meme vault</a>"
}
function hideMeme() {
	meme.innerHTML = "";
}
