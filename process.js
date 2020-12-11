//create a clubs array............
var clubArray = [

    "Arsenal (ENG)","Astana (KAZ)","Atletico (ESP)","Barcelona (ESP)",
    "BATE (BLR)","Bayern (GER)","Benfica (POR)","Chelsea (ENG)",
    "CSK Moskva (RUS)","Dinamo Zagreb (CRO)","Dynamo Kyvi (UKR)","Galatasaray (TUR)",
    "Gent (BEL)","Juventus (ITA)","Leverkusen (GER)","Lyon (FRA)","M. Tel-Aviv (ISR)","Malmo (SWE)",
    "Man. City (ENG)","Man. United (ENG)","Monchengladbach (GER)","Olympiacos (FRA)",
    "Paris (FRA)","Porto (POR)","PSV (NED)","Real Madrid (ESP)","Roma (ITA)","Sevilla (ESP)",
    "Shakhtar Donetsk (UKR)","Valencia (ESP)","Wolfburg (GER)","Zenit (RUS)"

];
// Grab The id of each Team.................
function grabItems() {
    RandomClub(clubArray);
    document.querySelector("#Team-0").innerHTML = clubArray[0];
    document.querySelector("#Team-1").innerHTML = clubArray[2];
    document.querySelector("#Team-2").innerHTML = clubArray[3];
    document.querySelector("#Team-3").innerHTML = clubArray[4];
    document.querySelector("#Team-4").innerHTML = clubArray[5];
    document.querySelector("#Team-5").innerHTML = clubArray[6];
    document.querySelector("#Team-6").innerHTML = clubArray[7];
    document.querySelector("#Team-7").innerHTML = clubArray[8];
    document.querySelector("#Team-8").innerHTML = clubArray[9];
    document.querySelector("#Team-9").innerHTML = clubArray[10];
    document.querySelector("#Team-10").innerHTML = clubArray[11];
    document.querySelector("#Team-11").innerHTML = clubArray[12];
    document.querySelector("#Team-12").innerHTML = clubArray[13];
    document.querySelector("#Team-13").innerHTML = clubArray[14];
    document.querySelector("#Team-14").innerHTML = clubArray[15];
    document.querySelector("#Team-15").innerHTML = clubArray[16];
    document.querySelector("#Team-16").innerHTML = clubArray[17];
    document.querySelector("#Team-17").innerHTML = clubArray[18];
    document.querySelector("#Team-18").innerHTML = clubArray[19];
    document.querySelector("#Team-19").innerHTML = clubArray[20];
    document.querySelector("#Team-20").innerHTML = clubArray[21];
    document.querySelector("#Team-21").innerHTML = clubArray[22];
    document.querySelector("#Team-22").innerHTML = clubArray[23];
    document.querySelector("#Team-23").innerHTML = clubArray[24];
    document.querySelector("#Team-24").innerHTML = clubArray[25];
    document.querySelector("#Team-25").innerHTML = clubArray[26];
    document.querySelector("#Team-26").innerHTML = clubArray[27];
    document.querySelector("#Team-27").innerHTML = clubArray[28];
    document.querySelector("#Team-28").innerHTML = clubArray[29];
    document.querySelector("#Team-29").innerHTML = clubArray[30];
    document.querySelector("#Team-30").innerHTML = clubArray[31];
    document.querySelector("#Team-31").innerHTML = clubArray[32];
}

//logic ...........
var text = "";
 function RandomClub(array)
 {
   var PresentIndex = array.length, tempValue, randomIndex;
   while ( 0 !== PresentIndex){
       var randomIndex = Math.floor(Math.random() * PresentIndex);
       PresentIndex -= 1;


       //swap the clubs to current elements.............

       var tempValue = array[PresentIndex];
       array[PresentIndex] = array[randomIndex];
       array[randomIndex] = tempValue;
   }
   return array;
 }

//click the team generate button.....
 document.getElementById("random").addEventListener("click", grabItems);

 function check(e){
     if(e.charCode == "32"){
         document.getElementById("click").addEventListener("click",grabItems);
     }
 }