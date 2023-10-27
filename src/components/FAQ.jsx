import Question from "../Assets/Questions";

function FAQ(){
    return(
        <section className="flex justify-center flex-col items-center">
            <b className="my-16 text-[70px]">FAQ</b>
            <Question title={'Pourquoi le projet nécessite + de temps que prévu ?'} answer={'La première version du site avait un code difficile à manipuler, sachant que le Front et le Back sont mélanger dans un seul dossier dans la première version il est très difficile de refacto tout le Front'}/>
            <Question title={'Pourquoi BackStorm?'} answer={'Une équipe formidable  qui prendra soint de votre investissement !'}/>
        </section>
        );
}
export default FAQ;

