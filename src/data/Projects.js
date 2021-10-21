import pomodoroimg from '../imgs/pomodoroimg.PNG'
import noteimg from '../imgs/noteimg.PNG'
import giphyapiimg from '../imgs/giphyapiimg.PNG'

const projectsData = [
    {
        id: 0,
        title: "Pomodoro Clock",
        description: "A Pomodoro Clock application made with React.  The purpose of this application is to increase productivity time and get things done.",
        img: pomodoroimg,
        link: "https://github.com/gisellen/pomodoro-react",
    },
    {
        id: 1,
        title: "Simple Notepad",
        description: "A notepad application for users to jot their thoughts down.  This notepad can be used for venting, remembering things, or simply get things out of your mind.",
        img: noteimg,
        link: "https://github.com/gisellen/simple-notepad",
    },
    {
        id: 2,
        title: "Giphy Search",
        description: "A React Application where the user is able to search up GIFs.  The GIFs were able to be searched up using an API made by Giphy.",
        img: giphyapiimg,
        link: "https://github.com/gisellen/Giphy-Search",
    },
]

export default projectsData;