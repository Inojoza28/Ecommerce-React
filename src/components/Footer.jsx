import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} - Smart Shopping</p>
      <p>Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
