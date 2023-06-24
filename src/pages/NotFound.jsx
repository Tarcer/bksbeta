import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="container-lg px-5 py-5 md:py-4 md:px-5 py-5 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center gap-4 gap-md-5 gap-lg-5">
            <div className="col-xl-6 col-lg-6 col-md-12 pb-4 pb-lg-0">
                <div className="position-relative">
                    <div className="position-absolute">
                        <div>
                            <h1 className="my-2 text-gray-800 font-weight-bold fs-4">
                                Oops ! On dirait que tu as trouvé le passage vers le grand néant.
                            </h1>
                            <p className="my-2 text-gray-800">
                                Désolé pour ça ! Veuillez visiter notre page d'accueil pour aller là où vous devez aller..</p>
                            <Link to={'/'}>
                            <button className="btn btn-primary my-2 border rounded-md py-3 px-6 text-center">Emmène-moi là-bas !</button>
                            </Link> 
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" className="img-fluid" alt="404" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" className="img-fluid" alt="Error" />
            </div>
        </div>
        );
}
export default NotFound;