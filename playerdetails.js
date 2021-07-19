var playerName=window.location.search.split("=")[1];
var players=JSON.parse(localStorage.getItem("Players"));
for(var i=0;i<players.length;i++){
    var data=players[i].playerName;
    data=data.split(" ");
    if(playerName==data.join("")){
        $("#player-image").attr("src",players[i].photo);
        $("#player-name").html(players[i].playerName);
        $("#player-team").html(players[i].from);
        $("#player-price").html(players[i].price);
        if(players[i].isPlaying==true){
            $("#status").html("Plying");
        }else{
            $("#status").html("On-bench");
        }
        
        $("#role").html(players[i].description);
        
        $("#content-wrapper").append($("<a>").attr("href","./details.html?p="+players[i].from).append($("<button>").html("Back")));
    }
}
$("#add-btn").click(function(){
    location.assign('./data.html');
})