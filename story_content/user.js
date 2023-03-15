function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gOdr8dpOYY":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz-e3yKntv24OtkGaqnAB3u8hYMqJGHkGa_BKA8wpU_e_FCYV52JQr52Ji5RqOzupE0nw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

