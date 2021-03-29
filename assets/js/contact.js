let contact = document.getElementById('home');
contact.innerHTML = `
<section class="headermenu">
<header class="header">
    <div class="container">
        <nav class="title">
            <h1><a class="logo" href="index.html"><span class="lg" aria-hidden="true"><i
                class="fa fa-paw"></i></span>Pet Sitter</a></h1>
            <button class="lome" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="expandbars"></span>
                <span class="closetimes"></span>
            </button>
            <div class="menu" id="menu">
                <ul class="listauto">
                    <li class="listitem">
                        <a class="listlink" href="index.html">Home <span class="listonly">(current)</span></a>
                    </li>
                    <li class="listitem">
                        <a class="listlink" href="about.html">About</a>
                    </li>
                    <li class="listitem">
                        <a class="listlink" href="services.html">Services</a>
                    </li>
                    <li class="listitem">
                        <a class="listlink" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
</section>
<section class="innerbannermain">
<div class="aboutinnereditcontent">
    <div class="container">
        <ul class="breadpath">
            <li class="rightpropclone"><a href="index.html" class="editcontent">Home <span class="rightangle" aria-hidden="true"><i class="fas fa-angle-right"></i></span></a></li>
            <li class="activeeditcontent">Contact</li>
        </ul>
    </div>
</div>
</section>
<section class="contactinfomain" id="contact">
<div class="contacteditcontent">
    <div class="container">
        <div class="maintitlesheadcenter">
            <h3 class="headernameeditcontent">Get in Touch</h3>
            <p class="titleparaeditcontent">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga sit illo modi aut aspernatur tempore laboriosam saepe dolores eveniet.</p>
        </div>
        <div class="gridcontactview">
            <div class="contdetails">
                <div class="conttop">
                    <div class="contleftcenter">
                        <span class="phonetextprimary"><i class="fas fa-phone-alt"></i></span>
                    </div>
                    <div class="contright">
                        <p class="para"><a href="tel:+44 99 555 42">+123 45 67 89</a></p>
                    </div>
                </div>
                <div class="conttopmarginup">
                    <div class="contleftcenter">
                        <span class="envelopetextprimary"><i class="far fa-envelope"></i></span>
                    </div>
                    <div class="contright">
                        <p class="para"><a href="mailto:example@mail.com" class="mail">example@mail.com</a></p>
                    </div>
                </div>
                <div class="conttopmarginup">
                    <div class="contleftcenter">
                        <span class="mapmarkettextprimary"><i class="fas fa-map-marker-alt"></i></span>
                    </div>
                    <div class="contright">
                        <p class="para">California, #32841 block,<br> #221DRS 75 West Rock,<br> Mape Building, UK.</p>
                    </div>
                </div>
            </div>
            <div class="mapiframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl" width="100%" height="300" frameborder="0" style="border: 0px; pointer-events: ;" allowfullscreen=""></iframe>
            </div>
        </div>
        <div class="mapcontentmt">
            <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                <div class="twicetwo">
                    <input type="text" class="formcontrol" name="Name" id="Name" placeholder="Name" required="">
                    <input type="email" class="formcontrol" name="Sender" id="Sender" placeholder="Email" required="">
                </div>
                <div class="twice">
                    <input type="text" class="formcontrol" name="Subject" id="Subject" placeholder="Subject" required="">
                </div>
                <textarea name="Message" class="formcontrol" id="Message" placeholder="Message" required=""></textarea>
                <div class="textright">
                    <button type="submit" class="btncontact">Send Message</button>
                </div>
            </form>
        </div>
    </div>
</div>
</section>
<section class="footermain">
<div class="footerpy">
    <div class="containerpy">
        <div class="rowfootertop">
            <div class="colfooterlist1">
                <h2><a href="index.html" class="listfooter"><span class="pawmr" aria-hidden="true"><i
                    class="fa fa-paw"></i></span> Pet Sitter</a></h2>
                <p>Adipisicing elit. Lauda ntium, archi tecto iure Lorem incidunt iosam qui quo moll itia veniam recus andae archi tecto earum suscipit exce pturi dicta nemo quam.</p>
            </div>
            <div class="colfooterlist2">
                <h6 class="footertitle">Get in Touch</h6>
                <div class="column2">
                    <div class="href1"><span>E-mail:</span><a href="mailto:mail@company.com">mail@company.com</a></div>
                    <div class="href2"><span>Phone:</span><a href="tel:+(12)-00 222 0008">+(12)-00 222 00008</a></div>
                    <div><p class="contactpara">California, 75 West Rock, Maple Building.</p></div>
                </div>
            </div>
            <div class="colfooterlist3">
                <h6 class="footertitle">Newsletter </h6>
                <p>Enter your email and receive the latest news from us. We'll never share your email address</p>
                <form action="#" class="subscribe" method="post">
                    <input type="email" name="email" placeholder="Your Email Address" required="">
                    <button><span class="envelope"><i class="far fa-envelope"></i></span></button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="bottomcopiescenter">
    <div class="container">
        <p class="copyfooter">© 2020 Pet Sitter. All rights reserved | Designed by <a href="https://w3layouts.com">W3layouts</a></p>
    </div>
</div>
</section>
<button onclick="topFunction()" id="movetop" title="Go to top"><span class="eject"><i class="fas fa-eject"></i></span></button>
`