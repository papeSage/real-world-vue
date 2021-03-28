<template>
    <div>


        <div class="dropdown">
                    <button class="dropbtn">Autres solutions</button>
                    <div class="dropdown-content">
                        <router-link to="/finance">Service financier & comptable </router-link>
                        <router-link to="/administration"> Administration RH & Support global de paie </router-link>
                        <router-link to="/traduction">'Traduction de documents & Interprète</router-link>
                        <router-link to="/gestion"> Gestion des contrats </router-link>
                        <router-link to="/renouvellement"> Renouvellement de contrats et La gestion des commandes </router-link>
                        <router-link to="/service">Services</router-link>
                    
                    </div>

        </div>
 </div>
</template>
<script>
export default {
    name: "itemmenu"
}

                
</script>
 <style>


.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #808080;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: red;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}



.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #e74710;}
</style>