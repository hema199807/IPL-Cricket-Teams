var teamName=window.location.search.split("=")[1];
var team=JSON.parse(localStorage.getItem("teams"));
var players=JSON.parse(localStorage.getItem("Players"))
var count=0;
var logo=document.getElementById("team-logo");



$("#form").submit(function(e){
    e.preventDefault();
})
$("#search-box").keyup(function(e){
    var searchkey=e.target.value;
    var fullName,role;
    var tableItems=document.getElementsByClassName("data-row");
       
        for(var i=0;i<tableItems.length;i++){
            fullName=tableItems[i].getElementsByClassName("column2")[0].innerHTML;
            role=tableItems[i].getElementsByClassName("column6")[0].innerHTML;
            if(fullName.toLowerCase().indexOf(searchkey.toLowerCase()) > -1 ||
                role.toLowerCase().indexOf(searchkey.toLowerCase()) > -1 ){
                tableItems[i].style.display="";
            }else{
                tableItems[i].style.display="none";
            }
        }

})
    
    



for(var i=0;i<players.length;i++){
    var data=players[i].from.split(" ");
    if(data.join("")==teamName){
        count++;
        
        var dataRow=$("<tr>").addClass("data-row").attr("id",players[i].playerName);
        var tabledata1=$("<td>").addClass("column1").append($("<img>").attr("src",players[i].photo));
        var tabledata2=$("<td>").addClass("column2").html(players[i].playerName);
        var tabledata3=$("<td>").addClass("column3").html(players[i].from);
        var tabledata4=$("<td>").addClass("column4").html(players[i].price);
        if(players[i].isPlaying==true){
            var tabledata5=$("<td>").addClass("column5").html("Playing");
        }else{
            var tabledata5=$("<td>").addClass("column5").html("On-bench");
        }
        var tabledata6=$("<td>").addClass("column6").html(players[i].description);
        dataRow.append(tabledata1,tabledata2,tabledata3,tabledata4,tabledata5,tabledata6);
        
        $("#table-content").append(dataRow);
        
        dataRow.click(function(){
            var data=$(this).attr("id");
            data=data.split(" ");
            
            location.assign('./playerdetails.html?p='+data.join(""));
        })
    
    }
}
for(var i=0;i<team.length;i++){
    var data=team[i].TeamName.split(" ");
    if(data.join("")==teamName){
        logo.src=team[i].TeamIcon;
        document.getElementById("team-heading").innerHTML=team[i].TeamName;
        document.getElementById("Top-Batsman").innerHTML=team[i].TopBatsman;
        document.getElementById("Top-Bowler").innerHTML=team[i].TopBowler;
        document.getElementById("Player-count").innerHTML=count;
        document.getElementById("Championship-count").innerHTML=team[i].ChampionshipWonCount;
    }
}
$("#add-btn").click(function(){
    location.assign('./data.html#playerdetails');
})