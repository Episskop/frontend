import React from 'react';

declare global {
  namespace JSX {
    type Element = React.ReactNode; // Определяет тип элемента как React-узел
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
