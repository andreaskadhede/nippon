"use strict"

/*************************************************************************************************************************************/
/*************************************************************** NAVBAR **************************************************************/
/*************************************************************************************************************************************/

window.onclick = function(event) {
    // her tjekker vi om det elemnt der er trykket på ikke er et menupunkt eller et dropdownmenupunkt
    if (!event.target.matches('.drop1') && !event.target.matches('.content1') &&
        !event.target.matches('.drop2') && !event.target.matches('.content2') &&
        !event.target.matches('.drop3') && !event.target.matches('.content3')) {
        
        // hvis if er opfyldt, så lukker dropdownmenuer (så hvis der bliver trykket udenfor menuerne)
        closeDropdowns();
    }
}

// funktion til at lukke dropdowns
function closeDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-content'); //querySelectorAll bruges, fordi det ikke virker med getElementsByClassName, da querySelectorAll retunere en statistk Nodeliste, hvorimod getElementsByClassName returnere en live HTMLCollection
    dropdowns.forEach(function(dropdown) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
        // hvis "show" er en af klasserne på elemnterne, fjernes den
    });
}

// Lidt mere forklaring på linje 20
// Live HTMLCollection: Når du kalder getElementsByClassName(), får du en live samling af elementer, der har det angivne klassenavn. Dette betyder, at hvis elementer tilføjes eller fjernes fra DOM'en senere, vil samlingen automatisk opdatere for at afspejle disse ændringer. Imidlertid betyder det også, at iterering over den og udførelse af operationer, der ændrer DOM'en, kan forårsage uventet adfærd, da samlingen ændres i realtid.
// Statiske NodeList: querySelectorAll(), derimod, returnerer en statisk NodeList. Dette betyder, at den fanger et øjebliksbillede af alle matchende elementer på det tidspunkt, den kaldes. Den opdaterer sig ikke, når DOM'en ændres. Dette gør det mere sikkert at arbejde med i scenarier, hvor du itererer over elementer og ændrer DOM'en, da du ikke vil støde på de samme uventede ændringer som med en live samling.


// funktion til at få dropdown frem ved måltidskasser
function dropdown1() {
    closeDropdowns(); // bruger funktionen fral inje 19 til at lukke de andre dropdown
    document.getElementById("myDropdown1").classList.toggle("show"); //her tages css'en fra "show" og bruges på dropdownmenuen, fordi klassen bliver "tilføjet"
}

// funktion til at få dropdown frem ved om nippon
function dropdown2() {
    closeDropdowns(); // bruger funktionen fral inje 19 til at lukke de andre dropdown
    document.getElementById("myDropdown2").classList.toggle("show"); //her tages css'en fra "show" og bruges på dropdownmenuen, fordi klassen bliver "tilføjet"
}

// funktion til at få dropdown frem ved din konto
function dropdown3() {
    closeDropdowns(); // bruger funktionen fral inje 19 til at lukke de andre dropdown
    document.getElementById("myDropdown3").classList.toggle("show"); //her tages css'en fra "show" og bruges på dropdownmenuen, fordi klassen bliver "tilføjet"
}
/*************************************************************************************************************************************/
/************************************************************** FORSIDE **************************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/***************************************************** YASAI KASSEN + BYG SELV *******************************************************/
/*************************************************************************************************************************************/


// slider ved byg selv menuen
function moveToTheLeft1() {
  let first = document.getElementsByClassName("ret")[0];
  const boks = document.getElementsByClassName("slider1")[0];

  boks.removeChild(first);
  boks.appendChild(first);

}

function moveToTheRight1() {
  let last = document.getElementsByClassName("ret")[2];
  const boks = document.getElementsByClassName("slider1")[0];

  boks.removeChild(last);
  boks.insertBefore(last, boks.firstChild);
}

function moveToTheLeft2() {
  let first = document.getElementsByClassName("ret2")[0];
  const boks = document.getElementsByClassName("slider2")[0];

  boks.removeChild(first);
  boks.appendChild(first);

}

function moveToTheRight2() {
  let last = document.getElementsByClassName("ret2")[2];
  const boks = document.getElementsByClassName("slider2")[0];

  boks.removeChild(last);
  boks.insertBefore(last, boks.firstChild);
}

function moveToTheLeft3() {
  let first = document.getElementsByClassName("ret3")[0];
  const boks = document.getElementsByClassName("slider3")[0];

  boks.removeChild(first);
  boks.appendChild(first);

}

function moveToTheRight3() {
  let last = document.getElementsByClassName("ret3")[2];
  const boks = document.getElementsByClassName("slider3")[0];

  boks.removeChild(last);
  boks.insertBefore(last, boks.firstChild);
}



function toggleChoice(id) {
  var drop = document.getElementById('drop' + id);
  var knap = document.getElementById('knap' + id);

  if (drop.style.display === 'block') {
      drop.style.display = 'none';
  } else {
    drop.style.display = 'block';
  }
}

/*************************************************************************************************************************************/
/********************************************************* SÅDAN FUNGERER DET ********************************************************/
/*************************************************************************************************************************************/

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".infographic > section");
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      sections.forEach((section, index) => {
        if (isInViewport(section)) {
          section.classList.add("visible");
        }
      });
    }
  
    // Initial check on page load
    handleScroll();
  
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
  });
  
/*************************************************************************************************************************************/
/**************************************************************** FAQ ****************************************************************/
/*************************************************************************************************************************************/

// Tilføjer en "if-else" for at svaret kommer frem, når der klikkes på pilen 

function toggleAnswer(id) {
  let answer = document.getElementById('answer' + id);
  let question = document.getElementById('question' + id);
  let questionFed = document.getElementById('faq' + id);
  let arrow = document.getElementById ('pil' + id);

  if (answer.style.display === 'block') {
      answer.style.display = 'none';
      question.style.backgroundColor = '#CEDFE3'; // Skift tilbage til den oprindelige farve
      question.classList.remove('faq-udvidetboks'); // Fjern udvidelsesklassen
      questionFed.classList.remove('questions-fed'); // Fjern fed skrift-klassen
      arrow.innerHTML = '&darr;'; // Får pilen til at pege nedad
      arrow.style.paddingTop = '0'; // Retter pilen, så den er placeret som spørgsmålet
  } else {
      answer.style.display = 'block';
      question.style.backgroundColor = '#FFF9F2'; // Ændr farven til en ny farve
      question.classList.add('faq-udvidetboks'); // Tilføj udvidelsesklassen
      questionFed.classList.add('questions-fed'); // Tilføj fed skrift-klassen
      arrow.innerHTML = '&uarr;'; // Får pilen til at pege opad
      arrow.style.paddingTop = '1.6rem'; // Retter pilen, så den er placeret som spørgsmålet
  }
}


/*************************************************************************************************************************************/
/************************************************************* DIN KURV **************************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/************************************************************ TILMELD DIG ************************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/***************************************************************** UPS ***************************************************************/
/*************************************************************************************************************************************/

/*************************************************************************************************************************************/
/********************************************************** SUCCES/ANNULLERET ********************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/*************************************************************** FOOTER **************************************************************/
/*************************************************************************************************************************************/
