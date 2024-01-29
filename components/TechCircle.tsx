import { SiNextdotjs } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";



const TechCircle = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
    >
      <path
        d="
          M 100, 100
          m -75, 0
          a 75,75 0 1,0 150,0
          a 75,75 0 1,0 -150,0"
        id="path-circle"
        fill="none"
      />
       {" "}
      <text>
           {" "}
        <textPath href="#path-circle">
          round and round and round and round and round and round and round    {" "}
        </textPath>
         {" "}
      </text>
    </svg>
  );
};

export default TechCircle;
