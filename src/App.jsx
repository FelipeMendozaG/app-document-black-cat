import React from 'react';
import data from './data/info.json';
import image from './assets/image_header.jpg';
import './App.css';

const App = () => {
  const formatAPA = (quote, analysis) => (
    <>
    {quote !== "" ? (<blockquote className="quote">"{quote}"</blockquote>) : null }
      <p className="analysis">{analysis}</p>
    </>
  );

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">{data.title}</h1>
        <p className="subtitle">{data.subtitle??''}</p>
        <div className="author-section">
          <p>Autores: { data.authors.map((item,index)=><span key={index}>{item}</span>) } </p>
        </div>
      </div>

      <div className="image-container">
        <img src={image} alt="El Gato Negro" />
      </div>

      <section className="section">
        <p>{data.introduction.paragraph_1}</p>
      </section>

      <section className="section">
        {Object.keys(data.body).map((key) => (
          <div key={key} className="body-section">
            {formatAPA(data.body[key].quote, data.body[key].analysis)}
          </div>
        ))}
      </section>

      <section className="section">
        <h2>Conclusión</h2>
        <p>{data.conclusion.paragraph_9}</p>
        {/* <p className="apa-reference"><em>(Poe, 1845)</em></p> */}
      </section>

      <div className="footer">
        <p>2024</p>
      </div>
    </div>
  );
};

export default App;
