import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="bg-whitesmoke text-dimgray-200">
        <section  className="py-20 flex justify-around">
        <div className="flex flex-col gap-[1px]">
          <b className="mb-10 text-[41px] text-darkslategray">
            Backstorm
          </b>
          <div className="">{`Contrary to popular belief, Lorem Ipsum `}</div>
          <div className="">{`is not simply random text. It has roots in `}</div>
          <div className="">a piece of classical Latin literature.</div>
        <button className="cursor-pointer rounded p-5 my-10 text-2xl bg-[#DA6B7A] font-medium font-montserrat text-white">
          S'identifier
        </button>
        </div>
        <div className="mt-20 flex flex-col items-center gap-[51px] text-2xl">
          <div className="cursor-pointer">Conditions Générales</div>
          <div className="cursor-pointer">Données personnelles</div>
          <div className="cursor-pointer">Aides</div>
        </div>
        <div className="mt-20 flex flex-col font-abhaya-libre">
          <div>
            <p className="m-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <p className="m-0">{` It has roots in a piece of classical Latin literature from 45 BC, `}</p>
            <p className="m-0">{`making it over 2000 years old. Contrary to popular belief, Lorem `}</p>
            <p className="m-0">{`Ipsum is not simply random text. It has roots in a piece of classical `}</p>
            <p className="m-0">
              A compléter.
            </p>
          </div>
        </div>
        </section>
        <div className="flex justify-center bg-[#2B2B2B] p-16 text-gray-100">
          Backstorm © 2023<span className="mr-[150px]"></span>
        </div>
      </footer>
        );
}
export default Footer;
