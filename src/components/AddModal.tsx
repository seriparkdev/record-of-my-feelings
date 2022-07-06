import React, { Dispatch, SetStateAction, useState } from "react"; // eslint-disable-line no-unused-vars

export default function AddModal({
  isOpenModal,
  setIsOpenModal,
  addItemHandler,
}: {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  addItemHandler: (item: { diary: string; emoji: string; number: number; image: string }) => void;
}) {
  const [diary, setDiary] = useState<string>("");
  const [selected, setSelected] = useState("delight");
  const [urlImg, setUrlImg] = useState<string>('');

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  const index = 0;
    const item: { diary: string; emoji: string; number: number; image: string} = {
      diary: diary,
      emoji: selected,
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
        <div className="flex fixed top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col p-8 rounded-lg bg-slate-300 w-[450px] h-[500px]">
          <label htmlFor="diary">오늘 나의 하루</label>
          <input
            type="text"
            placeholder="오늘 있었던 일"
            className="h-40"
            id="diary"
            onChange={(e) => setDiary(e.target.value)
            }
            required
          ></input>
          
          어떤 사진을 기록하고 싶나요?
          <input type="text" placeholder="URL" onChange={(e) => setUrlImg(e.target.value)}></input>

          <span>오늘 나의 기분은</span>

          <div className="flex flex-row">
              <input
                type="radio"
                name="emoji"
                value="happy"
                id="happy"
                checked={selected === "happy"}
                onChange={handlechange}
                
              />
              <label htmlFor="happy"><img src= "/unclickedHappy.png" alt="happy" className="w-10 h-10" />
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
              <img src="/unclickedSad.png" alt="sad" className="h-10 w-10" />
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
              <img src="/unclickedAngry.png" alt="angry" className="h-10 w-10" />
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
              <img src="/unclickedTired.png" alt="tired" className="h-10 w-10" />
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
              <img src="/unclickedMonotonous.png" alt="monotonous" className="h-10 w-10" />
            </label>
          </div>

          <button type="button" onClick={() => setIsOpenModal(!isOpenModal)}>
            닫기
          </button>

          <button type="submit">등록</button>
        </div>
      </form>
    </>
  );
}
