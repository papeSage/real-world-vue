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

    <body>

    </body>
            <!-- footer starts ================================================== -->
        <footer id="footer" class="clearfix">
            <div id="footer-inner" class="container">
                <div class="row">

                    <!--first column starts-->
                    <div class="span4">
                        <h4 class="itg">2021 © ITSERVICEGROUP.</h4>
                        <img src="../assets/img/logo.png" width="128" height="28" class="image" alt="logo">
                        <!-- <p><em style="color: antiquewhite;">Une Nouvelle ère pour un Avenir Meilleur</em></p> -->
                    </div>
                    <!--first column ends-->

                    <!--second column starts-->
                    <div class="span3 offset1">
                        <div class="news">
                            <h4>Inscrivez-vous à la newsletter</h4><br><br>
                            <!-- <p><b>Inscrivez-vous à la newsletter</b></p> -->
                            <!-- <p class="text-vsmall">* Une sorte de déclaration ici.</p> -->
                            <form id="subform" method="post" action="mailto:contact@it-servicegroup.com">
                                <fieldset>
								 <p class="antispam">Leave this empty: <br />
                                <input name="url" />
								</p>
                                    <p>
                                        <input name="email" class="required email" type="text" placeholder="Votre email" >
                                        <input type="submit" value="OK" class="sub-submit" />
                                    </p>
                                    <div id="subresult"></div>
                                </fieldset>
                            </form>
                        </div>    
                    </div>
                    <!--second column ends-->

                    <!--third column starts-->
                    <!-- <div class="span3">
                        <h4>quelques images</h4>
                        <div class="flickr">

                        </div>
                        <div class="clearfix"></div>
                    </div> -->
                    <!--third column ends-->

                    <!--fourth column starts-->
                    <div class="span3 offset1 ">
                        <h4>Nous contacter</h4>
                        <address>
                            Siege ITservicegroup.<br />
                            Lot 132 Sodjeatinmin, Maison GBAGUIDI<br />
                            01 BP 128 Cotonou
                        </address>
                        <ul class="social">
                            <li><img src="../assets/img/icon-facebook.png" alt="icon"></li>
                            <li><img src="../assets/img/icon-twitter.png" alt="icon"></li>
                            <li><img src="../assets/img/icon-linkedin.png" alt="icon"></li>
                        </ul>
                    </div>
                    <!--fourth column ends-->

                </div>
            </div>
        </footer>

    </html>
</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
@import url('../assets/css/bootstrap-override.css');
@import url('../assets/css/prettyPhoto.css');
@import url('../assets/css/style.css');
@import url('../assets/css/bootstrap.css');
@import url('../assets/css/bootstrap-responsive.css');

            .image{
                padding-left: 55px;
            }
            .itg{
                padding-left: 20px;
            }
            .news{
                  padding-right: 30px;
            }
</style>    