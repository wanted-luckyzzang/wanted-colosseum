import { DataType } from 'Components/Table';

const getFilterData = (
  data: DataType[] | undefined,
  member: string,
  value: string,
): DataType[] | undefined => {
  const filterData = data?.filter((obj) => obj[member].includes(value));

  return filterData;
};

export default getFilterData;
