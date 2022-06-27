import { useState } from "react";
import AddModal from "../components/AddModal";

export default function Home() {
  const emojiData = [
    {
      name: "delight",
      image: "/웃음.png",
    },
  ];

  type Data = {
    diary: string;
    emoji: string;
  };

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [items, setItems] = useState<Data[]>([]);

  function addItemHandler(item: Data) {
    setItems([...items, item]);
  }

  return (
    <>
      <div className="text-center">30DAYS</div>
      <div className="flex flex-row flex-wrap border-4 border-black h-96">
        {items &&
          items.map((item) =>
            emojiData.map((data) => {
              if (item.emoji === data.name)
                return (
                  <span>
                    <img src={data.image} alt={data.name} className="w-10" />
                  </span>
                );
            })
          )}
      </div>
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
