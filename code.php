<?php

if (isset($_POST['username']) && isset($_POST['phone'])){
	$to = "7yatan@gmail.com";
	$subject = 'Оставь заявку';
	$message = '<h2>'.$subject.'</h2>
	 		 <p>Имя <b> '.$_POST['username'].'</b></p>
		   <p>Телефон <b> '.$_POST['phone'].'</b></p>';
	$header = "From: support@7yatan.com\r\n";
	$header .= "MIME-Version: 1.0\r\n";
	$header .= "Content-type: text/html; charset=utf-8 \r\n";    
	
	mail($to, $subject, $message, $header);
	
	if (mail($to, $subject, $message, $header)) {
		$successMessage = 'Ваше сообщение отправлено';
	} else {
		$errorMessage = 'Ваше сообщение не было отправлено';	
	}
}
?>