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
  title: '{greetings}, me chamo {highlight}.', 
  highlight: 'Danilo Cardoso',
  description: 'Um paulistano apaixonado por tecnologia, gastronomia, nerdices e cachorros. Desenvolvedor front-end especializado em Vue, com habilidades em React e disposto a estudar o que for necessário para desenvolver minhas habilidades.',
  action: {
    label: 'Projetos',
    callback: (url: string) => window.open(url, "_self")
  }
}

export interface iSkills {
  title: string;
  text: string;
  topics: string[];
}

export const Skills = [
  {
    title: 'Vue',
    text: '4 anos de experiência, desde a versão 2.5 até a 3.0.',
    topics: [
      'Nuxt',
      'Vuex',
      'Vue Router',
      'Pinia',
      'Vite',
      'Vue CLI',
      'Vue CDN',
      'Vuetify',
      'Bootstrap Vue'
    ]
  },
  {
    title: 'React',
    text: '2 anos de experiência, transpuz o conhecimento de Vue, já que ambos se utilizam de virtual DOM e componentes.',
    topics: [
      'React Router',
      'Styled-components',
      'Custom Hooks',
      'Context',
      'Redux',
    ]
  },
  {
    title: 'Consumo de API`s',
    text: '4 anos de experiência, utilizando diversos métodos.',
    topics: [
      'Axios',
      'Fetch',
      'Apollo Client(GraphQl)',
      'AJAX',
    ]
  },
  {
    title: 'Sass',
    text: '4 anos de experiência, particularmente gosto muito de escrever CSS e o Sass me traz muito mais recursos para isso.',
    topics: [
      'Variáveis',
      'Mixins',
      'Functions',
      'Maps',
    ]
  },
  {
    title: 'Git',
    text: '4 anos de experiência, costumo utilizar o Git Flow.',
    topics: [
      'commits semânticos',
      'pull requests',
      'code review',
    ]
  },
  {
    title: 'Conhecimentos Diversos',
    text: 'Estou aprimorando alguns desses tópicos e por isso não foram destacados.',
    topics: [
      'Cypress',
      'Storybook',
      'Docker',
      'Python',
    ]
  }
]
