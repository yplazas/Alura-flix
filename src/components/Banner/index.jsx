import BannerContent from "./BannerContent";

function Banner(props) {
  return (
    <div className="banner">
      <BannerContent {...props}/>
    </div>
  );
}

export default Banner;
