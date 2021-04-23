
function webPageTitleChange() {
    let nameWebPage = window.location.pathname
    let splitName = nameWebPage.split("/").pop();

    if (splitName === 'second.html') {
        document.title = 'Webprogramming (LIX018P05) - Second'
    }
    if (splitName === 'index.html') {
        document.title = 'Webprogramming (LIX018P05) - Index'
    }
}

function createArticle() {
    let addArticle = document.createElement("Article");

    let header = document.createElement('h1');
    header.innerHTML = 'The second article is below';
    addArticle.append(header);

    let articleParagraph = document.createElement('p');
    articleParagraph.innerHTML = "My name is Jeff";
    addArticle.append(articleParagraph);

    document.getElementsByClassName('col-md-12')[0].append(addArticle)
}

function newLink() {
    let getLink = document.getElementById('links')
    let changeLink = getLink.getElementsByTagName('a')[2]
    changeLink.setAttribute('href', 'https://google.com')

    newTab =  changeLink.setAttribute('target', '_blank')
}


function navColor() {
    let navigation = document.getElementsByClassName('nav-item')

    for (nav of navigation) {
        nav.getElementsByTagName('a')[0].style.color = 'red'
    }
}

function createSchedule() {
    const workload = {
        'Week 1 =>': 'Assignment 1',
        'Week 2 =>': 'Assignment 1',
        'Week 3 =>': 'Assignment 2',
        'Week 4 =>': 'Assignment 2',
        'Week 5 =>': 'Assignment 3',
        'Week 6 =>': 'Assignment 3',
        'Week 7 =>': 'Final Project',
    }
    const newArray = Object.entries(workload);
    for (const [lectureweek, assignments] of newArray) {
        console.log(lectureweek, assignments);
        let weekSchedule = document.createElement('h3');
        weekSchedule.innerHTML = lectureweek + assignments;
        document.getElementsByClassName('col-md-12')[0].appendChild(weekSchedule);
    }
}

function addSidebar() {
    document.getElementsByClassName('col-md-12')[0].setAttribute('class', 'col-md-8')

    let newdiv = document.createElement('div')
    newdiv.setAttribute('class', 'col-md-4')

    appendDiv = document.getElementsByClassName('row')[0].appendChild(newdiv)

    let header = document.createElement('h1')
    header.innerHTML = 'Sidebar'

    appendHeader = document.getElementsByClassName('col-md-4')[0].appendChild(header)
}