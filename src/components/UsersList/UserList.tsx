import Usuario from '../../models/Usuario';
import BasicInformation from '../BasicInformation/BasicInformation';
import './UserList.css';

function UserList() {
    const usuario1: Usuario = {
        nome: 'Daniel Saburo Akiyama',
        idade: 18,
        dataDeNascimento: '07/10/2005',
        email: 'daniel@gmail.com'
    }

    const usuario2: Usuario = {
        nome: 'Marcus',
        idade: 24,
        dataDeNascimento: '01/01/2000',
        email: 'marcus@gmail.com'
    }

    const usuario3: Usuario = {
        nome: 'João',
        idade: 22,
        dataDeNascimento: '01/01/2002',
        email: 'joao@gmail.com'
    }

    const listaUsuarios: Usuario[] = [usuario1, usuario2, usuario3]

    return (
        <>
            <div className='lista-de-usuarios'>
                <h1 className='lista-titulo'>Componente de informações básicas e lista estática de usuários</h1>

                <div className='lista-usuario'>
                    {listaUsuarios.map((usuario) => (
                        <BasicInformation key={usuario.email} dadosUsuario={usuario} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default UserList