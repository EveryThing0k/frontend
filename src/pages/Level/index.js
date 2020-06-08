import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Container, Content, CircularProgress, Steps } from './styles';
import colors from '../../styles/colors';
import ImageGrafic from '../../assets/progress.svg';
import history from '../../services/history';
import api from '../../services/api';

export default function Level() {
  const userType = useSelector(state => state.user.profile.type);
  const [level, setLevel] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (userType === 'company') {
      history.push('/');
    }
  }, [userType]);

  useEffect(() => {
    async function getUserLevel() {
      const response = await api.get('/user');
      setLevel(response.data.level);
      setPercentage(response.data.percent);
    }
    getUserLevel();
  }, []);

  return (
    <Container>
      {/* <Steps current={1}>
        <Steps.Item title="Finished" description="Description" />
        <Steps.Item title="In Progress" description="Description" />
        <Steps.Item title="Waiting" description="Description" />
        <Steps.Item title="Waiting" description="Description" />
      </Steps> */}
      <h1>Você está no nível {level}</h1>
      <Content>
        <CircularProgress>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathTransitionDuration: 1,
              pathColor: colors.primary,
              textColor: '#444444',
              trailColor: '#eeeeee',
            })}
          />
        </CircularProgress>
        <img src={ImageGrafic} alt="Evok" />
      </Content>
    </Container>
  );
}
