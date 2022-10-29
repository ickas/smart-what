import styled from "styled-components";
import { rem } from "polished";
import { colors } from "@/styles/design-tokens";

export const Wrapper = styled.div`
  margin-top: ${rem("20px")};
  background-color: ${colors.white};
  border: ${rem("2px")} solid ${colors.purple400};
  border-radius: ${rem("30px")};
  padding: ${rem("56px")};
  color: ${colors.blue950};
  text-align: left;
`;
