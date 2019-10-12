<?php
if (isset($_POST['submit'])) {
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $mailFrom = $_POST['email'];
  $telephone = $_POST['telephone'];
  $message = $_POST['comments'];

  $mailTo = "bryon@pectol.com";
  $headers = "Bryon's Portfolio Contact Form: ".$mailFrom;
  $txt = "This email is from: ".$first_name." ".$last_name.".\n\n".$message;

  mail($mailTo, $mailFrom, $txt, $headers);
  header("Location: contact.html?mailsend");

}
?>