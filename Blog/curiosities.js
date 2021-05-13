let ListOfCuriosities = ["Cofając się do pierwszego filmu MCU, czyli Iron Man. Nie wiem czy zauważyliście, ale w jednej ze scen kręconych w garażu było można dostrzec niedokończoną tarczę Kapitana Ameryki",
"Teraz czas na jakąś ciekawostkę z Thorem, a właściwe ciekawostkę z filmami gdzie występuje Thor, do każdego filmu jest wykonywane kilka wersji mjolnira "]

function TimeoutRandom() {
    let item = ListOfCuriosities[Math.floor(Math.random() * ListOfCuriosities.length)];
    document.getElementById("curiosities").innerHTML = item;
}

window.setInterval(TimeoutRandom, 10000)