<template>
 <div>
<html>
<body>
    <div id="menu">
 
        <ul>             
       <center>
    
            <li><a href="">Accueil</a></li>
            <li><router-link to="/about">A propos</router-link></li>
            <li id="categories"><a href="">Solutions +</a>
                <ul>
                    <li><router-link to="/Developpement"> Développement WEB </router-link></li>
                    <div class="li">
                    <li><router-link to="/Solution"> Solutions WEB </router-link></li>
                    <li><router-link to="/Infrastructure"> Infrastructure Réseau </router-link></li>
                    <li><router-link to="/Conseils"> Audit Informatique</router-link></li>
                    <li> <router-link to="/Formations"> Formations </router-link></li>
                    <li><router-link to="/Big"> Big Data</router-link></li>
                    </div>
                    
                 </ul>
             </li>
            <li><router-link to="/contact"> Contact </router-link></li>
            </center> 
          </ul>
       </div>
     </body>
  </html>
 </div>
</template>
<script>
export default {
  name: "Item",
};
</script>
 <style>
body {
            background-color:#FFF;
            font:13px Sans-Serif;
        }
        ul {
            position:relative;
            margin:0;
            padding:0;
            float:left;
        }
        #menu {
            width:auto;
           
            font-weight:bold;
            
           
            border-radius:2px;
            -moz-border-radius:2px; 
            -webkit-border-radius:2px;
        }
        #menu ul {
            display:table;
            line-height:10px;
        }
        #menu ul li {
            position:relative;
            display:inline;
        }
        #menu ul li a {
            float:left;
            position:relative;
            padding:20px;
            color:rgb(228, 226, 226);
            text-decoration:none;
        }
        #menu ul li a:hover {
            background :#e74710;
        }

        @media (max-width: 767px){
 #menu ul ul {
            
            top:10px;
        
        }
}

        #menu ul ul {
            position:absolute;
            width:10px;
            top:50px;
            left:-130px;  
                /* CHROME, SAFARI */
           
            
            
            /* BACKGROUND COLOR AND BORDER. */
            background:gray;
            border-radius:2px;
            -moz-border-radius:2px; 
            -webkit-border-radius:2px;

            /* ADD BORDER SHADOW. */
            box-shadow:0 0 10px #444;
            -moz-box-shadow:0 0 10px #444;
            -webkit-box-shadow:0 0 10px #444;
        }
        
        /* SUB MENU LIST */
     
        
        /* SET HEIGHT AS '0', SO THE SUBMENUS REMAINS HIDDEN IN THE BEGINNING. */
        
        #menu ul ul li a {
            height:0; 
            line-height:0; 
            width:150px; 
            color:#FFF;
            padding:0 2px;
          
            
            -moz-opacity: 0;
            opacity:0;
            filter: alpha(opacity=0);
            font-size:12px;
            

        }

           

        #menu ul ul ul {
            visibility:hidden;
            position:absolute;
            top:-10px;
        }
        #categories a {
	        transition:all 0.4s linear; 
	        -o-transition:all 0.4 linear;
	        -moz-transition:all 0.4 linear; 
	        -webkit-transition:all 0.4 linear;
        }
        #categories:hover ul li a {
            height:40px;
            line-height:40px;
            -moz-opacity: 1;
            opacity:1;
            filter: alpha(opacity=100);
        }
        
        #menu #categories #da > ul {
            transition:opacity 0.2s 0.01s ease-in-out, left 0.2s 0.1s ease-out, visibility 0.1s 0.1s linear;
            -o-transition:opacity 0.2s 0.01s ease-in-out, left 0.2s 0.1s ease-out, visibility 0.1s 0.1s linear;
            -moz-transition:opacity 0.2s 0.01s ease-in-out, left 0.2s 0.1s ease-out, visibility 0.1s 0.1s linear;
	        -webkit-transition:opacity 0.2s 0.01s ease-in-out, left 0.2s 0.1s ease-out, visibility 0.1s 0.1s linear;
        }
        #menu #categories #da:hover > ul {
            visibility:visible;
            position:absolute;
            left:232px;                             /* CHROME, SAFARI */
         
        }
@import url("../assets/css/bootstrap-override.css");
@import url("../assets/css/prettyPhoto.css");
@import url("../assets/css/style.css");
@import url("../assets/css/bootstrap.css");
@import url("../assets/css/bootstrap-responsive.css");



</style>