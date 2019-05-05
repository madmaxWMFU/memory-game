document.querySelector(".game-field").addEventListener("click", function(e) {
    console.log($(e.target));
    $(e.target).parent().addClass("rotateCard");
})

const arrayOfCards = ["card0", "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24", "card25", "card26", "card27", "card28", "card29", "card30", "card31", "card32", "card33", "card34", "card35", "card36", "card37", "card38", "card39", "card40", "card41", "card42", "card43", "card44", "card45", "card46", "card47", "card48", "card49", "card50", "card51", "card52", "card53"];

const shuffled = (arr) => arr.sort(() => 0.5 - Math.random());

let selected = shuffled(arrayOfCards).slice(0, 10);

let playCards = shuffled([...selected, ...selected]);

const main = document.querySelector(".game-field");

const getTemplateWrap = (newClass) => {
    return `
        <div class="flipper">
            <div class="front"></div>
            <div class="back ${newClass}"></div>
        </div>`;
}

playCards.forEach(val => {
    console.log(val);
    main.insertAdjacentHTML("beforeEnd", getTemplateWrap(val));
})

