import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lista from './get.js'
import Interfaz from './post.js'
import XF from './config_usVSpc.js'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header,Navigation,Drawer,Content,Button,IconButton} from 'react-mdl';
import { Card, CardTitle, CardText,CardActions,CardMenu} from 'react-mdl';
import { GoogleLogin } from 'react-google-login-component';
import { FacebookLogin } from 'react-facebook-login-component';

class App extends React.Component {
  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
  }


  render(){
    return (

      <div className="demo-big-content">
        <div>

          <GoogleLogin socialId="828963725968-h31q0lthpf9q1utst98rk8glollmkntc.apps.googleusercontent.com"
            className="google-login"
            scope="profile"
            fetchBasicProfile={false}
            responseHandler={this.responseGoogle}
            buttonText="Login With Google"/>

          <FacebookLogin socialId="190915771521014"
            language="en_US"
            scope="public_profile,email"
            responseHandler={this.responseFacebook}
            xfbml={true}
            fields="id,email,name"
            version="v2.5"
            className="facebook-login"
            buttonText="Login With Facebook"/>

        </div>


      <Layout>
        {/* Barra Principal de la Ventana */}

        {/* Inicio */}
        <Header title="N en línea" scroll>
            <Navigation>
                <a href="#1">Perfil</a>
                <a href="#2">Cuarto de Sesiones</a>
                <a href="#3">Sesiones Pausadas</a>
                <a href="#4">Historial de Sesiones</a>
                <a href="#5">Cerrar Sesión</a>
            </Navigation>
        </Header>
        {/* Fin */}

        {/* Menu de la Ventana */}

        {/* Inicio */}
        <Drawer title="Menú">
            <Navigation>
              <a href="#1">Perfil</a>
              <a href="#2">Cuarto de Sesiones</a>
              <a href="#3">Sesiones Pausadas</a>
              <a href="#4">Historial de Sesiones</a>
              <a href="#5">Cerrar Sesión</a>
            </Navigation>
        </Drawer>
        {/* Fin */}

        {/* Ventana Principal */}
        <Content>

              {/* Tarjeta para Partida vs Pc */}

              {/* Inicio */}
                <Card shadow={0} style={{width: '512px',margin:'20px'}}>

                <CardTitle style={{color: '#fff', height: '176px',
                background: 'url(http://eddywarman.tv/wp-content/uploads/inteligenciaartificial.jpg) center / cover'}}>
                Partida contra Computadora</CardTitle>

                <CardText>
                  Podrás realizar partidas de juego contra la computadora en 3 niveles de
                  dificultad distintos: Fácil, Intermedio y Dificil.
                </CardText>
                <CardActions border>
                  <Button colored>Iniciar Partida</Button>
                  </CardActions>

                </Card>
                {/* Fin */}

                  {/* Tarjeta para Partida vs Usuario */}

                  {/* Inicio */}
                    <Card shadow={0} style={{width: '512px',margin:'20px'}}>

                    <CardTitle style={{color: '#fff', height: '176px',
                    background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                    Partida contra Usuario</CardTitle>

                    <CardText>
                      Podrás realizar partidas de juego contra otros usuarios que se encuentren en linea.
                    </CardText>
                    <CardActions border>
                      <Button colored>Iniciar Partida</Button>
                      </CardActions>

                      </Card>
                      {/* Fin */}

                      {/* Tarjeta para Partida vs Demo */}

                      {/* Inicio */}
                        <Card shadow={0} style={{width: '512px',margin:'20px'}}>

                        <CardTitle style={{color: '#fff', height: '176px',
                        background: 'url(https://cdn.tekcrispy.com/wp-content/uploads/2017/10/Inteligencia-Artificial-1021x580.jpg) center / cover'}}>
                        Partida Automática</CardTitle>

                        <CardText>
                          Podrás realizar partidas de juego automáticas, en las que participarán inteligencias artificiales.
                        </CardText>
                        <CardActions border>
                          <Button colored>Iniciar Partida</Button>
                          </CardActions>

                          </Card>
                          {/* Fin */}

        </Content>
    </Layout>
</div>

    );

  }
}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
