import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;

  }

  .Toastify__toast-theme--colored.Toastify__toast--info {
    background-color: "red" !important
  }
  .Toastify__toast-theme--colored.Toastify__toast--success {
  }
  .Toastify__toast-theme--colored.Toastify__toast--warning {
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
  }

  html {
    font-size: 75%;
  }

  body {
    background: ${({theme}) => theme.palette.common.white};
    color: ${({theme}) => theme.palette.common.black};
  }

  ul {
    list-style: none;
  }

  & .sidepanel-enter .sidepanel-panel{
    right: -100%;
  }

  & .sidepanel-enter-active .sidepanel-panel{
    right: 0;
    transition: right 0.5s;
  }

  & .sidepanel-exit .sidepanel-panel{
    right: 0;
  }

  & .sidepanel-exit-active .sidepanel-panel{
    right: -100%;
    transition: right 0.5s;
  }



  & .sidepanel-enter .sidepanel-backdrop{
    opacity: 0;
  }

  & .sidepanel-enter-active .sidepanel-backdrop{
    opacity: 1;
    transition: opacity 0.5s;
  }

  & .sidepanel-exit .sidepanel-backdrop{
    opacity: 1;
  }

  & .sidepanel-exit-active .sidepanel-backdrop{
    opacity: 0;
    transition: opacity 0.5s;
  }
`;
