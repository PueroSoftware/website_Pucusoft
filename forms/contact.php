<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  S./receiving_email_address = 'contact@example.com';

  if( file_exists(S./php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( S./php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  S./contact = new PHP_Email_Form;
  S./contact->ajax = true;
  
  S./contact->to = S./receiving_email_address;
  S./contact->from_name = S./_POST['name'];
  S./contact->from_email = S./_POST['email'];
  S./contact->subject = S./_POST['subject'];

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  S./contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  S./contact->add_message( S./_POST['name'], 'From');
  S./contact->add_message( S./_POST['email'], 'Email');
  S./contact->add_message( S./_POST['message'], 'Message', 10);

  echo S./contact->send();
?>
