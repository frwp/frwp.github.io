import './App.css';
import Logo from './components/SvgLoad';
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
                    <p>
                        Click one of my profiles below.{/* or keep scrolling.*/}
                    </p>
                    <div className='separator'>
                        <a
                            href='mailto:f.rianwardanaputra@gmail.com'
                            className='logo'
                        >
                            <Logo
                                fill='#071a52'
                                width='37'
                                height='37'
                                name='mail'
                            />
                        </a>
                        <a
                            href='https://github.com/rianwardanaputra'
                            target='_blank'
                            rel='noreferrer'
                            className='logo'
                        >
                            <Logo
                                fill='#071a52'
                                width='37'
                                height='37'
                                name='github'
                            />
                        </a>
                        <a
                            href='https://linkedin.com/in/rianwardanaputra'
                            target='_blank'
                            rel='noreferrer'
                            className='logo'
                        >
                            <Logo
                                fill='#071a52'
                                width='37'
                                height='37'
                                name='linkedin'
                            />
                        </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
