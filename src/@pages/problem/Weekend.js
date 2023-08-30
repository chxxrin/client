import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const Weekend = () => {
  const navigate = useNavigate();
  const [currentWeek, setCurrentWeek] = useState(1);
  const [algorithmTags, setAlgorithmTags] = useState([]);
  const [addingTag, setAddingTag] = useState(false);
  const [newTag, setNewTag] = useState('');

  // Helper function to calculate the start and end dates for each week
  const getWeekDates = (weekNumber) => {
    const startDate = new Date('2023-08-01'); // Set your start date here
    startDate.setDate(startDate.getDate() + (weekNumber - 1) * 7); // Calculate start date based on week number
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6); // Calculate end date (6 days after start date)
    return { startDate, endDate };
  };

  const handlePreviousWeekClick = () => {
    setCurrentWeek((prevWeek) => Math.max(1, prevWeek - 1));
    navigate('/1/problem');
  };

  const handleNextWeekClick = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
    navigate('/1/problem');
  };

  useEffect(() => {
    const savedTags = localStorage.getItem('algorithmTags');
    if (savedTags) {
      setAlgorithmTags(JSON.parse(savedTags));
    }
  }, []);

  const handleDeleteTag = (index) => {
    setAlgorithmTags((prevTags) => {
      const newTags = [...prevTags];
      newTags.splice(index, 1);
      localStorage.setItem('algorithmTags', JSON.stringify(newTags));
      return newTags;
    });
  };

  const handleAddAlgorithm = () => {
    setAddingTag(true);
  };

  const handleNewTagChange = (e) => {
    setNewTag(e.target.value);
  };

  const handleNewTagKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (newTag.trim() !== '') {
        setAlgorithmTags((prevTags) => [...prevTags, newTag]);
        localStorage.setItem(
          'algorithmTags',
          JSON.stringify([...algorithmTags, newTag])
        );
      }
      setAddingTag(false);
      setNewTag('');
    }
  };

  const { startDate, endDate } = getWeekDates(currentWeek);

  return (
    <>
      <WeekendBar>
        <WeekendBarButton onClick={handlePreviousWeekClick}>
          <ReactIcon>
            <GrPrevious />
          </ReactIcon>
          이전 주
        </WeekendBarButton>
        <WeekendBarButton onClick={handleNextWeekClick}>
          다음 주
          <ReactIcon>
            <GrNext />
          </ReactIcon>
        </WeekendBarButton>
      </WeekendBar>
      <WeekendBox>
        <WeekendDate>
          {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
        </WeekendDate>
        <WeekendWeek>{currentWeek}주차</WeekendWeek>
      </WeekendBox>
      <AlgorithmBox>
        <AlgorithmTitle>사용 알고리즘</AlgorithmTitle>
        <AlgorithmTags>
          {algorithmTags.map((tag, index) => (
            <AlgorithmTag key={index}>
              {tag}
              <DeleteButton onClick={() => handleDeleteTag(index)}>
                <AiOutlineClose />
              </DeleteButton>
            </AlgorithmTag>
          ))}
          {addingTag ? (
            <AlgorithmTag>
              <AlgorithmInput
                type="text"
                value={newTag}
                onChange={handleNewTagChange}
                onKeyPress={handleNewTagKeyPress}
              />
            </AlgorithmTag>
          ) : (
            <AlgorithmAdd onClick={handleAddAlgorithm}>
              <AiOutlinePlus />
            </AlgorithmAdd>
          )}
        </AlgorithmTags>
      </AlgorithmBox>
    </>
  );
};

export default Weekend;

const WeekendBar = styled.div`
  width: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const WeekendBarButton = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const WeekendDate = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 5px;
`;

const WeekendWeek = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const WeekendBox = styled.div`
  width: 300px;
  height: 53px;
  display: flex;
  flex-direction: column;
`;

const AlgorithmBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 87px;
  height: 22px;
  padding-top: 10px;
`;

const AlgorithmTitle = styled.div`
  color: #676769;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 10px;
`;

const AlgorithmTag = styled.span`
  color: #466589;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 5px;
  background: #e8f0fe;
  // width: 46px;
  padding: 2px;
  flex-shrink: 0;
  position: relative;
  margin-right: 4px;

  &:hover {
    background: #d4e3fc;
  }
`;

const AlgorithmInput = styled.input`
  width: 100%;
  height: 22px;
  border: none;
  outline: none;
  font-size: 15px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: #e8f0fe;
  border-radius: 5px;
  padding: 2px;
`;
const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f05454;
  color: white;
  border: none;
  cursor: pointer;
  display: none; /* Hide the delete button by default */

  ${AlgorithmTag}:hover & {
    display: flex; /* Show the delete button on hover */
    justify-content: center;
    align-items: center;
  }
`;

const ReactIcon = styled.span`
  color: #676769;
  margin: 0 5px;
`;

const AlgorithmTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AlgorithmAdd = styled.button`
  width: 25px;
  flex-shrink: 0;
  color: #676769;
  border: none;
  background: none;
  cursor: pointer;
`;
