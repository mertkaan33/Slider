import { FC, useState } from "react";
import Person2 from "./images/another.png";
import Person3 from "./images/second.png";
import Person1 from "./images/last.png";
import Person4 from "./images/first.jpg";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const App: FC = () => {
  const data = [
    {
      title: "Hannah Biker",
      image: Person4,
      name: "Yonetim kadrosu",
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
      images: [Person1, Person2, Person3],
    },
    {
      title: "kalisa ineza giovanni",
      image: Person4,
      name: "Yonetim kadrosu",
      images: [Person1, Person2, Person3],
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
    {
      title: "fadno",
      image: Person4,
      name: "Yonetim kadrosu",

      images: [Person1, Person2, Person3],
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
  ];
  const next = () => {
    setCurrentIndex((index) => (index += 1));
  };
  const prev = () => {
    setCurrentIndex((index) => (index -= 1));
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[100rem] relative flex overflow-hidden">
        {data.map((data, index) => (
          <div
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            className="flex min-w-[100rem] duration-1000 transition-all items-end gap-4"
          >
            <div className="flex flex-col gap-20 items-center">
              <div className="flex flex-col gap-2">
                <div className="font-bold text-3xl">{data.name}</div>
                <div className="max-w-[16rem] text-lg">{data.subTitle}</div>
              </div>
              <div className="flex gap-3">
                {data.images.map((image, index) => (
                  <img className="w-[13rem]" key={index} src={image} />
                ))}
              </div>
            </div>
            <div className="flex items-end gap-14">
              <div className="flex flex-col">
                <div className="flex">
                  <div key={index} className="flex gap-5 items-end">
                    <img className="min-w-[20rem]" src={data.image} />
                    <div className="min-w-[23.8rem] flex flex-col gap-7 pb-[5rem]">
                      <div className="font-bold text-3xl">{data.title}</div>
                      <div className="text-xl text-[gray] font-semibold">
                        {data.subTitle}
                      </div>
                      <div className="max-w-[25rem] font-medium text-[#616161] ">
                        {data.body}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex bottom-0 right-[25rem] absolute items-center mt-10 gap-5">
          <button
            className="button"
            disabled={currentIndex === 0}
            onClick={prev}
          >
            <ArrowBack />
          </button>
          <button
            className="button "
            disabled={currentIndex === 2}
            onClick={next}
          >
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
