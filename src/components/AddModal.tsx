
import React, { Dispatch, SetStateAction, useState } from "react"; // eslint-disable-line no-unused-vars

export default function AddModal({
  isOpenModal,
  setIsOpenModal,
  addItemHandler,
}: {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  addItemHandler: (item: { diary: string; emoji: string; emojiImg: string; number: number; image: string }) => void;
}) {
  const [diary, setDiary] = useState<string>("");
  const [selected, setSelected] = useState("happy");
  const [urlImg, setUrlImg] = useState<string>('');
  const [emojiFile, setEmojiFile] = useState<string>("/happy.png");
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    setEmojiFile(`/${e.target.value}.png`)
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  const index = 0;
    const item: { diary: string; emoji: string; emojiImg: string; number: number; image: string} = {
      diary: diary,
      emoji: selected,
      emojiImg: emojiFile,
      number: index,
      image: urlImg
    };
    addItemHandler(item);
    setIsOpenModal(!isOpenModal);
  }

 
  return (
    <>
      <form onSubmit={submitHandler}>
        <div
          className="fixed bg-black opacity-60 top-0 left-0 w-full h-full"
          onClick={() => setIsOpenModal(!isOpenModal)}
        ></div>
        <div className="flex fixed top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col p-8 rounded-lg bg-[#f5f6f8]  w-10/12 h-[550px] text-center">
        <span onClick={() => setIsOpenModal(!isOpenModal)} className="absolute top-0 right-0 pt-5 pr-9 cursor-pointer text-2xl hover:text-[#698476] ">
            X
          </span>

          <div className="flex flex-row h-full">
            <div className="flex flex-col mr-5 grow w-3/4">
          <label htmlFor="diary" className="pb-4">오늘 나의 하루</label>
          <textarea
            placeholder="오늘 있었던 일"
            className="p-7 h-full"
            id="diary"
            onChange={(e) => setDiary(e.target.value)
            }
            required
          ></textarea> 
          </div>

          <div className="mt-20 w-1/4">
          <div className="flex flex-col mb-10 m-auto">
          <span className="pb-3">오늘의 사진</span>
          <input type="text" placeholder="URL" onChange={(e) => setUrlImg(e.target.value)} className=""></input>
          </div>

          <div className="flex flex-col">
          <span className="pb-3">오늘의 기분</span>
        <div className="flex flex-row justify-center flex-wrap xl:flex-nowrap emojiBtn w-full">
              <input
                type="radio"
                name="emoji"
                value="happy"
                id="happy"
                checked={selected === "happy"}
                onChange={handlechange}
                
              />
              <label htmlFor="happy"><img src= "/Happy.png" alt="happy"  className="w-12 sm:w-14 cursor-pointer"/>
            </label>
            

              <input
                type="radio"
                name="emoji"
                value="sad"
                id="sad"
                checked={selected === "sad"}
                onChange={handlechange}
              />
              <label htmlFor="sad">
              <img src="/Sad.png" alt="sad" className="w-12 sm:w-14 cursor-pointer"/>
            </label>

           
              <input
                type="radio"
                name="emoji"
                value="angry"
                id='angry'
                checked={selected === "angry"}
                onChange={handlechange}
              />
               <label htmlFor="angry">
              <img src="/Angry.png" alt="angry" className="w-12 sm:w-14 cursor-pointer"/>
            </label>

          
              <input
                type="radio"
                name="emoji"
                value="tired"
                id="tired"
                checked={selected === "tired"}
                onChange={handlechange}
              />
                <label htmlFor="tired">
              <img src="/Tired.png" alt="tired" className="w-12 sm:w-14 cursor-pointer"/>
            </label>

          
              <input
                type="radio"
                name="emoji"
                value="monotonous"
                id="monotonous"
                checked={selected === "monotonous"}
                onChange={handlechange}
              />
                <label htmlFor="monotonous">
              <img src="/Monotonous.png" alt="monotonous" className="w-12 sm:w-14 cursor-pointer"/>
            </label>
           </div>
          </div>
            </div>
            </div>
            <span>
          <button type="submit" className="bg-white w-10 h-8  rounded-md absolute bottom-0 right-0 hover:text-[#698476] mr-5 mb-5">등록</button>
          </span>
        </div>
      </form>
    </>
  );
}
