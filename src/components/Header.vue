<template lang="en">
<div>
    <html class="no-js" lang="en">

    <!--Fav and touch icons-->
    <!-- <link rel="shortcut icon" href="../assets/img/icons/favicon.ico"> -->
    <link rel="apple-touch-icon" href="../assets/img/icons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="../assets/72x72" href="../assets/img/icons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="../assets/114x114" href="../assets/img/icons/apple-touch-icon-114x114.png">

    <!--google web font-->
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,600' rel='stylesheet' type='text/css'>

    <!--basic style sheets-->

    <body>
       <div id="header-btm-logo">
                <div class="container">
                    <div class="row">
                        <div class="span12">
                          <div class="span4 logo" style="width:50; height:0; margin-top:5px;">
                             <a href="#"><img src="../assets/img/logo.png"  class="image" alt="logo"></a>
                        
                            </div>
                             <div>
                             <marquee>
                           
                            </marquee>

                            </div>
                      </div>
                  </div>
               </div>
            </div>

        <section id="header" class="clearfix" style="background: -webkit-gradient(linear, left top, left bottom, from(#555555), to(#343434)); "> 

             <div id="header-inner" class="container">
                <div class="row">
                    
                     <!-- <div class="span4 logo" style="width:50; height:0; margin-top:5px;">
                             <a href="#"><img src="../assets/img/logo.png"  class="image" alt="logo"></a>
                        
                            </div> -->

                   <div class="span11" style="height: 20px; padding-bottom: 20px;">
                        <div id="smoothmenu" class="smoothmenu">
                            
                                

                                
                                    <Item />
                                
                            
                               
                           
                        </div>
                    </div>
                                
                    
                </div>
            </div>
<div id="header-btm" >
                <div class="container">
                    <div class="row">
                        <div class="span12">
                                  
                            <div class="reseau">
                                <div class="contact">
                                <!-- <img src="../assets/img/icon-phone.png" alt="icon"> -->
                                <p>Appel pour assistance / +229 90 00 00 01</p>
                                </div>
                                <ul>
                                <li> <a href="https://web.facebook.com/It-Services-Solutions-105295647868069/?view_public_for=105295647868069"><img src="../assets/img/icon-facebook.png" alt="icon"></a>
                                        <p> <a href="https://web.facebook.com/It-Services-Solutions-105295647868069/?view_public_for=105295647868069">Facebook</a></p>
                                    </li>
                                    <li><a href="https://www.youtube.com/channel/UCIUf3JxnDE2JcHPPFqArvNw"><img src="../assets/img/youtube-01.png" width="37" height="37" alt="icon"></a>
                                        <p> <a href="https://www.youtube.com/channel/UCIUf3JxnDE2JcHPPFqArvNw">Youtube</a></p>
                                    </li>
                                    <li><a href="https://www.linkedin.com/company/it-services-solutions/?viewAsMember=true"><img src="../assets/img/icon-linkedin.png" alt="icon"></a>
                                        <p> <a href="https://www.linkedin.com/company/it-services-solutions/?viewAsMember=true">Linkedin</a></p>
                                    </li>
                                    <!-- 
                                    <li><img src="../assets/img/icon-user.png" alt="icon">
                                        <p> <a href="#myModal" role="button" data-toggle="modal">Login</a></p>
                                    </li> -->
                                </ul>
                            </div>    

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>   
    </html> 
    </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "Header",
  components: {
    Item,
  },
};
</script>

<style>
@import url("../assets/css/bootstrap-override.css");
@import url("../assets/css/prettyPhoto.css");
@import url("../assets/css/style.css");
@import url("../assets/css/bootstrap.css");
@import url("../assets/css/bootstrap-responsive.css");

        

            
            .image{
                padding-left: 55px;
            }
         
          @media (max-width: 767px){
               
               .smoothmenu {
               padding-right:10px;
                }

                #header-btm ul{
                    padding-right:20px;
                }
               .reseau{
                   padding:10 0 0 10;
               }
            }




</style>