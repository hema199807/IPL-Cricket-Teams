
var cardWrapper=document.getElementById("cards-wrapper");
var cricketTeams=JSON.parse(localStorage.getItem("teams"));

    for(var i=0;i<cricketTeams.length;i++){
        var cards=document.createElement("div");
        cards.className="team-cards";
        cards.id=cricketTeams[i].id;
        var imageClick=document.createElement("a");
        var data=cricketTeams[i].TeamName.split(" ");
        imageClick.href="./details.html?p="+data.join("");
        var images=document.createElement("img");
        images.src=cricketTeams[i].TeamIcon;
        cards.appendChild(imageClick);
        imageClick.appendChild(images);
        cardWrapper.appendChild(cards);
    }
    $("#form").submit(function(e){
        e.preventDefault();
    })
    $("#search-box").keyup(function(e){
        var searchkey=e.target.value;
        var dataByTeamName;
            for(var i=0;i<cricketTeams.length;i++){
                dataByTeamName=cricketTeams[i].TeamName;
                if(dataByTeamName.toLowerCase().indexOf(searchkey.toLowerCase()) > -1 ){
                    document.getElementById(cricketTeams[i].id).style.display="";
                }else{
                    document.getElementById(cricketTeams[i].id).style.display="none";
                }
            }
    
    })
    $("#add-btn").click(function(){
        location.assign('./data.html');
    })
