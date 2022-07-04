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

      <div className="flex border-4 border-black">
        <>
    {emojiData.map((data) => {
      if (data.name === 'delight'){
      return(
        <>
        <img src ={data.image} alt={data.name} className="w-10"/>
        {items.filter(item => item.emoji === 'delight').length}
        </>
      );}
      else if (data.name === 'sad') {
        return(
          <>
        <img src ={data.image} alt={data.name} className="w-10"/>
        {items.filter(item => item.emoji === 'sad').length}
        </>
        )
      }
      else if (data.name === 'anger') {
        return(
          <>
        <img src ={data.image} alt={data.name} className="w-10"/>
        {items.filter(item => item.emoji === 'anger').length}
        </>
        )
      }
      else if (data.name === 'tired') {
        return(
          <>
        <img src ={data.image} alt={data.name} className="w-10"/>
        {items.filter(item => item.emoji === 'tired').length}
        </>
        )
      }
      else if (data.name === 'monotonous') {
        return(
          <>
        <img src ={data.image} alt={data.name} className="w-10"/>
        {items.filter(item => item.emoji === 'monotonous').length}
        </>
        )
      }

      
      })}
    
    </>
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