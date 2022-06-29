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
  }

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [items, setItems] = useState<Data[]>([]);
  const numberBtn = Array.from({ length: 30 }, (_, i) => i + 1);
  console.log(numberBtn);
  let i = 0;
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
                if (i <= 29 && item.emoji === data.name)
                  return (
                    <span>
                      <span>{numberBtn[i++]}</span>
                      <img src={data.image} alt={data.name} className="w-10" />
                    </span>
                  );
                else if (i > 29) {
                  alert("30일까지만 입력 가능합니다");
                }
              })
            )}
        </span>
        <span className="border-4 border-black h-96 w-1/2">
          {/* emoji위에 1~30 인덱스를 넣고, 인덱스를 클릭하면 onclick이벤트로
          useState를 이용해 인덱스 번호를 emojiName(말고 number)에 저장한다.
          아이템에도 숫자를 넣고, 그 숫자와 number가 일치하면 그에 맞는 일기와
          이모지를 오른쪽 페이지에 표시.  */}
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
