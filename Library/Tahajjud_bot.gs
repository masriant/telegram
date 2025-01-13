function reminderTahajud() {
  var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  var tg = new telegram.daftar(token);
  // var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var now = new Date();
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  var teks = "_Hooiii_ banguuun broo..., *banguuun*!"
  
  teks = teks + "\n\nSekarang waktunya Tahajud!!";
  teks = teks + "\nSudah jam `" + waktu + "` lhoooh!";
  
  var hasil = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(hasil); // simpan hasil return kirimPesan ke log
}


function reminderDhuha() {
  var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  var tg = new telegram.daftar(token);
  // var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var now = new Date();
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  var teks = "_Hooiii_ banguuun broo..., *banguuun*!"
  
  teks = teks + "\n\nSekarang waktunya Dhuha!!";
  teks = teks + "\nSudah jam `" + waktu + "` lhoooh!";
  
  var hasil = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(hasil); // simpan hasil return kirimPesan ke log
}
