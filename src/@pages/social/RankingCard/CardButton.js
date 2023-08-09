import MyButton from '../Common/MyButton';
import MyDGText from '../Common/MyDGText';

const CardButton = ({ is_open }) => {
  return (
    <MyButton>
      <MyDGText>{is_open ? '정보 공개하지 않기' : '정보 공개하기'}</MyDGText>
    </MyButton>
  );
};

export default CardButton;
