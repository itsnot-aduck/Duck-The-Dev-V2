import GithubIcon from '@/public/social/github.svg'
import LinkedInIcon from '@/public/social/linkedin.svg'
import { BadgeSocialProps } from '@notion-x/src/components/BadgeSocial'

const socials: BadgeSocialProps[] = [
  {
    id: 'github',
    title: 'Github',
    icon: GithubIcon,
    url: 'https://github.com/itsnot-aduck',
    imgClass: 'invert'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/duchoang-hust/'
  },
  // {
  //   id: 'twitter',
  //   title: 'Twitter',
  //   icon: TwitterIcon,
  //   url: 'https://twitter.com/dinhanhthi'
  // },
  // {
  //   id: 'goodreads',
  //   title: 'Goodreads',
  //   icon: GoodreadsIcon,
  //   url: 'https://www.goodreads.com/user/show/19630622-thi-dinh'
  // },
  // {
  //   id: 'stackexchange',
  //   title: 'StackExchange',
  //   icon: SOIcon,
  //   url: 'https://stackexchange.com/users/1344291/anh-thi-dinh'
  // },
  // {
  //   id: 'coursera',
  //   title: 'Coursera',
  //   icon: CouseraIcon,
  //   url: 'https://www.coursera.org/user/47f27dde0ecab9a78e2c93632d78a556'
  // },
  // {
  //   id: 'math2it',
  //   title: 'Math2IT',
  //   icon: Math2ITIcon,
  //   url: 'https://math2it.com'
  // }
]

export default socials
