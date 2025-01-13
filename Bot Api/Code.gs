var token = "836592409:AAEqmE-_wvcUq_NwUGCkpXA64_cFwPtO1Lg";
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "https://script.google.com/macros/s/AKfycbySjFLgS06DThUCcdgX2Gg9GkPOU7LrLPSEYC2FS17ICQsBqGF6/exec";
var ssId = "1oZoFPmC50a7NM1WoDLol_4iThsjsoeimx1BsNjhpk3E";

function getMe() {
	var url = telegramUrl + "/getMe";
	var response = UrlFetchApp.fetch(url);
	Logger.log(response.getContentText());
}

function setWebhook() {
	var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
	var response = UrlFetchApp.fetch(url);
	Logger.log(response.getContentText());
}

function sendText(id,text) {
	var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + text;
	var response = UrlFetchApp.fetch(url);
	Logger.log(response.getContentText());
}

function doGet(e) {
	return HtmlService.createHtmlOutput("Hi there");
}

function doPost(e) {
	// this is where telegram works
	var data = JSON.parse(e.postData.contents);
	var text = data.message.text;
	var id = data.message.chat.id;
	var name = data.message.chat.first_name + " " + data.message.chat.last_name;
    var answer = "Hi " + name + ", thank you for your comment " + text;
    sendText(id,answer);
    SpreadsheetApp.openById(ssId).getSheets()[0].appendRow([new Date(),id,name,text,answer]);
	GmailApp.sendEmail(Session.getEffectiveUser().getEmail(), "Message sent to bot",answer);
    
    if(/^@/.test(text)) {
      var sheetName = text.slice(1).split(" ")[0];
      var sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName) ? SpreadsheetApp.openById(ssId).getSheetByName(sheetName) : SpreadsheetApp.openById(ssId).insertSheet(sheetName);
      var comment = text.split(" ").slice(1).join(" ");
      sheet.appendRow([new Date(),id,name,comment,answer]);
    
 }
 
}

/*
{
    "parameter": {},
    "contextPath": "",
    "contentLength": 280,
    "queryString": "",
    "parameters": {},
    "postData": {
        "type": "application/json",
        "length": 280,
        "contents": "{\"update_id\":613353200,\n\"message\":{\"message_id\":7,\"from\":{\"id\":842276428,\"is_bot\":false,\"first_name\":\"Masrianto\",\"last_name\":\"Masrianto\",\"language_code\":\"en\"},\"chat\":{\"id\":842276428,\"first_name\":\"Masrianto\",\"last_name\":\"Masrianto\",\"type\":\"private\"},\"date\":1556684135,\"text\":\"hi\"}}",
        "name": "postData"
    }
}


*/
