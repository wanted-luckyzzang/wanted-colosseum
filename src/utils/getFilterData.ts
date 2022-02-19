import { DataType } from 'Components/Table';

const getFilterData = (
  data: DataType[] | undefined,
  selectList: DataType,
): DataType[] | undefined => {
  const keyArray = Object.keys(selectList);
  let filterData = data;
  keyArray.forEach((key) => {
    if (selectList[key].length)
      filterData = filterData?.filter((data) =>
        data[key].includes(selectList[key]),
      );
  });
  return filterData;
};

export default getFilterData;
