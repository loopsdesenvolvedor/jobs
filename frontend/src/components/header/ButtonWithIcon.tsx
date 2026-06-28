type ButtonWithIconType = {
  text: string;
  className: string;
  icon: React.ReactNode;
};

const ButtonWithIcon = ({ text, className, icon }: ButtonWithIconType) => {
  return (
    <button className={className}>
      {icon} <span>{text}</span>
    </button>
  );
};

export default ButtonWithIcon;
