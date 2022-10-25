import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepeteEkle } from "../actions";
import "../style/styles.css";

const Products = (props) => {
  console.log(">>>Products1 Props", props.bookList);
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: Paulo Coelho</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart,
  };
};

export default connect(mapStateToProps, { sepeteEkle })(Products);
