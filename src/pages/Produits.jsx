import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "./Produits.css";

export default function Produits() {

const { t } = useTranslation();

const books = [
{
id:1,
image:"/images/book1.jpg",
rating:5,
hotmart:"https://go.hotmart.com/C104485305J",
amazon:"https://www.amazon.com/dp/B0GYMR2LZM"
},
{
id:2,
image:"/images/book2.jpg",
rating:4,
hotmart:"https://go.hotmart.com/H104770178M",
amazon:"https://www.amazon.com/dp/B0GYQ39C9K"
},
{
id:3,
image:"/images/book3.jpg",
rating:4,
hotmart:"https://go.hotmart.com/G105624537K",
amazon:"https://www.amazon.com/dp/B0GZ9LF3CN"
}
];

const [selectedBook,setSelectedBook] = useState(books[0]);

return (
<>
<Helmet>
<title>{t("products.metaTitle")}</title>
<meta name="description" content={t("products.metaDesc")} />
</Helmet>

<section id="products" className="products">

<h1>{t("products.title")}</h1>

<p className="products-subtitle">
{t("products.subtitle")}
</p>


<div className="featured-book">

<img src={selectedBook.image} alt="Book" />

<div className="featured-info">

<h2>{t(`products.book${selectedBook.id}.title`)}</h2>

<div className="stars">
{"★".repeat(selectedBook.rating)}
</div>

<p>{t(`products.book${selectedBook.id}.desc`)}</p>

<div className="product-buttons">

<a
href={selectedBook.hotmart}
target="_blank"
rel="noreferrer"
className="hotmart"
>
{t("products.hotmart")}
</a>

<a
href={selectedBook.amazon}
target="_blank"
rel="noreferrer"
className="amazon"
>
{t("products.amazon")}
</a>

</div>

</div>

</div>


<div className="products-grid">

{books.map(book => (

<div
className={`product-card ${selectedBook.id === book.id ? "active" : ""}`}
key={book.id}
>

<img
src={book.image}
alt="Book cover"
onClick={()=>setSelectedBook(book)}
/>

<h3 onClick={()=>setSelectedBook(book)}>
{t(`products.book${book.id}.title`)}
</h3>

<div className="stars">
{"★".repeat(book.rating)}
</div>

</div>

))}

</div>

</section>
</>
);
}