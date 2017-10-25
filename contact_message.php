<?php

	$con = mysqli_connect('shareddb1c.hosting.stackcp.net','data-from-site-ui-3230d1a7','a1b2c3$2011');
	header( "refresh:1;url=index.php" );
	if(!$con)
    {
      echo 'NOT Connected to database server!';
    }

	if(!mysqli_select_db($con,'data-from-site-ui-3230d1a7'))
    {
     	echo 'Database NOT Selected'; 
    }

	
	$email = $_POST['email'];
	$message = $_POST['message'];
	

	$sql = "INSERT INTO contactmessage (email,message) VALUES ('$email', '$message')";
	if(!mysqli_query($con,$sql))
    {
     echo 'NOT INSERTED'; 
    }
	else
    {
      
      echo 'Data INSERTED Successfully!'; 
    }
	
	

?>