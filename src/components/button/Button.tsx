
import { Link } from "react-router-dom"
import { StyledButton } from "./Button.styled"
import { IoMdArrowBack } from "react-icons/io";

interface ButtonProps {
  route: string
}

export const Button = ({ route }: ButtonProps) => {
  return (
    <StyledButton>
      <Link to={`${route}`}>
        <IoMdArrowBack />
      </Link>
    </StyledButton>
  )
}