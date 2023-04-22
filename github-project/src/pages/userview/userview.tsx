import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './userview.css'
import RepositoryCard from '../repositoryCard/repository';
import GitHubIcon from '@mui/icons-material/GitHub';


function UserView(){
    const { user } = useParams()
    const [userData, setUserData] = useState({})
    const [repository, setRepository] = useState([])
    useEffect(()=>{
        async function request(repos:string) {
            const result = await fetch(`https://api.github.com/users/${user}${repos}`)
            const data = await result.json()
            return data
        }
        const exec = async () =>{
            let info = await request('')
            setUserData(info)
        }
        const execRepository = async ()=>{
            let infoRepository = await request('/repos')
            setRepository(infoRepository)
        }
        execRepository()
        exec()
    },[])
    return(
        <div className='userScreen'>
            <aside className='userData'>
                <img src={userData.avatar_url} />
                <h3>{userData.name}</h3>
                <div>
                    <GitHubIcon />
                    <span>{userData.login}</span>
                </div>
                <p>{userData.bio}</p>
            </aside>
            <div className='repositories'>
                <div className='repository'>{
                    repository.map((repos, index)=>(
                        <RepositoryCard key={index} name={repos.name} description={repos.description} fullName={repos.full_name}  />
                    ))
                }</div>
            </div>
        </div>
    )
}

export default UserView