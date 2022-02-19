import { useEffect, useState } from 'react';
import { DataType } from './Table';

type SelectType = {
  options: string[];
  member: string;
  title: string;
  selectList: DataType;
  setSelectList: (state: DataType) => void;
};

const Select = ({
  options,
  member,
  title,
  selectList,
  setSelectList,
}: SelectType) => {
  const [select, setSelect] = useState<string>('');
  useEffect(() => {
    let newSelectList = {
      ...selectList,
    };
    newSelectList[member] = select;
    setSelectList(newSelectList);
  }, [select]);

  return (
    <>
      <input
        list={title}
        placeholder={title}
        onChange={(e) => setSelect(e.target.value)}
      />
      <datalist id={title}>
        {options?.map((option, idx) => (
          <option key={idx} value={option} />
        ))}
      </datalist>
    </>
  );
};

export default Select;
