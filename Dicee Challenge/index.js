document.querySelector(".img1");
var ra=Math.floor((Math.random()*6)+1);
var r=Math.floor((Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src","./images/dice"+ra+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+r+".png");
if(ra>r)
{
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(ra<r)
{
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}