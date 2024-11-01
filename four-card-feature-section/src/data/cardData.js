import { supervisor, teamBuilder, karma, calculator } from '../assets/images';

const cardData = [
  {
    border: 'cyan',
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    logo: supervisor,
  },
  {
    border: 'red',
    title: 'Team Builder',
    description:
      'Scans our talent network to create the optimal team for your project',
    logo: teamBuilder,
  },
  {
    border: 'orange',
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    logo: karma,
  },
  {
    border: 'blue',
    title: 'Calculator',
    description:
      'Uses data from past projects to provide better delivery estimates',
    logo: calculator,
  },
];

export default cardData;
