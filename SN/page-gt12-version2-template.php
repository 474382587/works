<?php /* Template Name: GT12 Template Version 2 */ ?>

<?php
    $fontDirectory = get_template_directory_uri().'/fonts/';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GT12</title>
</head>

<body>
    <style>
/*
    import all fonts here
*/

@font-face {
    font-family: bebas;
    src: url(<?php echo $fontDirectory.'bebas.woff'?>);
}

@font-face {
    font-family: gotham-light;
    src: url(<?php echo $fontDirectory.'Gotham-Light.otf'?>);
}

@font-face {
    font-family: gotham-medium;
    src: url(Gotham-Light.otf);
}

@font-face {
    font-family: gotham-book;
    src: url(Gotham-Book.otf);
}

@font-face {
    font-family: gotham-bold;
    src: url(<?php echo $fontDirectory.'Gotham-Bold.otf'?>);
}

@font-face {
    font-family: gotham-medium-italic;
    src: url(Gotham-MediumItalic.otf);
}

/*
    reset
*/

h1, h2, h2, h4, h5, h6 {
    font-family: bebas;
}

* {
    font-family: gotham-light;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

::-webkit-scrollbar {
    display: none;
}

.black {
    background-color: #161616;
}

img {
    width: 100%;
}

/*
    Hero Area
*/

.hero-area, .hero, section {
    width: 100%;
    height: 100vh;
}

.hero-area {
    overflow: hidden;
}

.hero {
    padding: 60px 5%;
    z-index: 2;
    position: absolute;
    top: 0%;
    left: 0;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 20%;
}

.image-wrapper {
    width: 30%;
    max-width: 50px;
}

.sn-logo-image-wrapper {
    width: 30%;
    min-width: 150px;
    max-width: 200px;
}

.links {
    width: 30%;
    min-width: 500px;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}

.links>a {
    width: 20%;
    font-family: gotham-light;
    color: white;
    letter-spacing: 2px;
}

.slogan {
    height: 60%;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.slogan>h2 {
    margin-bottom: 120px;
    font-size: 40px;
    color: white;
    letter-spacing: 30px;
}

.newsletter {
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.newsletter>.hubspot {
    width: 45%;
    max-width: 1000px;
}

/*HubSpot*/

#hsForm_d139d6a1-d286-4a84-a6d6-64f0cf18796e {
    display: flex;
    justify-content: center;
}

form>.hs_email {
    width: 70%;
}

.hs_email>label {
    display: none;
}

.input>input {
    display: inline-block;
    height: 44px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 30px;
}

.hs-error-msgs.inputs-list {
    color: red;
    list-style: none;
}

.actions {
    text-align: center;
    height: 100%;
}

.actions>input {
    display: inline-block;
    height: 100%;
    width: 80%;
    border: none;
    padding: 10px 20px;
    color: white;
    background-color: #111;
    border-radius: 5px;
}

.actions>input:hover {
    background-color: #333;
}

.hs_error_rollup {
    display: none !important;
}

form>.hs_submit {
    height: 44px;
    width: 30%;
}

/* Content Section */

section {
    padding: 5%;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
}

.image, .text {
    height: 100%;
    overflow: hidden;
}

.image {
    width: 40%;
}

.text {
    height: 100%;
    padding-top: 100px;
    width: 55%;
    color: white;
}

.text>h3 {
    font-size: 46px;
    letter-spacing: 10px;
    margin-bottom: 20px;
}

.text>p {
    font-size: 20px;
    letter-spacing: 2px;
    margin: 40px auto;
}
p>strong {
    font-family: gotham-bold;
}
ul {
    padding-left: 20px;
    margin: 40px auto;
}

section .actions>input {
    border: 1px solid white;
}

ul>li {
    list-style: none;
    margin-bottom: 10px;
    font-size: 16px;
    position: relative;
}
li::before {
    content: "";
    display: block;
    position: absolute;
    left: -12px;
    top: 6px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: white;
}

.text-right>.image {
    width: 65%;
}

.text-right>.text {
    width: 30%;
}

section {
    position: relative;
}

.signup>.text {
    width: 40%;
}

.signup>.image {
    width: 55%;
}

.grey-logo {
    position: absolute;
    bottom: 5%;
    width: 50px;
}

.wrapper {
    height: 60px;
}

.wrapper>img {
    height: 100%;
    width: auto;
    margin-right: 100px;
}

@media screen and (max-width: 1600px) {
    .slogan>p {
        margin-bottom: 100px;
    }
}

@media screen and (max-width: 1366px) {
    .slogan>p {
        margin-bottom: 60px;
        font-size: 30px;
    }
}

@media screen and (max-width: 992px) {
    .slogan>p {
        margin-bottom: 30px;
        font-size: 26px;
    }
}

@media screen and (max-width: 768px) {
    .grey-logo {
        display: none;
    }
    .links {
        width: 50%;
        padding-top: 10px;
        flex-wrap: wrap;
        min-width: 0;
    }
    .links>a {
        text-align: right;
        margin-bottom: 10px;
        width: 100%;
        letter-spacing: 1px;
    }
    section {
        height: auto;
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .logo-images {
        padding-top: 40px;
    }
    .wrapper {
        text-align: center;
        height: 40px;
    }
    .wrapper>img {
        height: 100%;
        width: auto;
        margin-right: 20px;
    }
    .text-right>.image {
        width: 100%;
    }
    .text-right>.text {
        width: 100%;
    }
    .hero {
        padding: 20px;
    }
    .slogan>h2 {
        letter-spacing: 10px;
        margin-bottom: 40px;
        font-size: 24px;
        text-align: center;
    }
    .newsletter {
        /* flex-direction: column; */
        flex-wrap: wrap;
    }
    .newsletter>.hubspot {
        width: 100%;
    }
    .newsletter>.sn-logo-image-wrapper {
        margin: 0 auto;
    }
    form>.hs_email {
        width: 60%;
    }
    form>.hs_submit {
        height: 44px;
        width: 38%;
    }
    .actions>input {
        letter-spacing: 0px;
        border: 1px solid white;
        padding: 4px 8px;
        font-size: 10px;
        color: white;
        background-color: #161616;
    }
    .container {
        flex-wrap: wrap;
    }
    .signup>.image, .signup>.text {
        width: 100%;
    }
    .image, .text {
        width: 100%;
        height: 50%;
    }
    .image {
        overflow: hidden;
        max-height: 40%;
    }
    .image>img {
        height: 100%;
    }
    ul {
        margin: 30px auto;
    }
    .text {
        height: auto;
        padding: 20px 0;
    }
    .text>h3 {
        font-size: 28px;
    }
    .text>p {
        font-size: 16px;
        margin: 30px 0;
    }
    .hero-area, section {
        border-bottom: 1px solid white;
    }
    .hero-area {
        background-image: url('https://www.snclubs.com/content/uploads/2018/10/trx-bw.jpg');
        background-size: cover;
        background-position: center, center;
    }
    video {
        display: none;
    }
}

.video-container {
    height: 100%;
    width: 100%;
    position: relative;
}

video {
    width: 100%;
    position: absolute;
    /* height: 100vh; */
}

@media (min-aspect-ratio: 16/9) {
    video {
        height: 300%;
        top: -100%;
    }
}

@media (max-aspect-ratio: 16/9) {
    video {
        width: 300%;
        left: -100%;
    }
}
</style>
    <div class="hero-area">
        <div class="video-container">
            <video src="https://www.snclubs.com/content/uploads/2018/10/GT12-V2.mp4" autoplay loop muted></video>
        </div>
        <div class="hero">
            <div class="nav">
                <div class="image-wrapper">
                    <a href="//snclubs.com"><img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_logo_web_white.png" alt=""></a>
                </div>
                <div class="links">
                    <a name="what" href="#">WHAT</a>
                    <a name="benefits" href="#">BENEFITS</a>
                    <a name="sessions" href="#">SESSIONS</a>
                    <a name="launch" href="#">LAUNCH</a>
                </div>
            </div>
            <div class="slogan">
                <h2>SMALL</h2>
                <h2>GROUP</h2>
                <h2>TRAINING</h2>
            </div>
            <div class="newsletter">
                <div class="hubspot">
                    <!--[if lte IE 8]>
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
                    <![endif]-->
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
                    <script>
                        hbspt.forms.create({
                            portalId: "2538549",
                            formId: "d139d6a1-d286-4a84-a6d6-64f0cf18796e"
                        });
                    </script>
                </div>

                <div class="sn-logo-image-wrapper">
                    <img src="https://www.snclubs.com/content/uploads/2018/10/SNFC_logo_CMYK_landscape_logo_rev.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <section class="black" id="WHAT">
        <div class="container">
            <div class="text">
                <h3>WHAT IS GT12</h3>
                <p>GT12 is a brand new fitness program available exclusively at Steve Nash Fitness World & Sports Club,
                    created by fitness experts, and designed around the Power of 12. What does that mean?</p>
                <ul>
                    <li>12 stations per session</li>
                    <li>12 pairs/teams per session (up to 24 participants)</li>
                    <li>12 minute round of high-intensity interval training</li>
                    <li>23 exercise to master during each session</li>
                </ul>
            </div>
            <div class="image">
                <img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_gt12.jpg" alt="">
            </div>
        </div>
        <img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_light_grey_logo.png" alt="" class="grey-logo">
    </section>
    <section class="black" id="BENEFITS">
        <div class="container  text-right">
            <div class="image">
                <img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_benefits.png" alt="">
            </div>
            <div class="text">
                <h3>BENEFITS</h3>
                <ul>
                    <li>Attend 12 sessions per month for accelerated results</li>
                    <li>Burn over 1200 calories per week</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="black" id="SESSIONS">
        <div class="container">

            <div class="text">
                <h3>SESSIONS</h3>
                <p>Prepare for a circuit workout of interval-style training, using the following tyes of equipment:</p>
                <ul>
                    <li>Rowing machine</li>
                    <li>Air bike</li>
                    <li>Sled</li>
                    <li>Tire trainer</li>
                    <li>Landmines</li>
                    <li>Battle ropes</li>
                    <li>The Turf</li>
                    <li>Kettlebells</li>
                    <li>TRX</li>
                    <li>Bulgarian Bag</li>
                    <li>Sandbells</li>
                </ul>
            </div>
            <div class="image">
                <img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_sessions.png" alt="">
            </div>
        </div>
        <img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_light_grey_logo.png" alt="" class="grey-logo">
    </section>
    <section class="black" id="LAUNCH">
        <div class="container signup">
            <div class="text">
                <h3>LAUNCH</h3>
                <p>GT12 is expected to launch in January 2019. But we will be holding sneak peak classes before our launch to those who sign up now! We will Also notify you ahead of time with out official launch date.</p>
                <p>
                    <strong>
                        Don't wait! Be one of the first to sign up to get access to sneak peak classes, and be one of the first official class attendees!
                    </strong>
                </p>
                <p>
                    <strong>
                        SIGN UP NOW
                    </strong>
                </p>
                <div class="hubspot">
                    <!--[if lte IE 8]>
                            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
                            <![endif]-->
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
                    <script>
                        hbspt.forms.create({
                            portalId: "2538549",
                            formId: "d139d6a1-d286-4a84-a6d6-64f0cf18796e"
                        });
                    </script>
                </div>
            </div>
            <div class="image">
                <img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_launch.jpg" alt="">
            </div>
        </div>
        <div class="logo-images">
            <div class="wrapper"><img src="https://www.snclubs.com/content/uploads/2018/10/sn_gt12_logo_web_white.png" alt="">
                <img src="https://www.snclubs.com/content/uploads/2018/10/SNFC_logo_CMYK_landscape_logo_rev.png" alt=""></div>
        </div>
    </section>
    <script>

        // This is smooth scroll function
        !function () {
            var lastScroll = 0;
            document.addEventListener('wheel', throttle(handleScroll, 100))
            function throttle(fn, delay) {
                var timer = null
                return function (event) {
                    clearTimeout(timer)
                    timer = setTimeout(function () {
                        fn(event)
                    }, delay)
                }
            }
            function handleScroll(event) {
                console.log(event.deltaY, 'delta ')
                var origin = lastScroll
                if (event.deltaY > 0) {
                    lastScroll += window.innerHeight
                    lastScroll = lastScroll > document.documentElement.scrollHeight - window.innerHeight ? document.documentElement.scrollHeight - window.innerHeight : lastScroll
                }
                else {
                    lastScroll -= window.innerHeight
                    lastScroll = lastScroll < 0 ? 0 : lastScroll
                }
                // window.scrollTo({ top: lastScroll, behavior: 'smooth' })
                scrollTo(origin, lastScroll)
            }

            function scrollTo(origin, dest) {
                var increment = (dest - origin) / 10
                var i = 1
                var interval = setInterval(function () {
                    window.scroll(0, origin + increment * i)
                    i++
                    if (i > 10) {
                        clearInterval(interval)
                        i = 0
                    }
                }, 16)
            }


            // this is link scroll 
            // set a name for a tag and make sure the section that you want to jump to has an ID that has the same word --> in upper case
            var links = document.querySelectorAll('.links>a')
            links = Array.prototype.slice.call(links)

            links.forEach(function (link) {
                link.addEventListener('click', function (e) {
                    e.preventDefault()
                    jumpTo = document.getElementById(link.name.toUpperCase()).offsetTop
                    // window.scrollTo({ top: jumpTo, behavior: 'smooth' })
                    scrollTo(lastScroll, jumpTo)
                    lastScroll = jumpTo
                })
            })
        }()
    </script>
</body>

</html>