import React, { useState } from "react";
import AddModal from "../components/AddModal";

interface Data {
  diary: string;
  emoji: string;
  id: string;
  emojiImg: string;
  image: string;
}

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [items, setItems] = useState<Data[]>([]);
  const [id, setId] = useState<string>("");
  const today = new Date();
  const pepTalk = ["화이팅!", ":)", "좋은 순간을 남겨요", "오늘 어떠셨나요?"];
  const [randomValue] = useState(Math.floor(Math.random() * 4));

  function addItemHandler(item: Data) {
    setItems([...items, item]);
  }
  function emptyStateHandler() {
    return (
      <div className="font-semibold w-full h-[200px] text-[#C9B79C] text-xs text-center pt-24">
        일기를 작성해봐요
      </div>
    );
  }

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

  return (
    <div className="h-full">
      <header className="bg-[#698476]">
        <img src="/logo.png" alt="logo" className="m-auto w-28 p-2" />
      </header>
      <section className="flex flex-row justify-center mb-2">
        {emojiData &&
          emojiData.map((data) => {
            return (
              <div
                key={data.name}
                className="text-[#698476] flex text-xs mt-2 mr-2"
              >
                <img src={data.image} alt={data.name} className="w-7 mr-1" />
                <span className="pt-1.5">
                  {items.filter((item) => item.emoji === data.name).length}개
                </span>
              </div>
            );
          })}
        <button
          type="button"
          className="border-[#f5f6f8] md:border-[#698476] border-2 rounded-lg md:text-[#698476] text-xs w-16 p py-1 absolute top-3 md:top-14 text-[#f5f6f8] right-0 mr-3 md:mt-1 hover:bg-[#f5f6f8] hover:text-[#698476] md:hover:bg-[#dee2d6]"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          일기 쓰기
        </button>
      </section>

      <div className="flex h-3/4 flex-col md:flex-row">
        <div className="emojiBox px-5 pl-10 pt-5 bg-[#F2F0ED] md:w-2/5 md:overflow-y-auto pb-8">
          {items.length > 0
            ? items.map((item) => {
                return (
                  <input
                    key={item.id}
                    className="md:mx-3 mx-5 cursor-pointer mt-3 w-14 h-14"
                    type="image"
                    src={item.emojiImg}
                    alt={item.emoji}
                    value={item.id}
                    onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                      setId((e.target as HTMLInputElement).value);
                    }}
                  ></input>
                );
              })
            : emptyStateHandler()}
        </div>
        <span className="emojiBox text-xs md:text-base font-light md:w-3/5 p-4 md:h-full md:overflow-y-auto bg-[#ECEAE1] px-10 text-[#A68B80]">
          {items.length > 0
            ? items.map((item) => {
                if (id === item.id) {
                  return (
                    <div key={item.id}>
                      <img
                        src={item.emojiImg}
                        alt={item.emoji}
                        className="w-14 m-auto pt-5"
                      />
                      <div className="text-center py-2">
                        {today.getMonth() +
                          1 +
                          "월 " +
                          today.getDate() +
                          "일의 기록"}
                      </div>

                      <img src={item.image} className="m-auto" />
                      <div className="break-all pt-5 pb-10 whitespace-pre-line">
                        {item.diary}
                      </div>
                    </div>
                  );
                } else if (id === "") {
                  setId(item.id);
                }
              })
            : emptyStateHandler()}
        </span>
      </div>
      <div className="absolute top-0 text-white md:text-[#698476] text-[12px] md:text-xs md:inset-y-auto pl-4 mt-4 md:mt-4">
        <span>{pepTalk[randomValue]}</span>
      </div>
      {isOpenModal && (
        <AddModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          addItemHandler={addItemHandler}
        />
      )}
    </div>
  );
}
