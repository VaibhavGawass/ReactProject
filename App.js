import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div>
      <div className="header">  
        <div className="logo-container">
          <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

const ResturantCard = (props) => {
  const {resName, cusine, rating, time} = props;
  return (
    <div className="res-card">
      <img className="res-logo" alt ="resturant-logo" src="https://b.zmtcdn.com/data/pictures/3/19750683/987d86719049d6c9aa9667ae9ad9d2bc_o2_featured_v2.jpg"/>
      <h3>{resName}</h3>
      <h4>{cusine}</h4>
      <h4>{rating}</h4>
      <h4>{time}</h4>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Seach</div>
      <div className="res-container"> 
        <ResturantCard  resName="Meghana Foods" cusine="Biryani, North Indian, Asian" rating="4.5 stars" time="30 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>
        <ResturantCard  resName="KFC" cusine="Chiken wings,kebab" rating="4.3 stars" time="33 mins"/>

        
      </div>
    </div>
  );
}



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);