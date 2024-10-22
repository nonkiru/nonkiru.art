---
layout: default
title: home
---
<div class="hometop">
    <h1>welcome!</h1>
    <img src="../assets/images/me.gif" alt="pixel scribble of me">
    hello! i'm nonkiru!
    <br><br>this is my little site on the internet! i have lots of stuff here; my ocs, my blog, and my art!! thank you for stopping by. ^.^
    <br><br><b>site is currently under heavy construction!</b>
</div>

<div class="homebottom">
<br><br>
<p>listening to: <span id="song">loading...</span></p>
<p><small><a href="https://www.last.fm/user/nonkiru" target="_blank">last.fm ~ nonkiru</a> | <a href="https://github.com/biancarosa/blog/blob/main/layouts/partials/extended_header.html">code</a></small>

<div class="non" id="draggable"><img src="../assets/images/me_3d.gif"></div>

<script type="text/javascript">
    let user = 'nonkiru';
    let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
    let song = document.querySelector('#song');
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (json) {
            song.innerHTML = json['track']['name'] + ' - ' + json['track']['artist']['#text'];
        });
</script>