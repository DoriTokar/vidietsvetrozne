var listReviews = [
    'Ďakujem za možnosť kúpi tejto knihy. Zmenil mi život a pohľad na niektoré veci. Určite si kúpim aj ďalšiu sériu (ak bude) ❤️',
    'Práve som začala svoju kariéru ako grafička, a môžem si povedať, že som fakt veľmi negatívna, a väčšinou práve to mi pokazí všetko. Sledujem ťa na tvojom Instagrame, a uvidela som že si vydala svoju vlastnú knihu. Tak som si povedala že si to kúpim, hlavne kvôli tým krásnym ilustráciám.... Najprv som neverila tomu, že by mi naozaj mohlo pomôcť, ale ako som si to čítala, a mala pred sebou popri pracovaní, úplne som videla veci inak. Tá energia tých obrázkov proste fakt vie vzbudiť pozitivitu v myslení. Len odporúčať viem 🤩',
    'Ah milujem! Fakt fantastická kniha, a tie šálky sú tiež fantastické!',
];

function rdm(max) {
    return Math.round(Math.random() * (max - 1))
}

function refreshReview() {
    let textReview = document.getElementById('text-review');
    let randomReview = listReviews[rdm(listReviews.length)];
    textReview.innerText = randomReview;
}

refreshReview();
