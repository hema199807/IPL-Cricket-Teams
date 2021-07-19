
var Teams=JSON.parse(localStorage.getItem("teams"))==null?[
        {
            "id":0,
            "TeamIcon":"https://static.toiimg.com/thumb/msid-72902484,imgsize-190190,width-400,resizemode-4/72902484.jpg",
            "TeamName":"RR",
            "TopBatsman":"Riya Parag",
            "TopBowler":"Shreyas Gopal",
            "ChampionshipWonCount":2,
            
        },
        {
            "id":1,
            "TeamIcon":"https://images.outlookindia.com/public/uploads/articles/2020/2/14/RCB-Logo_571_855.jpg",
            "TeamName":"RCB",
            "TopBatsman":"Virat Kohli",
            "TopBowler":"Yuzvendra Chahal",
            "ChampionshipWonCount":1,
            
        }
]:JSON.parse(localStorage.getItem("teams"));
localStorage.setItem("teams",JSON.stringify(Teams));


var teamNameInput=document.getElementById("Tname");
var teamIconInput=document.getElementById("teamicon");
var teamTopBatsman=document.getElementById("Tbatsman");
var teamTopBowler=document.getElementById("Tbowler");
var teamChampionshipWonCount=document.getElementById("championshipCount");


$("#Add-teams").click(function(){
    var addTeams=JSON.parse(localStorage.getItem("teams"));
    var nameinput=teamNameInput.value;
    if(!teamNameInput.value || !teamIconInput.value || !teamTopBatsman.value || !teamTopBowler.value || !teamChampionshipWonCount.value){
        alert("all fields are required");
        return;
    }else{
        for(var i=0;i<addTeams.length;i++){
            if(nameinput.toUpperCase()==addTeams[i].TeamName.toUpperCase()){
                alert("Team Already Exist");
                teamIconInput.value="";
                teamNameInput.value="";
                teamTopBatsman.value="";
                teamTopBowler.value="";
                teamChampionshipWonCount.value=""
                return
            }
        }
    
        var mobj={
                "id":addTeams.length,
                "TeamIcon":""+teamIconInput.value,
                "TeamName":""+nameinput.toUpperCase(),
                "TopBatsman":""+teamTopBatsman.value,
                "TopBowler":""+teamTopBowler.value,
                "ChampionshipWonCount":teamChampionshipWonCount.value
        }
        addTeams.push(mobj);
        localStorage.setItem("teams",JSON.stringify(addTeams));
        alert("data added sucessfully!!");
        
        teamIconInput.value="";
        teamNameInput.value="";
        teamTopBatsman.value="";
        teamTopBowler.value="";
        teamChampionshipWonCount.value=""
    }
})

var players=JSON.parse(localStorage.getItem("Players"))==null?[
    {   
        "id":0,
        "playerName":"Sanju Samson",
        "from":"RR",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"Wicket-Keeper Batsman",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/fatr5zcgsfh18om271rojn1ngisiclgi.png"
    },{   
        "id":1,
        "playerName":"Sivam Dube",
        "from":"RR",
        "price":"6 Cr",
        "isPlaying":false,
        "description":"All-rounder",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/5p8d3jtqyzyugme4e1etjbgbj5j8qnrb.png"
    },{   
        "id":2,
        "playerName":"Riya Parag",
        "from":"RR",
        "price":"10.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/e21z16eazldripv61664ira8tbvhppk7.png"
    },{   
        "id":3,
        "playerName":"Shreyas GoPal",
        "from":"RR",
        "price":"10 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/e0kfgrlw1ar1x5nhmcbmx6k77lowl0th.png"
    },{   
        "id":4,
        "playerName":"Chris Morris",
        "from":"RR",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/99rd0yy6ehasxva3uceww4u6ek1nj65u.png"
    },{   
        "id":5,
        "playerName":"Chetan Sakariya",
        "from":"RR",
        "price":"5.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/ekgw6yeyz7gqffw1179m44ikh8kglwxt.png"
    },{   
        "id":6,
        "playerName":"KC Cariappa",
        "from":"RR",
        "price":"4.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/shjf6rmsfy0gac7qhlenqkwuz87uqbe8.png"
    },{   
        "id":7,
        "playerName":"Kuldip Yadav",
        "from":"RR",
        "price":"6 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/5q1gnmdlxe7p491wi9dd60ardgpve8g6.png"
    },{   
        "id":8,
        "playerName":"Ben Stokes",
        "from":"RR",
        "price":"5 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/rivicdgmqk81w5c5o1oo2wztba3wsbrr.png"
    },{   
        "id":9,
        "playerName":"Manan Vohra",
        "from":"RR",
        "price":"6.50 Cr",
        "isPlaying":false,
        "description":"Batsman",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/zkzmnlxtkl1fc0k0x3gdfwy711wasmp2.png"
    },{   
        "id":10,
        "playerName":"Anuj Rawat",
        "from":"RR",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"Wicket-Keeper Batsman",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/56oyyitdllridtfq370o5ziryjyjykw0.png"
    },{   
        "id":11,
        "playerName":"Yashasvi Jaiswal",
        "from":"RR",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/ju86h30phs1pq3ab1z31e0dihxxljbvo.png"
    },{   
        "id":12,
        "playerName":"Kartik Tyagi",
        "from":"RR",
        "price":"4.50 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/zzvo1uoynm2pj1g19ljp6dgmnzpk7i27.png"
    },{   
        "id":13,
        "playerName":"David Miller",
        "from":"RR",
        "price":"5.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/kpi3pk83y6bae3gowlk4fge2explbadf.png"
    },{   
        "id":14,
        "playerName":"Jaydev Unadkat",
        "from":"RR",
        "price":"6.50 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/e88zwskjpbyafz8v7a983o2m7r0qhllx.png"
    },{   
        "id":15,
        "playerName":"AndrewTye",
        "from":"RR",
        "price":"4 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "photo":"https://www.rajasthanroyals.com/adminpanel/uploads/images/players/6di22gl6704zn95htcouizzheetc6cpz.png"
    },{   
        "id":16,
        "playerName":"Yuzvendra Chahal",
        "from":"RCB",
        "price":"10 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Chahal%20800%20x%201200.png"
    },{   
        "id":17,
        "playerName":"Virat Kohli",
        "from":"RCB",
        "price":"10.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/4_2.png"
    },{   
        "id":18,
        "playerName":"Washington sundar",
        "from":"RCB",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/5_0.png"
    },{   
        "id":19,
        "playerName":"Kyle Jamieson",
        "from":"RCB",
        "price":"6 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/2.png"
    },{   
        "id":20,
        "playerName":"Finn Allen",
        "from":"RCB",
        "price":"5.50 Cr",
        "isPlaying":true,
        "description":"Wicket-Keeper",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Finn%20allen.png"
    },{   
        "id":21,
        "playerName":"Daniel Sams",
        "from":"RCB",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Dan%20Sams%20RCB.png"
    },{   
        "id":22,
        "playerName":"Ab De Villiers",
        "from":"RCB",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"Wicket-Keeper",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/3.png"
    },{   
        "id":23,
        "playerName":"Rajat Patidar",
        "from":"RCB",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Rajat%20800%20x%201200.png"
    },{   
        "id":24,
        "playerName":"Glenn Maxwell",
        "from":"RCB",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/1.png"
    },{   
        "id":25,
        "playerName":"Navdeep Saini",
        "from":"RCB",
        "price":"4.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Saini%20800%20x%201200.png"
    },{   
        "id":26,
        "playerName":"Scott Kuggeleijn",
        "from":"RCB",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Scott%20K%20800%20x%201200.png"
    },{   
        "id":27,
        "playerName":"Mohammed Siraj",
        "from":"RCB",
        "price":"3.50 Cr",
        "isPlaying":false,
        "description":"Bowler",
        "photo":"https://www.royalchallengers.com/PRRCB01/public/2021-04/Siraj%20800%20x%201200.png"
    }
]:JSON.parse(localStorage.getItem("Players"));
localStorage.setItem("Players",JSON.stringify(players));

var playerNameInput=document.getElementById("Pname");
var playerImageInput=document.getElementById("playerImage");
var playerTeamNameInput=document.getElementById("playerfrom");
var playerPrice=document.getElementById("price");
var playerPlayingStatus=document.getElementById("playing");
var playerPlayingStatusOnBench=document.getElementById("on-bench");
var playerStatus;
var pStatus="";
$("#playing").click(function(){
    if(playerPlayingStatus.checked===true){
        playerStatus=true;
        pStatus=playerPlayingStatus.value;
    }
})
$("#on-bench").click(function(){
    if(playerPlayingStatusOnBench.checked===true){
        playerStatus=false;
        pStatus=playerPlayingStatusOnBench.value;
    }
})

var playerRole=document.getElementById("role");

$("#Add-player").click(function(){
    var addPlayer=JSON.parse(localStorage.getItem("Players"));
    var addTeams=JSON.parse(localStorage.getItem("teams"));
     var Teamnameinput=playerTeamNameInput.value;
     var nameinput=playerNameInput.value;
  
    if(!playerNameInput.value || !playerImageInput.value || !playerTeamNameInput.value || !playerPrice.value || !pStatus || !playerRole.value){
        alert("all fields are required");
        return;
    }else{
        for(var i=0;i<addTeams.length;i++){
            if(Teamnameinput.toUpperCase()==addTeams[i].TeamName.toUpperCase()){
                for(var j=0;j<addPlayer.length;j++){
                    if(nameinput.toUpperCase()==addPlayer[j].playerName.toUpperCase()){
                        alert("player details already exist");
                        playerNameInput.value="";
                        playerImageInput.value="";
                        playerTeamNameInput.value="";
                        playerPrice.value="";
                        if(playerPlayingStatus.checked===true){
                            playerPlayingStatus.checked=false;
                        }
                        if(playerPlayingStatusOnBench.checked===true){
                            playerPlayingStatusOnBench.checked=false;
                        }
                        playerRole.value=""
                        return;
                    }
                }
                var mobj={
                    "id":addPlayer.length,
                    "playerName":playerNameInput.value,
                    "from":Teamnameinput.toUpperCase(),
                    "price":playerPrice.value,
                    "isPlaying":playerStatus,
                    "description":playerRole.value,
                    "photo": playerImageInput.value
                }
                addPlayer.push(mobj);
                localStorage.setItem("Players",JSON.stringify(addPlayer));
                alert("data added sucessfully!!");
                
                playerNameInput.value="";
                playerImageInput.value="";
                playerTeamNameInput.value="";
                playerPrice.value="";
                if(playerPlayingStatus.checked===true){
                    playerPlayingStatus.checked=false;
                }
                if(playerPlayingStatusOnBench.checked===true){
                    playerPlayingStatusOnBench.checked=false;
                }
                playerRole.value=""
                return;
            }
            
        }
        for(var i=0;i<addTeams.length;i++){
            if(Teamnameinput.toUpperCase()!=addTeams[i].TeamName.toUpperCase()){
                    alert("Team Not Exist, please add team then add Player");
                    playerNameInput.value="";
                    playerImageInput.value="";
                    playerTeamNameInput.value="";
                    playerPrice.value="";
                    if(playerPlayingStatus.checked===true){
                        playerPlayingStatus.checked=false;
                    }
                    if(playerPlayingStatusOnBench.checked===true){
                        playerPlayingStatusOnBench.checked=false;
                    }
                    playerRole.value=""
                    return
                
            }
        }
       
    }
})