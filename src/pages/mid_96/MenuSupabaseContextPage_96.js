import { useState, useEffect } from "react";

import Wrapper from "../../assets/wrapper/mid_96/Menu_96";

// import { useContext_96 } from '../../context/Context_96';
import { useDemoContext_xx } from "../../context/DemoContext_xx";

const MenuNodeServerContextPage_96 = () => {
  const [name, setName] = useState("ChungChun Wang");
  const [id, setId] = useState("210410196s");
  const { menu, data1, data2, changeMenuFilter, changeMenuFilterSupabase } =
    useDemoContext_xx();

  return (
    <Wrapper>
      <section className="menu">
        <div className="title">
          <h2>our menu - Supabse Server Context</h2>
          <h4>
            {name} {id}
          </h4>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="filter-btn"
            data-id="all"
            onClick={() => changeMenuFilterSupabase("")}
          >
            all
          </button>
          <button
            type="button"
            className="filter-btn"
            data-id="breakfast"
            onClick={() => changeMenuFilterSupabase("breakfast")}
          >
            breakfast
          </button>
          <button
            type="button"
            className="filter-btn"
            data-id="lunch"
            onClick={() => changeMenuFilterSupabase("lunch")}
          >
            lunch
          </button>
          <button
            type="button"
            className="filter-btn"
            data-id="dessert"
            onClick={() => changeMenuFilterSupabase("dessert")}
          >
            dessert
          </button>
          <button
            type="button"
            className="filter-btn"
            data-id="shakes"
            onClick={() => changeMenuFilterSupabase("shakes")}
          >
            shakes
          </button>
        </div>
        <div className="section-center">
          {menu.map((item) => {
            const { id, title, category, price, img, descrip } = item;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={category} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                  </header>
                  <p className="item-text">{descrip}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default MenuNodeServerContextPage_96;
