let readButton = document.getElementsByClassName("read-button");
for (let index = 0; index < readButton.length; index++) {
    readButton[index].addEventListener('click', () => {
        window.location.href = "./blog.html";
    })
}


// Creating blog Page 
const text = document.getElementsByClassName('randomtext');
let blogs = [
    {
        title: "The Ultimate Guide to Traveling on a Budget",
        author: "John Doe",
        date: "2025-01-01",
        category: "Travel",
        content: text[0].innerText
    },
    {
        title: "The Best Restaurants in Town",
        author: "Jane Doe",
        date: "2025-01-02",
        category: "Food",
        content: text[0].innerText
    },
    {
        title: "The Future of Technology",
        author: "John Doe",
        date: "2025-01-03",
        category: "Technology",
        content: text[0].innerText
    },
    {
        title: "The Importance of Mental Health",
        author: "Jane Doe",
        date: "2025-01-04",
        category: "Health",
        content: text[0].innerText
    },
    {
        title: "The Latest Fashion Trends",
        author: "John Doe",
        date: "2025-01-05",
        category: "Fashion",
        content: text[0].innerText
    },
    {
        title: "The Best Movies of 2021",
        author: "Jane Doe",
        date: "2025-01-06",
        category: "Entertainment",
        content: text[0].innerText
    }
];

let blogContainer = document.getElementById('blogContainer');

let Title = document.createElement('h1');
let Author = document.createElement('h2');
let Category = document.createElement('h2');
let date = document.createElement('h3');
let content = document.createElement('p');

Title.innerHTML = blogs[0].title;
Author.innerHTML = `Author: ${blogs[0].author}`;
Category.innerHTML = `Category: ${blogs[0].category}`;
date.innerHTML = `Date: ${blogs[0].date}`;
content.innerHTML = blogs[0].content;

blogContainer.prepend(Title, Author, Category, date, content);


// Previous and next button functionality

let navigationButton = document.getElementById("navigation-button");
let index = 0;

navigationButton.addEventListener('click', (event) => {


    if (event.target.id === 'next' && index < 6) {
        index = index + 1;
        Title.innerHTML = blogs[index].title;
        Author.innerHTML = `Author: ${blogs[index].author}`;
        Category.innerHTML = `Category: ${blogs[index].category}`;
        date.innerHTML = `Date: ${blogs[index].date}`;
        content.innerHTML = blogs[index].content;
        blogContainer.prepend(Title, Author, Category, date, content);
        document.documentElement.scrollTop = 0; // For modern browsers
        // document.body.scrollTop = 0; // For older browsers

    }
    else if (event.target.id === 'previous' && index > 0) {

        index = index - 1;
        Title.innerHTML = blogs[index].title;
        Author.innerHTML = `Author: ${blogs[index].author}`;
        Category.innerHTML = `Category: ${blogs[index].category}`;
        date.innerHTML = `Date: ${blogs[index].date}`;
        content.innerHTML = blogs[index].content;
        blogContainer.prepend(Title, Author, Category, date, content);
        document.documentElement.scrollTop = 0; // For modern browsers
        // document.body.scrollTop = 0; // For older browsers

    }


});

//function which always remind user to take note from blog
let noteReminder = document.getElementsByClassName("note-remind");
let display = 1;
setInterval(() => {

    if (display % 2 == 0) {
        noteReminder[0].style.display = "block";
        display = display + 1;
    }
    else {
        noteReminder[0].style.display = "none";
        display = display + 1;
    }
}, 2000)

//Toggle Note taking 
const noteIcon = document.getElementById("note-icon");
noteIcon.addEventListener('click', () => {
    if (localStorage.getItem('notes') !== null && localStorage.getItem('notes') !== "") {
        const notevalue = document.getElementsByClassName("notesdisplay")
        notevalue[0].value = `${localStorage.getItem('notes')}`;
        notevalue[0].style.display = 'flex';
        notevalue[0].innerHTML = `${notevalue[0].value}`;
        const editNoteButton = document.createElement('button');
        editNoteButton.setAttribute('id', 'editNote');
        editNoteButton.innerText = "Click to edit Notes.."
        notevalue[0].append(editNoteButton)
    }
    else {
        const noteContainer = document.getElementById("notes-container");
        noteContainer.style.display = "flex";
    }
});


//Note Taking function
const noteArea = document.getElementById("textarea");
noteArea.addEventListener('click', (e) => {

    if (e.target.id === 'textarea') {
        let noteContent = document.getElementById('note-content');

    }
})

// Note saving function
const saveButton = document.getElementById("save");
saveButton.addEventListener('click', () => {
    localStorage.setItem('notes', `${noteArea.value}`);

    const noteContainer = document.getElementById("notes-container");
    noteContainer.style.display = "none";

    if (noteArea.value !== "") {
        noteArea.value = "";
    }
})

//EditNote
noteIcon.addEventListener('click', () => {
    let notesDisplay = document.getElementsByClassName('notesdisplay');
    let editButton = notesDisplay[0].childNodes[1];
    editButton.addEventListener('click', () => {
        notesDisplay[0].style.display = 'none';
        const noteContainer = document.getElementById("notes-container");
        noteContainer.style.display = "flex";
        noteArea.value = `${localStorage.getItem('notes')}`

    })
})


