import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import Gun from 'gun';

export class MoviePlay extends Component {
  static propTypes = {
    sources: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  constructor(props){
    super(props);
    this.state = {
      blobUrl: null,

    }

    this.gun = new Gun(['http://jiangshan.ml:8080/gun']);
  }

  setMediaFile = ()=> { 
    let file = this.refs.testFile.files[0]; 
    if(!file){ 
      alert("Please upload file."); 
      return false; 
    } 
    let reader = new FileReader();
    reader.onload = function(e){
          
          var slice = e.target.result.slice(0, 1*1024*1024);
          console.log(slice);
          return false;
          // this.gun.get("testMovie").put({file: JSON.stringify(fileToSave)});
    }

    reader.readAsArrayBuffer(file);
    
    
    } 

  componentDidMount(){

  }

  play = () => {
      this.gun.get("testMovie").on((data, key)=>{
        let url = (window.URL) ? window.URL.createObjectURL(data.file) : window.webkitURL.createObjectURL(data.file); 
        this.refs.testVideo.src=url;
      })
     
  }

  render() {
    return (
      <div className="sources-movie-play">
        <input onChange={this.setMediaFile}  type="file" ref="testFile" />
        <video ref="testVideo" autoPlay="autoplay" controls />
        <button onClick={this.play}>播放gun文件的东西</button>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sources: state.sources,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePlay);
