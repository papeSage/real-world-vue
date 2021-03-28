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


        <!-- content starts ================================================== -->
        <section id="content" class="clearfix">

            <!-- ======= general row starts ======= -->
            <div class="container row-general">
                <center>
                    <h1>Développement WEB</h1>
                </center>
                <!--divider here-->
                
                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span4">
                                <div > <img src="../assets/img/preview/slide-developpement1.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Un bon site web vaut mieux qu'un beau site web."</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span12">
                                <p style="font-size:16px; line-height:2;">Nos développeurs web s’occupent de la réalisation de l’ensemble des fonctionnalités techniques de vos sites Internet ou de 
                                vos applications web. En fonction des exigences présentées dans un cahier des charges précis, ces spécialistes analysent les besoins et définissent la 
                                solution technique adaptée. Ils développent ensuite les fonctionnalités du site ou de l’application web en rédigeant des lignes de code. Ses 
                                missions incluent également le diagnostic et la résolution de problèmes détectés sur un site déjà en ligne. La polyvalence, l’autonomie, 
                                la capacité d’adaptation ainsi que le respect des délais figurent parmi les qualités de ce professionnel. </p>

                            </div>
                        </div>
                    </div>
                    <!-- ======= general row ends ======= -->
                </div>    
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
    name: 'Developpement',
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
    padding-left: 50px;
    line-height: 3em;
}
</style>

