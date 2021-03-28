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
                        <a href="#"><img src="../assets/img/logo.png" width="128" height="28" alt="logo"></a>
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
                                    <p> <a href="#">Facebook</a></p>
                                </li>
                                <li><img src="../assets/img/icons/icon-twitter.png" alt="icon">
                                    <p> <a href="#">Twitter</a></p>
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

        <!-- content starts
================================================== -->
        <section id="content" class="clearfix">

            <!-- ======= general row starts ======= -->
            <div class="container row-general">
                <center>
                    <h1>Administration RH & Support global de paie.</h1>
                </center>
                <!--divider here-->
                <div class="divider"></div>
                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span5">
                                <div class="frame"> <img src="../assets/img/preview/slide-rh.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"La gestion de vos ressources humaines est notre préoccupation ."</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Administration RH </h2>
                                <p class="text-big">
                                    Le rendement d’une société dépend de la qualité de son personnel.
                                </p>
                                <p>
                                    Notre service Administration RH vous dégage de toutes les responsabilités liées au recrutement d’agent, la gestion des carrières, l’organisation des divers contrats, les déclarations, le suivi et la formation du personnel, les contentieux.
                                </p>
                                <p>
                                    Nos experts en Gestion des RH prendront en charge la totalité du management de votre personnel, en vue de vous permettre de vous concentrer sur le rendement et la productivité de votre entreprise.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- ======= general row ends ======= -->

                    <!--divider here-->
                    <div class="divider"></div>
                    <!-- ======= general row starts ======= -->
                    <div class="container row-general">
                        <div class="container">
                            <div class="row">

                                <!--first column starts-->
                                <div class="span5">
                                    <div class="frame"> <img src="../assets/img/preview/slide-paie.jpg" alt="image"> </div>
                                    <div class="spacer-20px"></div>
                                    <blockquote>
                                        <p>"Le support global de paie est indispensable pour votre entrprise"</p>
                                    </blockquote>
                                </div>
                                <!--first column ends-->

                                <!--second column starts-->
                                <div class="span7">
                                    <h2>Support global de paie </h2>
                                    <p class="text-big">L'ITSS est un établissement privé. A ce titre, il est doté d'un Agent comptable principal et, dans chaque région, d'un Agent comptable secondaire (ACS). L'Agent comptable secondaire a la qualité de comptable public,
                                        nommé par le Ministère de l'Economie et des Finances.
                                    </p>
                                    <p>
                                        L'Agent comptable secondaire, secondé par deux gestionnaires comptables, est chargé de :
                                    <p>
                                        - La tenue de la comptabilité générale de la Délégation régionale </br>
                                        - L’enregistrement des créances et l'encaissement des recettes</br>
                                        - Le paiement des dépenses des structures de recherche et de la DR au regard des règles de la comptabilité publique</br>
                                        - Le maniement des fonds et mouvements des comptes de disponibilités
                                    </p>

                                    </p>
                                    <p>Garants du respect des règles financières et comptables applicables aux établissements publics, l'Agent comptable secondaire et ses collaborateurs travaillent en étroite collaboration avec l'ensemble des services nationaux
                                        et régionaux de l'Inserm pour faire cohabiter ces règles avec les particularités et les exigences de la recherche publique. </p>

                                </div>
                            </div>
                        </div>
                        <!-- ======= general row ends ======= -->

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
                    <!--third column ends-->

                    <!--fourth column starts-->
                    <div class="span3 ">
                        <h4>Nous contacter</h4>
                        <address>
                            Siege ITservicegroup.<br />
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
                    <!--fourth column ends-->

                </div>
            </div>
        </footer>
        <!-- footer ends
================================================== -->

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
    name: "administration",
    components: {
        Menu,
        Navbar,
        Item,
        Itemmenu
        
    }
};
</script>

<style>
@import url('../assets/css/bootstrap-override.css');
@import url('../assets/css/prettyPhoto.css');
@import url('../assets/css/style.css');
@import url('../assets/css/bootstrap.css');
@import url('../assets/css/bootstrap-responsive.css');
</style>
