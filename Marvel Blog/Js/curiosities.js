let ListOfCuriosities = ["Cofając się do pierwszego filmu MCU, czyli Iron Man. Nie wiem czy zauważyliście, ale w jednej ze scen kręconych w garażu było można dostrzec niedokończoną tarczę Kapitana Ameryki",
    "Teraz czas na jakąś ciekawostkę z Thorem, a właściwe ciekawostkę z filmami gdzie występuje Thor, do każdego filmu jest wykonywane kilka modeli i wersji mjolnira ", "Ciekawostka z filmów" +
    " z Hulkiem. W The Avengers dr Banner chciał popełnić sajmobójstwo, co sam wyznał. Co z koleji nawiązuje do filmu The Incredible Hulk, w której postać zamierzała strzelić sobie w głowe, aby zabopiec przemianie w Hulka. Jednak że scena została usunięta z filmu."]

let RandomStartItem = ListOfCuriosities[Math.floor(Math.random() * ListOfCuriosities.length)];

document.getElementById("curiosities").innerHTML = RandomStartItem;

function RandomCuriosities() {
    let RandomStartItemFunction = ListOfCuriosities[Math.floor(Math.random() * ListOfCuriosities.length)];
    document.getElementById("curiosities").innerHTML = RandomStartItemFunction;
}

    window.setInterval(RandomCuriosities, 13000)