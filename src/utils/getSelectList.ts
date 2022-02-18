import { DataType } from 'Components/Table';

const getSelectList = (
  data: DataType[] | undefined,
  member: string,
): string[] => {
  let selectList = new Set<string>();
  data?.map((obj) => {
    selectList.add(obj[member]);
  });

  return Array.from(selectList).sort();
};

export default getSelectList;
