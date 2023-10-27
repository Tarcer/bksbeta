import CbdCompany from '../Assets/Images/CBD.jpg';
import TeamImage  from '../Assets/Images/imgMYRE.jpg';

function Actualite(){
    return(
        <>
        <b className="flex justify-center mb-16 text-[70px]">Notre Actualité</b>
        <div className="flex justify-around" data-aos="fade-right">
        <img
          className="rounded h-[34.94%] w-[47.57%] overflow-hidden max-h-full opacity-75 hover:opacity-100"
          alt="Actu"
          src={TeamImage}
        />
        <div className="max-w-[700px]">
            <h3 className="font-allerta text-33xl">Une grande première dans l'e-sport</h3>
            <p className="text-10xl text-dimgray-200 font-abhaya-libre" >Le Partenariat entre Backstorm et Myre offre  une nouvelle opportunitée, afin d’investir dans l’esport français.</p>
            <button className="cursor-pointer rounded p-5 my-10 text-2xl bg-[#DA6B7A] font-medium font-montserrat text-white">
            Lire plus
            </button>
        </div>
        </div>

        <div className="mt-16 flex justify-around" data-aos="fade-left">
        <div className="max-w-[700px]">
            <h3 className="font-allerta text-33xl">L'approche d'une entreprise dans le secteur du CBD</h3>
            <p className="text-10xl text-dimgray-200 font-abhaya-libre" >Backstorm se rapproche d'une entreprise dans le domaine du CBD , avec un nouveau listing. L'entreprise  Bamboo CBD est en pour parler avec notre  groupe</p>
            <button className="cursor-pointer rounded p-5 my-10 text-2xl bg-[#DA6B7A] font-medium font-montserrat text-white">
            Lire plus
            </button>
        </div>
        <img
          className="rounded h-[34.94%] w-[47.57%] overflow-hidden max-h-full opacity-75 hover:opacity-100"
          alt="Actu"
          src={CbdCompany}
        />
        </div>
        </>
        );
}
export default Actualite;

