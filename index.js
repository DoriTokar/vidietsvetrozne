//#region Helper
function rdm(max) {
    return Math.round(Math.random() * (max - 1))
}
//#endregion

//#region Slideshow
class Slideshow {
    static currentImageIndex = 0;

    static colors = ['#b2b635', '#d7d7d7', '#537145'];

    static images = [
        './termékek/mug moc. (kt. použijem) 2.png',
        './termékek/socks mockup.png',
        './termékek/tshirt mockup.png',
    ];

    static start() {
        let svgElement = document.getElementById('slideshow-background');
        let imageElement = document.getElementById('image-slideshow');

        setInterval(() => {
            this.currentImageIndex++;
            if (this.currentImageIndex >= this.images.length) {
                this.currentImageIndex = 0;
            }
            svgElement.style.fill = this.colors[this.currentImageIndex];
            imageElement.setAttribute('xlink:href', this.images[this.currentImageIndex]);
        }, 5000);
    }
}

Slideshow.start();
//#endregion

//#region Cart
class Cart {
    static items = [];

    static addItem(item) {
        this.items.push(item);
    }

    static addCurrentSlideshowItem() {

    }
}
//#endregion

//#region Reviews
class Reviews {
    static list = [
        'Ďakujem za možnosť kúpi tejto knihy. Zmenil mi život a pohľad na niektoré veci. Určite si kúpim aj ďalšiu sériu (ak bude) ❤️',
        'Práve som začala svoju kariéru ako grafička, a môžem si povedať, že som fakt veľmi negatívna, a väčšinou práve to mi pokazí všetko. Sledujem ťa na tvojom Instagrame, a uvidela som že si vydala svoju vlastnú knihu. Tak som si povedala že si to kúpim, hlavne kvôli tým krásnym ilustráciám.... Najprv som neverila tomu, že by mi naozaj mohlo pomôcť, ale ako som si to čítala, a mala pred sebou popri pracovaní, úplne som videla veci inak. Tá energia tých obrázkov proste fakt vie vzbudiť pozitivitu v myslení. Len odporúčať viem 🤩',
        'Ah milujem! Fakt fantastická kniha, a tie šálky sú tiež fantastické!',
    ];

    static refresh() {
        let textReview = document.getElementById('text-review');
        let randomReview = this.list[rdm(this.list.length)];
        textReview.innerText = randomReview;
    }
}

Reviews.refresh();
//#endregion
