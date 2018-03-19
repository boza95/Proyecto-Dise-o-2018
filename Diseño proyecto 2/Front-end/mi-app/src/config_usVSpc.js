import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lista from './get.js'
import Interfaz from './post.js'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header,Navigation,Drawer,Content,Button,IconButton} from 'react-mdl';
import { Card, CardTitle, CardText,CardActions,CardMenu} from 'react-mdl';

export default class Configuracion extends React.Component {
  state = {
    persons: []
  }

  render() {
    return (
      <ul>
        {
          <li>1</li>,
          <li>2</li>,
          <li>3</li>,
          <li>4</li>,
          <li>5</li>
        }

      </ul>
    )
  }
}
