import React, { Component } from 'react';
import './App.css';
import data from './data';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      datos: data,
      votos: 0
    }



  }

aumentar(index)
{
  this.setState({
  votos: this.state.datos[index].votes++,
  datos: this.state.datos.sort((a, b) => a.votes>b.votes ? -1:1 ? 1:-1)
  })

 
  
}

disminuir(index)
{
  this.setState({
   votos: this.state.datos[index].votes--,
   datos: this.state.datos.sort((a, b) => b.votes>a.votes ? 1:-1 ? -1:1)
  })
}

  sortByAsc() {

        this.setState({
          datos: this.state.datos.sort((a, b) => (a.votes - b.votes))
      });
        
       document.getElementById('boton2').classList.remove('active');
       document.getElementById('boton').classList.add('active');
       
      }

      sortByDesc() {
    
        this.setState({
          datos: this.state.datos.sort((a, b) => (b.votes - a.votes))
        
      });
        document.getElementById('boton').classList.remove('active');
        document.getElementById('boton2').classList.add('active');
        
      }

     


  render() {
    

    return (
      <div>
     <div className="App">
     <h1>Blog Posts Populares</h1>
     <hr/>
     </div>
     <div className="orden">
        <div class="espacio">
       <p><button id="boton" className="button active" onClick={this.sortByAsc.bind(this)}>Orden Ascendente</button> <button  id="boton2" className="button" onClick={this.sortByDesc.bind(this)}>Orden Descendente</button></p>
        </div>
    
      <table>
      {this.state.datos.map((list, index) => <tr key={index}> <td><img  className="post-image" src={list.post_image_url} /></td><td> <a onClick={this.aumentar.bind(this, index)}><i class="fa fa-arrow-up"></i></a><h3>{list.votes}</h3><a onClick={this.disminuir.bind(this, index)}><i class="fa fa-arrow-down"></i></a></td> <td><a href={list.url}>{list.title}</a><p>{list.description}</p><p>Escrito por: <img id="avatar" src={list.writer_avatar_url}/> </p></td></tr>)}
      </table>
     </div>
  
   
     
     
  
     </div>  
   );
     
     

    

  }
}

export default App;
