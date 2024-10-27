---
layout: default
title: about
---
# about me!!

<div class="flex">
<div style="width: 500px">
    <img src="../assets/images/me.png" alt="me" style="max-width: 100px;">
    <ul class="ulnomargin">
        <li>non</li>
        <li>they/it</li>
        <li>lesbian</li>
        <li>21+</li>
        <li>12 september</li>
        <li>australia</li>
    </ul>
</div>
    <div style="flex-grow: 1;">
        hello! i'm non, a kitty cat from australia! it's nice to meet you :3
        <br>i like to draw digital art, do archery, and play video games!! oh and do coding sometimes!!
        <br><br>in every version of my site i have had this little ramble, so here we go again:
        <br>if you happen to stumble across this, i hope the future is a nice place! if it isn't, then i hope my little site brings you some joy!!
        <br><br>my dream is to one day make a video game! i've started a lot of projects, but i haven't managed to finish one yet! i also wanna get really good at sewing, and make my own clothes. one day :3 i also one day wanna move in with my girlfriend! she means the world to me.
        <br><br>here's some silly stuff that you can look at :3
    </div>
</div>

<hr>
<br>
<!-- edited from https://www.w3schools.com/w3css/w3css_tabulators.asp -->
<div style="text-align: center;">
    <button onclick="openTab('silly')">silly images</button>
    <button onclick="openTab('stamps')">stamps</button>
    <button onclick="openTab('blinkies')">blinkies</button>
</div> 

<div id="silly" class="tab" style="display:none">
  <h2>silly images that i really like</h2>
  <div class="smallimages">
  <img src="../assets/images/silly/fat.png" alt="i may be fat and a bitch"><img src="../assets/images/silly/turned_cat.jpeg" alt="turned into a cat today"><img src="../assets/images/silly/sayaka_poke.webp" alt="sayaka miki poking you"><img src="../assets/images/silly/boquet.jpeg" alt="cat holding a boquet, boquet boquet for my sweetie"><img src="../assets/images/silly/boobs.jpeg" alt="boobs are so inspiring"><img src="../assets/images/silly/kittystretch.gif" alt="kitty stretch"><img src="../assets/images/silly/rainforest.jpeg" alt="pubes lover i <3 rainforest pussy">
  </div>
</div>

<div id="stamps" class="tab" style="display:none">
  <h2>epic stamps</h2>
  i'll do it later...
</div>

<div id="blinkies" class="tab" style="display:none">
  <h2>shiny sparkly</h2>
  i am tired its 1am ok
</div>

<script>
    function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    }
</script>