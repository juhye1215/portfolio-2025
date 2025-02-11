import { media } from "./mediaImport";

const portfolioData = () => [
    {
        id: 0,
        layout: 'web',
        category: 'web',
        title: 'UX Career',
        type: "Pearson UX Career Official Site",
        date: "2022",
        link: 'https://ux.pearson.com',
        video: media.UXCareer.video,
        mockup: media.UXCareer.mockup,
        image: media.UXCareer.images,
        description: 'I developed Pearson UX career site, a dedicated platform for recruiting top- tier talent in user experience design.The site showcases available positions and providing detailed role descriptions and requirements. This platform effectively communicates Pearson commitment to enhancing user experiences and attracting skilled professionals to join their team.',
        code: `
function JobDetail() {
    let navigate = useNavigate();
    let {Id } = useParams();
    let [title, useTitle]=useState(Nav);
    const [Detail, setDetail] = useState();
    const JobDescription = () => {
        fetch('/api/recruitingCEJobRequisitionDetails?expand=all&onlyData=true&finder=ById;Id=%22'
        + Id + '%22,siteNumber=CX_2')
        .then((response) => response.json())
        .then((json) => {
                setDetail(json);
        });
    };

    useEffect( () => {
        JobDescription();
    }, [] );
        `,
        css: `
    .detail-text {
        div {
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media screen and (max-width: $tablet) {
            display: grid;
          }
        }
        span,
        p {
          @include Hind();
          font-weight: 700;
          font-size: 1.125rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
        }
        h1 {
          @include TTCommon();
          font-size: 3.125rem;
          color: $textWhite;
          margin: 0.25rem 0;
          @media screen and (max-width: $mobile) {
            font-size: 2.85rem;
            line-height: 1;
          }
        }
        .secondary-btn {
          @include secondary-btn();
        }
      }
        `
    },

    {
        id: 12,
        layout: 'web',
        category: 'web',
        title: ' Virtual School Career',
        type: "Career dashboard for virtual school student",
        date: "2024",
        link: 'https://virtual-schools.pearsonct.design',
        video: media.virtualSchool.video,
        mockup: media.virtualSchool.mockup,
        image: media.virtualSchool.images,
        description: 'I developed a prototype focused on guiding students through career exploration and job placement, drawing inspiration from Pearsons Virtual Schools platform. This prototype offers a comprehensive suite of tools and resources designed to assist students in identifying potential career paths and securing employment opportunities',
        code: `
import React, {useState, useEffect} from "react";
import OpenSeadragon from "openseadragon";
import {useDispatch, useSelector} from "react-redux";

export default function Map(props) {
    const dispatch = useDispatch();
    const canType = useSelector(state => state.chat.canType);
    const careers = useSelector(state => state.careers.data);

    function openModal(type) {
        dispatch(setLoading(true))
        prepareModalData(dispatch, type, canType, careers,) 
        props.openModal(type)
    }

    useEffect(() => {
        dispatch(fetchCareers());
    }, [dispatch]);

    const overlays = getOverlays()
    useEffect(() => {

    let viewer = OpenSeadragon({
        id: 'seadragon-viewer',
        prefixUrl: process.env.PUBLIC_URL + '/images',
        tileSources: process.env.PUBLIC_URL + '/images/MapBase-nobuildings-jpg.dzi',
        showFullPageControl : false,
        autoHideControls : false,
        navigationControlAnchor: OpenSeadragon.ControlAnchor.BOTTOM_LEFT,
        homeFillsViewer: true,
        constrainDuringPan: true,
        visibilityRatio: 1,
        minZoomLevel: 1,
        defaultZoomLevel: 1.1,
        gestureSettingsMouse: {
            clickToZoom: false,
            dblClickToZoom: true
          },
          zoomInButton: "zoomIn",
          zoomOutButton: "zoomOut"
      });
        viewer.addHandler('open', () => {
        viewer.viewport.panBy({x:0.02,y:0})
        overlays.forEach(overlay => {

            const getRating = () => {
                if (props.ratings) {
                    let overlayItem = props.ratings.filter(f => f.cluster === overlay.clusterId);
                    if (overlayItem.length > 0) {
                        return overlayItem[0].rating
                    } else {
                        return ""
                    }
                } else {
                    return ''
                }
            }
            var elt = document.createElement("button");
            elt.className = overlay.className;
            elt.id = overlay.id
            elt.setAttribute("data-cluster",overlay.clusterId)
            elt.setAttribute("aria-label",overlay.text)
            if (props.ratings) {elt.setAttribute('data-rating',getRating())}
            if (overlay.img) {elt.innerHTML = '<img src="'+process.env.PUBLIC_URL + '/images/'+overlay.img+'" alt=""/>'}
            viewer.addOverlay({
                element: elt,
                location: new OpenSeadragon.Rect(overlay.x,overlay.y,overlay.width,overlay.height),
                rotationMode: OpenSeadragon.OverlayRotationMode.BOUNDING_BOX
            });
            new OpenSeadragon.MouseTracker({
                element: elt,
                clickHandler: e => openModal({id: overlay.clusterId, title:overlay.text, blurb:overlay.blurb})
            });
        })    `,
        css: `
.seadragon-viewer {
    background-color: var(--color-dark-blue);
}
.map-container {
    position:relative;
    width:100%;
    height:100%;

    .toolbar {
        position:absolute;
        display:flex;
        flex-direction:column-reverse;
        gap:12px;

        button {
            width:48px;
            height:48px;
            padding:12px;
            color:var(--color-white);
            background-color: rgba(254, 254, 254, 0.24);
            border-radius:50%;
            opacity: 0.8;

            &:hover, &:focus {
                background-color: rgba(254, 254, 254, 0.8);
                color:var(--text-default);
            }
        }
    }
}
        
        `
    },
    {
        id: 2,
        layout: 'web',
        category: 'web',
        title: 'Pearson Recruiter bundles ',
        type: "dashboard for recruiter and candidates",
        date: "2024",
        link: '',
        video: media.Recruiter.video,
        mockup: media.Recruiter.mockup,
        image: media.Recruiter.images,
        description: 'As part of the company rebranding initiative, I developed and implemented an intuitive dashboard for both recruiters and job applicants. The recruiter dashboard provides real-time insights into candidate applications, allowing recruiters to assess candidates abilities, track the hiring process, and send assessment invitations. Recruiters can invite candidates to take assessments, and applicants can immediately begin their evaluations once they receive the invitation link. Although the recruiter and applicant dashboards are distinct, they are seamlessly connected, ensuring a smooth and efficient workflow between both parties. This dual dashboard system was designed to streamline the recruitment process and enhance the overall hiring experience.',
        code: `
        
const RecruiterDashboard = (props) => {
	const jobList = useSelector((state) => state.users.jobProfiles);
	const navigate = useNavigate();

	//select options
	const showOptions1 = [
		{ value: 'Recruiter screened', label: 'Recruiter screened' },
		{ value: 'Recruiter not screened', label: 'Recruiter not screened' },
	];
	const showOptions2 = [
		{ value: 'Most recent activity', label: 'Most recent activity' },
		{ value: 'Oldest activity', label: 'Oldest activity' },
	];

	return (
		<div className='page-wrapper'>
			<Header fullLogo={'true'} />
			<Sidebar />

			<main className='recruiter-dashboard'>
				<section
					className='title'
					style={{ marginTop: '3.25rem' }}
				>
					<h1>Open job roles</h1>
					<Button
						variant='tertiary'
						text='Create role'
					/>
				</section>
				<section className='select-container'>
					<Select
						label='Show'
						name='show-select1'
						options={showOptions1}
					/>
					<Select
						label='Sorted by'
						name='show-select2'
						options={showOptions2}
					/>
				</section>
				<table>
					<thead>
						<tr>
							<th>Candidates</th>
							<th>In progress</th>
							<th>Not started</th>
						</tr>
					</thead>
					<tbody>
						{jobList?.map((job, index) => (
							<tr key={index}>
								<td
									onClick={() => {
										navigate(/georgia/\${job.id});
									}}
								>
									<p className='job-title'>{job.name}</p>
									<p className='posting-date'>
										Posted {job.applicants.inProgress.lastActivity}
									</p>
								</td>

								<td>
									<p className='bold-text'>{job.applicants.total} total</p>
									<p>{job.applicants.recommended.complete} high role fit
										{job.applicants.recommended.complete > 1 && }
									</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			<StickyFooter />
		</div>
	);
};
export default RecruiterDashboard`,
        css: `
 .recruiter-dashboard {
    section.title {
        display: flex;
        justify-content: space-between;

        h1 {
            color: $brand-monochrome-950;
            font-size: 2.5rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1.2;
        }
    }
    section.select-container {
        display: flex;
        flex-direction: row;
    }

    table {
        width: 100%;
        border-collapse: collapse;

        &.updated {
            width: calc(100% + 4rem);
            margin: 0 -2rem;

            thead {
                th {
                    &:first-child {
                        padding-left: 2rem;
                    }
                    &:last-child{
                        padding-right: 2rem;
                    }
                }
            }
            tbody {
                tr {
                    background-color: $brand_monochrome_50; 
                    
                    &.updated {
                        background-color: $brand_monochrome_0;
                        box-shadow: 0px -25px 16px -20px rgba(0,0,0,0.05),
                        0px 25px 16px -20px rgba(0,0,0,0.05);
        
                        td:first-child {
                            position: relative;
    
                            &:before {
                                content: "";
                                width: 10px;
                                height: 10px;
                                border-radius: 50%;
                                background-color: #A2EFEF;
                                position: absolute;
                                left: 1rem;
                                top: 50%;
                                margin-top: -5px;
                            }
                        }
                        + tr {
                            box-shadow: 0px -25px 16px -20px rgba(0,0,0,0.05),
                        inset 0px 25px 16px -20px rgba(0,0,0,0.05);
                        }
                    }
                }
                td {
                    &:first-child {
                        padding-left: 2rem;
                    }

                    &:last-child {
                        padding-right: 2rem;
                    }
                }
            }
        }

    `

    },
    {
        id: 3,
        layout: 'web',
        category: 'navigation',
        title: 'P+ Navigation ',
        type: "Pearson Plus Site Navigation",
        date: "2023",
        link: '',
        video: media.Pauth.video,
        mockup: media.Pauth.mockup,
        image: media.Pauth.images,
        description: 'As part of the P+ project, I developed a dynamic global navigation system that adapts based on the users authentication status. The navigation renders differently when the user is logged in versus when logged out, providing a tailored experience for each scenario. Additionally, the navigation system was designed with a user-centric approach, allowing for easy integration of images, making the structure both visually appealing and user-friendly.',
        code: `
import { Grid, Icon, Button } from '@mui/material';
import AuthNavData from '../../data/authNav.json';

function AuthNav() {
 return (
	<>
	<Grid item sm={1.5}>
		<div className="logo">
			<Link to={process.env.PUBLIC_URL + '/home'}>
				<img src={logo} alt={logo}/>
			</Link>
		</div>
	</Grid>

	<Grid item sm={9}>
		<div id="first-menu">
			{AuthNavData.MainMenu.map((first, i) => {
				return (
				<div key={i} className="first-item">
					<Link to={\${process.env.PUBLIC_URL + first.firstURL}}>
						{first.mainTitle}{' '}
					<Icon className="arrow-icon">keyboard_arrow_down</Icon>
					</Link>

					<ul className="second-menu">
						{first.category.map((second, i) => {
						return (
						<li key={i} className={second-item \${second.hasSubMenu}}>
						<Link to={\${process.env.PUBLIC_URL + second.secondURL}}>
                             {second.title}
                         </Link>
						<Icon className={arrow-icon \${second.icon}}>
							keyboard_arrow_right
						</Icon>

					<ul className="third-menu">
						{second.subCategory &&
							second.subCategory.map((third, i) => {
						return (
						<li key={i} className={third-item-auth \${third.Image} }>
							<Link to={\${process.env.PUBLIC_URL + third.thirdURL} }>
								<img alt={third.subTitle} className={\${third.Image} }
									src={ process.env.PUBLIC_URL + '/img/' + [third.ImageFile] + '.png'	}/>
							</Link>
                           	})}
			               </div>
			             </Grid>
		                </>
	                    );
                    }   `,
        css: `
#first-menu {
    .first-item {
        ul.third-menu {
            li.third-item-auth {
                padding: calc(#{$space-base}* 1.5) calc(#{$space-base}* 4);
                height: 36.6px;
                line-height: 36.6px;
                > a {
                    display: flex;
                    flex-direction: row;
                    align-content: center;
                    > img {
                        display: none;
                    }
                    .title-box {
                        font-weight: 400;
                        width: 23rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        word-wrap: break-word;

                        h1 {
                            font-size: 1.125rem;
                            font-weight: 400;
                            margin: 0;
                            padding: 0;
                            line-height: 1.3;
                        }
                    }
                }

                &:has(.content-img) {
                    height: 55px;
                    line-height: 55px;
                    padding: calc(#{$space-base}* 1) calc(#{$space-base}* 4) 0 calc(#{$space-base}* 4);

                    > a > img {
                        display: block;
                        width: 34px !important;
                        height: 45px !important;
                        margin-right: 10px !important;
                        border-radius: 2px;
                    }
                } `
    },
    {
        id: 4,
        layout: 'mobile',
        category: 'app',
        title: 'ELL Learning app ',
        type: "English Learning Language mobile app ",
        date: "2023",
        link: '',
        video: media.Nautilus.video,
        image: media.Nautilus.images,
        description: 'I developed an ELL mobile application designed to help users improve their English skills interactively. The React-based app allows users to listen to English questions, solve them, and instantly view their results for immediate feedback. The app was built with cross-platform functionality, ensuring seamless operation on both iOS and Android devices. This project demonstrates my ability to create intuitive and responsive applications that enhance the learning experience for users across multiple operating systems.',
        code: `
  export default function Card({ structure, content, unit }) {
	const navigation = useNavigation();

	const navigateCards = (index) => {
		switch (index) {
			case 0:
				navigation.navigate('Begin', {
					content: content,
					structure: structure[index],
					activity: structure[index].activities,
					index: index,
					unit: unit,
				});
				break;
			case 1:
				navigation.navigate('Review');
				break;
			case 2:
				navigation.navigate('Practice');
				break;
			default:
				break;
		}
	};

	/**format date number to text */
	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		const formattedDate = new Date(dateString).toLocaleDateString(
			'en-US',
			options
		);
		return formattedDate;
	};

	return (
		<>
			<View style={styles.dateContainer}>
				<Text style={[styles.text, { color: '#fff' }]}>Day {content.day}</Text>
				<Text style={styles.text}>
					{' '}
					| {formatDate(new Date(content.date).getTime())}
				</Text>
			</View>

			<Swiper
				style={styles.wrapper}
				showsButtons={false}
				loop={false}
				dotStyle={styles.dot}
				activeDotColor="#F4D97B"
				activeDotStyle={styles.activeDot}
			>
				{structure.map((card, index) => (
					<TouchableOpacity
						key={index}
						style={styles.cardContainer}
						onPress={() => navigateCards(index)}
					>
						<View style={styles.titleContainer}>
							<Image
								source={require('../../assets/icon/tv.png')}
								style={styles.icon}
							/>
							<Text style={styles.cardTitle}>{card.type}</Text>
						</View>

						<View style={styles.subtitleContainer}>
							<Text style={styles.subtitle}>{card.title}</Text>
							<Text style={styles.divider}>|</Text>
							<Text style={styles.subtitle}> {card.description}</Text>
						</View>

						<View style={styles.timePointContainer}>
							<Image
								source={require('../../assets/icon/clock.png')}
								style={styles.icon}
							/>
							<Text style={styles.iconText}>
								{card.averageCompletionTime} min
							</Text>
							<Text style={styles.divider}>|</Text>
							<Image
								source={require('../../assets/icon/star.png')}
								style={styles.icon}
							/>
							<Text style={styles.iconText}>{card.points} points</Text>
						</View>

						<ProgressBar progress={card.progress} />

						<View style={styles.iconContainer}>
							<TouchableOpacity>
								<Image
									source={require('../../assets/icon/headset.png')}
									style={styles.iconBtn}
								/>
							</TouchableOpacity>
							<Text style={styles.dividerBig}>|</Text>
							<TouchableOpacity>
								<Image
									source={require('../../assets/icon/sound.png')}
									style={styles.iconBtn}
								/>
							</TouchableOpacity>
							<Text style={styles.dividerBig}>|</Text>
							<TouchableOpacity>
								<Image
									source={require('../../assets/icon/video.png')}
									style={styles.iconVideo}
								/>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				))}
			</Swiper>
		</>
	);
}       `,
        css: `
import { StyleSheet, Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const nautilusStyle = StyleSheet.create({
	flex: {
		flex: 1,
	},
	row: {
		flexDirection: 'row',
	},
	relative: {
		position: 'relative',
	},
	bgDarkColor: {
		backgroundColor: '#06112E',
	},
	pageHorizontal: {
		paddingHorizontal: 24,
		...Platform.select({
			ios: {},
			android: {},
		}),
	},
	pageVertical: {
		paddingVertical: 56,
	},
	alignSelf: {
		alignSelf: 'center',
	},
}); `

    },
    {
        id: 5,
        layout: 'web',
        category: 'design system',
        title: 'Nemo Design System',
        type: "English as Second Language Design System",
        date: "2024",
        link: 'https://ux.pearson.com/nemo/?path=/docs/using-storybook--docs',
        video: media.Nemo.video,
        mockup: media.Nemo.mockup,
        image: media.Nemo.images,
        description: 'In this project, I developed a comprehensive design system all styled using design tokens. The system is integrated with Storybook, allowing for interactive component development and documentation. Utilizing Chromatic, I implemented automated visual testing to ensure UI consistency and catch potential regressions. The components are built with TypeScript and are designed to be compatible with both React and Angular frameworks. The project also includes automated testing and deployment pipelines, streamlining the development process and ensuring high-quality, maintainable code.',
        code: `
import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { IconName } from '../../../Foundations/iconography/v1/icon.types';
import { SelectableCardSize, SelectableCardToggledEventDetail } from './selectable-card.types';

/**The selectable card is an interactive card that allows users
 to make selections by clicking anywhere within the card.  */
@Component({
  tag: 'n-selectable-card',
  styleUrl: 'selectable-card.css',
})
export class NSelectableCard {
  /** The title of the card */
  @Prop() label: string;
  /** The contents of the card */
  @Prop() description: string;
  /** The icon to show */
  @Prop() iconName: IconName = 'lightbulb';
  /** When true, the checkmark will display*/
  @Prop() isSelected: boolean = false;
  /** The selectable card size */
  @Prop() size: SelectableCardSize = 'md';
  /** When the selectable card is clicked, this is the event that triggers checked state changes */
  @Event() selectableCardToggled: EventEmitter<SelectableCardToggledEventDetail>;

  private toggleChecked = e => {
    this.isSelected = !this.isSelected;
    this.selectableCardToggled.emit({ isSelected: this.isSelected, event: e });
  };

  render() {
    return (
      <div
        class={{
          ['n-selectable-card']: true,
          [n-selectable-card-\${this.size}]: true,
          ['n-selectable-card-selected']: this.isSelected,
        }}
        tabIndex={0}
        onClick={this.toggleChecked}
      >
        <div
          class={{ ['n-selectable-card-header']: true, }}
          role="checkbox"
          aria-label="Select product"
          aria-checked={this.isSelected ? 'true' : 'false'}
        >
          <div class={{ ['n-selectable-card-header-icon']: true}}>
            <n-icon name={this.iconName}></n-icon>
          </div>

          <button class={{ ['n-selectable-card-check']: true }}>
            {this.isSelected && <n-icon name="check-circle-fill"></n-icon>}
          </button>
        </div>

        <div class={{['n-selectable-card-body']: true}}>
          <n-typography variant="b2-strong" no-margin tag="h5">
            {this.label}
          </n-typography>

          <n-typography variant="c1" no-margin tag="p">
            {this.description}
          </n-typography>
        </div>
      </div>
    );
  }
}    `,
        css: `
.n-selectable-card {
  display: flex;
  flex-direction: column;
  max-width: 416px;
  align-items: flex-start;
  gap: var(--space-vertical-margin-lg);
  border-radius: var(--radius-container-xs);
  border-style: solid;
  border-width: var(--stroke-interactive-default);
  border-color: var(--color-stroke-container-secondary);
  background: var(--color-fill-container-primary);
  box-shadow: var(--elevation-x-none) var(--elevation-y-sm) var(--elevation-blur-xs) 0 var(--elevation-default);
  cursor: pointer;
}

.n-selectable-card:hover {
  border-color: var(--color-stroke-container-primary-inverse);
}

.n-selectable-card:active {
  border-color: var(--color-stroke-interactive-focus);
}

.n-selectable-card:focus-visible {
  outline-offset: var(--space-inset-padding-interactive-focus);
  outline-color: var(--color-stroke-interactive-focus);
  outline-width: var(--stroke-interactive-focus);
  outline-style: solid;
}   `
    },
    {
        id: 1,
        layout: 'web',
        category: 'design system',
        title: 'Pearson Design system',
        type: "style dictionary with the storybook",
        date: "2022",
        link: '',
        video: media.StyleDictionary.video,
        mockup: media.StyleDictionary.mockup,
        image: media.StyleDictionary.images,
        description: 'I utilized Style Dictionary to establish a comprehensive design system and create reusable components in Storybook. By leveraging Style Dictionary powerful tools, I was able to define design tokens as Css, JavaScript format include colors, typography, and spacing, ensuring consistency across all components. Storybook served as a platform to develop and showcase these components interactively, enabling efficient collaboration and seamless integration with development workflows.',
        code: `
const Accordion = (props) => {
    const [accoedionOpen, setAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setAccordionOpen(!accoedionOpen);
    }
    return(
        <div className={accordion \${accoedionOpen ? 'open' : ''}}>
            <h4 role="button" onClick={toggleAccordion}>
                <svg focusable="false" className="icon-18" aria-hidden="true">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#next-18"></use>
                </svg>
                {props.data.title}
            </h4>
            <div className="accordion-content" dangerouslySetInnerHTML={{ __html: props.data.content }} />
        </div>
    )
}
export default Accordion`,
        css: `
:root {
    /* Base --*/
    --base-font-family: var(--font-family-primary) , sans-serif;
    --base-font-size: var(--font-size-base);
    --base-font-weight: var(--font-weight-regular);
    --base-font-color: var(--color-base-ink-dark-900-primary);
    --body-background-color: var(--color-neutral-100);
    --base-v-spacing-unit: var(--spacing-vertical);
    --base-h-spacing-unit: var(--spacing-vertical);

    /* Typography -*/
    --h1-font-size: var(--font-size-5-xl);
    --h2-font-size: var(--font-size-4-xl);
    --h3-font-size: var(--font-size-3-xl);
    --font-color-primary:var(--color-primary-800);
    --font-color-secondary:var(--color-base-ink-dark-700-secondary);

    /* Header ---*/
    --header-background-color: var(--color-primary-900);
    --header-font-color: var(--color-base-ink-light-900-primary);

    /* Navigation --*/
    --nav-icon-size:var( --font-size-2-xl);
    --nav-border-radius:var(--size-border-radius-small);
    --nav-background-color: var(--color-primary-900);
        `
    },
    {
        id: 6,
        layout: 'mobile',
        category: 'app',
        title: 'P+ mobile app',
        type: "App develop with ios & android",
        date: "2024",
        link: 'https://www.pearson.com/en-us/pearsonplus/mobile-app.html',
        video: media.Pplus.video,
        image: media.Pplus.images,
        description: 'I developed the Pearson+ mobile application prototype using React Native, enabling seamless functionality on both iOS and Android platforms. The app provides an enhanced user experience for accessing educational content, offering features such as interactive learning tools, offline access, and personalized recommendations.',
        code: `
        export default function AuthAccount() {

            const navigation = useNavigation();
            const handleAccountOption = (currentIndex) => {
                const selectedOption = AccountOptionData[currentIndex];
                const { title } = selectedOption;
                const subListData = selectedOption.subList[0];
                navigation.navigate('AuthAccountDetail', { title, subListData });
            };
            return (
                <SafeAreaView style={[psoStyle.bgColor, psoStyle.flex]}>
                    <ScreenTitle title="Account" />
        
                    <View style={styles.profileBanner}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                source={AccountOptionData[0].subList[0].profile}
                                style={styles.profileImage}
                            />
                            <View style={styles.nameContainer}>
                                <Text style={styles.name}>
                                    {AccountOptionData[0].subList[0].list2}
                                </Text>
                                <Text style={styles.email}>
                                    {AccountOptionData[0].subList[0].list1}
                                </Text>
                            </View>
                        </View>
                    </View>
        
                    {AccountOptionData.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAccountOption(index)}
                            style={styles.optionList}
                        >
                            <Text style={styles.optionTitle}>{option.title}</Text>
                            <Entypo
                                name="chevron-right"
                                size={18}
                                color="white"
                            />
                        </TouchableOpacity>
                    ))}
        
                    <SecondaryButton
                        buttonText="Sign out"
                        route="Main"
                        style={{ marginHorizontal: 125, marginTop: 32 }}
                    />
                </SafeAreaView>
            );
        } `,
        css: `
                
        import { StyleSheet, Dimensions, Platform } from 'react-native';
        
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;
        
        export const psoStyle = StyleSheet.create({
            flex: {
                flex: 1,
            },
            bgColor: {
                backgroundColor: '#05112A',
            },
            pageLayout: {
                paddingHorizontal: 16,
                ...Platform.select({
                    ios: {
                        paddingVertical: 30,
                    },
                    android: {
                        paddingVertical: 20,
                    },
                }),
            },
       sectionBody: {
		...Platform.select({
			ios: {
				fontFamily: 'SFpro-400',
			},
			android: {
				fontFamily: 'Hind-400',
			},
		}),
                `
    },
    {
        id: 7,
        layout: 'tablet',
        category: 'app',
        title: 'eReader Textbook App ',
        type: "P+ Tablet App Navigation Development",
        date: "2024",
        link: '',
        video: media.eReader.video,
        image: media.eReader.images,
        description: 'The application leverages the larger screen size of tablets, offering a layout that maximizes usability and functionality. This is developed using React Native, the app supports both iOS and Android tablets, ensuring consistency and performance across platforms. Designed specifically to enhance user navigation. The app focuses on providing a seamless and intuitive navigation experience tailored for tablet users.',
        code: `
export default function ReadingView() {
	/**slide effect */
	const isDrawerOpen = useSelector((state) => state.drawer.isDrawerOpen);
	const [slideAnim] = useState(new Animated.Value(0));
	useEffect(() => {
		Animated.timing(slideAnim, {
			toValue: isDrawerOpen ? 1 : 0,
			duration: 300,
			easing: Easing.inOut,
			useNativeDriver: false,
		}).start();
	}, [isDrawerOpen]);

	const drawerTranslateX = slideAnim.interpolate({
		inputRange: [0, 1],
		outputRange: [0, 0],
	});

	return (
		<SafeAreaView style={styles.container}>
			<Animated.View
				style={{
					flex: 1,
					flexDirection: 'row',
					transform: [{ translateX: drawerTranslateX }],
				}}
			>
				<WebView
					source={{
						uri: https://books-api.nyc3.digitaloceanspaces.com/
                        65b147050de5eb0d0fe4e468/OPS/xhtml/05662e00-7458-11ed-803f-83e4556e09a5.xhtml,
					}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					startInLoadingState={true}
					scalesPageToFit={true}
					originWhitelist={['*']}
				/>
			</Animated.View>
		</SafeAreaView>
	);
}        `,
        css: `
export const baseStyle = {
	fontSize: 16,
	color: 'black',
	backgroundColor: '#F7F9FD',
	paddingTop: 32,
	paddingHorizontal: 20,
};

export const tagsStyles = {
	p: {
		fontFamily: 'TTCommons-400',
		fontSize: 18,
		color: '#020917',
		lineHeight: 32,
		letterSpacing: 0.24,
		margin: 0,
		padding: 0,
	}, `
    },
    {
        id: 8,
        layout: 'web',
        category: 'web',
        title: 'Pearson E-commerce Checkout ',
        type: "Bundle package flow ",
        date: "2024",
        link: 'https://www.pearson.com/en-us/higher-education.html',
        video: media.Mlm.video,
        mockup: media.Mlm.mockup,
        image: media.Mlm.images,
        description: 'Developed a prototype of an intuitive and efficient checkout flow for educational bundles, specifically tailored for web users. This project aimed to enhance the user experience and drive conversions for Pearson e-commerce platform. By leveraging React, we achieved a cross-platform solution that meets the demands of modern learners',
        code: `
 export default function ISBNSearch() {
   useEffect(() => {
       window.scrollTo(0, 0)
   }, []);
   return (
    <div className="PCOM">
         <Nav />
        
    <header className="curved">
      <h1 className="title">Showing results </h1>
    </header>
        
  <main className="isbn-search">
      <div className="select-wrapper">
        <CiGrid2H className="grid-icon"/>
            <IoGrid className="grid-icon active"/>
            <Select  defaultValue="20" options={["20", "50", "100"]} />
            <Select defaultValue="Relevance"
            options={["Relevance", "Price (low to hight)", "Price (hight to low)", "A-Z","New to old" ,"Old to new"]} />
        </div>
        <div className="main-wrapper">
            <section className="left-column">
    <Filters />
 </section>
        
<section className="right-column">
    {bookData.filter((book) => book.subject !== "chemistry").map((book, index) => (
        <div key={index} className="book">
            <Link to={\${process.env.PUBLIC_URL}/\${book.subject}}>
                <img src={require(../../assets\${book.bookCover})} alt={book.title}/>
                <div className="book-info">
                    {book.title.includes(",") && (
                    <h3>{book.title.split(",")[0]}</h3>
                    <div className="edition-author">
                    <p>{book.title.split(",")[1]}</p>
                    </div>
                    )}
                </div>
            </Link>
        </div>
    ))}
     </section>
   </div>
 </main>`,
        css: `
	form.input-container {
		position: relative;
		align-self: center;
		input.search-input {
			display: block;
			font-family: "Open Sans", sans-serif;
			width: 100%;
			height: 40px;
			padding: 0.5rem 1.5rem;
			background-color: rgba(254, 254, 254, 0.35);
			box-shadow: unset;
			border: 1px solid #dfe1e1;
			border-radius: 100px;
			outline-width: 0;
			outline-style: solid;
			outline-offset: -1px;

			&:hover {
				background-color: #a19d9d;
			}
			&:active,
			&:focus {
				background-color: #fefefe;
				color: #151515;
				outline-width: 3px;
				outline-color: #4fa8ff;
				outline-offset: -2px;
			}
		}
		::placeholder {
			color: #fefefe !important;
		}

		.search-icon {
			height: 18px;
			right: 12px;
			position: absolute;
			top: 0;
			padding-top: 0.5rem;
			background: transparent;
			border: none;

			img {
				width: 16px;
				height: 16px;
			}
		}
	}
}
        `
    },
    {
        id: 9,
        layout: 'web',
        category: 'navigation',
        title: 'Pearson global navigation ',
        type: "Navigation by country setting",
        date: "2023",
        link: 'https://www.pearson.com/en-us.html',
        video: media.PcomNav.video,
        mockup: media.PcomNav.mockup,
        image: media.PcomNav.images,
        description: 'I developed the global navigation system for Pearson.com, ensuring a dynamic and localized experience for users worldwide. The navigation adapts based on the users selected country, displaying region-specific links, content, and structure. Additionally, the navigation hierarchy is tailored to different user segments, such as higher education, professionals, and K-12 students, ensuring relevant content for each audience.To enhance usability across devices, I implemented a fully responsive design, allowing the navigation to seamlessly adjust based on browser size, ensuring an optimized experience on both desktop and mobile. This project highlights my expertise in dynamic UI rendering, localization strategies, and responsive web development to create a globally scalable navigation solution.',
        code: `
export default function GlobalNav() {
	/**default country */
	const [countrySelectedItem, setCountrySelectedItem] = useState(null);
	const [selectedCountry, setSelectedCountry] = useState({
		name: 'United States',
		flag: <USflag className="flag-icon" />,
	});

	/**when nav item click */
	const [navSelected, setNavSelected] = useState(-1);
	const handleItemClick = (item, index) => {
		setCountrySelectedItem(item);
		setNavSelected(index);
	};

	/**All Pearson button */
	const [allPsoBtnClick, setPsoBtnClick] = useState(false);

	/**Country select */
	const [navItems, setNavItems] = useState(USNavItems);
	const countryMenuClick = (items, country) => {
		setNavItems(items);
		setSelectedCountry({
			name: country,
			flag:
				country === 'United States' ? (
					<USflag className="flag-icon" />
				) : country === 'United Kingdom' ? (
					<UKflag className="flag-icon" />
				) : country === 'Canada' ? (
					<CAflag className="flag-icon" />
				) : null,
		});
		setCountrySelectedItem(null);
	};

	return (
		<>
			<header>
				<div className="global-nav">
					<div className="navbar">
						<ul className="nav-menu">
							{navItems.map((item, i) => (
								<Link
									key={i}
									to={process.env.PUBLIC_URL + item.to}
									className={nav-item \${
										navSelected === i ? 'nav-item-selected' : ''
									}}
									onClick={() => handleItemClick(item, i)}
								>
									<li>{item.name}</li>
								</Link>
							))}
	<CountryDropdown
		trigger={
			<div className="select-location">
				{selectedCountry.flag}
				{selectedCountry.name}
				<ArrowIcon className="arrow-icon" />
			</div>
		}
		menu={[
			<button key="US"
				onClick={() => countryMenuClick(USNavItems, 'United States')}>
			 <Link to={\${process.env.PUBLIC_URL + '/'}}>United States</Link>
			</button>,
			<button key="UK" onClick={() =>
			  countryMenuClick(EnglandNavItems, 'United Kingdom')}>
			<Link to={\${process.env.PUBLIC_URL + '/en-gb'}}>
				United Kingdom</Link>
			</button>,
			<button	key="CA"
				onClick={() => countryMenuClick(CanadaNavItems, 'Canada')}>
				</button>]}/>
			</header>
		</>
	);
}   `,
        css: `
    div.navbar {
        margin: 0 auto;
        width: 1440px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.75rem 2.5rem 0 2.5rem;

        ul.nav-menu {
            display: flex;

            a.nav-item {
                color: #a8abac !important;
                font-family: "Open Sans", sans-serif;
                font-weight: 600;
                text-transform: uppercase;
                font-size: 0.75rem;
                text-align: center;
                margin: 0.25rem 1.875rem 0 1.875rem;
                line-height: 1.3;
                display: flex;
                align-items: center;
                color: inherit;
                cursor: pointer;
                padding-bottom: 18px;

                &:first-child {
                    margin-left: 0;
                }
                &:nth-child(4) {
                    margin-right: 0;
                    &:hover {
                        + .pso-menu-container > .pso-menu {
                            display: block !important;
                        }
                        + .pso-menu-container > .arrow-icon {
                            transform: rotate(180deg);
                        }
                    }
                }
                &:active,
                &:focus {
                    color: #ffffff;
                }
            }
        
        `
    },
    {
        id: 10,
        layout: 'web',
        category: 'marketing',
        title: ' Marketing site in the real estate industry',
        type: "Ulana Ward Village",
        date: "2021",
        link: 'https://www.ulanawardvillage.com',
        video: media.Ulana.video,
        mockup: media.Ulana.mockup,
        image: media.Ulana.images,
        description: 'I developed a real estate marketing website using WordPress, designed to showcase properties with an intuitive and visually appealing interface. The platform provides potential buyers with detailed property listings, high-quality images, virtual tours, and interactive maps to enhance the user experience.To ensure seamless management, I implemented custom WordPress themes and plugins, allowing for easy content updates and property management. The site is fully responsive and SEO-optimized, ensuring high visibility across search engines and smooth functionality on both desktop and mobile devices.',
    },
    {
        id: 11,
        layout: 'web',
        category: 'marketing',
        title: ' Luxury Real Estate Marketing Website',
        type: "The Park",
        date: "2021",
        link: 'https://www.theparkwardvillage.com',
        video: media.Park.video,
        mockup: media.Park.mockup,
        image: media.Park.images,
        description: 'I developed a high-end real estate marketing website using WordPress, designed to showcase premium properties with an elegant and modern user experience. The platform provides potential buyers with stunning property visuals, immersive virtual tours, and detailed descriptions to enhance engagement and drive conversions',
    },

];

export default portfolioData;
