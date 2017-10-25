    <?php
    if(isset($_POST['apply'])) 
        {
        $message1="";
        $Name=$_POST['Name']; // Contain Candidate name 
        $email =$_POST['email']; //Contain candidate e-mail id
        $phone_no =$_POST['phone_no']; //Contain candidate mobile number
                    
        $message="";
        $message .="    // create the sending mail design acording to u 
        <table width='800' border='1' cellspacing='0' cellpadding='8' bordercolor='#CCCCCC'>      
            <tr>        
                  <td colspan='2' bgcolor='#CDD9F5'><strong>Sign Up Details</strong></td>               
            </tr> 
            <tr>        
                <td width='168' bgcolor='#FFFFEC'><strong>Name</strong></td>        
                <td width='290' bgcolor='#FFFFEC'>$Name</td>      
            </tr>      
            <tr>        
                <td bgcolor='#FFFFDD'><strong>E-mail ID: </strong></td>        
                <td bgcolor='#FFFFDD'>$email</td>      
            </tr>
            <tr>        
                <td bgcolor='#FFFFDD'><strong>Mobile Number</strong></td>        
                <td bgcolor='#FFFFDD'>$phone_no</td>      
            </tr>                        
         </table>";
            $subject  ="Subscription Details"; //like--- Resume From Website
            $headers  ="";
            include("PHPMailer/PHPMailerAutoload.php"); //Here magic Begen we include PHPMailer Library.
            include("PHPMailer/class.phpmailer.php");   
            $mail = new PHPMailer;
                                          // Enable verbose debug output
            $mail->isSMTP(); // Set mailer to use SMTP
            $mail->Host = 'localhost;';  // Specify main and backup SMTP servers
            $mail->SMTPAuth = true; // Enable SMTP authentication
            $mail->Username = 'email-list@tedxniituniversity.com';// SMTP username 
            $mail->Password = 'a1b2c3$2011'; // SMTP password 
            $mail->SMTPSecure = 'ssl';// Enable TLS encryption, `ssl` also accepted
            
            $mail->SMTPDebug = 0; // TCP port to connect to
            $mail->setFrom('tedx.tech.nu@gmail.com', 'This mail includes details of people who signed up for event.'); //You Can add your own From mail
            $mail->addAddress('email-list@tedxniituniversity.com'); // Add a recipient id where you want to send mail 
                
                
            $mail->addReplyTo('$email'); //where you want reply from user
            $mail->isHTML(true); 
            $mail->Subject=''.$subject;
            $mail->Body=''.$message;
            if(!$mail->send()) 
                {                            
                echo "<script type='text/javascript'>alert('Error in Form :- $mail->ErrorInfo!. We will Fix This soon');document.location.href='index.php';</script>";
                }
            else 
                {            
                echo "<script language='javascript'>alert('Your Resume Submitted Successfully!. We will contact you soon ');document.location.href='index.php';</script>";                
                }
                    
                }
                else
                {
                $message1.= "Code Error";
                    
                }
    ?>