import "./App.css";
// import Testimonio from "./componentes/Testimonio"; //importacion de componente
import PaymentForm from "./componentes/PaymentForm";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <div className="strategy">
          <PaymentForm />
        </div>

        {/* <h1>Esto es lo que dicen nuestros alumnos sobre Nosotros:</h1>
        <Testimonio
          nombre="saul montaño"
          pais="colombia"
          cargo="ingeniero de software"
          empresa="spotify"
          testimonio="siempre he tenido problemas para aprender javascript. he toamdo
            muchos cursos, pero el curso de freeCodeCamp fue el que se quedo.
            Estudiar JavaScript, asi como estructuras de datos y algoritmos en
            dreecodecamp me dio las habilidades y la confiana que necesitaba para
            conseguir el trabajo de mis sueños como ingeniero de software en
            spotify"
          imagen="4"
        />

        <Testimonio
          nombre="samuel montaño"
          pais="EE.UU"
          cargo="ingeniero de sistemas"
          empresa="Amazon"
          testimonio="siempre he tenido problemas para aprender javascript. he toamdo
            muchos cursos, pero el curso de freeCodeCamp fue el que se quedo.
            Estudiar JavaScript, asi como estructuras de datos y algoritmos en
            dreecodecamp me dio las habilidades y la confiana que necesitaba para
            conseguir el trabajo de mis sueños como ingeniero de software en
            Amazon"
          imagen="3"
        />

        <Testimonio
          nombre="jesus montaño"
          pais="Republica dominicana"
          cargo="ingeniero de sistemas"
          empresa="Netflix"
          testimonio="siempre he tenido problemas para aprender javascript. he toamdo
            muchos cursos, pero el curso de freeCodeCamp fue el que se quedo.
            Estudiar JavaScript, asi como estructuras de datos y algoritmos en
            dreecodecamp me dio las habilidades y la confiana que necesitaba para
            conseguir el trabajo de mis sueños como ingeniero de software en
            Netflix"
          imagen="2"
        />

        <Testimonio
          nombre="jhoan montaño"
          pais="Costa rica"
          cargo="ingeniero de sistemas"
          empresa="HBO"
          testimonio="siempre he tenido problemas para aprender javascript. he toamdo
            muchos cursos, pero el curso de freeCodeCamp fue el que se quedo.
            Estudiar JavaScript, asi como estructuras de datos y algoritmos en
            dreecodecamp me dio las habilidades y la confiana que necesitaba para
            conseguir el trabajo de mis sueños como ingeniero de software en
            HBO"
          imagen="1"
        /> */}
      </div>
    </div>
  );
}

export default App;
