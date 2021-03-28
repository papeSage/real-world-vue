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

        <!--elastislide carousel script ends-->

        <!--flexslider scripts starts-->

    </head>
  <Header/>
    <body>

        <section id="content" class="clearfix">

            <div class="container row-general">
                <center>
                    <h1>Solutions WEB</h1>
                </center>
                <div class="container row-general">
                    <div class="container">
                        <div class="row">

                            <div class="span5">
                                <div > <img src="../assets/../assets/img/preview/slide-graphisme.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Il y a trois réactions possibles à tout design : OUI, NON, et WAHOU ! La troisième est celle qu'on vise".</p>
                                </blockquote>
                            </div>

                            <div class="span7">
                                <h2>Graphisme</h2>
                                    <p style="font-size:16px; line-height:2;"> Nous sommes là pour vous offrir des services en graphisme. A ITSS nos graphistes : <br/>
                                        
                                           - Sont créatifs<br/>
                                           - Sont en perpétuelle veille technologique<br/>
                                           - Transforment des idées en images et assurent la transmission d’un message vers un public à travers leurs réalisations graphiques (logo, affiche, emballage, cédérom…).<br/>
                                           - Elaborent l’univers graphique de vos produits, de votre entreprise...<br/>
                                                                    
                                    </p>
                              
                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="container row-general">
                    <div class="container">
                        <div class="row">

                            <div class="span5">
                                <div class="frame"> <img src="../assets/../assets/img/preview/slide-web.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Un bon site Web est toujours "en construction" !"</p>
                                </blockquote>
                            </div>

                            <div class="span7">
                                <h2>Conception et maintenance de site web</h2>
                                <p style="font-size:16px; line-height:2;">Notre équipe de professionnels sait ce qui peut faire ou défaire un nouveau site Web. Votre site Web doit présenter un contenu organisé, une navigation intuitive et un attrait visuel conçu pour durer.
                                Avec ces idées à l'esprit, notre équipe crée des conceptions propres et professionnelles pour tous les types d'agences, d'entreprises et d'organisations, grandes et petites. Nos sites Web sont réactifs. . . ce qui signifie
                                    qu'ils seront automatiquement convertis en site mobile pour être visionnés avec des smartphones et des tablettes.. </p>

                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="container row-general">
                    <div class="container">
                        <div class="row">

                            <div class="span5">
                                <div class="frame"> <img src="../assets/../assets/img/preview/slide-maintenance.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"La maintenance informatique : sauvegarde des données , mise en place et mise à jour d'un anti-virus, vérification de l'état du système, des disques durs..."</p>
                                </blockquote>
                            </div>

                            <div class="span7">
                                <h2>Maintenance informatique</h2>
                                <p style="font-size:16px; line-height:2;">Nos objectifs :</p>
                                    <ul>
                                        <li><b>-</b> préserver les performances de vos matériels et logiciels</li><br><br>
                                        <li><b>-</b> mettre à jour votre système informatique </li>                   <br><br>                  
                                        <li><b>-</b> corriger les éventuels problèmes de votre parc informatique</li>                                         
                                    </ul>

                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="container row-general">
                    <div class="container">
                        <div class="row">

                            <div class="span5">
                                <div class="frame"> <img src="../assets/../assets/img/preview/slide-pao.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"La meilleure des publicités est un client satisfait !"</p>
                                </blockquote>
                            </div>

                            <div class="span7">
                                <h2>Publicité assistée par ordinateur</h2>
                                <p style="font-size:16px; line-height:2;">La publication assistée par ordinateur, communément abrégée PAO, consiste à préparer des documents destinés à 
                                l'impression à l'aide d'un ordinateur en lieu et place des procédés historiques de la typographie et de la photocomposition.
                               Avec nos logiciels de conception ou de publication nous vous aidons à créer des brochures, des plaquettes de vente, des publicités, des dessins techniques, et d'autres visuels de qualité. 
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>    

        </section>
    </body>
  <Footer />
    </html>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Solution',
    components: {
    Header,
    Footer        

    }
}
</script>

<style>
@import url("../assets/css/bootstrap-override.css");
@import url("../assets/css/prettyPhoto.css");
@import url("../assets/css/style.css");
@import url("../assets/css/bootstrap.css");
@import url("../assets/css/bootstrap-responsive.css");

.text-big{
    padding-left: 80px;
    line-height: 2em;
}
h2{
        padding-left: 80px;
}
</style>