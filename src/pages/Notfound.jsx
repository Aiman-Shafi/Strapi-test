import notFoundImage from "../assets/images/notfound.jpg";

export default function Notfound() {
  return (
    <div className="h-[600px] max-w-[700px] mx-auto grid place-items-center">
      <img src={notFoundImage} alt="not found image" />
    </div>
  );
}
