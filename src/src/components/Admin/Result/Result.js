import ResultItem from "./ResultItem/ResultItem"
function Result(){
    return(
        <section>
            <p className="text-primary fw-bold fs-2">Résultat semaine 16</p>
            <div className="d-flex justify-content-between">

                <ResultItem title="Pourboire total" price="287 €" icon="medal"/>
                <ResultItem title="Journée Sélectionné" price="59 €/jeudi" icon="star"/>
            </div>
        </section>
    )
}

export default Result