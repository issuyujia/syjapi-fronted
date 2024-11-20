import React from 'react';
import {QuestionCircleOutlined} from '@ant-design/icons';
import '@umijs/max';

export type SiderTheme = 'light' | 'dark';

const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://pro.ant.design/docs/getting-started');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};

const RightContent = () => {
  return (
    <div>
      <Question />
    </div>
  );
};
export { Question };
export default RightContent;
