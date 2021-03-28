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
    <Header/>
    <body>

        <!-- content starts
================================================== -->
        <section id="content" class="clearfix">

            <!-- ======= general row starts ======= -->
            <div class="container row-general">
                <center>
                    <h1>Infrastructure Réseau & Sécurite</h1>
                </center>
                <!--divider here-->
               
                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span5">
                                <div > <img src="../assets/img/preview/slide-reseaux.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Redouté par les uns et adulé par les autres, le réseau des réseaux présente un double visage : ce peut être à la fois un danger et un vecteur de liberté"</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Infrastructure Réseau</h2>
                                <p style="font-size:16px; line-height:2;">La mise en place d’une infrastructure réseau constitue une obligation pour toute société moderne et ambitieuse. Celle-ci s’apparente à la charpente de 
                                votre organisation informatique. Nous intervenons dans la liaison des équipements et périphériques physiquement ou virtuellement afin de centraliser et sauvegarder vos données, 
                                de simplifier la communication entre tous les agents et d'assurer une gestion optimale de la connexion via le serveur.</p>  
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ======= general row ends ======= -->

                <!--divider here-->
                
                
                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span5">
                                <div class="frame"> <img src="../assets/img/preview/slide-securite.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Pour protéger son SI, il faut prendre en compte le contexte et la réaction en temps réel."</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Sécurite</h2>
                                <p style="font-size:16px; line-height:2;">La sécurité informatique protège l'intégrité des technologies de l'information comme 
                                les systèmes, les réseaux et les données informatiques contre les attaques, les dommages ou les accès non autorisés. 
                                Nous répondons aussi présent en ce qui concerne :
                                    <ul>
                                        <li><b>-</b> l'analyse des risques</li>
                
                                        <li><b>-</b> la mise en œuvre d'une solution et l'évaluation de cette solution</li>
                                        <li><b>-</b> la mise à jour de la solution et de la politique au regard de l’évolution des risques</li>
                                    </ul>
                                 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ======= general row ends ======= -->
            </div>    
        </section>
        <!-- content ends ================================================== -->
    </body>
  <Footer />
    </html>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Infrastructure',
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
</style>