import React from "react";
import ReactDOM from "react-dom";
import Formatter from "../Formatter";
import * as Styles from "./styles";
import { DrawerProps } from "./types";

const Drawer = (props: DrawerProps) => {
  const { isShowing = false, close, translation } = props;

  return isShowing ? (
    ReactDOM.createPortal(
      <React.Fragment>
        <Styles.Wrapper>
          <button
            onClick={() => {
              close();
            }}
          >
            Close
          </button>
          <Formatter>
            <pre dangerouslySetInnerHTML={translation}></pre>
          </Formatter>
          <button
            onClick={() => {
              close();
            }}
          >
            Close
          </button>
        </Styles.Wrapper>
      </React.Fragment>,
      document.body,
    )
  ) : (
    <></>
  );
};

export default Drawer;
