const obenEinsElement = document.getElementById("1-oben");
obenEinsElement.addEventListener('click', scrollFunction);
const obenZweiElement = document.getElementById("2-oben");
obenZweiElement.addEventListener('click', scrollFunction);
const obenDreiElement = document.getElementById("3-oben");
obenDreiElement.addEventListener('click', scrollFunction);
const obenVierElement = document.getElementById("4-oben");
obenVierElement.addEventListener('click', scrollFunction);
const obenFünfElement = document.getElementById("5-oben");
obenFünfElement.addEventListener('click', scrollFunction);

function scrollFunction(event) {
    var scrollToElement = event.target;
    console.log(scrollToElement.id.replace("oben", "unten"));
    scrollToElement = document.getElementById(scrollToElement.id.replace("oben", "unten"));
    console.log(scrollToElement);
    scrollToElement.scrollIntoView({ behavior: 'smooth'});
}

/*
const obenEinsElement = document.getElementById("1-oben");
obenEinsElement.addEventListener('click', obenEinsFunktion);

function obenEinsFunktion(event) {
    const scrollToElement = document.getElementById("1-unten");
    scrollToElement.scrollIntoView({ behavior: 'smooth'});
}

const obenZweiElement = document.getElementById("2-oben");
obenZweiElement.addEventListener('click', obenZweiFunktion);

function obenZweiFunktion(event) {
    const scrollToElement = document.getElementById("2-unten");
    scrollToElement.scrollIntoView({ behavior: 'smooth'});
}

const obenDreiElement = document.getElementById("3-oben");
obenDreiElement.addEventListener('click', obenDreiFunktion);

function obenDreiFunktion(event) {
    const scrollToElement = document.getElementById("3-unten");
    scrollToElement.scrollIntoView({ behavior: 'smooth'});
}
*/
