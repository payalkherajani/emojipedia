import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [emoji,setEmoji] = useState("");
  const [meaning,setMeaning] = useState("Translation will come here!")

  const dic = {
        "🍇":"grapes" ,
        "🍋": "lemon" ,
        "🥑": "avocado",
        "🍄": "mushroom",
        "🍕": "pizza",
        "🍔": "Hamburger",
        "🍩": "Doughnut",
        "🦪": "Oyster"
    }

  const onChangeHandler = (e) => {
   const inputEmoji = e.target.value;
   setEmoji(inputEmoji);

   if(inputEmoji in dic){
    const dicOutput = dic[inputEmoji];
    setMeaning(dicOutput)
   }
   else{
   setMeaning("Sorry! We dont have this emoticon");

   }
  
 
  }

const dicArr = Object.keys(dic);
const emojiHover = (emoji) => {
 if(emoji in dic){
   setMeaning(dic[emoji]);
 }
 else{
   setMeaning("Sorry! We dont have this emoticon");
 }
;}

  return (
    <div className="App">
      <h1 className="heading">Food Emoticons</h1>
      <div className="input-div">
        <input className="input" type="text" placeholder="Search your emoji here!" value={emoji} onChange={onChangeHandler}/>
        <div className="output">{meaning}</div>
        <div className="emoji-div">
          {
             dicArr.map(item => {
                return <div  className="emoji" key={item} onClick={() => emojiHover(item)}> {item} </div>
             })
          }
          </div>
      </div>
    </div>
  );
}

export default App;
