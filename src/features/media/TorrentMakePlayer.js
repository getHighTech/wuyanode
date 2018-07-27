import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import webTorrent from 'webtorrent';
import  path from 'path';
import Plyr from 'plyr';



const  prettierBytes = require('prettier-bytes');

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "50px auto",
	  maxWidth: "500px",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

export class TorrentMakePlayer extends Component {
  static propTypes = {
    media: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

  constructor(props){
    super(props);
    this.client = new webTorrent();
    window.client = this.client;
    this.state = {
      playSource: null,
    }
  }

  componentDidMount(){
    // Change the second argument to your options:
    // https://github.com/sampotts/plyr/#options
    const player = new Plyr('video', {captions: {active: true}});

    // Expose player so it can be used from the console
    window.player = player;
  }

  seedFile = (e) => {
    window.client.seed(e.target.files, this.onTorrent);
    this.setState({
      playSource: null
    })
    
  }
  onTorrent = (torrent) => {
    torrent.on('warning', this.warning)
    torrent.on('error', this.error)

  
    // element.value = null // reset upload element

    var torrentFileName = path.basename(torrent.name, path.extname(torrent.name)) + '.torrent';
    console.log(torrentFileName);
    

    this.log('"' + torrentFileName + '" contains ' + torrent.files.length + ' files:')
    torrent.files.forEach( (file)=> {
      file.getBlobURL( (err, url) => {
        if (err) throw err
        this.setState({
          playSource: url,
        })
      })
      let stream = file.createReadStream();
      stream.on('data', this.streamReader);
    });


    
    
    

    this.log(
      'Torrent info hash: ' + torrent.infoHash + ' ' +
      '<a href="/#' + torrent.infoHash + '" onclick="prompt(\'Share this link with anyone you want to download this torrent:\', this.href);return false;">[Share link]</a> ' +
      '<a href="' + torrent.magnetURI + '" target="_blank">[Magnet URI]</a> ' +
      '<a href="' + torrent.torrentFileBlobURL + '" target="_blank" download="' + torrentFileName + '">[Download .torrent]</a>'
    )
  }

  streamReader = (chunk) => {
    this.chunk += chunk;
  }

  warning = (err) => {
    console.error(err.stack || err.message || err)
    console.log(err.message || err)
  }

  error = (err) => {
    console.error(err.stack || err.message || err)
    // var p = exports.log(err.message || err)
    // p.style.color = 'red'
    // p.style.fontWeight = 'bold'
  }
  log = (item) => {
    console.log(item);
    
  }

  render() {

    const { classes } = this.props;

    return (
      <div className="media-torrent-make-player">
        <div className={classes.container}>
        </div>
        <TextField
          label="选择做种文件"
          className={classes.textField}
          type="file"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.seedFile}
          margin="normal"
        />
        
        {
          this.state.playSource && 
          <div ref="testVideo" className={classes.container}>
            <video controls crossorigin playsinline poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg">
              <source ref="testSource" src={this.state.playSource} type="video/mp4" size="1080" />

              <track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
                  default />
              <track kind="captions" label="Français" srclang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt" />
              {/* <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a> */}
           </video>
          </div>
        }
        
      </div>
    );
  }
}


/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    media: state.media,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(TorrentMakePlayer));
