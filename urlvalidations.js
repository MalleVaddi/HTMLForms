
var url_string = window.location.search;
var params = new URLSearchParams (url_string);
var header = document.getElementById("uname");
uname.innerHTML = params.get("name");
var cmode = document.getElementById("mode");
mode.innerHTML = params.get("contactpref");

if(params.has("email") && ("subs"))
{
alert("thank you for subscribing to our email list");
}

if(params.has("comments"))
{
alert("thank you for providing feedback. we'll reach out to you.");
}


