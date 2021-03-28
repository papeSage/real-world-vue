<template lang="en">
<div>
    <!DOCTYPE html>
    <html class="no-js" lang="en" xmlns:th="http://www.thymeleaf.org">

    <head>
        <meta charset="utf-8">
        <meta name="description" content="app,software responsive site template" />
        <meta name="keywords" content="app,software,ipad,iphone,marketing,responsive,business,marketing,corporate" />
        <meta name="author" content="Tansh" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>IT Services & Solutions</title>

        <!--Fav and touch icons-->
        <link rel="shortcut icon" href="../assets/img/icons/favicon.ico">
        <link rel="apple-touch-icon" href="../assets/img/icons/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="../assets/72x72" href="../assets/img/icons/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="../assets/114x114" href="../assets/img/icons/apple-touch-icon-114x114.png">

        <!--google web font-->

    </head>

    <body>

        <!-- header starts
================================================== -->
        <section id="header" class="clearfix">

            <!--header-inner starts-->
            <div id="header-inner" class="container">
                <div class="row">

                    <!--logo starts-->
                    <div class="span4 logo">
                        <a href="#"><img src="../assets/img/logo.png" width="100" height="10" alt="logo"></a>
                    </div>
                    <!--logo ends-->

                    <!--menu starts-->
                     <div class="span11">
                        <div id="smoothmenu" class="ddsmoothmenu">
                            <ul id="nav">
                                <li>
                                    <router-link to="/">Accueil ITSS </router-link>
                                </li>
                                <li>
                                    <router-link to="/about">A propos</router-link>
                                </li>

                                <li>
                                   <Item/>
                                </li>
                                 
                                <li>
                                   <Itemmenu/>
                                </li>
                                <li>
                                    <router-link to="/pack"> Pack Assistance Pro </router-link>
                                </li>
                           
                                <li>
                                    <router-link to="/contact"> Contact </router-link>
                                </li>
                                <li>
                                    <router-link to="/compte"> Mon compte </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--menu ends-->

                </div>
            </div>
            <!--header-inner ends-->

            <!--header-btm starts-->
            <div id="header-btm">
                <div class="container">
                    <div class="row">
                        <div class="span12"> <img src="../assets/img/icons/icon-phone.png" alt="icon">
                            <p>Appel pour assistance / +229 90 00 00 01</p>
                            <ul>
                                <li><img src="../assets/img/icons/icon-facebook.png" alt="icon">
                                    <p> <a href="https://m.facebook.com/It-Services-Solutions-105295647868069/">Facebook</a>
                                    </p>
                                </li>
                                <li><img src="../assets/img/icons/icon-twitter.png" alt="icon">
                                    <p> <a href="https://mobile.twitter.com/ITServicesSolu2">Twitter</a></p>
                                </li>
                                <li><img src="../assets/img/icons/icon-linkedin.png" alt="icon">
                                    <p> <a href="#">Linkedin</a></p>
                                </li>
                                <li><img src="../assets/img/icons/icon-user.png" alt="icon">
                                    <p> <a href="#myModal" role="button" data-toggle="modal">Login</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--header-btm ends-->

        </section>
        <!-- header ends
================================================== -->



 <section id="content" class="clearfix">
             <div class="container">
                    <div class="row"  style="background:-webkit-gradient(linear, bottom, top, from(#fffefe), to(#000000));">
                             <center  >
                                                        <div id="slider" class="slider">
                                                            <figure  >


                                                            
                                                                        <!--espace img -->
                                                                                
                                                                        
                                                                         <div style="width:120;" >  <img src="../assets/img/preview/slider-bg.jpg" width="1"  alt="slide" /></div>
                                                                                
                                                                          
                                                                        
                                                                     <img src="../assets/img/preview/slide-1.png" height="605px" width="1025" alt> 
                                                                 <li>
                                                                   
                                                                        <!-- Slideshow container -->
                                                                                
                                                                        
                                                                        <div class="col-md-6">
                                                                        
                                                                            <div class="span7"><img src="../assets/img/preview/slide-1.png"  height="605px" width="425"  alt="slide" /><h1>Amélioration de l'efficacité commerciale</h1>
                                                                            <div><p>Atténuez vos défis commerciaux fffffffffffffffffffffffff <br />avec nos offres de gestion<br /> des processus métier (GPM)<br /> et de technologie. </p></div>
                                                                            </div>
                                                                                
                                                                                <!-- <p>Atténuez vos défis commerciaux <br />avec nos offres de gestion<br /> des processus métier (GPM)<br /> et de technologie. </p> -->
                                                                                
                                                                            
                                                                        </div>
                                                                        
                                                                    
                                                                   
                                                                </li>
                                                                 <!--espace img -->
                                                                               
                                                                        
                                                                          <div style="width:150;" >  <img src="../assets/img/preview/slider-bg.jpg" width="1"  alt="slide" /></div>
                                                                                
                                                                           
                                                           
                                                                <!-- <img src="../assets/img/preview/slide-1.png" height="605px" width="425" alt> -->
                                                                <li>
                                                                        
                                                                            <div class="col-md-6">
                                                                                <div class="span7"> <img src="../assets/img/preview/slide-2.png"  height="605px" width="425" alt="slide" /><h1>Maximiser la valeur du portefeuille des sociétés d'équités privées</h1></div>
                                                                                <!-- <div class="span5">
                                                                                   
                                                                                    <p>Générez une valeur de portefeuille <br />plus élevée avec une livraison rapide
                                                                                        <br /> et une assistance de bout en bout tout <br />au long du cycle de vie des transactions.
                                                                                    </p>
                                                                                   
                                                                                </div> -->
                                                                               
                                                                            </div>
                                                                    
                                                                </li>
                                                                 <!--espace img -->
                                                                               
                                                                        
                                                                           <div style="width:150;" >  <img src="../assets/img/preview/slider-bg.jpg" width="1"  alt="slide" /></div>
                                                              
                                                                <!-- <img src="../assets/img/preview/slide-2.png" height="615px" width="435" alt> -->
                                                                 <li>
                                                                   
                                                                       <div class="col-md-6">
                                                                            <div class="span7"><img src="../assets/img/preview/slide-3.png"  height="615px" width="435" alt="slide" /><h1>Transformer les entreprises en incubant des technologies avancées</h1></div>
                                                                            <!-- <div class="span5 ">
                                                                                
                                                                                <p>Tirez parti des solutions & services WEB<br /> de la Big Data, des formations <br />et plus encore,<br /> pour obtenir des avantages compétitifs.
                                                                                </p>
                                                                               
                                                                            </div> -->
                                                                       </div>
                                                                    
                                                                   
                                                                </li>
                                                                 <!--espace img -->
                                                                               
                                                                        
                                                                           <div style="width:150;" >  <img src="../assets/img/preview/slider-bg.jpg" width="1"  alt="slide" /></div>
                                                           
                                                                 <li>
                                                                       <div class="col-md-6">
                                                                     <div class="span7"><img src="../assets/img/preview/slide-4.png"  height="605px" width="425" alt="slide" /><h1>Meilleurs services informatiques</h1></div>
                                                                    
                                                                            <!-- <div class="span5">
                                                                                
                                                                                <p>Des services et solutions WEB <br />de pointe qui renforcent votre
                                                                                    <br />entreprise et vous conduisent<br /> a l'atteinte des resultats.
                                                                                </p>
                                                                                
                                                                            </div> -->
                                                                             </div>
                                                                           
                                                                
                                                                   
                                                                </li>
                                                                 <!--espace img -->
                                                                               
                                                                        
                                                                           <div style="width:120;" >  <img src="../assets/img/preview/slider-bg.jpg" width="1"  alt="slide" /></div>
                                                                <!-- <img src="../assets/img/preview/slide-3.png" height="605px" width="425" alt> -->
                                                            </figure>
                                                            </div>

                                                     </center>
                                
                            
             
                
                <!--slides end-->

        <!-- content starts
================================================== -->
        <section id="content" class="clearfix">

            <!-- ======= slider-bg starts ======= -->
            <div id="slider-bg">

                <!--slides start-->
                <div class="container clearfix">
                    <div class="row">
                        <div class="span12">
                            <div class="flexslider image-text-slider">
                                <ul class="slides">

                                    <!--first slide starts-->
                                    <li>
                                        <div class="row">
                                            <div class="span7"><img src="../assets/img/preview/slide-1.png" alt="slide" /></div>
                                            <div class="span5 text-right">
                                                <h1>Amélioration de l'efficacité commerciale et econo</h1>
                                                <p>Atténuez vos défis commerciaux <br />avec nos offres de gestion<br /> des processus métier (GPM)<br /> et de technologie. </p>
                                                <a href="#" class="mybtn-arrow"><span>Essayer maintenant</span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <!--first slide ends-->

                                    <!--second slide starts-->
                                    <li>
                                        <div class="row">
                                            <div class="span5">
                                                <h1>Maximiser la valeur du portefeuille des sociétés d'équités privées</h1>
                                                <p>Générez une valeur de portefeuille <br />plus élevée avec une livraison rapide
                                                    <br /> et une assistance de bout en bout tout <br />au long du cycle de vie des transactions.
                                                </p>
                                                <a href="#" class="mybtn-arrow">obtenez le maintenant</a>
                                            </div>
                                            <div class="span7"><img src="../assets/img/preview/slide-2.png" alt="slide" /></div>
                                        </div>
                                    </li>
                                    <!--second slide ends-->

                                    <!--third slide starts-->
                                    <li>
                                        <div class="row">
                                            <div class="span7"><img src="../assets/img/preview/slide-3.png" alt="slide" /></div>
                                            <div class="span5 text-right">
                                                <h1>Transformer les entreprises en incubant des technologies avancées</h1>
                                                <p>Tirez parti des solutions & services WEB<br /> de la Big Data, des formations <br />et plus encore,<br /> pour obtenir des avantages compétitifs.
                                                </p>
                                                <a href="#" class="mybtn-arrow"><span>Essayer maintenant</span></a>
                                            </div>
                                        </div>
                                    </li>
                                    <!--third slide ends-->

                                    <!--fourth slide starts-->
                                    <li>
                                        <div class="row">
                                            <div class="span5">
                                                <h1>Meilleurs services informatiques</h1>
                                                <p>Des services et solutions WEB <br />de pointe qui renforcent votre
                                                    <br />entreprise et vous conduisent<br /> a l'atteinte des resultats.
                                                </p>
                                                <a href="#" class="mybtn-arrow"> <span>Voir plus</span></a>
                                            </div>
                                            <div class="span7"><img src="../assets/img/preview/slide-4.png" alt="slide" /></div>
                                        </div>
                                    </li>
                                    <!--fourth slide ends-->

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--slides end-->

                <!--caption-static starts-->
                <div id="caption-static">
                    <div class="container">
                        <div class="row">
                            <div class="span12">
                                <p>Payer au prix bas que <a href="pricing-3col.html" class="color">FCFA 5000/mois</a>. Payez au fur et à mesure. Annulez à tout moment.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--caption-static ends-->

            </div>
            <!-- ======= slider-bg ends ======= -->

            <!-- ======= color-toned row starts ======= -->
            <div class="row-colortoned">
                <div class="container">
                    <div class="row">
                        <div class="span12">
                            <h2>Vivez la différence.</h2>
                            <p class="text-big">Votre partenaire en solutions logicielles et en transformation technologique.
                                <br /> Une fondation numerique solide pour le changement.
                            </p>

                            <!--features starts-->
                            <ul class="list-3col features-centered">
                                <li> <img src="../assets/img/icons/icon-clipboard.png" alt="icon">
                                    <p class="text-small">Magnifiquement code</p>
                                    <div class="divider-arrow"></div>
                                    <h4>Bon balisage</h4>
                                    Une meilleure architecture de vos solutions pour les rendre flexible et faciliment integrable.
                                </li>
                                <li> <img src="../assets/img/icons/icon-cloud.png" alt="icon">
                                    <p class="text-small">Fait sur mesure</p>
                                    <div class="divider-arrow"></div>
                                    <h4>Modèle unique</h4>
                                    Interface graphique parfaitement bien travaille pour votre satifaction.
                                </li>
                                <li> <img src="../assets/img/icons/icon-compass.png" alt="icon">
                                    <p class="text-small">Tout est en detail</p>
                                    <div class="divider-arrow"></div>
                                    <h4>Précision</h4>
                                    Notre travaillons vos solutions avec Précision pour une meilleure experience client.
                                </li>
                            </ul>
                            <!--features ends-->

                        </div>
                    </div>
                </div>
            </div>
            <!-- ======= color-toned row ends ======= -->

            <!-- ======= general row starts ======= -->
            <div class="container row-general">

                <!--content and image row starts-->
                <div class="row">

                    <!--first column starts-->
                    <div class="span6">
                        <h2>Exclusivement par IT Services & Solutions.</h2>
                        <p class="text-big">Nous mettons a votre dispositions des solutions adaptees quelque soit le type d'appareil que vous disposez.</p>
                        <div class="spacer-10px"></div>
                        <ul class="list-4col">
                            <li>
                                <h4 class="heading-icon"><img src="../assets/img/icons/icon-24x24-iPhone.png" alt="icon"> Pour iPhone
                                </h4>
                                <p>Solutions adaptées, compatibles avec <span class="color">Iphone</span> </p>
                            </li>
                            <li>
                                <h4 class="heading-icon"> <img src="../assets/img/icons/icon-24x24-iPad.png" alt="icon"> Pour iPad
                                </h4>
                                <p>Solutions adaptées, compatibles avec <span class="color">Ipad</span></p>
                            </li>
                        </ul>
                    </div>
                    <!--first column ends-->

                    <!--second column starts-->
                    <div class="span6"><img src="../assets/img/preview/img-browser.png" alt="img" class="img-right"></div>
                    <!--second column ends-->

                </div>
                <!--content and image row ends-->

                <!--divider here-->
                <div class="divider"></div>

                <!--infographic and tesimonial row starts-->
                <div class="row">

                    <!--first column starts-->
                    <div class="span8">
                        <div class="spacer-30px"></div>
                        <ul class="list-6col infographic text-center">
                            <li> <img src="../assets/img/preview/infographic-1.png" alt="img">
                                <h1>500+</h1>
                                Des clients satisfaits dans le monde
                            </li>
                            <li> <img src="../assets/img/preview/infographic-2.png" alt="img">
                                <h1>99%</h1>
                                Service client précis
                            </li>
                            <li> <img src="../assets/img/preview/infographic-3.png" alt="img">
                                <h1>10</h1>
                                Années d'expérience professionnelle
                            </li>
                            <li> <img src="../assets/img/preview/infographic-4.png" alt="img">
                                <h1>5K</h1>
                                Réponses aux questions d'assistance jusqu'à présent
                            </li>
                        </ul>
                    </div>
                    <!--first column ends-->

                    <!--second column starts-->

                    <div class="span4">
                        <div class="clearfix"></div>
                        <div class="box-styled">
                            <div class="box-head clearfix">
                                <h4 style="margin-top: 10px;">IT Services & Solutions
                                    <span>contact@it-servicegroup.com</span>
                                </h4>
                                <div class="photo"><img src="../assets/img/preview/user-1.jpg" alt="img"></div>
                            </div>
                            <div class="box-body review">Nous vous proposons des solutions durables, assurées et de qualités. <br><br> Votre satisfation et notre devise. </div>
                        </div>
                    </div>
                    <!--second column ends-->

                </div>
                <!--infographic and tesimonial row ends-->

                <!--divider here-->
                <div class="divider"></div>

                <!--twitter row starts-->
                <div class="row">
                    <div class="span12 text-center"> <span class="heading-twitter"> <a href="#">@ITSERVICEGROUP</a></span>
                        <div class="twitter"></div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <!--twitter row ends-->

            </div>
            <!-- ======= general row ends ======= -->

        </section>
        <!-- content ends
================================================== -->

        <!-- footer starts
================================================== -->
        <footer id="footer" class="clearfix">
            <div id="footer-inner" class="container">
                <div class="row">

                    <!--first column starts-->
                    <div class="span3">
                        <h4>2020 © ITSERVICEGROUP.</h4>
                        <p>Write some information or quote about your liber tempor cum soluta nobis eleifend option congue nihil doming id company or product.</p>
                        <img src="../assets/img/logo.png" alt="logo">
                    </div>
                    <!--first column ends-->

                    <!--second column starts-->
                    <div class="span3">
                        <h4>Itservicegroup Newsletter</h4>
                        <p>Join Itservicegroup to receive news about new products and product updates.</p>
                        <p class="text-vsmall">* Une sorte de déclaration ici.</p>
                        <form id="subform" method="post" action="subscribe-form.php">
                            <fieldset>
                                <p>
                                    <input name="email" class="required email" type="text" placeholder="Email here">
                                    <input type="submit" value="OK" class="sub-submit" />
                                </p>
                                <div id="subresult"></div>
                            </fieldset>
                        </form>
                    </div>
                    <!--second column ends-->

                    <!--third column starts-->
                    <div class="span3">
                        <h4>quelques images</h4>
                        <div class="flickr">

                        </div>
                        <div class="clearfix"></div>
                    </div>

                    <div class="span3 ">
                        <h4>Nous contacter</h4>

                        <address>

                            Siege ITservicegroup <br />

                            Lot 132 Sodjeatinmin, Maison GBAGUIDI<br />

                            01 BP 128 Cotonou
                        </address>

                        <ul class="social">

                            <li><img src="../assets/img/icons/icon-twitter.png" alt="icon"></li>
                            <li><img src="../assets/img/icons/icon-dribbble.png" alt="icon"></li>
                            <li><img src="../assets/img/icons/icon-googleplus.png" alt="icon"></li>

                            <li><img src="../assets/img/icons/icon-linkedin.png" alt="icon"></li>
                            <li><img src="../assets/img/icons/icon-skype.png" alt="icon"></li>
                            <li><img src="../assets/img/icons/icon-pinterest.png" alt="icon"></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
        <!-- footer ends
================================================== -->

        <!--modal for login form starts -->

        <!--modal for login form ends -->

    </body>

    </html>
</div>
</template>

<script>
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Item from '../components/Item';
import Itemmenu from '../components/Itemmenu';
export default {
    name: "index",
    components: {
        Menu,
        Navbar,
        Item,
        Itemmenu
        
    }
};
</script>

<style>

</style>
