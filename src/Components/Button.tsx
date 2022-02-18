import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function Button(props: any) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleTopClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const handleBottomClick = (event: any) => {
    const anchorBottom = (event.target.ownerDocument || document).querySelector(
      '#back-to-bottom-anchor',
    );

    if (anchorBottom) {
      anchorBottom.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
        <Fab color="primary" sx={{ width: '60px', height: '60px', margin: '10px auto' }}>
          <ArrowDropUpIcon onClick={handleTopClick} fontSize='large' sx={{position: 'absolute', top: '0'}} />
          <ArrowDropDownIcon onClick={handleBottomClick} fontSize='large' sx={{position: 'absolute', bottom: '0'}} />
        </Fab>
      </Box>
    </Zoom>
  );
}
