$(function() {
    const e = new Freezeframe();
    $("#play-gif").on("click", function(){e.start()});
    $("#stop-gif").on("click", function(){e.stop()});
});