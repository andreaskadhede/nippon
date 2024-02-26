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
/*********************************************************** YASAI KASSEN ************************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/************************************************************* BYG SELV **************************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/********************************************************* SÅDAN FUNGERER DET ********************************************************/
/*************************************************************************************************************************************/


/*************************************************************************************************************************************/
/**************************************************************** FAQ ****************************************************************/
/*************************************************************************************************************************************/

function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
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
