import React, { memo } from 'react'
import PageHeader from '../components/page-header/PageHeader'
import './about-styles.css'

const About = () => {
  const items = [
    { title: 'Objetivo', description: 'Aprender/Aprimorar os conhecimentos em React' },
    { title: 'Tecnologias', description: 'Desenvolvimento feito com React, utilizando MirageJs/LocalStorage para manipular os dados MOCK' },
    { title: 'Desenvolvido por', description: 'Raphael Avelar' },
  ]

  return (
    <div>
      <PageHeader name="Tarefas" small="Sobre" />

      {items.map(item => (
        <div key={item.title} style={{ paddingBottom: '2rem' }}>
          <div className="about-item">
            <div className="about-li-circle" />
            <div className="about-li-title">{item.title}</div>
          </div>
          <p className="about-li-description">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default memo(About)
