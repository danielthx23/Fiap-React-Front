import Usuario from '../../models/Usuario';
import './BasicInformation.css'

interface BasicInformationProps {
    dadosUsuario: Usuario;
}

function BasicInformation({ dadosUsuario }: BasicInformationProps) {
    return (
        <section className='basic-info-card'>
            <h1 className='nome'>{dadosUsuario.nome}</h1>
            <h2 className='email'>{dadosUsuario.email}</h2>
            <div className='container-idade-data-nascimento'>
                <h2 className='idade'>{dadosUsuario.idade} Anos</h2>
                <h2 className='data-nascimento'>Data de nascimento: {dadosUsuario.dataDeNascimento}</h2>
            </div>
        </section>
    )
}

export default BasicInformation