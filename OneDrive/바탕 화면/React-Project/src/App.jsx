// React를 왜 사용하는가? : 컴포넌트 단위로 개발할 수 있고 html 재사용성을 높여 개발할 수 있으며 동적인 웹 페이지를
// 보다 효율적으로 유지 보수하고 관리할 수 있도록 하기 위해 사용한다.

// jsx가 무엇인가? : JavaScript를 확장한 문법이다 UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용한다.

// 마운트 개념 : 컴포넌트가 DOM에 추가되고 브라우저에 나타나는 초기 단계를 나타낸다 React 컴포넌트의 라이프사이클 중 componentDidMount 메서드가 마운트 단계에서 호출된다.
// 언마운트 개념 : 컴포넌트가 더 이상 필요하지 않을 때 컴포넌트가 DOM에서 제거되는 단계를 의미한다.

// 함수형 컴포넌트 :  Hooks 기능을 사용하여 state와 생명주기 메서드 없이도 상태 관리와 다양한 기능을 사용할 수 있게 되었다.
// 클래스형 컴포넌트 : ES6 클래스 문법을 사용하여 정의되며 React.Component 클래스를 상속받아 구현된다. 클래스형 컴포넌트는 state와 생명주기 메서드를 사용하여 컴포넌트의 동작을 정의한다.
import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // 컴포넌트가 언마운트되면 clearInterval을 통해 interval을 정한다.
    return () => clearInterval(intervalId);
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 componentDidMount 때만 실행되도록 설정한다.

  return (
    <div>
      <h1>웹페이지가 켜지고 흐른 시간임 : {seconds}</h1>
    </div>
  );
};

export default TimerComponent;