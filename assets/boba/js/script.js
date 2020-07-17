let carouselWidth = 1000;
let carouselHeight = 500;

let homepage = document.getElementById("homepage");
let locations = document.getElementById("locations");
let logo2 = document.getElementById("logo2");
let seattlePin = document.getElementById("seattle-pin");
let seattleText = document.getElementById("seattle-text");
let sfPin = document.getElementById("sf-pin");
let sfText = document.getElementById("sf-text");
let nycPin = document.getElementById("nyc-pin");
let nycText = document.getElementById("nyc-text");
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let buttonUpSeattle = document.getElementById("button-up-seattle");
let buttonUpSF = document.getElementById("button-up-sf");
let buttonUpNYC = document.getElementById("button-up-nyc");
let row = document.getElementById("carousel-row");
let bottomRow = document.getElementById("carousel-row-2");
let seattleTop = document.getElementById("seattle-top");
let sfTop = document.getElementById("sf-top");
let nycTop = document.getElementById("nyc-top");
let carousel = document.getElementById("carousel");
let mooBar = document.getElementById("moobar");
let youngTea = document.getElementById("youngtea");
let bobaUp = document.getElementById("bobaup");
let bobaGuys = document.getElementById("bobaguys");
let purpleKow = document.getElementById("purplekow");
let happyLemon = document.getElementById("happylemon");
let vivi = document.getElementById("vivi");
let gongCha = document.getElementById("gongcha");
let barPaTea = document.getElementById("barpatea");
let seattlePage = document.getElementById("seattle-page");
let sfPage = document.getElementById("sf-page");
let nycPage = document.getElementById("nyc-page");
let seattleShopPage = document.getElementById("seattle-shop-page");
let sfShopPage = document.getElementById("sf-shop-page");
let nycShopPage = document.getElementById("nyc-shop-page");
let mooBarPage = document.getElementById("moobar-page");
let youngTeaPage = document.getElementById("youngtea-page");
let bobaUpPage = document.getElementById("bobaup-page");
let bobaGuysPage = document.getElementById("bobaguys-page");
let purpleKowPage = document.getElementById("purplekow-page");
let happyLemonPage = document.getElementById("happylemon-page");
let viviPage = document.getElementById("vivi-page");
let gongChaPage = document.getElementById("gongcha-page");
let barPaTeaPage = document.getElementById("barpatea-page");

let cityNum = 0;
let offset = 0;
let vertOffset = 0;

logo2.onclick = function () {
  homepage.scrollIntoView();
}

function scrollToSeattle() {
  locations.scrollIntoView();
  toSeattle();
}

seattlePin.onclick = scrollToSeattle;
seattleText.onclick = scrollToSeattle;

function scrollToSF() {
  locations.scrollIntoView();
  toSF();
}

sfPin.onclick = scrollToSF;
sfText.onclick = scrollToSF;

function scrollToNYC() {
  locations.scrollIntoView();
  toNYC();
}

nycPin.onclick = scrollToNYC;
nycText.onclick = scrollToNYC;

function showNextImage() {
  sfPage.classList.remove("hidden");
  nycPage.classList.remove("hidden");
	cityNum = cityNum + 1;
	offset = carouselWidth * cityNum * -1;
	row.style.left = offset + 'px';
  bottomRow.style.left = offset + 'px';
  checkControls();
  boldCity();
}

nextButton.onclick = showNextImage;

function showPrevImage() {
	seattlePage.classList.remove("hidden");
  sfPage.classList.remove("hidden");
	cityNum = cityNum - 1;
	offset = carouselWidth * cityNum * -1;
	row.style.left = offset + 'px';
  bottomRow.style.left = offset + 'px';
  checkControls();
  boldCity();
}

prevButton.onclick = showPrevImage;

function toSeattle() {
  seattlePage.classList.remove("hidden");
  if (vertOffset == 0) {
    sfPage.classList.remove("hidden");
    nycPage.classList.remove("hidden");
  } else if (cityNum == 1){
    sfPage.classList.add("hidden");
    nycPage.classList.add("hidden");
    seattleShopPage.classList.add("hidden");
  } else if (cityNum == 2) {
    sfPage.classList.add("hidden");
    nycPage.classList.add("hidden");
    seattleShopPage.classList.add("hidden");
    sfShopPage.classList.add("hidden");
  }
  cityNum = 0;
  offset = carouselWidth * cityNum * -1;
  row.style.left = offset + 'px';
  bottomRow.style.left = offset + 'px';
  vertOffset = 0
  carousel.style.top = vertOffset;
  checkControls();
  boldCity();
}

seattleTop.onclick = toSeattle;
buttonUpSeattle.onclick = toSeattle;

function toSF() {
  sfPage.classList.remove("hidden");
  if (vertOffset == 0) {
    seattlePage.classList.remove("hidden");
    nycPage.classList.remove("hidden");
  } else if (cityNum == 0){
    seattlePage.classList.add("hidden");
    sfShopPage.classList.add("hidden");
  } else if (cityNum == 2) {
    nycPage.classList.add("hidden");
    sfShopPage.classList.add("hidden");
  }
  cityNum = 1;
  offset = carouselWidth * cityNum * -1;
  row.style.left = offset + 'px';
  bottomRow.style.left = offset + 'px';
  vertOffset = 0
  carousel.style.top = vertOffset;
  checkControls();
  boldCity();
}

sfTop.onclick = toSF;
buttonUpSF.onclick = toSF;

function toNYC() {
  nycPage.classList.remove("hidden");
  if (vertOffset == 0) {
    seattlePage.classList.remove("hidden");
    sfPage.classList.remove("hidden");
  } else if (cityNum == 0){
    seattlePage.classList.add("hidden");
    sfPage.classList.add("hidden");
    sfShopPage.classList.add("hidden");
    nycShopPage.classList.add("hidden");
  } else if (cityNum == 1) {
    sfPage.classList.add("hidden");
    nycShopPage.classList.add("hidden");
  }
  cityNum = 2;
  let offset = carouselWidth * cityNum * -1;
  row.style.left = offset + 'px';
  bottomRow.style.left = offset + 'px';
  vertOffset = 0
  carousel.style.top = vertOffset;
  checkControls();
  boldCity();
}

nycTop.onclick = toNYC;
buttonUpNYC.onclick = toNYC;

function toMooBar() {
  seattleShopPage.classList.remove("hidden");
  mooBarPage.classList.remove("hidden");
  youngTeaPage.classList.add("hidden");
  bobaUpPage.classList.add("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

mooBar.onclick = toMooBar;

function toYoungTea() {
  seattleShopPage.classList.remove("hidden");
  mooBarPage.classList.add("hidden");
  youngTeaPage.classList.remove("hidden");
  bobaUpPage.classList.add("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

youngTea.onclick = toYoungTea;

function toBobaUp() {
  seattleShopPage.classList.remove("hidden");
  mooBarPage.classList.add("hidden");
  youngTeaPage.classList.add("hidden");
  bobaUpPage.classList.remove("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

bobaUp.onclick = toBobaUp;

function toBobaGuys() {
  sfShopPage.classList.remove("hidden");
  bobaGuysPage.classList.remove("hidden");
  purpleKowPage.classList.add("hidden");
  happyLemonPage.classList.add("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

bobaGuys.onclick = toBobaGuys;

function toPurpleKow() {
  sfShopPage.classList.remove("hidden");
  bobaGuysPage.classList.add("hidden");
  purpleKowPage.classList.remove("hidden");
  happyLemonPage.classList.add("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

purpleKow.onclick = toPurpleKow;

function toHappyLemon() {
  sfShopPage.classList.remove("hidden");
  bobaGuysPage.classList.add("hidden");
  purpleKowPage.classList.add("hidden");
  happyLemonPage.classList.remove("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

happyLemon.onclick = toHappyLemon;

function toVivi() {
  nycShopPage.classList.remove("hidden");
  viviPage.classList.remove("hidden");
  gongChaPage.classList.add("hidden");
  barPaTeaPage.classList.add("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

vivi.onclick = toVivi;

function toGongCha() {
  nycShopPage.classList.remove("hidden");
  viviPage.classList.add("hidden");
  gongChaPage.classList.remove("hidden");
  barPaTeaPage.classList.add("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

gongCha.onclick = toGongCha;

function toBarPaTea() {
  nycShopPage.classList.remove("hidden");
  viviPage.classList.add("hidden");
  gongChaPage.classList.add("hidden");
  barPaTeaPage.classList.remove("hidden");
  vertOffset = carouselHeight * -1;
  carousel.style.top = vertOffset + 'px';
  removeButtons();
}

barPaTea.onclick = toBarPaTea;

function removeButtons() {
  prevButton.classList.add("hidden");
  nextButton.classList.add("hidden");
}

function checkControls() {
	// This if-statement checks if we're at the first image.
	// In the parentheses below, check what imageNum is equal to.
	if (cityNum == 0) {
		// What should happen if it's the first image?
    prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		// otherwise, what should happen?
    prevButton.classList.remove("hidden");
	}
	// This if-statement checks if we're at the last image.
	// In the parentheses below, check what imageNum is equal to.
	if (cityNum == 2) {
		// What should happen it's the last image?
    nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		// otherwise, what should happen?
    nextButton.classList.remove("hidden");
	}
}

function boldCity() {
  if (cityNum == 0) {
    seattleTop.classList.add("bolded");
    sfTop.classList.remove("bolded");
    nycTop.classList.remove("bolded");
  } else if (cityNum == 1) {
    seattleTop.classList.remove("bolded");
    sfTop.classList.add("bolded");
    nycTop.classList.remove("bolded");
  } else {
    seattleTop.classList.remove("bolded");
    sfTop.classList.remove("bolded");
    nycTop.classList.add("bolded");
  }
}
