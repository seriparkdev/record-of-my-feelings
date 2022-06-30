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
                        className="cursor-pointer border-4 w-10 h-10"
                        value={emojiIndex}
                        onClick={(e: any) => {
                          setIndex(e.target.value);
                          console.log(index);
                        }}
                      >
                        {emojiIndex}
                      </button>

                      {/* <img src={data.image} alt={data.name} className="w-10" /> */}
                    </span>
                  );
                } else if (emojiIndex === 30) {
                  alert("30일까지만 입력 가능합니다")
                  ++emojiIndex;
                }
          
              })
            )}
        </span>
        <span className="border-4 border-black h-96 w-1/2">
          {/* emoji위에 1~30 인덱스를 넣고, 인덱스를 클릭하면 onclick이벤트로
          useState를 이용해 index 저장한다.
          아이템에도 숫자를 넣고, 그 숫자와 index가 일치하면 그에 맞는 일기와
          이모지를 오른쪽 페이지에 표시.  */}

          {items &&
            items.map((item) =>
              emojiData.map((data) => {
                if (item.number === index) {
                  return (
                    <>
                      <span key={item.number}>{data.image}</span>
                      <span>{item.number}</span>
                    </>
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
