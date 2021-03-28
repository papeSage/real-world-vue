<template>
<center> 
  <div class="" style="height:300px; width:300px; text-align:center;"><img src="../assets/img/slide-1.png" alt="" ></div>
   
<!-- <div class="pic-ctn">
    <img src="../assets/img/slide-1.png" alt="" class="pic">
    <img src="../assets/img/slide-2.png" alt="" class="pic">
    <img src="../assets/img/slide-3.png" alt="" class="pic">
    <img src="../assets/img/slide-4.png" alt="" class="pic">
  
  </div> -->

  
 <!-- <div style="text-align: center;" >
<div id = "slider" style="height:500px; width:700px; margin-top:30px;">
<div class = "slides">

                            <div class = "slider">

                                    <div class = " legend "> </div>
                                <div class = "content">
                                  <div class = "content-txt ">
                                      <h1> Amélioration de l'efficacité commerciale </h1>
                                      <h2></h2>
                                      
                                    </div>
                                </div>
                                <div class = "images">
                                    <img src = "../assets/img/slide-1.png">
                                </div>
                           </div>


<div class = " slider ">   
<div class = " legend "> </div>
<div class = " content ">
<div class = " content-txt ">
<h1>Maximiser la valeur du portefeuille des sociétés d'équités privées</h1>
<h2></h2>
</div>
</div>
<div class = " images ">
<img src = "../assets/img/slide-2.png " >
</div>
</div>


<div class = " slider ">
<div class = " legend "> </div>
<div class = " content ">
<div class = " content-txt ">
<h1>Transformer les entreprises en incubant des technologies avancées </h1>
<h2></h2>
</div>
</div>
<div class = " images ">
<img src = "../assets/img/slide-3.png ">
</div>
</div>


<div class = " slider ">
<div class = " legend "> </div>
<div class = " content ">
<div class = " content-txt ">
<h1>Meilleurs services informatiques </h1>
<h2></h2>
</div>
</div>
<div class = " images ">
<img src = "../assets/img/slide-4.png ">
</div>
</div>

</div>
</div>
</div> -->
 </center>
 
</template>

<script>
export default {
  name: 'Dropdon'
  
}
</script>

<style>

.pic-ctn {
  width: 50px;
  height: 50px;
}

@keyframes display {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }
  10% {
    transform: translateX(0);
    opacity: 1;
  }
  20% {
    transform: translateX(0);
    opacity: 1;
  }
  30% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px);
    opacity: 0;
  }
}

.pic-ctn {
  position: relative;
  width: 600px;
  height: 400px;
  margin-top: 0;
}

.pic-ctn > img {
  position: absolute;
  top: 0;
  left: calc(50% - 100px);
  opacity: 0;
  animation: display 10s infinite;
}

img:nth-child(2) {
  animation-delay: 2s;
}
img:nth-child(3) {
  animation-delay: 4s;
}
img:nth-child(4) {
  animation-delay: 6s;
}
img:nth-child(5) {
  animation-delay: 8s;
}

/* Reset */
*{margin:0;padding:0;}

/* Slider */
#slider{
  width:100%;
  height:300px;
  position:relative;
  overflow:hidden;
}
@keyframes load{
  from{left:-100%;}
  to{left:0;}
}
.slides{
  width:400%;
  height:100%;
  position:relative;
  -webkit-animation:slide 30s infinite;
  -moz-animation:slide 30s infinite;
  animation:slide 30s infinite;
}
.slider{
  width:25%;
  height:75%;
  float:left;
  position:relative;
  z-index:1;
  overflow:hidden;
}
.slide img{
  width:100%;
  height:100%;
}

/* Legend */
.legend{
  border:140px solid transparent;
  border-left:800px solid rgb(121, 24, 24);
  border-bottom:0;
  position:absolute;
  bottom:0;
  opacity: 0.6;
}

/* Contents */
.content{
  width:100%;
  height:100%;
  position:absolute;
  overflow:hidden;
}
.content-txt{
  width:400px;
  height:150px;
  float:left;
  position:relative;
  top:300px;
  -webkit-animation:content-s 7.5s infinite;
  -moz-animation:content-s 7.5s infinite;
  animation:content-s 7.5s infinite;
}
.content-txt h1{
  font-family:Intro;
  font-size:24px;
  color:white;
  text-align:left;
  margin-left:30px;
  padding-bottom:10px;
}
.content-txt h2{
  font-family:Quicksand;
  font-weight:normal;
  font-size:14px;
  font-style:italic;
  color:rgba(73, 73, 73, 0.7);
  text-align:left;
  margin-left:30px;
}

/* Switch */
.switch{
  width:120px;
  height:10px;
  position:absolute;
  bottom:50px;
  z-index:99;
  left:30px;
}
.switch > ul{
  list-style:none;
}
.switch > ul > li{
  width:10px;
  height:10px;
  border-radius:50%;
  background:#333;
  float:left;
  margin-right:5px;
  cursor:pointer;
}
.switch ul{
  overflow:hidden;
}
.on{
  width:100%;
  height:100%;
  border-radius:50%;
  background:#f39c12;
  position:relative;
  -webkit-animation:on 30s infinite;
  -moz-animation:on 30s infinite;
  animation:on 30s infinite;
}

/* Animation */
@-webkit-keyframes slide{
  0%,100%{
    margin-left:0%;
  }
  21%{
    margin-left:0%;
  }
  25%{
    margin-left:-100%;
  }
  46%{
    margin-left:-100%;
  }
  50%{
    margin-left:-200%;
  }
  71%{
    margin-left:-200%;
  }
  75%{
    margin-left:-300%;
  }
  96%{
    margin-left:-300%;
  }
}
@-moz-keyframes slide{
  0%,100%{
    margin-left:0%;
  }
  21%{
    margin-left:0%;
  }
  25%{
    margin-left:-100%;
  }
  46%{
    margin-left:-100%;
  }
  50%{
    margin-left:-200%;
  }
  71%{
    margin-left:-200%;
  }
  75%{
    margin-left:-300%;
  }
  96%{
    margin-left:-300%;
  }
}
@keyframes slide{
  0%,100%{
    margin-left:0%;
  }
  21%{
    margin-left:0%;
  }
  25%{
    margin-left:-100%;
  }
  46%{
    margin-left:-100%;
  }
  50%{
    margin-left:-200%;
  }
  71%{
    margin-left:-200%;
  }
  75%{
    margin-left:-300%;
  }
  96%{
    margin-left:-300%;
  }
}

@-webkit-keyframes content-s{
  0%{left:-420px;}
  10%{left:0px;}
  30%{left:0px;}
  40%{left:0px;}
  50%{left:0px;}
  60%{left:0px;}
  70%{left:0;}
  80%{left:-420px;}
  90%{left:-420px;}
  100%{left:-420px;}
}
@-moz-keyframes content-s{
  0%{left:-420px;}
  10%{left:0px;}
  30%{left:0px;}
  40%{left:0px;}
  50%{left:0px;}
  60%{left:0px;}
  70%{left:0;}
  80%{left:-420px;}
  90%{left:-420px;}
  100%{left:-420px;}
}
@keyframes content-s{
  0%{left:-420px;}
  10%{left:20px;}
  15%{left:0px;}
  30%{left:0px;}
  40%{left:0px;}
  50%{left:0px;}
  60%{left:0px;}
  70%{left:0;}
  80%{left:-420px;}
  90%{left:-420px;}
  100%{left:-420px;}
}

@-webkit-keyframes on{
  0%,100%{
    margin-left:0%;
  }
  21%{
    margin-left:0%;
  }
  25%{
    margin-left:15px;
  }
  46%{
    margin-left:15px;
  }
  50%{
    margin-left:30px;
  }
  71%{
    margin-left:30px;
  }
  75%{
    margin-left:45px;
  }
  96%{
    margin-left:45px;
  }
}

@-moz-keyframes on{
  0%,100%{
    margin-left:0%;
  }
  21%{
    margin-left:0%;
  }
  25%{
    margin-left:15px;
  }
  46%{
    margin-left:15px;
  }
  50%{
    margin-left:30px;
  }
  71%{
    margin-left:30px;
  }
  75%{
    margin-left:45px;
  }
  96%{
    margin-left:45px;
  }
}

@keyframes on{
  0%,100%{
    margin-left:0%;
  }
  21%{
    margin-left:0%;
  }
  25%{
    margin-left:15px;
  }
  46%{
    margin-left:15px;
  }
  50%{
    margin-left:30px;
  }
  71%{
    margin-left:30px;
  }
  75%{
    margin-left:45px;
  }
  96%{
    margin-left:45px;
  }
}
@media (max-width: 767px){

  .pic-ctn {
  position: relative;
  width: 400px;
  height: 400px;
  margin-top: 0;
}
#slider {
  width: 700px;
  height: 150px;
  padding-top: 50px;
}
.content-txt h1{
    font-family:Intro;
  font-size:14px;
  color:white;
  text-align:left;
  padding-left: 233px;
  padding-bottom:5px;
}	
.content-txt{
  width:800px;
  height:40px;
  float:left;
  position:relative;
  top:330px;
  -webkit-animation:content-s 7.5s infinite;
  -moz-animation:content-s 7.5s infinite;
  animation:content-s 7.5s infinite;
}
.slider{
  text-align: center;
  float: right;
}
.images{
  float: right;
  width:380px;
  height:380px;
  padding-right: 55px;
    padding-top: 45px;
}
.legend{
  width:100px;
  border:140px solid transparent;
  border-left:800px solid rgb(121, 24, 24);
  border-bottom:0;
  position:absolute;
  bottom:20;
  opacity: 0.6;
  height: 5px;
  padding-left: 30px;
}
.slides{
  margin-right: -200px;
}
}
</style>