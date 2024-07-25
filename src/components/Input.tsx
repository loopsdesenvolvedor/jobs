import styled from "styled-components";
import { breakAt, BreakpointsSize } from "@/styles/BreakPointsSize";

interface InputRequest {
  type: string;
  placeholder: string;
}

const InputConatiner = styled.input`
  width: 100%;
  height: 3.6rem;
  outline: none;
  padding-left: 1rem;
  border: 0;
`;

const Input = ({ type, placeholder }: InputRequest) => (
  <InputConatiner type={type} placeholder={placeholder} />
);

export default Input;
