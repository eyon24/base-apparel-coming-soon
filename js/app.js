function myFunction() {
  var email = document.getElementById("email").value;
  let bool = email.includes("@");
  console.log(email);
  console.log(bool);

  if (!bool) {
    document.getElementById("error").style.display = "block";
    document.getElementById("invalid").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
    document.getElementById("invalid").style.display = "none";
  }
}
