function pesanku() {
  var token = '1130209376:AAGPnQarDTvtSr2SSmEsklSQ_RRb6wefj0s';
  var tg = new telegram.daftar(token);
  var chatid = -1001321466502 // ID Telegram untuk @Masrianto Group
  
      
  var teks = '_Halo_, *Selamat Pagi Semuanya*. Niatkan hari ini dapat rezeki yang berkah!';
  var ret = tg.kirimPesan(chatid, teks, 'markdown');
  Logger.log(ret); // simpan hasil return kirimPesan ke log
}
