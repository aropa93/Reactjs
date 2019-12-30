import React from "react";
class Title extends React.Component{

    title =()=>{
        return(
            <h4 onDoubleClick={this.setsttTitle}>{this.props.txtTitle}</h4>
        )
            
    }

    frmTitle=()=>{
        return(
            <input id="title" onBlur={this.setsttTitle} 
            onChange={this.settxtTitle}
            onKeyUp={this.checkEnter}
            type="text"/>
        )
    }
    // check khi người dùng Enter sẽ lấy luôn giá trị tại thẻ input
    checkEnter=(e)=>{
        if(e.keyCode===13){
            this.setsttTitle()
        }
    }
    showTitle=()=>{
            if(this.props.sttTitle===1){
                return this.title()
            }
            else{
                return this.frmTitle()
            }
    }
    setsttTitle=()=>{
        return(
            this.props.changesttTitle()
        )
    }
    settxtTitle=(e)=>{
            this.props.changeTxtTitle(e.target.value)
    }
    
    componentDidUpdate(){
        console.log("Component Did Update")
        if(this.props.sttTitle===0){
            document.getElementById("title").focus()
            document.getElementById("title").value = this.props.txtTitle
        }
    }


    render(){
        return(
           <React.Fragment>
               {this.showTitle()}
           </React.Fragment>
        )
    }
}
export default Title ;
