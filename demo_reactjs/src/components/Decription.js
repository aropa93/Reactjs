import React from "react";
class Decription extends React.Component{

    txtDecription=()=>{
        return (
            <p onDoubleClick={this.setsttDecription}>{this.props.txtDecription}</p>
        )
    }
    frmDecription=()=>{
        return(
            <input onBlur={this.setsttDecription} type="textera"
                    onChange={this.setTxtDecription}
                    onKeyUp={this.checkEnter}
            />
        )
    }

    showDecription=()=>{
        if(this.props.sttDecription===1){
            return this.txtDecription()
        }
        else{
            return this.frmDecription()
        }
    }
    setsttDecription=()=>{
        return this.props.changesttDecription()
    }
    setTxtDecription=(e)=>{
        this.props.changeTxtDecription(e.target.value)
    }
    checkEnter=(e)=>{
        if(e.keyCode===13){
            this.setsttDecription()
        }
    }


    render(){
        return(
            <React.Fragment>
                 {this.showDecription()}
            </React.Fragment>
           
        )
    }
}
export default Decription;