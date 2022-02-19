import styled from 'styled-components';
import { DataType } from './Table';

type ModalProps = {
  openModal: boolean;
  setOpenModal: (oepnModal: boolean) => void;
  cpData?: DataType;
};
const Modal = (props: ModalProps) => {
  return (
    <>
      {props.openModal && props.cpData && (
        <Background onClick={() => props.setOpenModal(false)}>
          <ModalWrapper>
            <Text>지역: {props.cpData.SIGUN_NM}</Text>
            <Text>사업장명: {props.cpData.BIZPLC_NM}</Text>
            <Text>인허가일자: {props.cpData.CLSBIZ_DE}</Text>
            <Text>영업상태: {props.cpData.BSN_STATE_NM}</Text>
            <Text>
              {props.cpData.LOCPLC_FACLT_TELNO_DTLS
                ? `전화번호: ${props.cpData.LOCPLC_FACLT_TELNO_DTLS}`
                : '전화번호가 없습니다'}
            </Text>
            <Text>주소: {props.cpData.REFINE_LOTNO_ADDR}</Text>
            <Text>
              {props.cpData.FACLT_EQUP_STUS
                ? `시설장비: ${props.cpData.FACLT_EQUP_STUS}`
                : '시설장비가 없습니다'}
            </Text>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: calc(50vh - 100px);
  left: calc(50vw - 200px);
  width: 400px;
  padding: 70px;
  background-color: white;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  text-align: center;
`;

const Text = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;

export default Modal;
