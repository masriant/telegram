// Library Bot API Telegram V28

var token = '1190188583:AAGX5KQ8HMmTc6n19iwe8ZMmO3HMVi8km5k'; // masukkan token bot mu di sini
  //var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  var tg = new telegram.daftar(token);

function reminderPagi() {
  // var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  // var tg = new telegram.daftar(token);
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var now = new Date();
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  var teks = "Selamat pagi broo..., *Apa kabar*!"
  
  teks = teks + "\n\nSekarang waktunya cari aktivitas baru!!";
  teks = teks + "\nSudah jam `" + waktu + "` lhoooh!";
  
  var hasil = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(hasil); // simpan hasil return kirimPesan ke log
}


function reminderSiang() {
  // var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  // var tg = new telegram.daftar(token);
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var now = new Date();
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  var teks = "Selamat siang broo..., *Apa kabar*!"
  
  teks = teks + "\n\nSekarang waktunya makan siang!!";
  teks = teks + "\nSudah jam `" + waktu + "` lhoooh!";
  
  var hasil = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(hasil); // simpan hasil return kirimPesan ke log
}


function reminderSore() {
  // var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  // var tg = new telegram.daftar(token);
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var now = new Date();
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  var teks = "Selamat sore broo..., *Apa kabar*!"
  
  teks = teks + "\n\nSekarang waktunya olahraga!!";
  teks = teks + "\nSudah jam `" + waktu + "` lhoooh!";
  
  var hasil = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(hasil); // simpan hasil return kirimPesan ke log
}


function reminderMalam() {
  // var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';  // sesuaikan dengan TOKEN Bot mu
  // var tg = new telegram.daftar(token);
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  var now = new Date();
  var waktu = Utilities.formatDate(now, 'Asia/Jakarta', 'HH:mm:ss');
  var teks = "Selamat malam broo..., *Apa kabar*!"
  
  teks = teks + "\n\nSekarang waktunya istirahat, gak usah begadang!!";
  teks = teks + "\nSudah jam `" + waktu + "` lhoooh!";
  
  var hasil = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(hasil); // simpan hasil return kirimPesan ke log
}
