import React from 'react'
import PageHeader from '../template/PageHeader'

export default (props) => {

  return (
    <div>
      <PageHeader name="Tarefas" small="Sobre" />

      <h3>Objetivo</h3>
      <p>Aprender/Aprimorar os conhecimentos em React</p>
      <h3>Tecnologias</h3>
      <p>Desenvolvimento feito com React, utilizando a MirageJs/LocalStorage para manipular os dados MOCK</p>
      <h3>Desenvolvido por:</h3>
      <p>Raphael Avelar - FrontEnd</p>
    </div>
  )
}
