export interface iNavLinks {
  icon: string;
  alt: string;
  link: string;
}

export const NavLinks: iNavLinks[] = [
  {
    icon: '/icon/icon-github.svg',
    alt: 'github logo',
    link: '#github'
  },
  {
    icon: '/icon/icon-linkedin.svg',
    alt: 'linkedin logo',
    link: '#linkedin'
  },
]

export interface iPresentation {
  logo: string;
  title: string;
  description: string;
  highlight: string;
  action: {
    label: string;
    action: () => void;
  }
}

export const Presentation = {
  logo: 'DaniloCardoso',
  title: '{greetings}, é um prazer te receber aqui! Me chamo {highlight}.', 
  highlight: 'Danilo Cardoso',
  description: 'Um paulistano apaixonado por tecnologia, gastronomia, nerdices e cachorros. Desenvolvedor front-end especializado em Vue, com habilidades em React e disposto a estudar o que for necessário para desenvolver minhas habilidades.',
  action: {
    label: 'Contact me',
    callback: () => console.log('clicked')
  }
}

export const Skills = [
  {
    titlte: 'Front-end',
    text: 'React, Vue, Angular'
  }
]
