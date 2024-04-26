import './style.scss'

interface iButton {
  label: string;
  action: () => void;
}

const Button = ({ label, action }: iButton) => (
  <button className="button" onClick={action}>{label}</button>
)

export default Button