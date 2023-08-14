import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PeopleModal extends Component {
  render() {
    let peoplemodelStyle={
        display:"block",
        border:"none",
        backgroundColor : "#a4a5c5b7",
        
    }
    return (
      <div>
        <div className="modal show fade " style={peoplemodelStyle} >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="text-right mr-4 mt-4">
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.props.hide}
                  
                >  </button>
                
              </div>
              <div className="modal-body">
                          <div className="text-center"><img  src={this.props.avatar_url} width="200" height='200' alt="" className="img-fluid rounded"/></div>
                          {/* <h5>{this.props.  }</h5> */}
                          </div>
                          <div style={{marginBottom:"50px"}}>
                          <div className="empshow mr-3 mt-0 mb-0 text-primary">
                                <p className="text-primary text-capitalize ">Name : {this.props.employeeName}</p>
                                <p className="text-primary">Department : {this.props.department}</p>
                                <p className="text-primary ">Designation : {this.props.designation}</p>
                                <p className="text-primary ">Birthdate : {this.props.dob}</p>
                                <p className="text-primary ">Mobile Number : {this.props.mobile}</p>
                          </div>
                          </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
