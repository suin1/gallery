import React, { useMemo, useState } from "react";

const calcAver = (elem) => {
  // let sum = 0;
  // for (let i = 0; i < elem.length; i++) {
  //   sum += elem[i];
  // }
  let sum = elem.reduce((acc, currentValue) => acc + currentValue, 0);
  console.log(sum);
  return sum / elem.length;
};

const UseMemo3 = () => {
  const [num, setNum] = useState("");
  const [list, setList] = useState([10, 20, 30]);

  const onAdd = () => {
    const newNum = Number(num);
    setList([...list, newNum]);
    setNum("");
  };

  // const avg = calcAver(list);
  const avg = useMemo(() => {
    return calcAver(list); // 리스트의 평균값을 계산해 메모이제이션
  }, [list]); // list가 변경되면 평균값을 다시 계산

  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={onAdd}>추가</button>

      <ul>
        {list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>평균값: {avg}</h2>
    </div>
  );
};

export default UseMemo3;
