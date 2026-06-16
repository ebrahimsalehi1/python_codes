import {
  useEffect,
  useRef,
  type Ref,
} from 'react';
import './App.css';
// import { AppRoutes } from './topics/react_002_use_search_params/AppRoutes';

const Component1 = ({
  onExpandButtonPositionChange,
}: {
  onExpandButtonPositionChange: (
    bottom: number,
  ) => void;
}) => {
  const refButton: Ref<HTMLButtonElement | null> =
    useRef(null);

  const screenFun = () => {
    if (
      refButton?.current?.getClientRects()
    ) {
      onExpandButtonPositionChange(
        refButton.current?.getClientRects()[0]
          .bottom,
      );
    }
  };

  useEffect(() => {
    window.addEventListener(
      'resize',
      screenFun,
    );
    return () =>
      window.removeEventListener(
        'resize',
        screenFun,
      );
  }, []);

  return (
    <div
      style={{
        width: 300,
        height: 200,
        border: '1px solid red',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <button
        ref={refButton}
        id="button1"
      >
        Click
      </button>
    </div>
  );
};

type Component2Props<T> = {
  value: T;
};
const Component2 = <T,>({
  value,
}: Component2Props<T>) => (
  <div>{JSON.stringify(value)}</div>
);

function App() {
  const containerRef: Ref<HTMLDivElement | null> =
    useRef(null);

  // return <AppRoutes />;
  return (
    <>
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 600,
          width: 600,

          border: '1px solid green',
        }}
      >
        <Component1
          onExpandButtonPositionChange={(
            bottom: number,
          ) => {
            let calc;
            if (
              containerRef.current?.getClientRects()
            ) {
              calc =
                containerRef.current?.getClientRects()[0]
                  .bottom - bottom;
            }
            console.log('calc', calc);
          }}
        />

        <Component2<string> value="Ebrahim" />
      </div>
    </>
  );
}

export default App;
