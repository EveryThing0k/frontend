import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Container, Content, CircularProgress, Steps } from './styles';
import colors from '../../styles/colors';
import ImageGrafic from '../../assets/progress.svg';

const percentage = 10;

export default function Level() {
  return (
    <Container>
      <Steps current={1}>
        <Steps.Item title="Finished" description="Description" />
        <Steps.Item title="In Progress" description="Description" />
        <Steps.Item title="Waiting" description="Description" />
        <Steps.Item title="Waiting" description="Description" />
      </Steps>
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
