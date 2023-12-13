import "./card.css";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <>
      <div className="card">
        <img
          alt="articleimage"
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="text">
        <h4 className="title">Article title</h4>
        <p className="detail">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <p className="read"><Link>Read More</Link></p>
        </div>
      </div>
    </>
  );
};
export default Card;
