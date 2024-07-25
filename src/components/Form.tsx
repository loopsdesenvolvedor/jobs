import styled from "styled-components";
import { IconType } from "react-icons";
import { IoMdArrowDropdown } from "react-icons/io";
import Input from "./Input";

const FormContainer = styled.form`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 1rem;
    background-color: transparent;
    border: 0;

    svg {
      height: 2rem;
      fill: #264fbc;
    }
  }

  .btn-filter {
    width: 7.4rem;
    height: 3.6rem;
    background-color: #264fbc;
    border: 0.1rem solid #264fbc;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400;
    margin-right: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 0.4rem;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

interface FormRequest {
  Icon?: IconType;
  btnText?: string;
}

const Form = ({ Icon, btnText }: FormRequest) => {
  if (Icon) {
    return (
      <FormContainer>
        <button className="btn-filter" type="button">
          <IoMdArrowDropdown size={25} color="#fff" />
          <span>Filtros</span>
        </button>
        <Input
          type="text"
          placeholder="Busque por uma vaga, empresa ou cidade"
        />
        <button className="btn-icon">
          <Icon size={20} color="#333" />
        </button>
      </FormContainer>
    );
  } else {
    <FormContainer>
      <Input type="text" placeholder="Busque por uma vaga, empresa ou cidade" />
      <button>{btnText}</button>
    </FormContainer>;
  }
};

export default Form;
