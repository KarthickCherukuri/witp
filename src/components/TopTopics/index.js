import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
const dummyData = [
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
  {
    image:
      "https://www.ncertbooks.guru/wp-content/uploads/2022/05/Course-details.png",
    title: "Wissenaire",
    summary: "u dont matter, give up",
  },
];

const Card = (props) => {
  const { image, title, summary, id } = props;

  return (
    <div
      className="course-card"
      style={{
        background: `url(${image})`,
      }}>
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  );
};

const Cources = () => {
  return (
    <div id="TopCources">
      <h1 className="text-center mt-4">Top Topics</h1>
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
