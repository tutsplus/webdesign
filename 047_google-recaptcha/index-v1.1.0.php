<?php

// grab recaptcha library
require_once "ReCaptcha/ReCaptcha.php";

// your secret key
$secret = "6LdbMwATAAAAALwS6_u6mAL0o9oQAJbGSg5GgLQJ";

// empty response
$response = null;

// check our secret key
$reCaptcha = new Recaptcha\ReCaptcha($secret);

// if submitted check response
if ($_POST["g-recaptcha-response"]) {
    $response = $reCaptcha->verify(
        $_POST["g-recaptcha-response"],
        $_SERVER["REMOTE_ADDR"]
    );
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>How to Integrate Google “No CAPTCHA reCAPTCHA” on Your Website</title>
    
    <meta charset="utf-8">
    
    <!--favicons-->
    <link href="https://static.tutsplus.com/assets/favicon-3ef7b4f54ed4378b31ff3124d3c4bff8.png" rel="shortcut icon" type="image/png" />
    <link href="https://static.tutsplus.com/assets/apple-touch-icon-3ef7b4f54ed4378b31ff3124d3c4bff8.png" rel="apple-touch-icon" type="image/png" />
  </head>

  <body>

    <?php
      if ($response != null && $response->success) {
        echo "Hi " . $_POST["name"] . " (" . $_POST["email"] . "), thanks for submitting the form!";
      } else {
    ?>

    <form action="" method="post">

      <label for="name">Name:</label>
      <input name="name" required><br />

      <label for="email">Email:</label>
      <input name="email" type="email" required><br />

      <div class="g-recaptcha" data-sitekey="6LdbMwATAAAAAGdw7X0ac4mdxub6HHrAXpgEEijT"></div>

      <input type="submit" value="Submit" />

    </form>

    <?php } ?>

    <p>On Tuts+: <a href="http://webdesign.tutsplus.com/tutorials/how-to-integrate-google-no-captcha-recaptcha-on-your-website--cms-23024">Learn how to integrate the “No CAPTCHA reCAPTCHA” on Your Website</a>.</p>


    <!--js-->
    <script src='https://www.google.com/recaptcha/api.js'></script>

  </body>
</html>