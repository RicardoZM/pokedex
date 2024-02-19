import logo from "../assets/pokemon_logo.svg";

export const Logo = () => {
  return (
    <header className="flex justify-center">
      <img src={logo} alt="Logo de Pokemon" />
    </header>
  );
};
