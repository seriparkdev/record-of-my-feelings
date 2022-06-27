import React, { Dispatch, SetStateAction, useState } from "react"; // eslint-disable-line no-unused-vars

export default function AddModal({
  isOpenModal,
  setIsOpenModal,
  addItemHandler,
}: {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  addItemHandler: Function;
}) {
  const [diary, setDiary] = useState<string>("");
  const [selected, setSelected] = useState("delight");

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const item: { diary: string; emoji: string } = {
      diary: diary,
      emoji: selected,
    };
    addItemHandler(item);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div
          className="fixed bg-black opacity-60 top-0 left-0 w-full h-full"
          onClick={() => setIsOpenModal(!isOpenModal)}
        ></div>
        <div className="flex fixed top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col p-8 rounded-lg bg-slate-300 w-[450px] h-[500px]">
          <label htmlFor="diar">오늘 나의 하루</label>
          <input
            type="text"
            placeholder="오늘 있었던 일"
            className="h-40"
            id="diary"
            onChange={(e) => setDiary(e.target.value)}
          ></input>
          <input type="file" accept="image/*"></input>
          <span>오늘 나의 기분은</span>

          <div className="flex flex-row">
            <label htmlFor="delight">
              <input
                type="radio"
                name="emoji"
                value="delight"
                id="delight"
                checked={selected === "delight"}
                onChange={handlechange}
              />
              <img src="/웃음.png" alt="기쁨" className="h-10 w-10" />
            </label>

            <label htmlFor="sad">
              <input
                type="radio"
                name="emoji"
                value="sad"
                id="sad"
                checked={selected === "sad"}
                onChange={handlechange}
              />
              슬픔
            </label>

            <label>
              <input
                type="radio"
                name="emoji"
                value="anger"
                checked={selected === "anger"}
                onChange={handlechange}
              />
              화남
            </label>

            <label>
              <input
                type="radio"
                name="emoji"
                value="tired"
                checked={selected === "tired"}
                onChange={handlechange}
              />
              지침
            </label>

            <label>
              <input
                type="radio"
                name="emoji"
                value="monotonous"
                checked={selected === "monotonous"}
                onChange={handlechange}
              />
              단조로운
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
