import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement('div',{id:'parent'},
                [React.createElement('div',{id:'child'},[
                    React.createElement('h1',{id:'head',key:'h1'},'This is Namaste react'),
                    React.createElement('h2',{id:'head',key:'h2'},'By Utsav Oza')]
                ),React.createElement('div',{id:'child2'},[
                    React.createElement('h1',{id:'head',key:'h1'},'I am h1 Tag'),
                    React.createElement('h2',{id:'head',key:'h2'},'I am h2 Tag')]
                )
                ]);


const heading = React.createElement("h1",{id:'heading'},"Hello World from External React!!");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);