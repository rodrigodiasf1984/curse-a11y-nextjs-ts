import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import GithubImg from '../assets/github.svg'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image src={LogoImg} width={143} height={39} />

        <nav className={styles.nav}>
          <a href='https://github.com/rodrigodiasf1984'>
            <Image src={GithubImg} width={24} height={24} />
          </a>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          <header>
            <h2>Desenvolendo uma web accessivel</h2>
            <h4>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h4>
          </header>
          <p>
            Acessibilidade se tornou uma tendência no ecossistema tecnológico
            mundial, diversas empresas passaram a adotar critérios de
            desenvolvimento acessível em seus projetos — por uma questão prática
            ou por exigências legais —, no entanto, ainda faltam recursos e
            consciência do que de fato é inclusivo na internet para pessoas com
            deficiências.
          </p>
          <p>
            Para abordar este tema, é preciso ter uma perspectiva cultural sobre
            o assunto, não encará-lo apenas na ótica técnica ou prática.
            Acessibilidade passou a ser vista como um desafio (ou tendência)
            para o ecossistema tech e não como filosofia natural daquilo que
            condiz com os princípios básicos da web: acessível para humanos. Tal
            afirmação está na W3C.
          </p>
          <h3>O que é acessibilidade, afinal?</h3>
        </article>
      </main>
      <footer className={styles.header}>
        <Image src={LogoImg} width={143} height={39} />

        <nav className={styles.nav} aria-label='Rodapé'>
          <a href='https://github.com/rodrigodiasf1984'>Termos de uso</a>
        </nav>
      </footer>
    </>
  )
}
