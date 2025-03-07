function login()

{

  let u = username.value

  let p = pass.value

  if (u=="truc" && p=="1")

  {

    window.open("trangchu.html")

    document.getElementById(compiler).style.display="block"

  }

  else

  {

    window.open("tryagain.html")

  }

}
