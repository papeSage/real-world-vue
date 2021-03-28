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
    <Header/>
    <body>

        <!-- content starts ================================================== -->
        <section id="content" class="clearfix">

            <!-- ======= content-intro starts ======= -->
            <div id="content-intro">
                <div class="container">
                    <div class="row">
                        <div class="span12">
                            <h1>Nous contactez</h1>

                            <!--breadcrumb starts-->
                            <ul class="breadcrumb">
                                <li><a href="#">Lien</a> <span>/</span></li>
                                 <li><router-link to="/contact" class="active">Contact</router-link></li>
                            </ul>
                            <!--breadcrumb ends-->

                        </div>
                    </div>
                </div>
            </div>
            <!-- ======= content-intro ends ======= -->

            <!-- ======= general row starts ======= -->
            <div class="container row-general">
                <div class="row">

                    <!--main-content starts-->
                    <div id="main-content" class="span8">
                        <h3>Formulaire des requêtes</h3>
                        <p>Soumettez-nous vos requêtes par se formulaire.
                        </p>
                        <form id="contactform" method="post" action="submit-form.php">
                            <fieldset>
                                <p>
                                    <label>Votre Nom</label>
                                    <input name="name" type="text" placeholder="Nom">
                                </p>
                                <p>
                                    <label>Votre Email*</label>
                                    <input name="email" class="required email" type="text" placeholder="Email">
                                </p>
                                <p>
                                    <label>Sujet</label>
                                    <input name="subject" type="text" placeholder="Sujet">
                                </p>
                                <p class="antispam">Leave this empty: <br />
                                    <input name="url" />
                                </p>
                                <p>
                                    <label>Message*</label>
                                    <textarea rows="6" name="message" id="message" class="required" placeholder="Ecrivez votre Message"></textarea>
                                </p>
                                <p>
                                    <input type="submit" value="Envoyer Message" class="submit" />
                                </p>
                                <div id="result"></div>
                            </fieldset>
                        </form>
                    </div>
                    <!--main-content ends-->

                    <!--sidebar starts-->
                    <div class="span4">
                        <div id="sidebar-right">
                            <h3>Informations de contacts </h3>
                            <div class="addrs">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Telephone&nbsp;:</th>
                                            <td>(+229) 978-23-735</td>
                                        </tr>
                                        <tr>
                                            <th>Mail :</th>
                                            <td><a href="#">contact@it-servicegroup.com</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Address :</th>
                                            <td>Siege ITservicegroup<br /> Lot 132 Sodjeatinmin, <br /> Maison GBAGUIDI,<br /> 01 BP 128 Cotonou </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!--divider here-->
                            <div class="divider"></div>
                            <!--<h3>Chirp chirp</h3>-->
                            <div class="twitter"></div>
                        </div>
                    </div>
                    <!--sidebar ends-->

                </div>
            </div>
            <!-- ======= general row ends ======= -->

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
    name: 'Contact',
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
