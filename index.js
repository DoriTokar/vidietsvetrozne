//#region Helper
function rdm(max) {
    return Math.round(Math.random() * (max - 1))
}
//#endregion

const shopItems = [
    {
        name: 'hrnček',
        image: './termékek/mug moc. (kt. použijem) 2.png',
        color: '#b2b635',
    },
    {
        name: 'ponožky',
        image: './termékek/socks mockup.png',
        color: '#d7d7d7',
    },
    {
        name: 'tričko',
        image: './termékek/tshirt mockup.png',
        color: '#537145',
    },
];

//#region Slideshow
class Slideshow {
    static currentImageIndex = 0;

    static start() {
        setInterval(() => {
            this.next();
        }, 5000);
    }

    static next() {
        let svgElement = document.getElementById('slideshow-background');
        let imageElement = document.getElementById('image-slideshow');

        this.currentImageIndex++;
        if (this.currentImageIndex >= shopItems.length) {
            this.currentImageIndex = 0;
        }
        svgElement.style.fill = shopItems[this.currentImageIndex].color;
        imageElement.setAttribute('xlink:href', shopItems[this.currentImageIndex].image);
        if (scrollSection == 2) {
            document.getElementById('deco-line').style.backgroundColor = shopItems[this.currentImageIndex].color;
        }
    }
}

Slideshow.start();
//#endregion

//#region Cart
class Cart {
    static items = [];

    static addItem(item) {
        this.items.push(item);
        alert('+🛒 ' + item);
    }

    static addCurrentSlideshowItem() {
        this.addItem(shopItems[Slideshow.currentImageIndex].name);
    }

    static show() {
        alert('🛒: ' + this.items);
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

//#region Deco-line
var sectionColors = ['#f16322', '#b2b635', 'transparent', '#456331'];
var container = document.getElementsByClassName('container')[0];
var scrollSection = 0;

container.addEventListener('scroll', (e) => {
    let scroll = container.scrollTop;
    let height = container.clientHeight;
    scrollSection = Math.round(scroll / height);
    
    if (scrollSection == 2) {
        document.getElementById('deco-line').style.backgroundColor = shopItems[Slideshow.currentImageIndex].color;
    }
    else {
        document.getElementById('deco-line').style.backgroundColor = sectionColors[scrollSection];
    }
});

document.getElementById('deco-line').style.backgroundColor = sectionColors[scrollSection];
//#endregion