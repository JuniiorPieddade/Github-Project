import './repository.css'
import { Link } from 'react-router-dom'

interface repositoryTypes {
    name: string
    description: string
    fullName: string
}
function RepositoryCard({name, description, fullName}:repositoryTypes) {
    return(
        <div className='repositoryCard'>
            <h3>{name}</h3>
            {description? <p>{description.substring(0, 110) + "..."}</p> : <p>Este Repositório não tem descrição recomendamos clicar em <strong>ver projeto</strong> para obter mais informações. </p>}
            <Link to={`https://github.com/${fullName}`}>
                <button>Ver Projeto</button>
            </Link>
        </div>
    )
}

export default RepositoryCard