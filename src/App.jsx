import s from "./App.module.css";
import { Card } from "./components/card";
import { useState } from "react";
import cardImg1 from "/im1.webp";
import cardImg2 from "/im2.png";
import cardImg3 from "/im3.jpg";
import Imgfundo from "/pic.jpg";

// export function App() quando rota
function App() {
    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")

    const enviar = ()=> {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.open(`https://wa.me/5542988704065?text=${msg}`)
    }
  return (
    <>
      <nav>
        <a href="#s1">primeira</a>
        <a href="#s2">segunda</a>
        <a href="#s3">terceira</a>
        <a href="#s4">quarta</a>
      </nav>
      <main>
        <section id="s1" className={s.s1}>
          <div className={s.imgSide}>
            <img src="/pic.jpg" alt="batata" />
          </div>
          <div className={s["text-side"]}>
            <h1>Olímpio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur harum quisquam quasi, sit provident earum repellendus,
              nemo illum sunt facilis totam quaerat ipsa veritatis quas, commodi
              suscipit doloremque non corporis.
            </p>
          </div>
        </section>
        <section id="s2" className={s.s2}>
          <Card
            imgSrc={"/im1.webp"}
            alt={"a1"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            title={"Card 1"}
          />
          <Card
            imgSrc={"/im2.png"}
            alt={"a2"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            title={"Card 2"}
          />
          <Card
            imgSrc={"/im3.jpg"}
            alt={"a3"}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            title={"Card 3"}
          />

          {/* <div className={s.card}>
                <img src="/im1.webp" alt="a1"/>
                <h2>Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div> */}
          {/* <div className={s.card}>
                <img src="/im2.png" alt="a2"/>
                <h2>Card 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={s.card}>
                <img src="/im3.jpg" alt="a3"/>
                <h2>Card 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div> */}
        </section>
        <section id="s3" className={s.s3}>
          <h2>teste</h2>
        </section>
        <section id="s4" className={s.s4}>
          <h2>Contato</h2>
          <div className={s.formulario}>
            <label htmlFor="nome">Nome</label>
            <input type="text" 
            id="nome" 
            placeholder="Insira o seu nome: " 
            onChange={(e) => setNome(e.target.value)}/>
            <label htmlFor="assunto">Mensagem</label>
            
            <textarea 
            value={assunto} 
            id="assunto" 
            placeholder="Insira sua mensagem"
            onChange={(e) => setAssunto(e.target.value)}>

            </textarea>

            <button className={s["btn"]} onClick={enviar}>
              ENVIAR
            </button>
          </div>
        </section>
      </main>
      <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook-f"></i>
          {/* <i className={s["fa-brands fa-facebook-f"]}></i> */}
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>

          {/* <i className={["fa-brands fa-instagram"]}></i> */}
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-square-linkedin"></i>
          {/* <i className={s["fa-brands fa-square-linkedin"]}></i> */}
        </a>
        <a href="https://github.com/IGENERALTKS" target="_blank">
          <i className="fa-brands fa-github"></i>
          {/* <i className={s["fa-brands fa-github"]}></i>  */}
        </a>
      </footer>

      <script src="script.js"></script>
    </>
  );
}

export default App;
