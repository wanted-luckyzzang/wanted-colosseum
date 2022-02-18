import { useEffect, useState } from 'react';
import { getFilterData } from 'utils';
import { DataType } from './Table';

type SelectType = {
  data: DataType[] | undefined;
  options: string[];
  member: string;
  setData: (data: DataType[] | undefined) => void;
  title: string;
};
const Select = ({ data, options, member, setData, title }: SelectType) => {
  const [select, setSelect] = useState<string>('');
  useEffect(() => {
    if (select.length) setData(getFilterData(data, member, select));
    else setData(data);
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
