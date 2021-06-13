import teatros from '../service/dados-criados'

function Mapedados(){
    return(
        <div>
            {teatros.map(teatro => {
                return(
                    <div>
                        <h3>{teatro.Nome} </h3>
                        <img src={teatro.Imagem} alt={teatro.Nome} />
                        <p>{teatro.Inauguração}</p>
                        <p>{teatro.Capacidade}</p>
                    </div>
                )
            })}
        </div>
    )
} 


export default Mapedados