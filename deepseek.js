function calcMargin(){
    const containerMoldura = document.querySelector('.container-moldura');
    const boxTitle = document.querySelector('.box-title');
    const newTexts = document.querySelector('.new-texts');
    
    const containerHeight = containerMoldura.offsetHeight;
    const boxTitleHeight = boxTitle.offsetHeight;

    newTexts.style.marginTop = ((containerHeight - boxTitleHeight) + 70) + 'px';
}

window.addEventListener("resize", () => {
    calcMargin();
});

window.addEventListener("load", () => {
    calcMargin();
});