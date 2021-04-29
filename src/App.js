// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import './App.css';
import { ReactComponent as GithubLogo } from './assets/github.svg';
import { ReactComponent as LinkedInLogo } from './assets/linkedin.svg';
import { ReactComponent as MailLogo } from './assets/at.svg';
function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div className='container'>
                    <p>Hello I'm Rian. I'm curious about web technologies.</p>
                    <p>
                        I'm from{' '}
                        <a href='/#' target='_blank' className='magelang-text'>
                            Magelang, Indonesia.
                        </a>
                    </p>
                    <p>Click one of my profiles below.{/* or keep scrolling.*/}</p>
                    <div className='separator'>
                        <a href='mailto:f.rianwardanaputra@gmail.com' className='logo'>
                        <MailLogo
                            alt='Mail Account'
                            fill='#071a52'
                            width='37'
                            height='37'
                        />
                        </a>
                        <a href='https://github.com/rianwardanaputra' target='_blank' rel='noreferrer' className='logo'>
                        <GithubLogo
                            alt='Github Account'
                            fill='#071a52'
                            width='37'
                            height='37'
                        />
                        </a>
                        <a href='https://linkedin.com/in/rianwardanaputra' target='_blank' rel='noreferrer' className='logo'>
                        <LinkedInLogo
                            alt='LinkedIn Account'
                            fill='#071a52'
                            width='37'
                            height='37'
                        />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
