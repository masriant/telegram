<?php

error_reporting(0);

// ==== BEGIN / variabel must be adjusted ====

$token = "bot" . "<token>";
$proxy = "<proxy_IP>:<port>";
$mysql_host = "<host>";
$mysql_user = "<user>";
$mysql_pass = "<pass>";
$mysql_dbname = "<dbname>";

// ==== END / variabel must be adjusted ====


$conn = mysql_connect($mysql_host, $mysql_user, $mysql_pass);
if (!$conn) {
  die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db($mysql_dbname, $conn);
if (!$db_selected) {
  die('Can\'t use foo : ' . mysql_error() . '<br>');
}


$updates = file_get_contents("php://input");

$updates = json_decode($updates, true);
$pesan = $updates[message][text];
$chat_id = $updates[message][chat][id];

$pesan = strtoupper($pesan);
if (strpos($pesan, "AFTAR#") > 0) {
  $datas = split("#", $pesan);
  $nama = $datas[1];
  $alamat = $datas[2];
  $hp = $datas[3];
  $sql = "insert into data_telegram values ('$nama','$alamat','$hp', now())";
  if (mysql_query($sql, $conn)) {
    $pesan_balik = "Terima kasih Data Anda sudah kami simpan.";
  } else $pesan_balik = "Data gagal disimpan silahkan coba lagi";
} else $pesan_balik = "Mohon maaf format yang Anda kirim salah, silahkan kirim ulang dengan Format DAFTAR%23[NAMA]%23[ALAMAT]%23[HP] Contoh Monster Mahoni%23Jalan Anggrek No 1 Jakarta%2308581234567";

$url = "https://api.telegram.org/$token/sendMessage?parse_mode=markdown&chat_id=$chat_id&text=$pesan_balik";

$ch = curl_init();

if ($proxy == "") {
  $optArray = array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CAINFO => "C:\cacert.pem"
  );
} else {
  $optArray = array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_PROXY => "$proxy",
    CURLOPT_CAINFO => "C:\cacert.pem"
  );
}

curl_setopt_array($ch, $optArray);
$result = curl_exec($ch);

$err = curl_error($ch);
curl_close($ch);

if ($err <> "") echo "Error: $err";
else echo "Pesan Terkirim";
