import React,{Fragment} from 'react';
import  "./styles/styles.scss";
import IA from './image/IA.jpg';
import Curso from './Curso';



const App = ()=>(


  <> 
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img  className="main-banner__img" src={IA} alt=" FONDO Inteligencia "  />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Curso de Matemáticas</p>
        <p> SOMOS LO QUE HACEMOS DIA A DIA. DE MODO QUE LA EXCELENCIA NO ES UN ACTO SINO UN HABITO – ARISTOTELES. </p>
        <a href=" https://ux.ed.team/cards.html" className="button third-color">Eligue tu curso </a>
      </div>
    </div>
  </div>
</div>


<div className='ed-grid m-grid-4'>

{/* codigo card */}
<Curso />
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>
<Curso/>


</div>


  
  
  
  </>










  
)


export default App;


//reglas jsx
//1:toda etiqueta debe cerrarse
//2: todo componente sol puede retornar un elemento padre
//3:apollarse de los fragment cuando se necesita enciar dos elementos, en cuaquiera de las moneclatura fragment => <> </>

