import teatros from '../service/dados-criados'


function Mapedados(){
    return(
        <div>
            {teatros.map(teatro => {
                return(
                    <div className="card">
                        <h3 className="title">{teatro.Nome} </h3>
                        <img src={teatro.Imagem} alt={teatro.Nome} className="img" />
                        <p className="infor">{teatro.Inauguração}</p>
                        <p className="infor">{teatro.Capacidade}</p>
                    </div>
                )
            })}
        </div>
    )
} 


export default Mapedados