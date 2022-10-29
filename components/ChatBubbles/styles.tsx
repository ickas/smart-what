import styled from "styled-components";
import { rem } from "polished";
import { device } from "@/styles/design-tokens";

export const Wrapper = styled.div`
  background-image: url("world.svg");
  background-size: 70% auto;
  background-repeat: no-repeat;
  background-position: center 0px;
  padding: ${rem("100px")} 0;

  @media ${device.s} {
    padding: ${rem("160px")} 0;
  }
`;
