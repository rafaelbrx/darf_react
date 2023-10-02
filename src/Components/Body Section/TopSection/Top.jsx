import React from 'react'
import './Top.css'

import {AiOutlineSearch} from 'react-icons/ai'

const Top = () => {
  return (
    <div className="top">  
      <div className="topDiv Flex">
        <div className="titleText">
          <span className="tittle">Produtividade dos funcionários</span>
          <p>Veja o progresso</p>
        </div>

        <div className="searchInput flex">
          <AiOutlineSearch className="icon" />
          <input type="text" placeholder='Pesquisar...' />
        </div>
      </div>

      <div className="cardsDiv flex">
        <div className="cards">

          <div className="card yellowCard flex">

            <div className="date">
              <span>Ter</span>
              <h3>03</h3>
            </div>

            <div className="percentage">
              <span className="text">Produtividade</span>
              <div className="flex">
                <span className="line"></span>
                <span className="pctg">86%</span>
              </div>
            </div>

            <div className="time">
              <span className="text">Tempo Produtivo</span>
              <h2>5h 12m</h2>
            </div>

            <div className="workTime">
              <span className="text">Tempo no Trabalho</span>
              <h2>5h 45m</h2>
            </div>

          </div>

          <div className="card lightGreenCard flex">

            <div className="date">
              <span>Qui</span>
              <h3>05</h3>
            </div>

            <div className="percentage">
              <span className="text">Produtividade</span>
              <div className="flex">
                <span className="line"></span>
                <span className="pctg">84%</span>
              </div>
            </div>

            <div className="time">
              <span className="text">Tempo Produtivo</span>
              <h2>5h 12m</h2>
            </div>

            <div className="workTime">
              <span className="text">Tempo no Trabalho</span>
              <h2>5h 45m</h2>
            </div>

          </div>

          <div className="card darkGreenCard flex">

            <div className="date">
              <span>Sex</span>
              <h3>05</h3>
            </div>

            <div className="percentage">
              <span className="text">Produtividade</span>
              <div className="flex">
                <span className="line"></span>
                <span className="pctg">0%</span>
              </div>
            </div>

            <div className="time">
              <span className="text">Tempo Produtivo</span>
              <h2>5h 12m</h2>
            </div>

            <div className="workTime">
              <span className="text">Tempo de Trabalho</span>
              <h2>5h 45m</h2>
            </div>

          </div>

        </div>

        <div className="statsDiv">

          <span className="title">Estatísticas de Outubro</span>

          <div className="stat">

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Tarefas Concluídas</span>
                <span className="percentage">40%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Tarefas</span>
                <span className="percentage">80%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Tarefas Futuras</span>
                <span className="percentage">25%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

            <div className="singleStat">
              <div className="statInfo flex">
                <span className="status">Horas Trabalhadas</span>
                <span className="percentage">63%</span>
              </div>

              <div className="line">
                <span className="range"></span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Top