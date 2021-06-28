import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getVideoSourceRequest } from '../actions';
import '../assets/styles/components/Player.css'

const Player = props => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;
  
    useEffect(() => {
      props.getVideoSourceRequest(id);
    }, []);
  
    return hasPlaying ? (
      <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
        </video>
        <div className="Player-back">
          <button
            type="button"
            onClick={() => {
              props.history.goBack();
            }}
          >
            Regresar
          </button>
        </div>
      </div>
    ) : (
        setTimeout(<Redirect to="/404/" />, 1000)
      );
  };
  const mapStateToProps = state => {
    return {
      playing: state.playing
    };
  };
  
  const mapDispatchToProps = {
    getVideoSourceRequest
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Player);