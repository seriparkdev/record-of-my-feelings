
import { useState } from "react";
import AddModal from "../components/AddModal";

export default function Home() {

const emojiData =[{
  
    name: 'delight',
    image: "/웃음.png"
}
]

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
      <div className="border-4 border-black h-96">



        {items &&
          items.map((item) => {
        
       // item.emoji 와 emojiData.name이 같으면 emojiData.image 반환
      }}

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
