import { css } from '@emotion/core'

export default {
  page: css`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
  `,
  form: css`
    max-width: 300px;
  `,
  forgotPassword: css`
    float: right;
  `,
  submitButton: css`
    width: 100%;
  `,
}
