<?php

	$con = mysqli_connect('shareddb1c.hosting.stackcp.net','data-from-site-ui-3230d1a7','a1b2c3$2011');
	header( "refresh:2;url=index.php" );
	if(!$con)
    {
      echo 'NOT Connected to database server!';
    }

	if(!mysqli_select_db($con,'data-from-site-ui-3230d1a7'))
    {
     	echo 'Database NOT Selected'; 
    }

	$Name = $_POST['Name'];
	$email = $_POST['email'];
	$phone_no = $_POST['phone_no'];
	$yes_no = $_POST['yes_no'];

	$sql = "INSERT INTO formdata (Name,email,phone_no,yes_no) VALUES ('$Name', '$email', '$phone_no', '$yes_no')";
	if(!mysqli_query($con,$sql))
    {
     echo 'NOT INSERTED'; 
    }
	else
    {
      
      echo 'Data INSERTED Successfully!'; 
    }
	
	

?>