import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Courrosal = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-center">Top Cources</h1>
      <div
        style={{
          backgroundColor: "#419be0",
          padding: "40px",
        }}>
        <Slider {...settings}>
          <div style={{ height: "300px" }}>
            <img
              style={{ height: "200px", marginRight: "10px" }}
              src="https://youthincmag.com/wp-content/uploads/2019/03/NILIS-University-of-Colombo.jpg"
            />
          </div>
          <div style={{ height: "300px" }}>
            <img
              style={{ height: "200px", marginRight: "10px" }}
              src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/10/23170101/List-of-Professional-Courses-after-Graduation.gif"
            />
          </div>
          <div style={{ height: "300px" }}>
            <img
              style={{ height: "200px", marginRight: "10px" }}
              src="https://www.shiksha.com/online-courses/articles/wp-content/uploads/sites/11/2020/05/software-development-i1.jpg"
            />
          </div>
          <div style={{ height: "300px" }}>
            <img
              style={{ height: "200px", marginRight: "10px" }}
              src="https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Courrosal;
