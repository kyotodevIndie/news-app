import React from 'react';

import Navigation from '../../components/Navigation/Navigation'

import fire from '../../services/firebase'

export default function UserPage() {
    const user = fire.auth().currentUser;
    
    // -importar o context aq pra pegar a variavel de latest news
    // -barra de navegação vai ter as opçoes de cadastrar nova noticia e cadastrar novo usuario(opcional)
    // -o cadastrar nova noticia é um formulario q vai ser salvo no firebase database e lido junto com o state
    // do latest news
    // -o cadastrar usuario já esta feito no proj do github

    return (
        <>
            {user ? (
                <>
                    <Navigation textButton="Log out" />
                    Email: {user.email}
                </>
              ) : (
                  <h1>you're not Logged</h1>
            )}
              
        </>
        )
      }