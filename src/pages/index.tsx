import Image from 'next/image'
import LogoImg from '../assets/logo.svg'
import GithubImg from '../assets/github.svg'
import styles from '../styles/home.module.css'
import Head from 'next/head'
import * as Dialog from '@radix-ui/react-dialog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolendo uma web accessivel | Blog da Rocketseat</title>
      </Head>
      <header className={styles.header}>
        <Image src={LogoImg} width={143} height={39} alt='Blog da Rocketseat' />

        <nav className={styles.nav}>
          <a
            href='https://github.com/rodrigodiasf1984'
            aria-label='Acessar o github'
          >
            <Image src={GithubImg} width={24} height={24} alt='Github' />
          </a>
        </nav>
      </header>
      <main>
        <article className={styles.content}>
          <header>
            <h1>Desenvolendo uma web accessivel</h1>
            <h2>
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessíveis, mas é preciso olhar para além de tudo isso
            </h2>
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
      <footer className={styles.footer}>
        <Image src={LogoImg} width={143} height={39} alt='Blog da Rocketseat' />

        <nav className={styles.nav} aria-label='Rodapé'>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button type='button'>Termos de uso</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />
              <Dialog.Content className={styles.modal}>
                <Dialog.Title>Termos de uso</Dialog.Title>
                <Dialog.Description>
                  <p>Esses são os termos de uso</p>
                </Dialog.Description>
                <Dialog.Close asChild>
                  <button className={styles.closeModalButton}>fechar</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </footer>
    </>
  )
}
