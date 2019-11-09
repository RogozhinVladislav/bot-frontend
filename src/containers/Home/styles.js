import { css } from '@emotion/core'

const color = 'white'

export default {
  logo: css`
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    &:hover {
      color: ${color};
    }
  `,
}
