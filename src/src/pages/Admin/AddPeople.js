import FormItem from "../../components/Form/FormItem";
import FormSwipe from "../../components/Form/FormSwipe";
import Button from "../../components/Button/Button"
function AddPeople() {
    return(
        <main className="d-flex flex-column justify-content-between">
            <form>
                <FormItem label="Nom" type="text" placeholder="Oum"/>
                <FormItem label="Prénom" type="text" placeholder="Alphonse"/>
                <FormSwipe label="Poste occupé" />
            </form>
            <div className="mb-5">
                <Button text="Ajouter l'employé !" />
            </div>
        </main>
    )
}

export default AddPeople;

