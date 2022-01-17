import pomodoroimg from '../imgs/pomodoroimg.PNG'
import olympimg from '../imgs/olymp.png'
import giphyapiimg from '../imgs/giphyapiimg.PNG'
import wepay from '../imgs/wepay.png'

const projectsData = [
    {
        id: 0,
        title: "Pomodoro Clock",
        description: "A Pomodoro Clock application made with React. A pomodoro clock is a method that increases productivity time and get things done. The purpose of this application was to learn how React works.  ",
        img: pomodoroimg,
        tech: "React, Node.js",
        link: "https://github.com/gisellen/pomodoro-react",
    },
    {
        id: 1,
        title: "Olympic Games Management",
        description: "A Tournament Management & Bracket Generator Program with an Olympic Games focus.",
        img: olympimg,
        tech: "Java, MySQL, Amazon RDS",
        link: "https://github.com/iDopameme/Olympic-Games-Management",
    },
    {
        id: 2,
        title: "Giphy Search",
        description: "A React Application where the user is able to search up GIFs.  The GIFs were able to be searched up using an API made by Giphy.",
        img: giphyapiimg,
        tech: "React, Node.js, Giphy API",
        link: "https://github.com/gisellen/Giphy-Search",
    },
    {
        id: 3,
        title: "WePay",
        description: "A React Application made for Software Engineering CSC 430. It is a Human Resource application for businesses where users are able to review employee payrolls, benefits, and more.",
        img: wepay,
        tech: "React, Node.js, Axios, MySQL",
        link: "https://github.com/ilei0893/WePay",
    },
]

export default projectsData;