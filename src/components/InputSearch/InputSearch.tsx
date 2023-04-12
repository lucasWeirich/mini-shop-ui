import * as IS from './InputSearch.styles'

interface InputSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function InputSearch({ label, ...props }: InputSearchProps) {
  return <IS.Wrapper
    placeholder={label}
    {
    ...props
    }
  >

  </IS.Wrapper>
}