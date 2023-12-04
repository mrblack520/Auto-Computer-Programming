<!doctype html>
<html class="no-js" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>SNAS Bot</title>
    <meta name="description" content="eSports and Gaming NFT Template">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Place favicon.ico in the root directory -->
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <!-- CSS here -->
    <link rel="stylesheet" href="assets/css/plugins.css">
    <link rel="stylesheet" href="assets/css/main.css">

    <!-- Page-Revealer -->
    <script src="assets/js/tg-page-head.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js"></script>
    <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>


</head>
<style>
    canvas {
        width: 100% !important;
        position: absolute;
        z-index: -999;
        height: 800px !important;
    }

    @media(max-width: 914px) {
        canvas {
            height: 1200px !important;
            /* display: none; */
        }
    }
</style>

<body>
    <script>
        var scene = new THREE.Scene();
        document.addEventListener("mousemove", onMouseMove, false);
        var camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        var mouseX;
        var mouseY;

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        window.addEventListener("resize", function() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        var distance = Math.min(200, window.innerWidth / 4);
        var geometry = new THREE.BufferGeometry();
        var vertices = [];
        var colors = [];

        for (var i = 0; i < 1600; i++) {
            var vertex = new THREE.Vector3();

            var theta = Math.acos(THREE.Math.randFloatSpread(2));
            var phi = THREE.Math.randFloatSpread(360);

            vertex.x = distance * Math.sin(theta) * Math.cos(phi);
            vertex.y = distance * Math.sin(theta) * Math.sin(phi);
            vertex.z = distance * Math.cos(theta);

            vertices.push(vertex.x, vertex.y, vertex.z);

            var color = new THREE.Color(0x72bcd4);
            colors.push(color.r, color.g, color.b);
        }

        geometry.setAttribute(
            "position",
            new THREE.Float32BufferAttribute(vertices, 3)
        );
        geometry.setAttribute(
            "customColor",
            new THREE.Float32BufferAttribute(colors, 3)
        );

        // Custom shader material
        var shaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                color: {
                    value: new THREE.Color(0x72bcd4)
                },
                size: {
                    value: 2.0
                }
            },
            vertexShader: `
                            attribute vec3 customColor;
                            varying vec3 vColor;
                            uniform float size;

                            void main() {
                            vColor = customColor;
                            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                            gl_PointSize = size * (300.0 / -mvPosition.z);
                            gl_Position = projectionMatrix * mvPosition;
                            }
                        `,
                                    fragmentShader: `
                            varying vec3 vColor;

                            void main() {
                            gl_FragColor = vec4(vColor, 1.0);
                            }
                        `,
            transparent: true
        });

        var particles = new THREE.Points(geometry, shaderMaterial);

        particles.boundingSphere = 700;

        var renderingParent = new THREE.Group();
        renderingParent.add(particles);

        var resizeContainer = new THREE.Group();
        resizeContainer.add(renderingParent);
        scene.add(resizeContainer);

        camera.position.z = 150;

        var animate = function() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        var myTween;

        function onMouseMove(event) {
            if (myTween) myTween.kill();

            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            myTween = gsap.to(particles.rotation, {
                duration: 0.1,
                x: mouseY * -1,
                y: mouseX
            });
            //particles.rotation.x = mouseY*-1;
            //particles.rotation.y = mouseX;
        }

        function onTouchMove(event) {
            if (myTween) myTween.kill();

            mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;

            mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;

            myTween = gsap.to(particles.rotation, {
                duration: 0.1,

                x: mouseY * -1,

                y: mouseX
            });
        }

        document.addEventListener("touchmove", onTouchMove, false);

        animate();

        // Scaling animation
        var animProps = {
            scale: 1,
            xRot: 0,
            yRot: 0
        };
        gsap.to(animProps, {
            duration: 10,
            scale: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "sine",
            onUpdate: function() {
                renderingParent.scale.set(
                    animProps.scale,
                    animProps.scale,
                    animProps.scale
                );
            }
        });

        gsap.to(animProps, {
            duration: 120,
            xRot: Math.PI * 2,
            yRot: Math.PI * 4,
            repeat: -1,
            yoyo: true,
            ease: "none",
            onUpdate: function() {
                renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
            }
        });
    </script>

    <!-- scroll-top -->
    <button class="scroll__top scroll-to-target" data-target="html">
        <i class="fa-solid fa-angle-up" style="color: #ffffff;"></i>
    </button>
    <!-- scroll-top-end-->

    <!-- header-area -->
    <header>
        <div id="sticky-header" class="tg-header__area  transparent-header">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-12">
                        <div class="mobile-nav-toggler"><i class="fa-solid fa-bars" style="color: #ffffff;"></i></div>
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav nav-t ">
                                <div class="logo">
                                    <a href="/"><img src="assets/img/logo/logo.png" class="logo"
                                            alt="Logo"></a>
                                </div>
                                <div class="tgmenu__navbar-wrap center tgmenu__main-menu d-none d-xl-flex">
                                    <ul class="navigation">
                                        <li class=" menu-item-has-children"><a href="{{ route('index') }}">Home</a>

                                        </li>
                                        <li><a href="#about">ABOUT US</a></li>
                                        <li><a href="#contact">contact</a>

                                        </li>

                                        <li><a href="#news">News</a>

                                        </li>
                                        <li><a href="#group">Group Members</a></li>
                                    </ul>
                                </div>
                                <div class="tgmenu__action rig d-none d-md-block">
                                    <ul class="list-wrap">
                                        {{-- temp freez --}}
                                        {{-- @if (Route::has('login')) --}}
                                            {{-- @auth --}}
                                                {{-- <a href="{{ url('/dashboard') }}" class="tg-border-btn center">Dashboard</a> --}}
                                            {{-- @else --}}
                                                <li><a data-bs-toggle="modal" href="#exampleModalToggle" role="button"
                                                        class="tg-border-btn"><i class="fa-solid fa-right-to-bracket"
                                                            style="color: #ffffff;"></i> sign in</a></li>
                                                <!-- modal login start  -->
                                                <div class="modal fade bg-dark opacity-75 " id="exampleModalToggle"
                                                    aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                                                    tabindex="-1">
                                                    <div class="modal-dialog   modal-dialog-centered ">
                                                        <div
                                                            class="modal-content border border1  border-4 border-success  bg-transparent">
                                                            <div class="modal-header border  border-success ">
                                                                <h5 class="modal-title " id="exampleModalToggleLabel">Login
                                                                </h5>
                                                                <button type="button" class="btn-close"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body  ">
                                                                <form method="POST" action="{{ route('PostLogin') }}">
                                                                    @csrf
                                                                    <div class="col-3 input-effect">
                                                                        <input class="effect-1" type="email"
                                                                            name="email" placeholder="" />
                                                                        <label>Email</label>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        {{-- <li ><a data-bs-toggle="modal" href="#exampleModalToggle" role="button" class="tg-border-btn center"><i class="fa-solid fa-right-to-bracket" style="color: #ffffff;"></i> signin</a></li> --}}
                                                                        <x-button class="tg-border-btn center"><i
                                                                                class="fa-solid fa-right-to-bracket"
                                                                                style="color: #ffffff;"></i>
                                                                            {{ __('Log in') }}
                                                                        </x-button>
                                                                    </div>
                                                                    <div class="col-3 input-effect">
                                                                        <input class="effect-1" type="password"
                                                                            name="password" placeholder="" />
                                                                        <label>Password</label>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div class="modal-footer border  border-success">
                                                                @if (Route::has('password.request'))
                                                                    <a href="{{ route('password.request') }}">
                                                                        {{ __('Forgot your password?') }}
                                                                    </a>
                                                                @endif
                                                                <p>don't have account 
                                                                    <a href="#exampleModalToggle2"
                                                                        data-bs-target="#exampleModalToggle2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-dismiss="modal">create account
                                                                    </a> 
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal fade    bg-dark opacity-75" id="exampleModalToggle2"
                                                    aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                                                    tabindex="-1">
                                                    <div class="modal-dialog modal-dialog-centered">
                                                        <div
                                                            class="modal-content border border1  border-4 border-success  bg-transparent">
                                                            <div class="modal-header   border  border-success">
                                                                <h5 class="modal-title" id="exampleModalToggleLabel2">
                                                                    Register</h5>
                                                                <button type="button" class="btn-close "
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <form method="POST" action="{{ route('register') }}">
                                                                    @csrf
                                                                    <div class="col-3 input-effect">
                                                                        <input class="effect-1" type="text"
                                                                            name="name" placeholder="" />
                                                                        <label>Name</label>
                                                                    </div>
                                                                    <div class="col-3 input-effect">
                                                                        <input class="effect-1" type="email"
                                                                            name="email" placeholder="" />
                                                                        <label>Email</label>
                                                                    </div>
                                                                    <div class="col-3 input-effect">
                                                                        <input class="effect-1" type="password"
                                                                            name="password" placeholder="" />
                                                                        <label>Password</label>
                                                                    </div>
                                                                    <div class="col-3 input-effect">
                                                                        <input class="effect-1" type="password"
                                                                            name="password_confirmation" placeholder="" />
                                                                        <label>Conform Password</label>
                                                                    </div>
                                                                    {{-- @if (Laravel\Jetstream\Jetstream::hasTermsAndPrivacyPolicyFeature()) --}}
                                                                        <div class="mt-4">
                                                                            <x-label for="terms">
                                                                                <div class="flex items-center">
                                                                                    <x-checkbox name="terms"
                                                                                        id="terms" required />
                                                                                    {{-- temp freez --}}
                                                                                    {{-- <div class="ml-2">
                                                                                        {!! __('I agree to the :terms_of_service and :privacy_policy', [
                                                                                            'terms_of_service' =>
                                                                                                '<a target="_blank" href="' .
                                                                                                route('terms.show') .
                                                                                                '" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">' .
                                                                                                __('Terms of Service') .
                                                                                                '</a>',
                                                                                            'privacy_policy' =>
                                                                                                '<a target="_blank" href="' .
                                                                                                route('policy.show') .
                                                                                                '" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">' .
                                                                                                __('Privacy Policy') .
                                                                                                '</a>',
                                                                                        ]) !!}
                                                                                    </div> --}}
                                                                                </div>
                                                                            </x-label>
                                                                        </div>
                                                                    {{-- @endif --}}
                                                                    <x-button class="tg-border-btn center"><i
                                                                            class="fa-solid fa-right-to-bracket"
                                                                            style="color: #ffffff;"></i>
                                                                        {{ __('Log in') }}
                                                                    </x-button>
                                                                </form>

                                                            </div>

                                                            <div class="modal-footer">

                                                                <p>Already have account? <a
                                                                        data-bs-target="#exampleModalToggle"
                                                                        data-bs-toggle="modal" data-bs-dismiss="modal"
                                                                        href="#exampleModalToggle"> Login</a></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            {{-- @endauth --}}
                                        {{-- @endif --}}

                                        <!-- modal login end  -->
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <!-- Mobile Menu  -->
                        <div class="tgmobile__menu">
                            <nav class="tgmobile__menu-box">
                                <div class="close-btn"><i class="fa-solid fa-xmark" style="color: #ffffff;"></i>
                                </div>
                                <div class="nav-logo">
                                    <a href="/"><img src="assets/img/logo/logo.png" class="w"
                                            alt="Logo"></a>
                                </div>


                                <!-- modal login start  -->
                                <div class="modal fade bg-dark opacity-75 " id="exampleModalToggle"
                                    aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                    <div class="modal-dialog   modal-dialog-centered ">
                                        <div
                                            class="modal-content border border1  border-4 border-success  bg-transparent">
                                            <div class="modal-header border  border-success ">
                                                <h5 class="modal-title " id="exampleModalToggleLabel">Login</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body  ">
                                                <form>
                                                    <div class="col-3 input-effect">
                                                        <input class="effect-1" type="text" placeholder="" />
                                                        <label>Email</label>
                                                    </div>




                                                    <div class="form-group">
                                                        <li><a data-bs-toggle="modal" href="#exampleModalToggle"
                                                                role="button" class="tg-border-btn center"><i
                                                                    class="fa-solid fa-right-to-bracket"
                                                                    style="color: #ffffff;"></i> sing in</a></li>

                                                    </div>
                                                    <div class="col-3 input-effect">
                                                        <input class="effect-1" type="text" placeholder="" />
                                                        <label>Password</label>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="modal-footer border  border-success">
                                                <p>don't have account <a href="#exampleModalToggle2"
                                                        data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
                                                        data-bs-dismiss="modal">create account</a> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade    bg-dark opacity-75" id="exampleModalToggle2"
                                    aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div
                                            class="modal-content border border1  border-4 border-success  bg-transparent">
                                            <div class="modal-header   border  border-success">
                                                <h5 class="modal-title" id="exampleModalToggleLabel2">Register</h5>
                                                <button type="button" class="btn-close " data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form>
                                                    <div class="col-3 input-effect">
                                                        <input class="effect-1" type="text" placeholder="" />
                                                        <label>Name</label>
                                                    </div>

                                                    <div class="col-3 input-effect">
                                                        <input class="effect-1" type="email" placeholder="" />
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-3 input-effect">
                                                        <input class="effect-1" type="password" placeholder="" />
                                                        <label>Password</label>
                                                    </div>
                                                    <div class="col-3 input-effect">
                                                        <input class="effect-1" type="password" placeholder="" />
                                                        <label>Conform Password</label>
                                                    </div>
                                                </form>
                                                <div class="col-3 input-effect">
                                                    <form class="center" action="">
                                                        <div class="form-group ">
                                                            <li><a data-bs-toggle="modal" href="#exampleModalToggle"
                                                                    role="button" class="tg-border-btn center"><i
                                                                        class="fa-solid fa-right-to-bracket"
                                                                        style="color: #ffffff;"></i> Registerer</a>
                                                            </li>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            <div class="modal-footer">

                                                <p>Already have account? <a data-bs-target="#exampleModalToggle"
                                                        data-bs-toggle="modal" data-bs-dismiss="modal"
                                                        href="#exampleModalToggle"> Login</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <li><a data-bs-toggle="modal" href="#exampleModalToggle" role="button"
                                        class="tg-border-btn"><i class="fa-solid fa-right-to-bracket"
                                            style="color: #ffffff;"></i> sign in</a></li>



                                <div class="tgmobile__menu-outer">
                                    <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                                </div>
                                <div class="social-links">
                                    <ul class="list-wrap">
                                        <li><a href="https://www.facebook.com/profile.php?id=100090833048696"><i
                                                    class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="http://www.dorld.tech/"><i class="fa-solid fa-earth-europe"
                                                    style="color: #ffffff;"></i></a></li>
                                        <li><a href="https://www.instagram.com/d_orld20/"><i
                                                    class="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.linkedin.com/company/dorld/"><i
                                                    class="fab fa-linkedin-in"></i></a></li>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="tgmobile__menu-backdrop"></div>
                        <!-- End Mobile Menu -->
                    </div>
                </div>
            </div>
        </div>





    </header>
    <!-- header-area-end -->



    <!-- main-area -->
    <main class="main--area">

        <!-- slider-area -->
        <section class="slider__area slider__bg">
            <div class="slider-activee">
                <div class="single-slider">
                    <div class="container custom-container">
                        <div class="row justify-content-between">
                            <div class="col-lg-6">
                                <div class="slider__content">
                                    <h6 class="sub-title wow fadeInUp" data-wow-delay=".2s">Welcome to the Future</h6>
                                    <h2 class="title wow fadeInUp" data-wow-delay=".5s">SNAS</h2>
                                    <p class="wow fadeInUp" data-wow-delay=".8s">Convert your text in Code</p>
                                    <div class="slider__btn wow fadeInUp" data-wow-delay="1.2s">
                                        {{-- @if (Route::has('login')) --}}

                                        {{-- @auth --}}
                                        <a href="{{ url('/dashboard') }}" class="tg-btn-1"><span>Get Start</span></a>


                                        {{-- @endauth --}}
                                        {{-- @endif --}}

                                        {{-- <a  class="tg-btn-1"></a> --}}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-5 col-lg-6">
                                <div class="slider__img text-center">
                                    <img src="./assets/video/0001-0120-unscreen.gif" class="wt" data-magnetic
                                        alt="img">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </section>
        <!-- slider-area-end -->

        <!-- about-area -->
        <section id="about" class="nft-item__area">
            <div class="container custom-container">
                <div class="row ">
                    <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
                        <h1 class="h1">ABOUT US</h1>


                        <p class="tg__animate-text style col-12">At SNAS, we believe that programming should be
                            accessible to all, regardless of their background or experience. That's why we've created an
                            intuitive platform that enables you to write code using natural language, so that you don't
                            have to spend hours learning complicated syntax. We're proud to have helped thousands of
                            businesses and individuals automate their programming tasks, saving them time and money.
                            Whether you're a beginner or an experienced programmer, SANAS has everything you need to
                            take your coding to the next level.</p>


                    </div>

                </div>
            </div>
            </div>
            </div>
        </section>
        <!--about-end -->

        <!-- area-background-start -->
        <div class="area-background" data-background="assets/img/bg/area_bg01.jpg">

            <!-- coNTACT-area -->
            <section id="contact" class="contact-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="contact__content">
                                <h2 class="overlay-title"><span>join us</span></h2>
                                <h2 class="title">CONTACT US</h2>
                                <p>If you have any questions or feedback about our platform, please don't hesitate to
                                    get in touch with us. We're always happy to hear from our users and to help with any
                                    issues you might be experiencing. </p>
                                <div class="footer-el-widget">
                                    <h4 class="title">information</h4>
                                    <ul class="list-wrap">
                                        <li><a href="tel:+923412664075">+923412664075</a></li>
                                        <li><a href="tel:+923363409403">+923363409403</a></li>

                                        <li><a href="mailto:dorld.org@gmail.com">dorld.org@gmail.com</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-10">
                            <div class="contact__form-wrap">
                                <form id="contact-form" action="assets/mail.php" method="POST">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="input-grp">
                                                <input name="name" type="text" placeholder="Name *" required>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="input-grp">
                                                <input name="email" type="email" placeholder="Email *" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-grp message-grp">
                                        <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                                    </div>
                                    <button class="submit-btn">Submit Now</button>
                                </form>
                                <p class="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- contact-area-end -->

            <!-- gallery-area -->
            <section id="news" class="gallery__area fix section-pb-130">
                <div class="gallery__slider">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-9 col-lg-10 col-md-11">
                                <div class="swiper-container gallery-active">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery01.jpg" data-cursor="-theme"
                                                        data-cursor-text="View <br> Image" class="popup-image"
                                                        title="PUBG Tournament"><img
                                                            src="assets/img/gallery/gallery01.jpg" alt="img"></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">How To login</h3>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery02.jpg" data-cursor="-theme"
                                                        data-cursor-text="View <br> Image" class="popup-image"
                                                        title="Assassin's Creed"><img
                                                            src="assets/img/gallery/gallery02.jpg" alt="img"></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Dashboard </h3>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery03.jpg" data-cursor="-theme"
                                                        data-cursor-text="View <br> Image" class="popup-image"
                                                        title="World of Warcraft"><img
                                                            src="assets/img/gallery/gallery03.jpg" alt="img"></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Creating chats</h3>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery04.jpg" data-cursor="-theme"
                                                        data-cursor-text="View <br> Image" class="popup-image"
                                                        title="The Chant 2"><img
                                                            src="assets/img/gallery/gallery04.jpg" alt="img"></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Converting text in to code</h3>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="gallery__item">
                                                <div class="gallery__thumb">
                                                    <a href="assets/img/gallery/gallery05.jpg" data-cursor="-theme"
                                                        data-cursor-text="View <br> Image" class="popup-image"
                                                        title="Dota 2 tournament"><img
                                                            src="assets/img/gallery/gallery05.jpg" alt="img"></a>
                                                </div>
                                                <div class="gallery__content">
                                                    <h3 class="title">Run your code</h3>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- scrollbar -->
                                    <div class="swiper-scrollbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- gallery-area-end -->


        </div>
        <!-- area-background-end -->

        <!-- team-area -->
        <section id="group" class="team__area team-bg section-pt-130 section-pb-100"
            data-background="assets/img/bg/team_bg.jpg">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10">
                        <div class="section__title text-center mb-60">
                            <span class="sub-title tg__animate-text">our team member</span>
                            <h3 class="title">ACTIVE TEAM MEMBERS</h3>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team01.png" alt="img"></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">Shayan Ali</a></h4>
                                <span class="designation">Fullstack Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="https://mrblack520.github.io/blackinfo.github.io/"><img
                                        src="assets/img/team/team02.png" alt="img"></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">M.Azhar Ghafoor</a></h4>
                                <span class="designation">Fullstack Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team03.png" alt="img"></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">Neha Khan </a></h4>
                                <span class="designation">AI/Machine learning</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                        <div class="team__item">
                            <div class="team__thumb">
                                <a href="team-details.html"><img src="assets/img/team/team04.png" alt="img"></a>
                            </div>
                            <div class="team__content">
                                <h4 class="name"><a href="team-details.html">Shahroz Rana</a></h4>
                                <span class="designation">Social media Marketing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- team-area-end -->

        <!-- video-area -->

        <!-- video-area-end -->

        <!-- roadMap-area -->

        <!-- roadMap-area-end -->

        <!-- trending-nft-area -->

        <!-- trending-nft-end -->

    </main>
    <!-- main-area-end -->


    <!-- footer-start -->
    <footer class="footer-style-one">
        <div class="footer__top-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-7">
                        <div class="footer-widget">
                            <div class="footer-logo logo">
                                <a href="/"><img src="assets/img/logo/logo.png" class="logo_fot"
                                        alt="Logo"></a>
                            </div>
                            <div class="footer-text">
                                <p class="desc">Our team of experienced programmers and developers has been working
                                    tirelessly to create a platform that is user-friendly, reliable, and efficient. We
                                    understand the importance of staying ahead in today's fast-paced digital world, and
                                    we're committed to providing our users with the latest tools and technologies to
                                    help them succeed.</p>
                                <p class="social-title">Active <span>With Us <i
                                            class="fas fa-angle-double-right"></i></span></p>
                                <div class="footer-social">
                                    <a href="http://www.dorld.tech/"><img width="500px"
                                            src="assets/img/icons/Artboard 5 copy-8.png" alt="icon"></a>
                                    <a href="https://www.linkedin.com/company/dorld/"><img
                                            src="assets/img/team/317750_linkedin_icon.png" alt="iocn"></a>
                                    <a href="https://www.instagram.com/d_orld20/"><img
                                            src="assets/img/icons/social_icon03.png" alt="iocn"></a>
                                    <a href="https://www.facebook.com/profile.php?id=100090833048696"><img
                                            src="assets/img/icons/logo-facebookpng-32221.png" alt="iocn"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                        <div class="footer-widget widget_nav_menu">
                            <h4 class="fw-title">quick link</h4>
                            <ul class="list-wrap menu">
                                <li><a href="#">Gaming</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">All NFTs</a></li>
                                <li><a href="#">Social Network</a></li>
                                <li><a href="#">Domain Names</a></li>
                                <li><a href="#">Collectibles</a></li>
                            </ul>
                        </div>
                    </div> -->
                    <div class="col-xl-2 col-lg-3 col-md-5 col-sm-6">
                        <div class="footer-widget widget_nav_menu">
                            <h4 class="fw-title">Supports</h4>
                            <ul class="list-wrap menu">
                                <li><a href="#">Setting & Privacy</a></li>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Live Auctions</a></li>
                                <li><a href="#">Item Details</a></li>
                                <li><a href="#">24/7 Supports</a></li>
                                <li><a href="#">Our News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-7">
                        <div class="footer-widget">
                            <h4 class="fw-title">Newsletter</h4>
                            <div class="footer-newsletter">
                                <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                                <form action="#" class="footer-newsletter-form">
                                    <input type="email" placeholder="Your email address">
                                    <button type="submit"><i class="fa-solid fa-location-arrow"
                                            style="color: #ffffff;"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright__wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="copyright__text">
                            <p>Copyright © 2023 - All Rights Reserved By <span>SNAS</span></p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="copyright__card text-center text-md-end">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer-start-end -->



    <!-- JS here -->
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/plugins.js"></script>
    <script src="assets/js/ajax-form.js"></script>
    <script src="assets/js/main.js"></script>
    <script></script>
</body>
</html>