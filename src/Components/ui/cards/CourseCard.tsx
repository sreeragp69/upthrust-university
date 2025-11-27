import React from "react";
interface CourseCardProps {
  title: string;
  description: string;
}
const CourseCard = ({ title, description }: CourseCardProps) => {
  return (
    <div className=" bg-[#abff92] h-[209px] left-[100px] overflow-clip rounded-[32px] top-[911.94px] w-[560px]">
      <div className=" content-stretch flex flex-col font-['Gilroy-Bold:☞',sans-serif] gap-[11.557px] items-center leading-[normal] left-1/2 not-italic text-[#060606] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[306.273px]">
        <p className="min-w-full relative shrink-0 text-[52.009px] uppercase w-min">
          {title}
        </p>
        <p className="capitalize relative shrink-0 text-[20.226px] text-nowrap whitespace-pre">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
