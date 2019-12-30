import React from "react";
import Thum from "./components/Thum";
import Decription from "./components/Decription";
import Title from "./components/Title";
import "./App.css"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      txtTitleDefault:"What is Lorem Ipsum?",
      txtTitle:"Loanding......",
      sttTitle:1,
      sttDecription:1,
      txtDecription:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  }

  changesttTitle=()=>{
    if(this.state.sttTitle===1){
        this.setState({
            sttTitle:0
        })
    }
    else{
        this.setState({
          sttTitle:1
        })
       
    }
  }
  changeTxtTitle=(title)=>{
    this.setState({
      txtTitle:title
    })
  }

  changesttDecription=()=>{
    if(this.state.sttDecription===1){
      this.setState({
        sttDecription:0
      })
    }else{
      this.setState({
        sttDecription:1
      })
    }
  }  
  changeTxtDecription=(Decription)=>{
    this.setState({
      txtDecription:Decription
    })
  }

  componentDidMount(){
    console.log("Component DidMount")
    setTimeout(()=>{
      this.setState({
        txtTitle:this.state.txtTitleDefault
      })
    },3000)
  }
  shouldComponentUpdate(e){
    console.log("Component ShouldUpdate")
    if(this.state.txtTitle===""){
        this.setState({
          txtTitle:this.state.txtTitleDefault
        })
    }
    return true

  
}
  
  render() {
    return (
      <div id="main">
      <div class="content-item">
      <Thum/>
      <Title txtTitle={this.state.txtTitle}
             sttTitle={this.state.sttTitle}
             changeTxtTitle={this.changeTxtTitle}
             changesttTitle={this.changesttTitle}
            
      />
      <Decription txtDecription={this.state.txtDecription}
                  sttDecription={this.state.sttDecription}
                  changesttDecription={this.changesttDecription}
                  changeTxtDecription={this.changeTxtDecription}
      />
      
      </div>
    </div>
    );
  }
}
export default App;
