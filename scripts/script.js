// Bim Bam Baap
function newLine()
{
    const lines = ["Iets waarmee je iemand kan vermoorden", "Flora", "Fauna", "Pokemon", "Stad, Dorp of Land", "Een mannennaam", "Een vrouwennaam", "Iets uit de mythologie", "Iets dat in je zak past", "Iets sportgerelateerd", "Bij de slager", "Iets brandbaars", "Ninetendo gerelateerd", "Een elektronisch object", "Bekend persoon", "Iets wat je doodt als het op je valt", "Een fictief persoon", "Bij de dierentuin", "Iets wat je bij de bouwmarkt kan kopen", "Iets waardoor je van je fiets kan vallen", "Een artiest", "Een huisdier", "Iets uit de zee", "Een liedje", "Iets uit brawl stars", "Bekende nederlander", "Films", "Snoep/Chips", "Drinken alcohol", "Drinken non-alcohol", "Analoog spel", "Digitaal spel", "Basketbalspeler", "Voetbalspeler","Merk kleding of auto", "Buitenlands woord (geen engels)", "Wapen voor zombie apocalyps (moet goedgekeurd worden)", "Iets wat je bij een restaurant zou kunnen halen", "Iets wat je op school kan vinden", "Een app op je telefoon", "Een woord wat je niet kent maar wel denkt dat het iets is"];
    let pick = Math.floor(Math.random() * lines.length);
    document.getElementById("text").innerHTML = lines[pick];
}

function alphabetLetter()
{
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let pickAlphabet = Math.floor(Math.random() * alphabet.length);
    document.getElementById("startLetter").innerHTML = "Je moet beginnen met de letter: " + alphabet[pickAlphabet];
}

function removeAlphabetLetter()
{
    document.getElementById("startLetter").innerHTML = " ";
}

// Clicker
var clickCount = 0;

document.getElementById("clickButton").addEventListener("click", function() {
  clickCount++;
  document.getElementById("counter").textContent = clickCount;
});


// Dropdown menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 