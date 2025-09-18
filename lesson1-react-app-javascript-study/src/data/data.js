// data.js

import componentsImg from '../assets/images/components.jpg';
import propsImg from '../assets/images/props.jpg';
import jsxImg from '../assets/images/jsx.jpg';
import stateImg from '../assets/images/state.jpg';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      '핵심적인 UI 구성 요소입니다. 여러 개의 Component를 조합하여 사용자 인터페이스를 구성합니다.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      '동적인 HTML 형태의 코드를 반환하여 실제로 화면에 렌더링될 마크업을 정의합니다.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Component에 입력 데이터를 전달하여 구성 가능하고 재사용 가능하게 만듭니다.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React가 관리하는 데이터로, 변경될 때 Component가 다시 렌더링되어 UI가 업데이트됩니다.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Component는 React 애플리케이션의 구성 요소입니다. 하나의 독립적인 모듈(HTML + 선택적 CSS + JS)로서 특정한 출력을 렌더링합니다.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX는 JavaScript의 확장 문법입니다. 템플릿 언어와 유사하지만 JavaScript의 모든 기능을 사용할 수 있습니다(예: 동적 콘텐츠 출력).',
    code: `
<div>
  <h1>환영합니다 {userName}님</h1>
  <p>React를 배워보세요!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Component는 props라고 불리는 임의의 입력값을 받아들입니다. 함수의 매개변수와 같은 역할을 합니다.',
    code: `
function Welcome(props) {
  return <h1>안녕하세요, {props.name}님!</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State는 React Component가 사용자 액션, 네트워크 응답, 기타 요인에 따라 시간이 지남에 따라 출력을 변경할 수 있게 해줍니다.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>상세정보 보기</button>
      {isVisible && <p>놀라운 상세정보입니다!</p>}
    </div>
  );
}`,
  },
};