import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

import Title from '../../components/Title';
import Button from '../../components/Button';

const Home = () => {
    const navigate = useNavigate()

    const changeDir = (dir) =>{
        navigate(dir);
    }

    return (
        <div className='Home'>
            <Title>Quizzes</Title>
            <Button onClick={()=>{changeDir(ROUTES.Biblico)}}>Biblico</Button>
        </div>
    )
}

export default Home;
