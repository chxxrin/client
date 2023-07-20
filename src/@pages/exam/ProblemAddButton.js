import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProblemAddButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [problemDetails, setProblemDetails] = useState(null);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSearchValue('');
    setProblemDetails(null);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        // `https://api.example.com/problems/${searchValue}`
        `https://solvedac.github.io/unofficial-documentation/${searchValue}.json`
      );
      const data = response.data;
      setProblemDetails(data);
    } catch (error) {
      console.error('Error fetching problem details:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div>
      <AddButton onClick={handleButtonClick}>문제 추가하기</AddButton>
      {showModal && (
        <Modal>
          <ModalContent>
            <SearchInput
              type="text"
              placeholder="백준 문제 번호를 입력하세요"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchButton onClick={handleSearch}>검색</SearchButton>
            {problemDetails && (
              <ProblemDetails>
                패치됐당
                {/* Display the problem details fetched from the API */}
                <ProblemNumber>{problemDetails.number}</ProblemNumber>
                <ProblemTitle>{problemDetails.title}</ProblemTitle>
                <ProblemTag>{problemDetails.tag}</ProblemTag>
                {/* Add other problem details you want to display */}
              </ProblemDetails>
            )}
            <CloseButton onClick={handleModalClose}>닫기</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default ProblemAddButton;

const AddButton = styled.button`
  border-radius: 5px;
  background: #f05454;
  color: #fff;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  width: 236px;
  height: 55px;
  flex-shrink: 0;
  margin-left: 32px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Modal = styled.div`
  /* Your modal styles... */
`;

const ModalContent = styled.div`
  /* Your modal content styles... */
`;

const SearchInput = styled.input`
  /* Your search input styles... */
`;

const SearchButton = styled.button`
  /* Your search button styles... */
`;

const ProblemDetails = styled.div`
  /* Your problem details styles... */
`;

const ProblemNumber = styled.div`
  /* Your problem number styles... */
`;

const ProblemTitle = styled.div`
  /* Your problem title styles... */
`;

const ProblemTag = styled.div`
  /* Your problem tag styles... */
`;

const CloseButton = styled.button`
  /* Your close button styles... */
`;
