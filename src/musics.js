
/**
 * Todas as musicas abaixo utilizadas neste projeto são para fins totalmente academicos,
 * por isso deixo os links para os albuns das musicas do autor.
 * Nao incentivo a pirataria!
 * 
 * Baco Exu do Blues - QVVJFA?: https://open.spotify.com/intl-pt/album/5HE9DhP8b3m3LmShTreEvq?si=AUVLyvyLSZOz3H3XVAdhSQ
 * Baco Exu do Blues - Bluesman: https://open.spotify.com/intl-pt/album/0QMVSKhzT4u2DEd8qdlz4I?si=fx6WoQECRMeq6nazklMmJQ
 * 
 */

//musics
import baco_samba_in_paris from './assets/musics/baco-samba-in-paris.mp3';
import baco_20_ligacoes from './assets/musics/baco-20-ligacoes.mp3';
import baco_girassois_de_vangogh from './assets/musics/baco-girassois-van-gogh.mp3';
import baco_me_dedsculpa_jz from './assets/musics/baco-me-desculpa-jz.mp3';
//covers
import cover_baco_samba_in_paris from './assets/musics/samba-in-paris-cover.png';
import cover_baco_20_ligacoes from './assets/musics/20-ligacoes-cover.png';
import cover_baco_girassois_de_vangogh from './assets/musics/girassois-de-van-gogh-cover.png';
import cover_baco_me_desculpa_jz from './assets/musics/me-desculpa-jz-cover.png';

export const musics = [
  {
    id: 1,
    title: "Samba in Paris",
    artist: 'Baco Exu do Blues, Gloria Groove',
    description: `Drinks, Lingeries, Gucci;
    Mainha ou Mon Chéri;
    Fiz um samba em Paris só pra te ver dançar;
    Drinks, Lingeries, Gucci;
    Mainha ou Mon Chéri;
    Fiz um samba em Paris só pra te ver dançar;
    Tudo você taca o fodas-se, tentam controlar...`,
    url: baco_samba_in_paris,
    cover: cover_baco_samba_in_paris
  },
  {
    id: 2,
    title: "Girassóis de Van Gogh",
    artist: 'Baco Exu do Blues',
    description: `Não quero mais dormir do seu lado;
    Prefiro ficar acordado;
    Guardando seu rosto pra lembrar de você;
    Lembrar de você, lembrar de você, eh-eh;
    Cê tem uma cara de quem vai fuder minha vida...`,
    url: baco_girassois_de_vangogh,
    cover: cover_baco_girassois_de_vangogh
  },
  {
    id: 3,
    title: "20 Ligações",
    artist: 'Baco Exu do Blues',
    description: `
    20 ligações no celular;
    Já não sei se quero te atender;
    Você não me quer, quer me mudar;
    Não sou o melhor;
    Mas amo meu jeito de ser;
    I'm feeling good, baby, a cidade me teme;
    I'm feeling good, baby...`,
    url: baco_20_ligacoes,
    cover: cover_baco_20_ligacoes
  },
  {
    id: 4,
    title: "Me Desculpa Jay Z",
    artist: 'Baco Exu do Blues, 1LUM3',
    description: `Não me ligue, mas a vida tá meio difícil;
    Não sei o que fazer;
    Tá tudo confuso, como meus sonhos eróticos
    com a Beyoncé;
    Me desculpa, Jay-Z, queria ser você;
    Minha vida tá chata, quero enriquecer...`,
    url: baco_me_dedsculpa_jz,
    cover: cover_baco_me_desculpa_jz
  },
  {
    id: 5,
    title: "Violão Acústico",
    artist: 'Mayer Bronkx',
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/The%20Von%20Trapp%20Family%20Choir%20-%20Alge.mp3',
    cover: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img1.jpg'
  },
  {
    id: 6,
    title: "Just Things",
    artist: 'John Cris',
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/Bay%20Street%20Billionaires%20-%20Squadda%20B.mp3',
    cover: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img2.jpg'
  },
  {
    id: 7,
    title: "Maybe Other",
    artist: 'Eva Garden',
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/North%20Oakland%20Extasy%20-%20Squadda%20B.mp3',
    cover: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img4.jpg'
  },
  {
    id: 8,
    title: "It's simple",
    artist: 'Emily C. M.',
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    url: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/One%20Time%20-%20Jeremy%20Black.mp3',
    cover: 'https://storage.googleapis.com/pedagogico/frontend-files/aula-react-referencias-eventos/img5.jpg'
  }
]