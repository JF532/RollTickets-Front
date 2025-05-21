import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h5>Bem-vindo ao RollTickets</h5>

         <Link to="/cadastro">
      <button>Ir para página</button>
    </Link>

    </div>
  );
}

export default Home;
