import { styled } from 'styled-components';
import Button from 'src/@components/atoms/Button';

const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <input />
      <Button paddingX="10" paddingY="5">
        검색
      </Button>
    </SearchBoxContainer>
  );
};

const SearchBoxContainer = styled.div`
  margin: 0 auto;
  width: 570px;
  height: 70px;
`;

export default SearchBox;
