import React, { useState } from "react";
import AddModal from "../components/AddModal";

interface Data {
  diary: string;
  emoji: string;
  number: number;
  emojiImg: string;
  image: string;
}

export default function Home() {
  const emojiData = [
    {
      name: "happy",
      image: "/happy.png",
    },
    {
      name: "sad",
      image: "/sad.png",
    },
    {
      name: "angry",
      image: "/angry.png",
    },
    {
      name: "tired",
      image: "/tired.png",
    },
    {
      name: "monotonous",
      image: "/monotonous.png",
    },
  ];

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [items, setItems] = useState<Data[]>([]);
  const [index, setIndex] = useState<number>(1);

  let emojiIndex = 0;
  const pepTalk = [
    "화이팅!",
    "오늘의 자신에게 해줄 칭찬도 적어봐요",
    "좋았던 순간을 잊지 않도록 기록해봐요",
    "오늘은 어떤 하루를 보내셨나요?",
    ":)",
    "좋지 않은 하루를 보냈어도 괜찮을 거예요",
  ];

  function addItemHandler(item: Data) {
    setItems([...items, item]);
  }

  const [randomValue] = useState(Math.floor(Math.random() * 5));

  return (
    <>
      <header className="bg-[#698476]">
        <img src="/logo.png" alt="logo" className="m-auto w-28 p-2" />
      </header>
      <section className="flex flex-row justify-center mb-2">
        <div className="flex space-x-2 text-xs mt-2">
          <img
            src={emojiData[0].image}
            alt={emojiData[0].name}
            className="w-7"
          />
          <span className="pt-1.5">
            {items.filter((item) => item.emoji === "happy").length}개
          </span>
          <img
            src={emojiData[1].image}
            alt={emojiData[1].name}
            className="w-7"
          />
          <span className="pt-1.5">
            {items.filter((item) => item.emoji === "sad").length}개
          </span>
          <img
            src={emojiData[2].image}
            alt={emojiData[2].name}
            className="w-7"
          />
          <span className="pt-1.5">
            {items.filter((item) => item.emoji === "angry").length}개
          </span>
          <img
            src={emojiData[3].image}
            alt={emojiData[3].name}
            className="w-7"
          />
          <span className="pt-1.5">
            {items.filter((item) => item.emoji === "tired").length}개
          </span>
          <img
            src={emojiData[4].image}
            alt={emojiData[4].name}
            className="w-7"
          />
          <span className="pt-1.5">
            {items.filter((item) => item.emoji === "monotonous").length}개
          </span>
        </div>
        <button
          type="button"
          className="border-[#698476] border-2 rounded-lg  text-[#698476] text-xs w-16 p py-1 absolute right-0 mr-3 mt-2 hover:bg-[#dee2d6]"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          일기 쓰기
        </button>
      </section>

      <div className="flex h-3/4 flex-col md:flex-row">
        <div className="flex flex-wrap p-6 px-9  bg-[#F2F0ED] text-center md:w-2/5 md:h-full">
          {items &&
            items.map((item) => {
              item.number = ++emojiIndex;
              return (
                <div
                  key={item.diary}
                  className="flex flex-col h-20 md:mx-3 mx-5"
                >
                  <span>
                    <button
                      className="cursor-pointer bg-[#f5f6f8] w-8 h-5 text-xs text-[#698476]"
                      value={emojiIndex}
                      // eslint-disable-next-line
                      onClick={(e: any) => {
                        setIndex(e.target.value);
                      }}
                    >
                      {emojiIndex}
                    </button>
                    <img
                      src={item.emojiImg}
                      alt={item.emoji}
                      className="w-14 h-14"
                    />
                  </span>
                </div>
              );
            })}
        </div>
        <span className="md:w-3/5 p-4 md:h-full md:overflow-y-auto bg-[#ECEAE1] ">
          {items &&
            items.map((item) => {
              if (index == item.number) {
                return (
                  <div key={item.emoji}>
                    <img
                      src={item.emojiImg}
                      alt={item.emoji}
                      className="w-14 m-auto"
                    />
                    <div className="text-center">{item.number}</div>
                    <img src={item.image} />
                    <div className="break-all">{item.diary}</div>
                  </div>
                );
              }
            })}
        </span>
      </div>
      <div className="absolute top-0 text-white md:text-[#698476] text-xs md:inset-y-auto pl-4 mt-5 md:mt-4">
        <span>{pepTalk[randomValue]}</span>
      </div>
      {isOpenModal && (
        <AddModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          addItemHandler={addItemHandler}
        />
      )}
    </>
  );
}
