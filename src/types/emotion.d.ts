import "@emotion/react";

import { Color } from ".";

declare module "@emotion/react" {
  export interface Theme {
    color: Color;
  }
}
