import "./works.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Website Design",
      title: "Design. Create. Impress",
      img: "websiteSlides/web3.png",
      img2: "websiteSlides/Capture.PNG",
      icon: "assets/twitter.png",
    },
    {
      id: 2,
      name: "Web App Development",
      title: "Simplify. Innovate. Deliver",
      img: "websiteSlides/web2.png",
      img2: "websiteSlides/Capture.PNG",
      icon: "assets/youtube.png",
      featured: true,
    },
    {
      id: 3,
      name: "Digital Marketing",
      title: "Accelerate Your Growth",
      img: "websiteSlides/web5.png",
      img2: "websiteSlides/Capture.PNG",
      icon: "assets/linkedin.png",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>services </h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img2} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              <img src={d.img} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h5>{d.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
