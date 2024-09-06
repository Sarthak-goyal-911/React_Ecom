import './css/most.css';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import heel from '../images/heel.jpg';

const Most = () => {
  return (
    <div className="most-viewed">
      <div className="wrapper">
        <div className="head-most">
          <h1>Most Viewed</h1>
          <hr style={{ backgroundColor: "#c02121" }} />
        </div>
        <div className="most-items">
          <div className="most-card">
            <div className="c-l">
              <img
                src={p1}
                alt="Oversized Headphone"
              />
            </div>
            <div className="c-r">
              <h1>Oversized Headphone</h1>
              <p>$397.00</p>
              <div className="most-icons">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
            </div>
          </div>

          <div className="most-card">
            <div className="c-l">
              <img src={heel} alt="Oversized Headphone" />
            </div>
            <div className="c-r">
              <h1>Oversized Headphone</h1>
              <p>$397.00</p>
              <div className="most-icons">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
            </div>
          </div>

          <div className="most-card">
            <div className="c-l">
              <img src={p2} alt="Oversized Headphone" />
            </div>
            <div className="c-r">
              <h1>Oversized Headphone</h1>
              <p>$397.00</p>
              <div className="most-icons">
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Most;
