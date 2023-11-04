import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const dummyData = [
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    price: 120,
    rating: 2.4,
    time: "1hr",
  },
];

const Card = (props) => {
  const { image, title, price, rating, time } = props;
  console.log(image);
  return (
    <Link to="1" style={{ textDecoration: "none", color: "black" }}>
      <div className="course-card-cources">
        <img src={image} style={{ width: "100%" }} />
        <p className="text-right p-3">{time}</p>

        <h2 className="p-3">{title}</h2>
        <hr />
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <AiFillStar />
            <p className="p-3 ">{rating}</p>
          </div>

          <p className="p-3">${price}</p>
        </div>
      </div>
    </Link>
  );
};

const Cources = () => {
  return (
    <div id="Cources">
      <h1 className="text-center">Cources offered</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {dummyData.map((each) => (
          <Card {...each} />
        ))}
      </div>
    </div>
  );
};

export default Cources;
