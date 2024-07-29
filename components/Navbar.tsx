import Image from "next/image";
import "../styles/styles.navbar.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/">
          <Image src="/logo.png" alt="logo" layout="fill" />
        </a>
      </div>
      <Button title="Sign Up" arrow type="button" />
    </nav>
  );
};

export default Navbar;
