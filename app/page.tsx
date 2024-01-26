import Image from "next/image";
import Avatar from "@/components/Avatar";
// import ProjectsButton from "@/components/ProjectsButton";



const HomePage = () => {
  return (
    <div className="h-full">
      
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
        <div className="w-full h-full">
          <h1 className="text-h1 mb-8">Full Stack Web Developer</h1>
          <p className="text-body1 max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            accusamus optio nostrum error modi esse numquam quos nam
            reprehenderit suscipit ab id aut.
          </p>
          <div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
