declare module 'react-player' {
  import * as React from 'react';
  type ReactPlayerProps = Record<string, any>;
  const ReactPlayer: React.ComponentType<ReactPlayerProps>;
  export default ReactPlayer;
}
