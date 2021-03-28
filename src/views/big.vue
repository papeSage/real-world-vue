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
                    <h1>Big Data & Business Intelligence</h1>
                </center>
                <!--divider here-->

                <!--divider here-->
                
                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span5">
                                <div > <img src="../assets/img/preview/slide-intelligence.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Notre objectif est de vous accompagner dans vos prises de décisions. "</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Business Intelligence</h2>
                                <p style="font-size:16px; line-height:2;"> De nos jours, l'analyse de données joue un rôle très important au profit de la prise de décision en entreprise.
                                    Nous vous proposons des experts du domaine qui vous aideront <br/> 
                                    -A accélérer et améliorer vos prises de décisions,à optimiser vos processus internes<br/>
                                    -A augmenter l’efficience d’exploitation, à générer de nouveaux revenus, et de prendre l’avantage sur la concurrence<br/>
                                    -A identifier les tendances du marché et à repérer les problèmes qui doivent être résolus.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ======= general row ends ======= -->

                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span5">
                                <div class="frame"> <img src="../assets/img/preview/slide-big.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>" Sans connaissance de son audience, et sans hypothèses préalables solides, la Big data ne sert à rien."</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Big Data</h2>
                                <p style="font-size:16px; line-height:2;">
                                            Nos analyses vous permettront<br/>
                                         -de mieux comprendre votre audience. ...<br/>
                                         -d'accroître la performance de vos campagnes marketing. ...<br/>
                                         -de personnaliser l'expérience utilisateur sur votre site web. ...<br/>
                                         -d'optimiser la fidélisation et la relation client. ...<br/>
                                         -de prédire les tendances futures.
    
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
    name: 'Big',
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
    line-height: 2em;
}
</style>