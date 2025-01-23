import UXcareer1 from '../img/work/screenshot/ux-career1.png';
import UXcareer2 from '../img/work/screenshot/ux-career2.png';
import UXvideo from '../img/work/video/ux-pearson.mp4';

import StyleDic1 from '../img/work/screenshot/style-dictionary1.png';
import StyleDic2 from '../img/work/screenshot/style-dictionary2.png';
import StyleDic3 from '../img/work/screenshot/style-dictionary3.png';
import StyleDic4 from '../img/work/screenshot/style-dictionary-token.png';
import StyleDicVideo from '../img/work/video/style-dictionary-video.mp4';

import eReader1 from '../img/work/screenshot/eReader.jpg';
import eReader2 from '../img/work/screenshot/eReader2.jpg';
import eReaderVideo from '../img/work/video/eReader-video.mp4';

const portfolioData = () => [
    {
        id: '0',
        layout: 'web',
        title: 'UX Career',
        type: "Pearson Career Site",
        date: "2022",
        link: 'https://ux.pearson.com',
        video: UXvideo,
        image: [UXcareer1, UXcareer2],
        description: 'I developed Pearson UX career site, a dedicated platform for recruiting top- tier talent in user experience design.The site showcases available positions and providing detailed role descriptions and requirements. This platform effectively communicates Pearson commitment to enhancing user experiences and attracting skilled professionals to join their team',
    },
    {
        id: '1',
        layout: 'web',
        title: 'Design system',
        type: "style dictionary with the storybook",
        date: "2022",
        link: '',
        image: [StyleDic1, StyleDic2, StyleDic3, StyleDic4],
        video: StyleDicVideo,
        description: 'I utilized Style Dictionary to establish a comprehensive design system and create reusable components in Storybook. By leveraging Style Dictionary powerful tools, I was able to define design tokens as Css, JavaScript format include colors, typography, and spacing, ensuring consistency across all components. Storybook served as a platform to develop and showcase these components interactively, enabling efficient collaboration and seamless integration with development workflows.',
    },
    {
        id: '2',
        layout: 'mobile',
        title: 'eReader Tablet App ',
        type: "Tablet App Navigation Development",
        date: "2024",
        link: '',
        description: 'This is the description for portfolio 1.',
        image: [eReader1, eReader2],
        video: eReaderVideo,
    },
];

export default portfolioData;
