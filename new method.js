var username = prompt("what is your name cool guy ?");
console.log("uba me console eka balan inne kiyala mn danno");

var a = document.getElementsByClassName("link");
console.log(a[1]);
console.log(a[2]);

a[1].addEventListener('mouseover', function() {

    a[1].innerHTML = "Don't click me!";

    var b = document.getElementsByClassName("link");

    b[0].innerHTML = "You're almost dead " + username;

});

//var b = document.querySelector("a");

a[1].addEventListener('click', function() {

  a[1].innerHTML = "Bye Bye";

  var b = document.getElementsByClassName("link");

  b[0].innerHTML = "You are dead!";

  alert("Rest in peace " + username);

});
