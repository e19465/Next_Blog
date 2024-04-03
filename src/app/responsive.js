import { css } from "styled-components";

export const xs = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const xm = (props) => {
  return css`
    @media only screen and (max-width: 576px) {
      ${props}
    }
  `;
};

export const m = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const l = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};

export const xl = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};

export const xl_2 = (props) => {
  return css`
    @media only screen and (max-width: 1400px) {
      ${props}
    }
  `;
};
