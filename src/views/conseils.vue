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
                    <h1>Conseils & Audit Informatique</h1>
                </center>
                <!--divider here-->
                
                <!-- ======= general row starts ======= -->
                <div class="container row-general">
                    <div class="container">
                        <div class="row">
                            <!--first column starts-->
                            <div class="span5">
                                <div > <img src="../assets/img/preview/slide-conseils.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"Soyez conseillé pour optimiser votre SI ."</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Conseils</h2>
                                <p style="font-size:16px; line-height:2;">Dans un environnement en mouvement, il devient stratégique de concevoir une vision future de 
                                votre informatique pour planifier et optimiser les investissements</br>
                                Nos spécialistes sont à vos côtés pour
                                créer une nouvelle vision et vous apporter conseils et recommandations concrètes.
                                Nos conseils pour l’optimisation de votre système informatique sont avant tout basés sur le bon sens, la rigueur et une bonne dose d’expérience. 

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
                                <div > <img src="../assets/img/preview/slide-audit.jpg" alt="image"> </div>
                                <div class="spacer-20px"></div>
                                <blockquote>
                                    <p>"L'audit Informatique vous assure une bonne continuité de vos activités ."</p>
                                </blockquote>
                            </div>
                            <!--first column ends-->

                            <!--second column starts-->
                            <div class="span7">
                                <h2>Audit Informatique</h2>
                                <p style="font-size:16px; line-height:2;">Un audit informatique a pour objectif principal d’évaluer le niveau de contrôle des risques associés aux activités informatiques
                                <p>Vous questionnez votre infrastructure actuelle ? Aller vers le cloud ou plutôt vers une infrastructure on-premise ; 
                                    conserver ou déléguer la gestion ; revoir 
                                    l’architecture réseau… .</p>
                                <p>Nous vous proposons une analyse factuelle de votre situation et des actions d’amélioration. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  <!-- ======= general row ends ======= -->
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
    name: 'Conseils',
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