let songs = ["Tim McGraw","Picture to Burn",
"Teardrops On My Guitar (Radio Edit)","A Place In This World",
"Cold As You","The Outside","Tied Together With A Smile",
"Stay Beautiful","Shoud've Said No","Mary's Song (Oh My My My)",
"Our Song","I'm Only Me When I'm With You","Invisible",
"A Perfectly Good Heart","Teardrops On My Guitar (Pop Version)","Fearless (Taylor's Version)","Fifteen (Taylor's Version)","Love Story (Taylor's Version)","Hey Stephen (Taylor's Version)",
"White Horse (Taylor's Version)","You Belong With Me (Taylor's Version)","Breathe (Taylor's Version)",
"Tell Me Why (Taylor's Version)","You're Not Sorry (Taylor's Version)","The Way I Loved You (Taylor's Version)",
"Forever & Always (Taylor's Version)","The Best Day (Taylor's Version)","Change (Taylor's Version)",
"Jump Then Fall (Taylor's Version)","Untouchable (Taylor's Version)","Forever & Always (Paino Version) [Taylor's Version]",
"Come In With The Rain (Taylor's Version)","Superstar (Taylor's Version)","The Other Side Of The Door (Taylor's Version)",
"Today Was A Fairytale (Taylor's Version)","You All Over Me (Taylor's Version) [From The Vault]","Mr. Perfectly Fine (Taylor's Version) [From The Vault]",
"We Were Happy (Taylor's Version) [From The Vault]","Don't You (Taylor's Version) [From The Vault]","Bye Bye Baby (Taylor's Version) [From The Vault]",
"Mine (US Version)","Sparks Fly","Back to December (US Version)","Speak Now","Dear John","Mean","The Story of Us (US Version)","Never Grow Up",
"Enchanted","Better Than Revenge","Innocent","Haunted","Last Kiss","Long Live", "Ours","If This Was A Movie","Superman","Back to December (Acoustic)",
"Haunted (Acoustic)","Mine","State Of Grace (Taylor's Version)","Red (Taylor's Version)", "Treacherous (Taylor's Version)","I Knew You Were Trouble (Taylor's Version)",
"All Too Well (Taylor's Version)","22 (Taylor's Version)","I Almost Do (Taylor's Version)","We Are Never Ever Getting Back Together (Taylor's Version)",
"Stay Stay Stay (Taylor's Version)","The Last Time (Taylor's Version) [feat. Gary Lightbody]","Holy Ground (Taylor's Version)","Sad Beautiful Tragic (Taylor's Version)",
"The Lucky One (Taylor's Version)","Everything Has Changed (Taylor's Version) [feat. Ed Sheeran]","Starlight (Taylor's Version)","Begin Again (Taylor's Version)",
"The Moment I Knew (Taylor's Version)","Come Back Be Here (Taylor's Version)","Girl At Home (Taylor's Version)","State Of Grace (Acoustic) [Taylor's Version]",
"Ronan (Taylor's Version)","Better Man (Taylor's Version) [From The Vault]","Nothing New (Taylor's Version) [From The Vault][feat. Phoebe Bridgers]","Babe (Taylor's Version) [From The Vault]",
"Message In A Bottle (Taylor's Version) [From The Vault]","I Bet You Think About Me (Taylor's Version) [From The Vault] [Feat. Chris Stapleton]","Forever Winter (Taylor's Version) [From The Vault]",
"Run (Taylor's Version) [From The Vault][feat. Ed Sheeran]","The Very First Night (Taylor's Version) [From The Vault]","All Too Well (10 Minute Version) [Taylor's Version] [From The Vault]",
"Welcome to New York","Blank Space","Style","Out of the Woods","All You Had To Do Was Stay","Shake It Off","I Wish You Would","Bad Blood","Wildest Dreams (Taylor's Version)","How You Get the Girl",
"This Love (Taylor's Version)","I Know Places","Clean","Ready For It?","End Game (feat. Ed Sheeran)","I Did Something Bad","Don't Blame Me","Delicate","Look What You Made Me Do","So It Goes",
"Gorgeous","Getaway Car","King of My Heart","Dancing With Our Hands Tied","Dress","This Is Why We Can't Have Nice Things","Call it What You Want","New Year's Day","I Forgot That You Existed",
"Cruel Summer","Lover","The Man","The Archer","I Think He Knows","Miss Americana & The Heartbreak Prince","Paper Rings","Cornelia Street","Death By A Thousand Cuts","London Boy",
"Soon You'll Get Better (feat. The Chicks)","False God","You Need To Calm Down","Afterglow","Me! (feat. Brendan Urie of Panic! At The Disco)","It's Nice To Have A Friend","Daylight",
"the 1","cardigan","the last great american dynasty","exile (feat. Bon Iver)","my tears ricochet","mirrorball","seven","august","this is me trying","illicit affairs","invisible string",
"mad woman","epiphany","betty","peace","hoax","the lakes (bonus track)","willow","champagne problems","gold rush","tis the damn season","tolerate it","no body, no crime (feat. HAIM)",
"happiness","dorothea","coney island (feat. The National)","ivy","cowboy like me","long story short","marjorie","closure","evermore (feat. Bon Iver)","right where you left me (bonus track)",
"it's time to go (bonus track)","Lavender Haze","Maroon","Anti-Hero","Snow On The Beach (feat. Lana Del Rey)","You're On Your Own, Kid","Midnight Rain","Question?","Vigilante Shit",
"Bejeweled","Labyrinth","Karma","Sweet Nothing","Mastermind","The Great War","Bigger Than The Whole Sky","Paris","High Infidelity","Glitch","Would've, Could've, Should've","Dear Reader",
"Safe & Sound (Taylor's Version)","Eyes Open (Taylor's Version)","All Of The Girls You Loved Before","Carolina (From The Motion Picture Where The Crawdads Sing)","Christmas Tree Farm (Old Timey Version)",
"I Don't Wanna Live Forever (Fifty Shades Darker)","The Joker And The Queen (feat. Taylor Swift)","Gasoline (Remix)","Highway Don't Care (feat. Taylor Swift)","Birch (feat. Taylor Swift)"];

function generateRandomSong(){
noSong = "No More Songs"
element = document.getElementById("randomSong");

if (songs.length == 0) {
    element.innerHTML=noSong;
    element.style.color = "red";
}
else {
const random = Math.floor(Math.random() * songs.length);
console.log(random, songs[random]);
selection = songs[random];
element.innerHTML=selection;
songs.splice(random,1);
console.log(songs.length);
}
}






/*function GetData() {
    var excel = new ActiveXObject("Excel.Application");
    var excel_file = excel.Workbooks.Open("Every Taylor Swift Song.xlsx");
    var excel_sheet = excel.Worksheets("Sheet1");
    for (var i =2; i<20;i++) {
        var myrow = excel_sheet.Range("C"+i);
        document.getElementById('div1').innerHTML=myrow;
    }
}
console.log(GetData());
*/