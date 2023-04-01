import './global.css'

import style from './App.module.css'


export function App() {
  return (
    <article className={style.container}>
      <div className= {style.card}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=80"
      alt="cover"
      />
      <img 
      className={style.avatar}
      src="https://github.com/agaklik.png"
      alt="avatar"
      />     
      <h1>Descrição/nome</h1>
      <h1>Stack</h1>
      </div>
    </article>

    );
}
