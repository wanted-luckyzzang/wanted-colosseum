import ArrowDrop from 'assets/Arrow_drop.svg';
import Atoms from 'Components/Atoms';
import { useState } from 'react';
import styled from 'styled-components';

const Option = styled.div`
  &:hover {
    background-color: yellow;
  }
  cursor: pointer;
`;

const Select = () => {
  const data = ['hello', 'world', 'haha!'];
  const [clickState, setClcickState] = useState(data[0]);
  const [selectState, setSelectState] = useState(false);

  return (
    <Atoms.Div display="flex" flexDirection="column" width="100px">
      {/* 선택한게 보이는곳 */}
      <Atoms.Div
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        border="1px solid black"
        padding="5px"
      >
        <Atoms.Div>{clickState}</Atoms.Div>
        <img
          src={ArrowDrop}
          alt="ArrowDrop"
          style={{ cursor: 'pointer' }}
          onClick={() => setSelectState((prev) => !prev)}
        />
      </Atoms.Div>
      {/* 선택한게 보이는곳 */}

      {/* 선택하는곳 */}
      {selectState && (
        <Atoms.Div
          display="flex"
          flexDirection="column"
          width="100px"
          height="100px"
          border="1px solid gray"
          padding="5px"
        >
          {data.map((el) => (
            <Option
              key={el}
              onClick={() => {
                setClcickState(el);
                setSelectState(false);
              }}
            >
              {el}
            </Option>
          ))}
        </Atoms.Div>
      )}
      {/* 선택하는곳 */}
    </Atoms.Div>
  );
};

export default Select;
