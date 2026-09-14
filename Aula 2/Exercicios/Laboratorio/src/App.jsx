import cppIcon from '../img/c++.png';
import javaIcon from '../img/java (1).png';
import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import construindosites from '../img/construindosites.jpg';
import JavaScript from '../img/JavaScript.jpg';
import web from '../img/web.jpg';
import './App.css';

function App() {
  return (
    <div className="fundo">
      <header className="head-container">
        <section className="head-content">
          <img src={cppIcon} alt="c++" />
        </section>
        <section className="head-content">
          <span>C++ e Java</span>
        </section>
        <section className="head-content">
          <img src={javaIcon} alt="java" />
        </section>
      </header>

      <section className="navbar-container">
        <div className="navbar-content">
          <span>Home</span>
          <span>Livros</span>
          <span>Videos</span>
          <span>Contatos</span>
        </div>
      </section>

      <section className="body-content">
        <h2>Introdução</h2>
        <p>
          C++ (em potuguês: lê-se "cê mais mais",em inglês lê-se see plus
          plus) é uma linguagem de programação e compilada
          multi-paradigma(seu suporte inclui linguagem imperativa, orientada
          e objetos e genérica) e de uso geral. Desde os anos de 1990 é uma
          das linguagens comerciais mais populares, sendo bastante usada
          também na academia por seu grande desempenho e base de
          utilizadores.
        </p>
        <p>
          java é uma linguagem de programação orientada a objetos
          desenvolvidos na década de 90 por uma equipe de programadores
          chefiada por James Gosling, na empresa Sun Microsytems. Em 2008 o
          Java foi adquirido pela empresa Oracle Corporation.
        </p>
        <p>
          Java foi desenvolvido por um grupo de pesquisadores da SUN
          Microsytems por volta de 1990, pouco antes da explosão da
          Internet. Essa linguagem possui estrutura muito semelhante á da
          linguagem C. da qual descende imediatamente.Java temem comum com a
          linguagem C++ o fato de ser orientada a objetos e mantém com esta
          uma alto grau de semelhança.
        </p>
      </section>

      <section className="body-content">
        <h2>Livros</h2>
        <div className="book-wrapper">
          <img src={web} width="300" height="400" alt="imagem algoritmos" />
          <img src={construindosites} width="300" height="400" alt="imagem lingua" />
          <img src={JavaScript} width="300" height="400" alt="java" />
        </div>
      </section>

      <section className="body-content">
        <h2>Aprenda a programar com Java e C++ na FEi.</h2>

        <div className="frames-content">
          <iframe
            width="400"
            height="400"
            src="https://www.youtube.com/embed/4MHAOPxcnsQ?si=8v6lcmyg6bCQAfmn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.6486945444585!2d-46.58197282578027!3d-23.724236267594023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4158ef9c7c05%3A0x776b798985695f52!2sFEI%20-%20Campus%20S%C3%A3o%20Bernardo%20do%20Campo!5e0!3m2!1spt-PT!2sbr!4v1740978090740!5m2!1spt-PT!2sbr"
            width="400"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section className="body-content">
        <h2>Contatos</h2>

        <div className="tabela-contatos-container">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prof.Dr.Fagner Pimentel</td>
                <td>fpimentel@fei.edu.br</td>
              </tr>
              <tr>
                <td>Prof.Dr.Isaac Jesus Da Silva</td>
                <td>isaacjesus@fei.edu.br</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="sites">
        <div className="yellow-card">
          <span>Sites para consulta:</span>
          <div className="list-sites">
            <ul>
              <li>
                HTML -{' '}
                <a href="https://www.w2schools.com/html/">
                  https://www.w2schools.com/html/
                </a>
              </li>
              <li>
                CSS -{' '}
                <a href="https://www.w2schools.com/css/">
                  https://www.w2schools.com/css/
                </a>
              </li>
              <li>
                JavaScript -{' '}
                <a href="https://www.w2schools.com/js/">
                  https://www.w2schools.com/js/
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="foot-container">
        <section className="foot-content">
          <img src={htmlIcon} alt="html" />
        </section>
        <section className="foot-content">
          <div className="foot-column">
            <span>Desejamos um excelente semestre a todos</span>
            <span>(Fonte Usada: Comic Sans MS, tamanho 15pt)</span>
          </div>
        </section>
        <section className="foot-content">
          <img src={cssIcon} alt="css" />
        </section>
      </footer>
    </div>
  );
}

export default App;
