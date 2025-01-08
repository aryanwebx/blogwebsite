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
let index = 1;

navigationButton.addEventListener('click', (event) => {


    if (event.target.id === 'next' && index < 6) {

        Title.innerHTML = blogs[index].title;
        Author.innerHTML = `Author: ${blogs[index].author}`;
        Category.innerHTML = `Category: ${blogs[index].category}`;
        date.innerHTML = `Date: ${blogs[index].date}`;
        content.innerHTML = blogs[index].content;
        blogContainer.prepend(Title, Author, Category, date, content);
        index = index + 1;

    }
    else if (event.target.id === 'previous' && index > 0) {

        index = index - 1;
        Title.innerHTML = blogs[index].title;
        Author.innerHTML = `Author: ${blogs[index].author}`;
        Category.innerHTML = `Category: ${blogs[index].category}`;
        date.innerHTML = `Date: ${blogs[index].date}`;
        content.innerHTML = blogs[index].content;
        blogContainer.prepend(Title, Author, Category, date, content);

    }

    document.documentElement.scrollTop = 0; // For modern browsers
    document.body.scrollTop = 0; // For older browsers
});

//function which always remind user to take note from blog
let noteReminder = document.getElementsByClassName("note-remind");
console.log(noteReminder)
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