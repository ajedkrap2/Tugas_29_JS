function regex() {
 let data = "Belajar menimba ilmu programming bersama Niomic";
 let kata = new RegExp("bersama");
 let exec = kata.exec(data);
 console.log(exec);
}

regex();
