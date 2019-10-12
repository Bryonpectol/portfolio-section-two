<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Contact Me</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      type="text/css"
      media="screen"
      href="/css/contact.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <script src="/scripts/contact.js"></script>
  </head>
  <body>
    <nav>
      <ul id="navbar">
        <a href="index.html"><img class="navimg" src="assets/mylogo.png"/></a>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Me</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <div class="topnav" id="myTopnav">
      <a href="index.html" class="active">Home : Bryon Pectol</a>
      <a href="about.html">About Me</a>
      <a href="projects.html">Projects</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.php">Contact</a>
      <a href="index.html"><img id="navimg" src="assets/mylogo.png"/></a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>

    <br />
    <br />
    <br />
    <br />

    <div class="body">
      <h2>Contact Me</h2>

      <br />

      <div class="container">
    <div class="form-container front">
    	<h1 class="form-label">Material Design Form</h1>
        <form>
            <div class="group">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Name</label>
            </div>
            <div class="group">
                <input type="text" required>
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>Email</label>
            </div>
            <!-- Message body -->
            <textarea class="message-form-control" id="message" name="message" placeholder="Message" rows="5"></textarea>
            <input type="submit" class="button raised btn btn-primary btn-lg">
        </form>
    </div>
</div>


      <!-- <textarea name="comment" form="usrform">Enter text here...</textarea> -->

      <!-- <p class = "contact-yes"><strong>Email: </strong><a class = "email" href = "mailto:bryon.pectol@gmail.com">bryon.pectol@gmail.com</a></p>
        <p class = "contact-yes"><strong>Phone: </strong><a class = "email" href = "tel:(801)347-0862">(801) 347-0862</a></p> -->
    </div>

    <footer id="contact">
      <div class="contact-center">
        <a
          href="https://www.facebook.com/BryonPectol"
          target="_blank"
          class="contact-details"
          >Facebook</a
        >

        <a
          href="https://www.facebook.com/BryonPectol"
          target="_blank"
          class="contact-details1"
          >Facebook</a
        >

        <a
          id="profile-link"
          href="https://github.com/Bryonpectol"
          target="_blank"
          class="contact-details"
          >GitHub</a
        >

        <a
          id="profile-link"
          href="https://github.com/Bryonpectol"
          target="_blank"
          class="contact-details1"
          >GitHub</a
        >

        <a
          href="https://www.linkedin.com/in/bryon-pectol-134ab0120/"
          target="_blank"
          class="contact-details"
          >LinkedIn</a
        >

        <a
          href="https://www.linkedin.com/in/bryon-pectol-134ab0120/"
          target="_blank"
          class="contact-details1"
          >LinkedIn</a
        >

        <a href="mailto:bryon.pectol@gmail.com" class="contact-details"
          >Email</a
        >

        <a href="mailto:bryon.pectol@gmail.com" class="contact-details1"
          >Email</a
        >

        <a href="tel:801-347-0862" class="contact-details">Call me</a>

        <a href="tel:801-347-0862" class="contact-details1">Call me</a>

        <a href="#top" class="contact-details">To Top &#8593;</a>

        <a href="#myTopnav" class="contact-details1">To Top &#8593;</a>
      </div>

      <p>
        Bryon Pectol,
        <a class="footer-link" href="https://bryonsportfolio.netlify.com/"
          >https://bryonsportfolio.netlify.com/</a
        >
        &copy; 2019 All rights reserved.
      </p>
    </footer>

  </body>
</html>
