function panggilRegexp(value) {
  let data = "Belajar html dan Belajar css";
  var pola = RegExp(value);
  var hasil = pola.test(data);
  if (hasil){
    console.log(value);
  }
  else{
    console.log("Belajar");
  }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");
