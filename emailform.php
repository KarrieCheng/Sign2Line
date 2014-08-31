<?php

$url = 'https://api.sendgrid.com/';
$user = 'huapayadevan';
$pass = 'Kyubey69';
if($_POST["toAddress"] == ""){
	$toAddress = "huapayadevan@gmail.com";
}
else{
	$toAddress = $_POST["toAddress"];
}
$params = array(
    'api_user'  => $user,
    'api_key'   => $pass,
    'to'        => $toAddress,
    'subject'   => 'Sign 2 Line Export Text',
    'html'      => $_POST["email"],
    'text'      => $_POST["email"],
    'from'      => 'example@sendgrid.com',
  );


$request =  $url.'api/mail.send.json';

// Generate curl request
$session = curl_init($request);
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// obtain response
$response = curl_exec($session);
curl_close($session);

// print everything out
print_r($response);

?>