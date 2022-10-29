import styled from "styled-components";
import { rem } from "polished";
import { colors, global } from "@/styles/design-tokens";

export const Wrapper = styled.div`
  margin-top: ${rem("20px")};
  background-color: ${colors.white};
  border: ${rem("2px")} solid ${colors.purple400};
  border-radius: ${rem("30px")};
  padding: ${rem("56px")};
  color: ${colors.blue950};
  text-align: left;

  & + button {
    margin-top: ${rem("20px")};
    background-color: ${colors.purple850};
    border: ${rem("2px")} solid ${colors.purple400};
    border-radius: ${rem("30px")};
    width: 100%;
    height: ${rem("90px")};
    font-size: ${rem("26px")};
    color: ${colors.white};
    transition-duration: ${global.hoverTransitionDuration};

    &:hover {
      background-color: ${colors.purple900};
    }
  }
`;
