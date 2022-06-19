let imagesCollection = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg', 'img/15.jpg', 'img/16.jpg', 'img/17.jpg', 'img/18.jpg', 'img/19.jpg', 'img/20.jpg', 'img/21.jpg', 'img/22.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg', 'img/26.jpg', 'img/27.jpg', 'img/28.jpg', 'img/29.jpg', 'img/30.jpg',]


// Läd alle Bilder mit der Animation //
function render() {
    document.getElementById('images').innerHTML = '';
    for (i = 0; i < imagesCollection.length; i++) {
        document.getElementById('images').innerHTML += /*html*/`
        <div id="animatedBorderSetting${i}" class="animatedBorder"><img onclick="showImg(${i})" src="${imagesCollection[i]}" class="img"></div>`
    }
    animatedButtonShow()
}


/*######################################################################################################*/
/*######################################################################################################*/


// Das Bild was man anklickt wird größer angezeigt //
function showImg(i) {
    let images = document.getElementById('images');
    images.innerHTML += '';
    images.classList.remove('displayNone');
    images.innerHTML = `
    <div class ="bigImgView">
    <img title="Letzte Bild" onclick="moveLeft(${i})" class="Arrow" src="img/linksPfeil.png">
    <img title="Zurück zu Übersicht" onclick="render()" class="imgBig" src="${imagesCollection[i]}">
    <img title="Nächste Bild" onclick="moveRight(${i})" class="Arrow" src="img/rechtsPfeil.png">
    </div>
 `;
 animatedButtonHide()
}


/*######################################################################################################*/
/*######################################################################################################*/


// Schließt das Bild was groß angezeigt wird //
function closeImg() {
    let images = document.getElementById('images');
    images.innerHTML = '';
    images.classList.add('displayNone')
}


/*######################################################################################################*/
/*######################################################################################################*/


// Schaltet die die Animation der Bilder Aus oder Ein //
function animatedSetting() {
    for (i = 0; i < imagesCollection.length; i++) {
        var element = document.getElementById(`animatedBorderSetting` + i);
        element.classList.toggle("animatedBorder");
    }
}

// Animations Button verschwinden lassen //
function animatedButtonHide() {
    let buttonHide = document.getElementById('buttonHide');
    buttonHide.innerHTML = '';
    buttonHide.classList.add('displayNone');
}

// Animations Button wieder auftauchen lassen //
function animatedButtonShow() {
    let buttonHide = document.getElementById('buttonHide');
    buttonHide.innerHTML = '';
    buttonHide.classList.remove('displayNone');
}


/*######################################################################################################*/
/*######################################################################################################*/


// Wechselt zum nächsten bild nach Rechts //
function moveRight(i) {
    if (i < imagesCollection.length - 1) {
        i++
    } else {
        i = 0
    }
    document.getElementById('images').innerHTML = ``;
    showImg(i);
}

// Wechselt zum nächsten bild nach Links //
function moveLeft(i) {
    if (i !== 0) {
        i--
    } else {
        i = imagesCollection.length - 1
    }
    document.getElementById('images').innerHTML = ``;
    showImg(i);
}


/*######################################################################################################*/
/*######################################################################################################*/
