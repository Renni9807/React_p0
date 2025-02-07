import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import book1 from "./img/book1.jpg";
import book2 from "./img/book2.jpg";
import book3 from "./img/book3.jpg";

const BookList = () => {
  return (
    <section>
      <h1>Amazon Best Sellers</h1>
      <ul>
        <li>
          <div className="book">
            <img src={book1} alt="Interesting Facts For Curious Minds" />
            <p className="bookName">Interesting Facts For Curious Minds</p>
            <p className="bookAuthor">Jordan Moore</p>
          </div>
        </li>
        <li>
          <div className="book">
            <img src={book2} alt="Atomic Habits" />
            <p className="bookName">Atomic Habits</p>
            <p className="bookAuthor">James Clear</p>
          </div>
        </li>
        <li>
          <div className="book">
            <img src={book3} alt="Fairy Tale" />
            <p className="bookName">Fairy Tale</p>
            <p className="bookAuthor">Stephen King</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<BookList />);

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<Greeting />);
