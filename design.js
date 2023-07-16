var player1={
name:"Player 1",
p1_count:0,
p1_val:[]
};
var player2={
name:"Player 2",
p2_count:0,
p2_val:[]
};
var count=0;
function PlayEvenOdd()
{
    var p1=Math.floor(Math.random()*50);
    var p2=Math.floor(Math.random()*50);
    if(count==5)
    {
       if(player1.p1_count==player2.p2_count)
       {
        document.getElementById("result").textContent="MATCH DRAW!!!!";
       }
       else if(player1.p1_count>player2.p2_count)
       {
        document.getElementById("result").textContent= player1.name+"WINS !!!";
       }
       else{
       document.getElementById("result").textContent= player2.name+"WINS !!!";
       }
    }
    else{
        count++
        if(p1%2==0)
        {
            player1.p1_count++;
            document.getElementById("Player1_score").textContent=player1.p1_count;
        }
        if(p2%2==0)
        {
            player2.p2_count++;
            document.getElementById("player2_score").textContent=player2.p2_count;
        }
        updatecricle()
    }
}
function updatecricle()
{
    var p1_circle=document.getElementById("Player1").children;
    player1.p1_val.forEach((run,value)=>{
        if(num%2==0)
        {
             p1_circle[value].style.backgroundColor="green";
        }
        else{
            p1_circle[value].style.backgroundColor="red"; 
        }
    });

}