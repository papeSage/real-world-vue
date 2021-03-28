<template lang="en">
<div>
    <html class="no-js" lang="en">

    <!--Fav and touch icons-->
    <link rel="shortcut icon" href="../assets/img/icons/favicon.ico">
    <link rel="apple-touch-icon" href="../assets/img/icons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="../assets/72x72" href="../assets/img/icons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="../assets/114x114" href="../assets/img/icons/apple-touch-icon-114x114.png">

    <!--google web font-->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,600' rel='stylesheet' type='text/css'>

    <!--basic style sheets-->
    <Header />
    <body>
        <section id="content" class="clearfix">

            <div id="content-intro">
                <div class="container">
                    <div class="row">
                        <div class="span12">
                            <h1>A propos de nous</h1>

                            <ul class="breadcrumb">
                                <li><a href="#">Lien</a> <span>/</span></li>
                                <li><router-link to="/about" class="active">A propos</router-link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container row-general">
                <div class="row">
                    <div class="span12">

                        <p class="pull-left text-big">
                            Créé en 2016, IT Services & Solutions est un écosystème d’innovation et une communauté pour les personnes qui souhaitent co-créer et collaborer sur des projets visant à résoudre des problèmes critiques au niveau national et international. Notre mission
                            est de promouvoir une culture de l'entrepreneuriat ancrée dans l'innovation, la créativité et le partage. A IT Services & Solutions, nous offrons plusieurs solutions : le développement web, les solutions web, les infrastructures
                            réseaux et sécurité, l’ingénierie des produits et services , le Big Data et Business intelligent Analytique, le Conseil et Audit Informatique ainsi que des formations. Notre processus métier est composer de : Service financier
                            et comptable, Administration RH et support global de paie, Traduction de documents, Gestion des contrats, Renouvèlement de contrats et la gestion des commandes, Services juridiques, Secrétariat et support de conformité .Notre communauté
                            comprend des entrepreneurs, des concepteurs, des développeurs, des spécialistes du marketing, et nous avons actuellement 1 site à Cotonou (Bénin) : Lot 132 Sodjeatinmin, Maison GBAGUIDI.
                        </p><br><br>

                        <div style="text-align: center;">
                        <h2>Pourquoi nous choisir ? </h2>
                        <p class="text-big">Notre mission est de créer un écosystème favorable à la co-création et à l’émergence de solutions d’envergure mondiale.</p>
                        <p></p><br><br>
                        </div>

                        <!-- <div class="spacer-10px"></div> -->
                        <ul class="list-3col feature-center-img">
                            <li>
                                <h3>Formative</h3>
                                <img src="../assets/img/icons/about-infographic-1.png" alt="icon">
                                <p>
                                    A travers ses différents programmes de formation, IT Services & Solutions participe à la création de valeur ajoutée dans l’écosystème entrepreneurial tech et se donne pour mission de créer une génération de <b>« success stories »</b> dans le numérique.
                                </p>
                            </li>
                            <li>
                                <h3>Accélération de startups</h3>
                                <img src="../assets/img/icons/about-infographic-2.png" alt="icon">
                                <p> Les programmes de formations de de processus métiers de IT Services & Solutions apportent un soutien technique, un mentorat de haute qualité, pour accompagner les entrepreneurs numériques et toute personne assoiffée de la connaissance.</p>
                            </li>
                            <li>
                                <h3>Solutions de qualité</h3>
                                <img src="../assets/img/icons/about-infographic-3.png" alt="icon">
                                <p>IT Services & Solutions propose aux entreprises, particuliers, organisations non gouvernementales et gouvernements des solutions sur-mesure et adaptées à leurs structures afin de les aider à atteindre leurs objectifs.</p>
                            </li>
                        </ul>

                        <!--divider here-->
                        <div class="spacer-10px"></div>
                        <div class="proc">
                            <div style="text-align: center;">
                            <h2>Notre procédure </h2>
                            <p class="text-big">Nous travaillons selon une procédure bien déterminée afin d’offrir des services de qualités et garantir la satisfaction de nos clients.
                            </p><br>
                            </div>

                            <!-- <div class="spacer-10px"></div> -->
                            <ul class="list-4col features-centered">
                                <li>
                                    <p class="text-small">Première étape</p>
                                    <!-- <div class="divider-greyarrow"></div> -->
                                    <h4>Analyse de problème </h4>
                                    <p>Cette étape consiste à analyser le problème posé par le client afin de d’envisager les éventuelles solutions.</p>
                                </li>
                                <li>
                                    <p class="text-small">Deuxième étape</p>
                                    <!-- <div class="divider-greyarrow"></div> -->
                                    <h4> Proposition de solution </h4>
                                    <p>Des propositions sont faites au client afin qu’il choisisse le mieux adapté selon ses convictions et ses moyens. </p>
                                </li>
                                <li>
                                    <p class="text-small">Troisième étape</p>
                                    <!-- <div class="divider-greyarrow"></div> -->
                                    <h4>Développement de la solution </h4>
                                    <p> Des ingénieurs qualifiés dans le domaine conçoivent la solution répondant aux exigences du client . </p>
                                </li>
                                <li>
                                    <p class="text-small">Quatrième étape</p>
                                    <!-- <div class="divider-greyarrow"></div> -->
                                    <h4>Livraison de la solution</h4>
                                    <p>Cette étape consiste à déployer la solution au service du client pour une expérimentation. </p>
                                </li>
                            </ul>
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
    name: 'About',
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

.feature-center-img{
    padding-left: 120px;
}

.features-centered{
    padding-left: 120px;
}

.proc{
    padding-bottom: 40px;
}

.pull-left{
line-height: 2em;
}
</style>
