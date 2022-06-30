import { useState } from "react";
import AddModal from "../components/AddModal";

export default function Home() {
  const emojiData = [
    {
      name: "delight",
      image: "/웃음.png",
    },
  ];

  interface Data {
    diary: string;
    emoji: string;
    number: number;
  }

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
                    <span>
                      <button
                        key={item.number}
                        className="cursor-pointer border-4 w-10 h-10"
                        value={emojiIndex}
                        onClick={(e: any) => {
                          setIndex(e.target.value);
                        }}
                      >
                        {emojiIndex}
                        <img
                          src={data.image}
                          alt={data.name}
                          className="w-10"
                        />
                      </button>
                    </span>
                  );
                } else if (emojiIndex === 30) {
                  ++emojiIndex;
                  alert("30일까지만 입력 가능합니다");
                }
              })
            )}
        </span>
        <span className="border-4 border-black h-96 w-1/2">
          {items &&
            items.map((item) =>
              emojiData.map((data) => {
                if (index == item.number) {
                  return (
                    <div>
                      <img
                        src={data.image}
                        alt={data.name}
                        key={item.number}
                        className="w-10"
                      />
                      <span>{item.number}</span>
                      <span>{item.diary}</span>
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
