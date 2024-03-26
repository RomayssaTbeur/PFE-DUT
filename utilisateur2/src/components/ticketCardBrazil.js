import React, { useState } from 'react';
import LoginForm from './loginForm'; // Importez votre composant de formulaire de connexion ici
import { CCard, CCardImage, CCardBody, CButton } from '@coreui/react'; // Import de @coreui/react
import TicketImage from './image2/Football world cup South Korea vs Portugal football match scoreboard broadcast.jpeg';
function TicketCard() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleBuyButtonClick = () => {
    console.log("Clicked on Acheter button");
    setShowLoginForm(true);
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <CCard style={{ width: '30rem' }} className="mb-4 shadow-lg">
        {/* Partie gauche avec l'image */}
        <CCardImage orientation="top" src={TicketImage} />

        {/* Partie droite avec les détails */}
        <CCardBody className="text-center">
          {/* Paragraphe avec la mention "A partir de" et le prix */}
          <div className="text-black-700 dark:text-black-400 font-semibold mb-4 text-left">
            <h3>À partir de</h3>
            <span className="text-4xl font-bold text-black-800 dark:text-black-300">100$</span>
          </div>

          {/* Trait de soulignement */}
          <div className="w-100 border-t border-gray-800 dark:border-gray-300 mb-2"></div>

          {/* Bouton Acheter */}
          <CButton color="primary" onClick={handleBuyButtonClick}>
            Acheter
          </CButton>
        </CCardBody>
      </CCard>

      {/* Afficher le formulaire de connexion si showLoginForm est true */}
      {showLoginForm && <LoginForm />}
    </div>
  );
}

export default TicketCard;
