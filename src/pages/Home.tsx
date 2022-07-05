import React, { useState } from "react";
import AddModal from "../components/AddModal";

interface Data {
  diary: string;
  emoji: string;
  number: number;
  image: string;
}

export default function Home() {
  const emojiData = [
    {
      name: "delight",
      image: "/웃음.png",
    },
    {
      name: "sad",
      image: "/logo192.png",
    },
    {
      name: "anger",
      image: "/웃음.png",
    },
    {
      name: "tired",
      image: "/웃음.png",
    },
    {
      name: "monotonous",
      image: "/웃음.png",
    },
  ];

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [items, setItems] = useState<Data[]>([]);
  const [index, setIndex] = useState<number>(1);

  let emojiIndex = 0;
  const pepTalk = ['위로의 말', '응원의 말', '격려의 말']
   
  const randomIndex = Math.floor(Math.random() * 3)

  function addItemHandler(item: Data) {
    setItems([...items, item]);
  }

  return (
    <>
      <div className="text-center">30DAYS</div>
      <div className="flex border-4 border-black">
        <img src = {emojiData[0].image} alt ={emojiData[0].name} className="w-10"/>
        {items.filter(item => item.emoji === 'delight').length}
        <img src = {emojiData[1].image} alt ={emojiData[1].name} className="w-10"/>
        {items.filter(item => item.emoji === 'sad').length}
        <img src = {emojiData[2].image} alt ={emojiData[2].name} className="w-10"/>
        {items.filter(item => item.emoji === 'anger').length}
        <img src = {emojiData[3].image} alt ={emojiData[3].name} className="w-10"/>
        {items.filter(item => item.emoji === 'tired').length}
        <img src = {emojiData[4].image} alt ={emojiData[4].name} className="w-10"/>
        {items.filter(item => item.emoji === 'monotonous').length}
      </div>
      <div>
        {pepTalk[randomIndex]}
      </div>
      <main className="flex flex-row">
        <span className="flex flex-row flex-wrap border-4 border-black h-96 w-1/2">
          {items &&
            items.map((item) =>
              emojiData.map((data) => {
                if (item.emoji === data.name) {
                  item.number = ++emojiIndex; 
                  return (
                    <div key={data.name}>
                      <button
                        className="cursor-pointer border-4 w-10 h-10"
                        value={emojiIndex}
                        onClick={(e: any) => {
                          setIndex(e.target.value)
                        }}
                      >
                        {emojiIndex}
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-10"
                        />
                      </button>
                    </div>
                  );
                } 
              })
            )}
        </span>
        <span className="border-4 border-black h-96 w-1/2">
          {items &&
            items.map((item) =>
              emojiData.map((data) => {
                if (index == item.number && item.emoji === data.name) {
                  return (
                    <div key={data.name}>
                      <img
                        src={data.image}
                        alt={data.name}
                        className="w-10"
                      />
                      <span>{item.number}</span>
                      <span>{item.diary}</span>
                      <img src={item.image} />
                    </div>
                  );
                }
              })
            )}
        </span>
      </main>
      <button
        type="button"
        className="border rounded-full bg-black w-10 h-10"
        onClick={() => setIsOpenModal(!isOpenModal)}
      >
        +
      </button>
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