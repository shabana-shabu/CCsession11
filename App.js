import List from "./List"
import Search from "./Search";
import React from "react";
import {useState} from "react";
import './App.css';
function App(){

    const stories=
[
    {
        title:'React',
        url:'https://reactjs.org/',
        author:'Jordan',
        num_comments:3,
        points:4,
        object_id:0,
        createdAt: "2021-10-01T11:32:02.089Z",

    },
    {
        title:'Redux',
        url:'https://redux.js.org/',
        author:'Andrew',
        num_comments:2,
        points:5,
        object_id:1,
        createdAt: "2021-10-01T11:32:02.089Z",

    },
];

const [listItems, setListItems] = useState(stories);
const [searchTerm, setSearchTerm] = useState("");
const handleSearch = (e) => {
  setSearchTerm(e.target.value);
};
const searched= stories?listItems.filter((story) => 
  story.title.toLowerCase().includes(searchTerm)||
  story.author.toLowerCase().includes(searchTerm)||
  story.createdAt.toLowerCase().includes(searchTerm)
  
): listItems;
function handleRemove(id) {
    const newList = listItems.filter((items) =>items.id !== id);
 
    setListItems(newList);
  }
return(
  <center>
  <div>
     
 <Search  onSearch={handleSearch}/>
 <List stories={searched} onRemove={handleRemove}/>
 </div>
 </center>
);
}
export default App;