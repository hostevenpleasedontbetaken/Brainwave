//Imports the Button from our assets
import ButtonSvg from "../assets/svg/ButtonSvg";

// Properties from the parent component (Button)
const Button = ({ className, href, onClick, children, px, white }) => {
  //Passing the properties into the Parent Component and giving it styles
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  //Creating a class for the spans
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
