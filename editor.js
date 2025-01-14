let blogcontent = document.getElementById("Blogarea");
const fontsize = document.getElementById('fontsize');
const fontcolor = document.getElementById('fontcolor');
const boldButton = document.getElementById('bold');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const alignButton = document.getElementById('align');
const listulButton = document.getElementById('listul');
const listolButton = document.getElementById('listol');
const saveBlog=document.getElementById('saveblog');

fontsize.addEventListener('input', (e) => {
    blogcontent.style.fontSize = `${e.target.value}` + "px";
})


fontcolor.addEventListener('input', (e) => {
    console.log(e.target.value)
    blogcontent.style.color = `${e.target.value}`;
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
alignButton.addEventListener('click', (e) => {
    console.log(e.target.id)
    if (alignToggleButton) {
        blogcontent.style.textAlign = `${e.target.id}`
        e.target.style.backgroundColor = 'rgb(190,188,188)';
        e.target.style.padding = "2px";
        alignToggleButton = false;
    }

    else {
        alignToggleButton = true;
        e.target.style.backgroundColor = 'rgb(226, 231, 231)';
        blogcontent.style.textAlign = "left"
    }
})

let listulToggle = false;
let listolToggle = false;

function convertToUnorderedList(text) {
    const contentArray = text.split('\n');
    return contentArray.map(line => `• ${line}`).join('\n');
}

function convertToOrderedList(text) {
    const contentArray = text.split('\n');
    return contentArray.map((line, index) => `${index + 1}. ${line}`).join('\n');
}

function removeListFormatting(text) {
    return text.replace(/^•\s*/gm, '').replace(/^\d+\.\s*/gm, '');
}

listulButton.addEventListener('click', () => {
    const blogcontent = document.getElementById("Blogarea");

    if (!listulToggle) {
        blogcontent.value = convertToUnorderedList(removeListFormatting(blogcontent.value));
        listulToggle = true;
        listolToggle = false;

        // Change background color
        listulButton.style.backgroundColor = 'rgb(190,188,188)';
        listolButton.style.backgroundColor = '';
    } else {
        blogcontent.value = removeListFormatting(blogcontent.value);
        listulToggle = false;

        // Reset background color
        listulButton.style.backgroundColor = '';
    }
});

listolButton.addEventListener('click', () => {
    const blogcontent = document.getElementById("Blogarea");

    if (!listolToggle) {
        blogcontent.value = convertToOrderedList(removeListFormatting(blogcontent.value));
        listolToggle = true;
        listulToggle = false;

        // Change background color
        listolButton.style.backgroundColor = 'rgb(190,188,188)';
        listulButton.style.backgroundColor = '';
    } else {
        blogcontent.value = removeListFormatting(blogcontent.value);
        listolToggle = false;

        // Reset background color
        listolButton.style.backgroundColor = '';
    }
});

document.getElementById('Blogarea').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && (listulToggle || listolToggle)) {
        e.preventDefault(); // Prevent the default action of adding a new line

        const start = this.selectionStart;
        const end = this.selectionEnd;

        // Get the content before and after the cursor
        const beforeCursor = this.value.substring(0, start);
        const afterCursor = this.value.substring(end);

        // Insert a new bullet point or number at the current cursor position
        const newBulletPoint = listulToggle ? '\n• ' : `\n${beforeCursor.split('\n').length + 1}. `;

        // Set the new value of the textarea
        this.value = beforeCursor + newBulletPoint + afterCursor;

        // Move the cursor to the new bullet point
        this.selectionStart = this.selectionEnd = start + newBulletPoint.length;
    }
});

// save blog to local storage
saveBlog.addEventListener('click',()=>{
    localStorage.setItem('blog', `${blogcontent.value}`);
})