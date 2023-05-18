// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Trivia App Game',
		category: 'Mobile Application',
		date: 'Jul 26, 2021',
		img: require('@/assets/images/mobile-project-1.jpg'),
		projectImages: [
			{
				id: 1,
				title: 'Trivia App Menu',
				img: require('@/assets/images/eywa_project/menu_eywa.png'),
			},
			{
				id: 2,
				title: 'Trivia App Trivia',
				img: require('@/assets/images/eywa_project/trivia_eywa.png'),
			},
			{
				id: 3,
				title: 'Trivia App ScoreBoard',
				img: require('@/assets/images/eywa_project/score_eywa.png'),
			},
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: "Centre d'Estudis Politecnics",
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI/UX Design & Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://politecnics.barcelona',
				},
				{
					id: 4,
					title: 'Phone',
					details: '93 302 02 24',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails: 'The project aims to develop interactive games that educate users about cinema, covering topics such as genres, actors, movies, and directors. It is a collaboration between CEPSoft Consulting and the filmoteca Citizen Kane to create informative and entertaining experiences for improving cinephile knowledge.			',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Kotlin', 'XML', 'JSON', 'Fragments', 'Binding', 'GSON', 'Bcrypt', 'LottieFiles', 'NavGraph', 'CardView', 'MotionLayout'],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					"id": 1,
					"details": "CEPSoft Consulting is a young company based in Barcelona, specializing in developing custom cross-platform solutions. They have a team of 25 IT professionals dedicated to delivering innovative and tailored projects to their clients."
				},
				{
					"id": 2,
					"details": "Filmoteca Citizen Kane is an institution focused on acquiring and preserving various types of film material. They want their future members to have a basic knowledge of cinema and aim to provide an engaging and educational experience using the latest technologies available."
				},
				{
					"id": 3,
					"details": "Filmoteca Citizen Kane faced the challenge of having prospective members with limited knowledge of cinema. They reached out to CEPSoft Consulting and collaborated with the students of DAM (Multimedia Application Development) to develop interactive games that would allow their future clients to learn about various aspects of cinema, including genres, actors, movies, and directors."
				},
				{
					"id": 4,
					"details": "CEPSoft Consulting, with its commitment to creating quality products that add value for their clients, embraced the request from Filmoteca Citizen Kane. The project involved creating an engaging game experience called 'Test Your Cinema Knowledge,' where members can test their knowledge through interactive quizzes."
				},
				{
					"id": 5,
					"details": "Our challenge was to create an Android application with different difficulty levels, timed questions, and personalized results based on the player's performance and chosen genre. The game aims to be visually appealing and user-friendly, supporting multiple languages."
				},
				{
					"id": 6,
					"details": "Challenge 2: 'Freaky' Quiz Game - A desktop application for managing the quiz questions, including the ability to add, modify, and delete questions. The goal is to maintain consistency in question formats across different mini-games and ensure aesthetically pleasing presentation of questions and answers."
				}
			],
			socialSharingsHeading: 'Take a look at our code!',
			socialSharings: [
				{
					id: 1,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/raullendines/eywa_android',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				}
			],
		},
	},

	{
		id: 2,
		title: 'Prueba 2',
		category: 'Mobile Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
		date: 'Jul 26, 2023',
		projectImages: [
			{
				id: 1,
				title: 'Trivia App Menu',
				img: require('@/assets/images/eywa_project/menu_eywa.png'),
			},
			{
				id: 2,
				title: 'Trivia App Trivia',
				img: require('@/assets/images/eywa_project/trivia_eywa.png'),
			},
			{
				id: 3,
				title: 'Trivia App ScoreBoard',
				img: require('@/assets/images/eywa_project/score_eywa.png'),
			},
		],
		projectInfo: {
			clientHeading: 'About Client',
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: "Centre d'Estudis Politecnics",
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI/UX Design & Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://politecnics.barcelona',
				},
				{
					id: 4,
					title: 'Phone',
					details: '93 302 02 24',
				},
			],
			objectivesHeading: 'Objective',
			objectivesDetails: 'The project aims to develop interactive games that educate users about cinema, covering topics such as genres, actors, movies, and directors. It is a collaboration between CEPSoft Consulting and the filmoteca Citizen Kane to create informative and entertaining experiences for improving cinephile knowledge.			',
			technologies: [
				{
					title: 'Tools & Technologies',
					techs: ['Kotlin', 'XML', 'JSON', 'Fragments', 'Binding', 'GSON', 'Bcrypt', 'LottieFiles', 'NavGraph', 'CardView', 'MotionLayout'],
				},
			],
			projectDetailsHeading: 'Challenge',
			projectDetails: [
				{
					"id": 1,
					"details": "CEPSoft Consulting is a young company based in Barcelona, specializing in developing custom cross-platform solutions. They have a team of 25 IT professionals dedicated to delivering innovative and tailored projects to their clients."
				},
				{
					"id": 2,
					"details": "Filmoteca Citizen Kane is an institution focused on acquiring and preserving various types of film material. They want their future members to have a basic knowledge of cinema and aim to provide an engaging and educational experience using the latest technologies available."
				},
				{
					"id": 3,
					"details": "Filmoteca Citizen Kane faced the challenge of having prospective members with limited knowledge of cinema. They reached out to CEPSoft Consulting and collaborated with the students of DAM (Multimedia Application Development) to develop interactive games that would allow their future clients to learn about various aspects of cinema, including genres, actors, movies, and directors."
				},
				{
					"id": 4,
					"details": "CEPSoft Consulting, with its commitment to creating quality products that add value for their clients, embraced the request from Filmoteca Citizen Kane. The project involved creating an engaging game experience called 'Test Your Cinema Knowledge,' where members can test their knowledge through interactive quizzes."
				},
				{
					"id": 5,
					"details": "Our challenge was to create an Android application with different difficulty levels, timed questions, and personalized results based on the player's performance and chosen genre. The game aims to be visually appealing and user-friendly, supporting multiple languages."
				},
				{
					"id": 6,
					"details": "Challenge 2: 'Freaky' Quiz Game - A desktop application for managing the quiz questions, including the ability to add, modify, and delete questions. The goal is to maintain consistency in question formats across different mini-games and ensure aesthetically pleasing presentation of questions and answers."
				}
			],
			socialSharingsHeading: 'Take a look at our code!',
			socialSharings: [
				{
					id: 1,
					name: 'Github',
					icon: 'github',
					url: 'https://github.com/raullendines/eywa_android',
				},
			],
		},
		relatedProject: {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				}
			],
		},
	},
	{
		id: 3,
		title: 'Travel App',
		category: 'Mobile Application',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Web Server',
		category: 'Desktop Application',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Client-Server App',
		category: 'Mobile & Desktop Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;

