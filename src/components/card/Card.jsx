import "./card.scss";
import img from "../../../public/default.jpg";
const Card = ({ title, desc, src, url }) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={src ? src : img} className="newsImg" />
      </div>
      <div className="descContainer">
        <div className="title">
          <h3>{title.slice(0, 45)}...</h3>
        </div>
        <div className="desc">
          <p>
            {desc
              ? desc.slice(0, 75)
              : "Description isn't available right now.Stay tuned for further updates!"}
            ...
          </p>
        </div>
        <div className="btnContainer">
          <a href={url}>
            <button>Read more</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
