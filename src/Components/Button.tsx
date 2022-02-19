import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import getScrollTo from 'utils/getScrollTo';

export default function Button() {
  const handleTopClick = () => {
    window.scrollTo({
      top: window.scrollY - window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleDoubleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBottomClick = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleDoubleBottomClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          right: '0',
          bottom: '0',
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          background: '#dbdbdb',
        }}
      >
        <div
          style={{
            width: 'fit-content',
            position: 'absolute',
            right: '32.3%',
            cursor: 'pointer',
          }}
          onDoubleClick={handleDoubleTopClick}
          onClick={handleTopClick}
        >
          <ArrowDropUpIcon fontSize="large" sx={{ color: 'white' }} />
        </div>
        <div
          style={{
            width: 'fit-content',
            position: 'absolute',
            bottom: '31.5%',
            right: '0',
            cursor: 'pointer',
          }}
          onDoubleClick={() =>
            getScrollTo('left', Number(document.body.scrollWidth))
          }
          onClick={() =>
            getScrollTo(
              'left',
              Number(window.scrollX) + Number(window.innerWidth),
            )
          }
        >
          <ArrowRightIcon fontSize="large" sx={{ color: 'white' }} />
        </div>
        <div
          style={{
            width: 'fit-content',
            position: 'absolute',
            right: '33.3%',
            bottom: '0',
            cursor: 'pointer',
          }}
          onDoubleClick={handleDoubleBottomClick}
          onClick={handleBottomClick}
        >
          ㄴ
          <ArrowDropDownIcon fontSize="large" sx={{ color: 'white' }} />
        </div>
        <div
          style={{
            width: 'fit-content',
            position: 'absolute',
            bottom: '31.5%',
            left: '0',
            cursor: 'pointer',
          }}
          onDoubleClick={() => getScrollTo('left', document.body.scrollLeft)}
          onClick={() =>
            getScrollTo('left', window.scrollX - window.innerWidth)
          }
        >
          <ArrowLeftIcon fontSize="large" sx={{ color: 'white' }} />
        </div>
      </div>
    </>
  );
}
