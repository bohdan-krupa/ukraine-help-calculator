import { FC } from "react";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer>
      <h2>Ukraine Help Calculator - Save Ukraine</h2>
      <p> 2022-{new Date().getFullYear()}, created by Team A </p>
      <p>All rights reserved ©</p>
    </footer>
  );
};

export default Footer;
