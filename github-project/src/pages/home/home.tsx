import { useState } from "react"
import './home.css'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'


function Home(){
    const [user, setUser] = useState('')
    const navigate = useNavigate()
    const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => { setUser(event.target.value)}
    const handleKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter') {
            navigateToUserView()
        }
    }

    const navigateToUserView = ()=>{
        navigate(`/userview/${user}`)
    }
    return (
        <div className="searchArea">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg" />
            <input type="text" placeholder="Digite seu Usuario" onChange={handleUserChange} className="userData" onKeyDown={handleKeyPress}/>
        <button className="buttonSearch" onClick={navigateToUserView}>
            <SearchIcon style={{ width: '50px', height: '44px' }} />
        </button>
        <p>Visualize seus repositórios do Github de forma dinâmica.</p>
        </div>
    )
}

export default Home