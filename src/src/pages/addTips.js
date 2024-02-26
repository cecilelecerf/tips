import Alert from "../components/Alert/Alert";
import Button from "../components/Button/Button";
import FormItem from "../components/Form/FormItem";
import FormPill from "../components/Form/FormPill";
import { useState } from "react";

const AddTips = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipAmount, setTipAmount] = useState();

  const handleManualInput = (event) => {
    setTipAmount(event.target.value);
  };


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <form className="d-flex flex-column justify-content-between">
      <div>
        <div>
          <FormItem placeholder="cerise" label="Nom de la table" type="text" />
          <FormItem
            placeholder="3"
            label="Montant du pourboire"
            type="number"
            value={tipAmount}

            onChange={(event) => handleManualInput(event)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <FormPill number="0.50" setTipAmount={setTipAmount} />
          <FormPill number="1.00" setTipAmount={setTipAmount} />
          <FormPill number="2.00" setTipAmount={setTipAmount} />
        </div>
      </div>
      <button onClick={handleToggle} >
        <Button text="Ajouter le pourboire" />
      </button>
      {isOpen && (
        <Alert text="Le pourboire à bien été ajouté" checkIcon={true} />
      )}
    </form>
  );
};

export default AddTips;
