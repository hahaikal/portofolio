declare module 'react-typing-effect' {
  import * as React from 'react';

  interface ReactTypingEffectProps {
    text: string | string[];
    speed?: number;
    eraseSpeed?: number;
    eraseDelay?: number;
    typingDelay?: number;
    cursor?: string;
    displayTextRenderer?: (text: string, i: number) => React.ReactNode;
    cursorRenderer?: (cursor: React.ReactNode) => React.ReactNode;
    staticText?: string;
    className?: string;
    onTypingDone?: () => void;
  }

  export default class ReactTypingEffect extends React.Component<ReactTypingEffectProps> {}
}
