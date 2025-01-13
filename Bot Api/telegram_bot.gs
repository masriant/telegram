// 1. Init Class
var token = 'TOKEN BOT TELEGRAM';
var tg = new telegram.daftar(token);


// 2. Send Request
var result = tg.request(method, data);


// 3. Fungsi Kirim Pesan
//var tg.kirimPesan(chatid, pesan, parse_mode, disable_web_page_preview)
var result2 = tg.kirimPesan(chatid, pesan, parse_mode, disable_web_page_preview);

// Variasi Kirim Pesan:

// Kirim pesan langsung:
tg.kirimPesan('-1001321466502', 'Halo, Bang Masrianto!');

// Kirim pesan dengan style format

// markdown
tg.kirimPesan('-1001321466502', '_Halo_, *Bang Masrianto*!', 'markdown');

// HTML
tg.kirimPesan('-1001321466502', '<i>Halo</i>, <b>Bang Masrianto</b>!', 'HTML');


// 4. Fungsi-fungsi Lib
//request (method, data)
//requestForm (method, data)
//requestBlob(method, data)
//kirimPesan(chatid, pesan, parse_mode, disable_web_page_preview)
//sendMessage(chatid, pesan, parse_mode, disable_web_page_preview)
//sendPhoto(chatid, photo, caption, disable_notification, reply_to_message_id, reply_markup)
//sendDocument(chatid, document, caption, disable_notification, reply_to_message_id, reply_markup)
//sendAudio(chatid, audio, caption, duration, performer, title, disable_notification, reply_to_message_id, reply_markup)
//sendVideo(chatid, video, caption, duration, width, height, disable_notification, reply_to_message_id, reply_markup)
//sendMsgKeyboard(chatid, text, keyboard) //parse_mode: HTML
//sendMessageKeyboard(chatid, text, keyboard) //parse_mode: HTML
//sendMsgKeyboardInline(chatid, text, keyboard) //parse_mode: HTML
//sendMessageKeyboardInline(chatid, text, keyboard) //parse_mode: HTML
//editMessageText(chat_id, message_id, pesan, keyboard) //parse_mode: HTML
//replyMessage(msg, pesan, keyboard)
//clearHTML(string)
//clearMarkdown(string)
//timeConverter(Unixtimestamp, ribuan_boolean)
//setWebhook(url)
//deleteWebhook()

// 5. Tools
//Utils clearHTML(string): string clearMarkdown(string): string
//Button text(text, callback_data): JSON inline(text, callback_data): JSON query(text, switch_inline_query): JSON url(text, url): JSON

//Penggunaan:
var Utils = telegram.Utils;
var pesan = Utils.clearHTML('Masrianto <ssostiami@gmail.com>');
