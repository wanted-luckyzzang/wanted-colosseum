import { DataType } from 'Components/Table';

const getFilterData = (
  data: DataType[] | undefined,
  member: string,
  value: string | null,
): DataType[] | undefined => {
  const filterData = data?.filter((obj) => obj[member] === value);

  return filterData;
};

export default getFilterData;
