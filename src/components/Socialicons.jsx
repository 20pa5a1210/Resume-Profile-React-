import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export default function Socialicons() {
  return (
    <ul className="flex justify-center my-2 text-3xl text-white m-1">
      <li className="m-2">
        <a href="mailto:suryanarayana7826@gmail.com" target="_blank">
          <SiGmail />
        </a>
      </li>
      <li className="m-2">
        <a href="https://www.twitter.com" target="_blank">
          <AiOutlineInstagram />
        </a>
      </li>
      <li className="m-2">
        <a href="https://github.com/20pa5a1210" target="_blank">
          <AiOutlineGithub />
        </a>
      </li>
      <li className="m-2">
        <a href="https://www.linkedin.com/in/suryaundapalli/" target="_blank">
          <AiFillLinkedin />
        </a>
      </li>
      <li className="m-2">
        <a href="https://twitter.com/surya_undapalli" target="_blank">
          <AiFillTwitterSquare />
        </a>
      </li>
    </ul>
  );
}
