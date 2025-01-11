// const fontSize=document.getElementById('fontsize');
// const fontFamily=document.getElementById('fontfamily');
// const fontColor=document.getElementById('fontcolor');
// const bold=document.getElementById('bold');
// const italic=document.getElementById('italic');
// const underline=document.getElementById('underline');
// const alignLeft=document.getElementById('alignleft');
// const alignCenter=document.getElementById('aligncenter');
// const alignRight=document.getElementById('alignright');
// const alignJustify=document.getElementById('alignjustify');
// const listOrdered=document.getElementById('listordered');
// const listUnordered=document.getElementById('listunordered');

// function bold(){
//     let content=document.getElementById('texteditorarea');
//     content.style.fontWeight="bold"
// }
let togglebold = 1
let content = document.getElementById('texteditorarea');
const texteditortool = document.getElementById('texteditortool');
texteditortool.addEventListener('click', (e) => {

    if (e.target.id === 'bold' && togglebold == 1) {
        content.style.fontWeight = "bold";
        togglebold = 0;

    }
    else if (e.target.id === 'bold' && togglebold == 0) {
        content.style.fontWeight = "normal";
        togglebold = 1;
    }
})

let toggleitalic = 1
texteditortool.addEventListener('click', (e) => {

    if (e.target.id === 'italic' && toggleitalic == 1) {
        content.style.fontStyle = "italic";
        toggleitalic = 0;

    }
    else if (e.target.id === 'italic' && toggleitalic == 0) {
        content.style.fontStyle = "normal";
        toggleitalic = 1;
    }
})

let toggleunderline = 1
texteditortool.addEventListener('click', (e) => {

    if (e.target.id === 'underline' && toggleunderline == 1) {
        content.style.textDecoration = "underline";
        toggleunderline = 0;

    }
    else if (e.target.id === 'underline' && toggleunderline == 0) {
        content.style.textDecoration = "none";
        toggleunderline = 1;
    }
})

