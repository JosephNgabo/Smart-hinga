import Image from "next/image";

type ButtonProps = {
    type: any,
    title: string,
    icon?: string,
    variant: string,
    onClick?: any
    }

const Button = ({type, title, icon, variant, onClick}: ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full ${variant}`}
    type={type} onClick={onClick}
    >
    {icon && <Image src={icon} alt={title} width={20} height={20} />}
    <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button
