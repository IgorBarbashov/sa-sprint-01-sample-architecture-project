import React, {lazy, useState, useEffect, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const UserLogin = lazy(() => import('users/UserLogin').catch(() => {
        return { default: () => <div className='error'>Component UserLogin is not available!</div> };
    })
);

const Welcome = lazy(() => import('users/Welcome').catch(() => {
        return { default: () => <div className='error'>Component Welcome is not available!</div> };
    })
);

const TaskList = lazy(() => import('tasks/TaskList').catch(() => {
        return { default: () => <div className='error'>Component TaskList is not available!</div> };
    })
);

const App = () => {
    const [jwt, setJwt] = useState('');

    const onChangeJwtHandle = (e) => {
        setJwt(e.detail);
    };

    useEffect(() => {
        addEventListener('jwt-change', onChangeJwtHandle);
        return () => removeEventListener('jwt-change', onChangeJwtHandle);
    }, []);

    return (
        <div>
            <header className='App-header'>
                Лабораторная работа по микрофронтендам
            </header>
            <section className='App-content'>
                {jwt ? (
                    <>
                        <Suspense>
                            <Welcome jwt={jwt} />
                        </Suspense>
                        <Suspense>
                            <TaskList jwt={jwt} />
                        </Suspense>
                    </>
                ) : (
                    <Suspense>
                        <UserLogin onLogin={(name, password) => onLogin(name, password)} />
                    </Suspense>
                )}
            </section>
        </div>
    );
}

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)