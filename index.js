const text=document.getElementsByClassName('randomtext');


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

let blogContainer=document.getElementById('blogContainer');


for (let index=0;index<6;index++)
{
    let Title=document.createElement('h1');
    let Author=document.createElement('h2');
    let Category=document.createElement('h2');
    let date=document.createElement('h3');
    let content = document.createElement('p');

    Title.innerHTML = blogs[index].title;
    Author.innerHTML = `Author: ${blogs[index].author}`;
    Category.innerHTML =`Category: ${blogs[index].category}`;
    date.innerHTML =`Date: ${blogs[index].date}`;
    content.innerHTML=blogs[index].content;

    blogContainer.appendChild(Title);
    blogContainer.appendChild(Author);
    blogContainer.appendChild(Category);
    blogContainer.appendChild(date);
    blogContainer.appendChild(content);

}
