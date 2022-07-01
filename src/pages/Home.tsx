import { useState } from "react";
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
  function addItemHandler(item: Data) {
    setItems([...items, item]);
  }

  return (
    <>
      <div className="text-center">30DAYS</div>
      <main className="flex flex-row">
        <span className="flex flex-row flex-wrap border-4 border-black h-96 w-1/2">
          {items &&
            items.map((item) =>
              emojiData.map((data) => {
                if (emojiIndex <= 29 && item.emoji === data.name) {
                  item.number = ++emojiIndex;
                  return (
                    <div key={data.name}>
                      <button
                        className="cursor-pointer border-4 w-10 h-10"
                        value={emojiIndex}
                        onClick={(e: any) => {
                          setIndex(e.target.value);
                        }}
                      >
                        {emojiIndex}
                        {/* <img
                          src={data.image}
                          alt={data.name}
                          className="w-10"
                        /> */}
                      </button>
                    </div>
                  );
                } else if (emojiIndex === 30 && item.emoji===data.name) {
                  alert("30일까지만 입력할 수 있습니다.");
                  ++emojiIndex
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
