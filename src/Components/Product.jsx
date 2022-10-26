// import { useState } from "react";
// import image1 from "../Assets/living room/livingroom1.jpg";
// import image2 from "../Assets/bedrooms/bedroom1.webp";
// import image3 from "../Assets/Alum/al1.jpg";
// import image4 from "../Assets/office/office1.jpg";
// import image5 from "../Assets/wooden/wood3.jpg";
// import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// const images = [image1, image2, image3, image4, image5];

// function App() {
//   const NextArrow = ({ onClick }) => {
//     return (
//       <div className="arrow next" onClick={onClick}>
//         <FaArrowRight />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div className="arrow prev" onClick={onClick}>
//         <FaArrowLeft />
//       </div>
//     );
//   };

//   const [imageIndex, setImageIndex] = useState(0);

//   const settings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     beforeChange: (current, next) => setImageIndex(next),
//   };

//   return (
//     <div className="App">
//       <Slider {...settings}>
//         {images.map((img, idx) => (
//           <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//             <img src={img} alt={img} width='50px' />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default App;