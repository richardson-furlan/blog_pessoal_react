import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'



function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'info')
    navigate('/login')
  }

  let navbarComponent


  if (usuario.token !== "") {
    navbarComponent = (
      <>
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase ml-4'>Blog Pessoal</Link>

            <div className='flex gap-4 mr-3'>
              <Link to='/postagens' className='hover:underline hover:scale-125'>Postagens</Link>
              <Link to='/temas' className='hover:underline hover:scale-125'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline hover:scale-125 hover:mr-2 hover:ml-2'>Cadastrar Tema</Link>
              <Link to='/perfil' className='hover:underline hover:scale-125 '>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline hover:scale-125'>Sair</Link>

            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar