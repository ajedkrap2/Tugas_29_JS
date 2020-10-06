function panggilRegexp(){
  let data = "Belajar-Satu-Tahun-Bersama-Niomic";
  let dash = new RegExp("-")
  let count = dash.exec(data);
  while (count != null){
    data = data.replace(dash, " ");
    count = dash.exec(data);
  }

  return data;
}

console.log(panggilRegexp());
