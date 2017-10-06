<?php


function Connect()
{
 $servername = "stackcp.net";
 $dbuser = "ui-3230d1a7b";
 $dbpass = "a1b2c3$2011";
 $dbname = "data-from-site-ui-3230d1a7";

 // Create connection
 $conn = new mysqli($servername, $dbuser, $dbpass, $dbname) or die($conn->connect_error);

 return $conn;
}
 
?>