//console.log(document.querySelector("h1"));

//var x = document.querySelector("h1");
//x.innerHTML = "I'm Alive";
//console.log(x);

var username = prompt("what is your name cool guy ?");
console.log("uba me console eka balan inne kiyala mn danno");

var a = document.querySelector("a");

a.addEventListener('mouseover', function() {

    var b = document.querySelector("h1");

    b.innerHTML = "You're almost dead " + username;

    a.innerHTML = "Don't click me!";

});

//var b = document.querySelector("a");

a.addEventListener('click', function() {

  var c = document.querySelector("h1");

  c.innerHTML = "You are dead!";

  a.innerHTML = "Bye Bye";

  alert("Rest in peace " + username);

});

