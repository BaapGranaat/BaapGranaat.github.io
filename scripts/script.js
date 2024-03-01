// Bim Bam Baap
function newLine()
{
  const biology = ["Flora", "Fauna", "Stad, Dorp of Land", "Een huisdier", "Iets uit de zee", "Bij de dierentuin", "Een god of godin", "Bij de groenteboer", "Iets scheikundigs", "Iets natuurkundigs", "Iets biologisch", "Een sportclub", "Een huishoudelijk product", "Een kleur", "Iets duurs", "1 ronde wavelength", "pof pof pass"];
  const people = ["Een mannennaam", "Een vrouwennaam", "Bekend persoon", "Een fictief persoon", "Een artiest", "Een liedje", "Bekende nederlander", "Snoep/Chips", "Drinken alcohol", "Drinken non-alcohol", "Basketbalspeler", "Voetbalspeler","Merk kleding of auto", "Een achternaam", "Iets kleins", "Wijsspel"];
  const random = ["Iets waarmee je iemand kan vermoorden", "Een woord wat je niet kent maar wel denkt dat het iets is", "Iets waardoor je van je fiets kan vallen", "Wapen voor zombie apocalyps (moet goedgekeurd worden)", "Buitenlands woord (geen engels)", "Iets wat je doodt als het op je valt", "Iets wat je bij de bouwmarkt kan kopen", "een technologische term", "Iets aardrijkskundig" , "Iets brnadbaars", "Iets wiskundigs", "Iets sportgerelateerds", "Iets dat kinderen buiten doen", "Iets dat je in de kroeg kan vinden", "Iets dat je op vakantie kan doen", "Iets wat je graag in huis hebt", "Steen papier schaar"];
  const games = ["Pokemon", "Ninetendo gerelateerd", "Films", "Digitaal spel", "Een app op je telefoon", "Analoog spel", "Iets uit brawl stars", "Een elektronisch object", "Een computerterm", "een voertuig", "Iets uit de geschiedenis", "Een baan", "Iets groots", "Iets dat je in je portomonee kan vinden", "Iets dat je kan vervormen met je handen", "Iets uit Minecraft", "Staar wedstrijd met speler links"];
  const jobs = ["Iets uit de mythologie", "Iets dat in je zak past", "Iets sportgerelateerd", "Iets wat je bij een restaurant zou kunnen halen", "Iets wat je op school kan vinden", "Iets brandbaars", "Iets bij de slager", "iets dat je op straat kan vinden", "iets verslavends", "Iets in je lichaam", "Een water of eiland", "Iets goedkoops", "Iets dat in je zak past", "Een monster" , "Iets dat je liever niet in huis hebt", "Staar wedstrijd met speler rechts"];
  // const minigames = ["pof pof pass", "Staar wedstrijd met speler rechts", "Staar wedstrijd met speler links", "Steen papier schaar", "Wijsspel", "1 ronde wavelength"]  
  // const categories = ["Iets waarmee je iemand kan vermoorden", "Flora", "Fauna", "Pokemon", "Stad, Dorp of Land", "Een mannennaam", "Een vrouwennaam", "Iets uit de mythologie", "Iets dat in je zak past", "Iets sportgerelateerd", "Bij de slager", "Iets brandbaars", "Ninetendo gerelateerd", "Een elektronisch object", "Bekend persoon", "Iets wat je doodt als het op je valt", "Een fictief persoon", "Bij de dierentuin", "Iets wat je bij de bouwmarkt kan kopen", "Iets waardoor je van je fiets kan vallen", "Een artiest", "Een huisdier", "Iets uit de zee", "Een liedje", "Iets uit brawl stars", "Bekende nederlander", "Films", "Snoep/Chips", "Drinken alcohol", "Drinken non-alcohol", "Analoog spel", "Digitaal spel", "Basketbalspeler", "Voetbalspeler","Merk kleding of auto", "Buitenlands woord (geen engels)", "Wapen voor zombie apocalyps (moet goedgekeurd worden)", "Iets wat je bij een restaurant zou kunnen halen", "Iets wat je op school kan vinden", "Een app op je telefoon", "Een woord wat je niet kent maar wel denkt dat het iets is", "Een god of godin"];
    const categories = [biology, people, random, games, jobs];
    let pickCategories = Math.floor(Math.random() * categories.length);
    let pickThemes = Math.floor(Math.random() * categories[pickCategories].length);
    document.getElementById("text").innerHTML = categories[pickCategories][pickThemes];
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