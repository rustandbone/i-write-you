/** @jsxImportSource @emotion/react */
import { informationState } from '@/recoil/atom/useOpen';
import { Common } from '@/style/Common';
import { mq } from '@/style/mq';
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { TbHandClick } from 'react-icons/tb';
import { clickAnimation } from '@/util/clickAnimation';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const [open, setOpen] = useRecoilState(informationState);
  const navigate = useNavigate();

  return (
    <div css={div}>
      <p css={title}>
        <span>I WRITE</span>
        <span css={you}>
          YOU
          <button
            type="button"
            css={information}
            onClick={() => setOpen(!open)}
          >
            ?
          </button>
        </span>
      </p>
      <div css={background}>
        <span css={subTitle}>Save Memories</span>
        <button type="button" css={clickBtn} onClick={() => navigate('/login')}>
          <TbHandClick css={click} />
          check-in
        </button>
      </div>
    </div>
  );
}

const div = css({
  background: '#ed94a1',
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100vh',
});

const title = mq({
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  zIndex: 1,
  fontSize: ['25vw', '20vw', '20vw', '200px'],
  color: Common.colors.lightYellow,
});

const information = css({
  border: `none`,
  backgroundColor: Common.colors.darkPurple,
  color: 'white',
  borderRadius: '50%',
  fontSize: '20px',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
});

const you = css({
  position: 'absolute',
  bottom: '-60%',
  left: '15px',
});

const background = css({
  position: 'relative',
  width: '100%',
  height: '80vh',
  background: `${Common.colors.mint} url("/hotel.png") no-repeat center 85%`,
  backgroundSize: 'auto 70%',
  transform: 'translateY(30%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
});

const clickBtn = css({
  position: 'absolute',
  bottom: '50px',
  right: '50%',
  transform: 'translateX(50%) translateY(7%)',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'InkLipquid',
  fontSize: '30px',
  color: Common.colors.darkPurple,
});

const click = css({
  color: Common.colors.darkPurple,
  width: '70px',
  height: '50px',
  animation: `${clickAnimation} 1s linear infinite`,
  '&:hover': css({
    transform: 'scale(110%)',
  }),
});

const subTitle = mq({
  position: 'absolute',
  top: '90px',
  right: '-80px',
  fontSize: '30px',
  transform: 'rotate(90deg)',
  color: Common.colors.lightYellow,
});
