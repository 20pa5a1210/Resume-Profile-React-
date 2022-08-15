import bgImg from "../assets/7495-removebg.png";
import Socialicons from "./Socialicons";
export default function Profile() {
  return (
    <div
      className="w-1/2 h-[100vh] bg-blue-300  fixed z-10 "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "50%",
      }}
    >
      <div className="relative w-full  h-full bg-gradient-to-b from-violet-500 to-fuchsia-500 opacity-50"></div>
      <div className="absolute  text-center text-white  mx-auto top-96 p-10 ">
        <h1 className="text-3xl  ">Hey, I'm Surya</h1>
        <p className="text-lg font-light">
          A passionate individual who always thrive to work on end to end
          products which develop sustainable and scalable social and technical
          systems to create impact.
        </p>
        <Socialicons />
      </div>
    </div>
  );
}
