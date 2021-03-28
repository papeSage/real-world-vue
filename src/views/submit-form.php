<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email address here
	$youremail = 'contact@it-servicegroup.com';  

	// prepare message 
	$body = "You have got a new message from the contact form on your website - Applechic :
	
	Name:  $_POST[name]
	Email:  $_POST[email]
	Subject:  $_POST[subject]
	Message:  $_POST[message]";
	$masque = "/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/";

	if( $_POST['email'] && !preg_match( "$masque", $_POST['email']) ) {
	  $headers = "From: $_POST[email]";
	} else {
	  $headers = "From: $youremail";
	}

	mail($youremail, "Message provenant du site", $body, $headers );

}

?>

<!DOCTYPE HTML>
<html>
<head>
<title>Thanks!</title>
</head>
<body>
<p> Thank you! We will get back to you soon.</p>
</body>
</html>