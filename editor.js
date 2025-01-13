let blogcontent = document.getElementById("Blogarea");
const fontsize=document.getElementById('fontsize');
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const alignButton = document.getElementById('align');


fontsize.addEventListener('click',(e)=>{
    console.log(e.target.value)
    blogcontent.style.fontSize = `${e.target.value}`;

})

let boldtoggle = true;
boldButton.addEventListener('click', () => {

    if (boldtoggle) {
        blogcontent.style.fontWeight = "bold";
        boldButton.style.backgroundColor = 'rgb(190, 188, 188)';
        boldButton.style.padding = "2px";
        boldtoggle = false;
    }
    else {
        blogcontent.style.fontWeight = "normal";
        boldButton.style.backgroundColor = '';
        boldButton.style.padding = "0px";
        boldtoggle = true;
    }
})


let italictoggle = true;
italicButton.addEventListener('click', () => {

    if (italictoggle) {
        blogcontent.style.fontStyle = "italic";
        italicButton.style.backgroundColor = 'rgb(190, 188, 188)';
        italicButton.style.padding = "2px";
        italictoggle = false;
    }
    else {
        blogcontent.style.fontStyle = "normal";
        italicButton.style.backgroundColor = '';
        italicButton.style.padding = "0px";
        italictoggle = true;
    }
})

let underlinetoggle = true;
underlineButton.addEventListener('click', () => {

    if (underlinetoggle) {
        blogcontent.style.textDecoration = "underline"
        underlineButton.style.backgroundColor = 'rgb(190, 188, 188)';
        underlineButton.style.padding = "2px";
        underlinetoggle = false;
    }
    else {
        blogcontent.style.textDecoration = "none";
        underlineButton.style.backgroundColor = '';
        underlineButton.style.padding = "0px";
        underlinetoggle = true;
    }
})


let alignToggleButton = true;

alignButton.addEventListener('click',(e)=>{
    console.log(e.target.id)
    if(alignToggleButton){
    blogcontent.style.textAlign = `${e.target.id}`
    e.target.style.backgroundColor ='rgb(190,188,188)';
    e.target.style.padding="2px";
    alignToggleButton=false;
    }
    
    else{
        alignToggleButton=true;
        e.target.style.backgroundColor ='rgb(226, 231, 231)';
        blogcontent.style.textAlign="left"
    }
})
