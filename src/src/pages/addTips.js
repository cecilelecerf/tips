import React, { useState } from "react";
import Alert from '../components/Alert/Alert';
import Button from "../components/Button/Button";
import FormItem from "../components/Form/FormItem";
import FormPill from "../components/Form/FormPill";

const AddTips = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipAmount, setTipAmount] = useState();
  const [darkMode, setDarkMode] = useState(false); // Ajoutez cette ligne si vous n'avez pas déjà un state pour le mode sombre

  const handleManualInput = (event) => {
    setTipAmount(event.target.value);
  };

  const handleToggle = (event) => {
    event.preventDefault(); // Empêche la soumission du formulaire
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 5000);
  };

  return (
    <form className="d-flex flex-column justify-content-between">
      {isOpen && (
        <Alert text="Le pourboire à bien été ajouté" checkIcon={true} darkMode={darkMode} />
      )}
      <div>
        <div>
          <FormItem placeholder="cerise" label="Nom de la table" type="text" darkMode={darkMode} />
          <FormItem
            placeholder="3"
            label="Montant du pourboire"
            type="number"
            value={tipAmount}
            onChange={(event) => handleManualInput(event)}
            darkMode={darkMode}
          />
        </div>
        <div className="d-flex justify-content-center">
          <FormPill number="0.50" setTipAmount={setTipAmount} />
          <FormPill number="1.00" setTipAmount={setTipAmount} />
          <FormPill number="2.00" setTipAmount={setTipAmount} />
        </div>
      </div>
      <button onClick={handleToggle}>
        <Button text="Ajouter le pourboire" />
      </button>
    </form>
  );
};

export default AddTips;