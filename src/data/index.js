import NetflixBanner from '../images/netflix-banner-ad.webp';
import PrimeBanner from '../images/prime-banner-ad.webp';
import DisneyBanner from '../images/disney-banner-ad.webp';
import HBOBanner from '../images/hbo-banner-ad.webp';
import ParamountBanner from '../images/paramount-banner-ad.webp';
import TmdbBanner from '../images/tmdb-banner-ad.webp';
import TelecineBanner from '../images/telecine-banner-ad.webp';

export const ZERO = 0;
export const EXCLUDE_LINK_INDEX = 3;
export const EXCLUDE_LINK_INDEX_MOVIES = 1;
export const AMOUNT_OF_MENU_LINKS = 6;
export const AMOUNT_OF_ADS = 6;
export const TMDB_API_KEY = 'db9c402babc1fd076e9e70dc34460d2a';

export const ads = [
  {
    copy: 'TMDB | Milhões de Filmes, Séries e Pessoas para Descobrir',
    bgImage: TmdbBanner,
    freeTrial: 'no',
    adLink: 'https://www.themoviedb.org/',
  },
  {
    copy: 'ASSINE NETFLIX | FILMES, SERIES, E MUITO MAIS, SEM LIMITES',
    bgImage: NetflixBanner,
    freeTrial: 'no',
    adLink: 'https://www.netflix.com/',
  },
  {
    copy: 'ASSINE PRIME VIDEO | TESTE 30 DIAS GRÁTIS!',
    bgImage: PrimeBanner,
    freeTrial: 'no',
    adLink: 'https://www.primevideo.com/',
  },
  {
    copy: 'ASSINE HBO | O MELHOR DO ENTRETENIMENTO',
    bgImage: HBOBanner,
    freeTrial: 'no',
    adLink: 'https://www.hbomax.com/',
  },
  {
    copy: 'ASSINE DISNEY | DESCUBRA UMA NOVA HISTÓRIA TODOS OS DIAS',
    bgImage: DisneyBanner,
    freeTrial: 'no',
    adLink: 'https://www.disneyplus.com/',
  },
  {
    copy: 'ASSINE PARAMOUNT | MILHARES DE HORAS DAS MELHORES HISTÓRIAS',
    bgImage: ParamountBanner,
    freeTrial: 'no',
    adLink: 'https://www.paramountplus.com/',
  },
  {
    copy: 'ASSINE TELECINE | O MELHOR DO STREAMING TA AQUI',
    bgImage: TelecineBanner,
    freeTrial: 'no',
    adLink: 'https://www.telecine.com/',
  },
];
