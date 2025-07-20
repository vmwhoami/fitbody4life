export default {
  nav: {
    home: 'Home',
    login: 'Login',
    signup: 'Sign Up',
    profile: 'Your Profile',
    settings: 'Settings',
    signout: 'Sign Out',
  },

  whyClientsTrust: {
   trustTitle: "Why Clients Trust Me",
    trustItems: [
      "Certified Personal Trainer – YMCA Level 3 (UK)",
      "10+ Years International Dance & Fitness Experience",
      "Trusted by Clients in Moldova, Romania, China, and the UK"
    ],
  },
  certificates: {
    certTitle: "Professional Certifications",
    certificates: [
      {
        alt: "YMCA Level 3 Certificate",
        overlayTitle: "YMCA Level 3 Diploma",
        overlaySubtitle: "YMCA Awards, United Kingdom",
        status: "Issued: August 2019 | Valid: Lifetime",
        description: "Advanced qualification demonstrating expertise in personal training principles, client assessment, and program design."
      },
      {
        alt: "Nutrition Specialist Certificate",
        overlayTitle: "Component Completion",
        overlaySubtitle: "YMCA Diploma Requirements",
        status: "Issued: August 2019 | Valid: Lifetime",
        description: "Detailed breakdown of completed components for the YMCA Level 3 Diploma in Personal Training."
      }
    ],
    modalLabels: {
      issuedBy: "Issued by:",
      date: "Date:",
      id: "ID:",
      qualificationNumber: "Qualification Number:",
      issuingExecutive: "Issuing Executive:",
      regulatedBy: "Regulated by:",
      certificateNumber: "Certificate Number",
      validationNumber: "Validation Number",
      learnerNumber: "Learner Number",
      componentsTitle: "Completed Components {totalCredits} credits total):",
      tableHeaders: {
        title: "Title",
        level: "Level",
        credits: "Credits",
        unitCode: "Unit Code"
      },
      closeButton: "Close Certificate"
    },
    certificatesData: [
      {
        title: "YMCA Level 3 Diploma in Personal Training (Gym-Based Exercise)",
        issuer: "Health and Fitness Education Ltd",
        date: "August 13, 2019",
        description: "This qualification demonstrates comprehensive knowledge and expertise in personal training principles, client assessment, and gym-based exercise program design. Awarded by Health and Fitness Education Ltd under Central YMCA, this Ofqual-regulated certification meets rigorous UK standards for personal trainers.",
        executive: "Rosi Prescott, Group Chief Executive, Central YMCA",
        qualificationNumber: "601/0195/7",
        certificateNumber: "425001",
        validationNumber: "00233175-01-KN3R",
        learnerNumber: "452240"
      },
      {
        title: "Certificate of Component Completion",
        issuer: "Health and Fitness Education Ltd",
        date: "August 13, 2019",
        description: "This certificate confirms completion of all required components for the YMCA Level 3 Diploma in Personal Training, covering exercise principles, anatomy, physiology, nutrition, and practical training delivery. The comprehensive program includes both Level 2 and Level 3 components totaling 52 credits.",
        executive: "Rosi Prescott, Group Chief Executive, Central YMCA",
        certificateNumber: "425001",
        validationNumber: "00233175-01-KN3R",
        learnerNumber: "452240",
        components: [
          { title: "Principles of Exercise, Fitness and Health" },
          { title: "Anatomy and Physiology for Exercise" },
          { title: "Planning Gym-Based Exercise" },
          { title: "Instructing Gym-Based Exercise" },
          { title: "Know How To Support Clients Who Take Part in Exercise and Physical Activity" },
          { title: "Health, Safety and Welfare in a Fitness Environment" },
          { title: "Anatomy and Physiology for Exercise and Health" },
          { title: "Programming Personal Training with Clients" },
          { title: "Applying the Principles of Nutrition to a Physical Activity Programme" },
          { title: "Delivering Personal Training Sessions" }
        ],
        totalCredits: 52
      }
    ]
  },
  login: {
    title: 'Welcome Back',
    subtitle: 'Please sign in to continue to your account.',
    emailLabel: 'Email address',
    emailPlaceholder: "you{'@'}example.com",
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot your password?',
    signIn: 'Sign in',
    noAccount: 'Don’t have an account?',
    signUp: 'Sign up',
  },
  register: {
    title: 'Create an Account',
    subtitle: 'Sign up to get started.',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: "you{'@'}example.com",
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    confirmPasswordLabel: 'Confirm Password',
    confirmPasswordPlaceholder: '••••••••',
    termsPrefix: 'I agree to the',
    termsLink: 'Terms and Conditions',
    submit: 'Sign up',
    alreadyHave: 'Already have an account?',
    loginLink: 'Log in',
    passwordMismatch: 'Passwords do not match!',
    success: 'Registration successful! You can now log in.',
  },
  hero: {
    heading: 'Hey! I’M OLYA',
    quote: '“If it doesn’t challenge you, it won’t change you.”',
    description:
      '— a dance-inspired fitness trainer, mom to a 7-year-old, and proud wife. As a busy mother and wife, I know firsthand how hard it is to carve out “me time”—which is exactly why I tailor every session to fit your life and goals.',
    buttonBookFreeSession: 'Book a free session',
    readyForChage: 'Ready for Change?',
    selectTimezone: 'Select your preferred time zone',
    altText: 'Olya Melnic portrait',
  },
  about: {
    title: 'About Me',
    intro: 'Hi, I’m',
    roles: 'Certified Fitness Trainer | Dance Enthusiast | Mother & Wife',
    journey1:
      'From the vibrant dance floors of Moldova and Romania to the dynamic fitness scenes of China and the UK, my journey has been anything but ordinary. Starting my dance career at 15, I quickly transitioned from student to instructor, leading groups and performing in renowned nightclubs across Europe and Asia.',
    journey2:
      'Relocating to Shanghai opened doors to freelance opportunities, including performances at car shows and collaborations with Chinese singers. Eventually, my path led me to Brighton and Hove in England, where I deepened my expertise by becoming a certified fitness trainer.',
    journey3:
      "Now back in Moldova, I'm a proud mother to a spirited 7-year-old boy and a dedicated wife. Balancing family life with my passion for fitness, I currently serve as a fitness instructor at Arena Chișinău.",
    whyTrainTitle: 'Why Train With Me?',
    personalized: {
      title: 'Personalized Sessions:',
      desc: 'Tailored workouts that align with your goals and lifestyle.',
    },
    holistic: {
      title: 'Holistic Approach:',
      desc: 'Combining dance, strength training, and flexibility exercises for comprehensive fitness.',
    },
    flexible: {
      title: 'Flexible Scheduling:',
      desc: 'Sessions designed to fit seamlessly into your busy life.',
    },
    connectTitle: 'Let’s Connect',
    connectDesc:
      "Your first session is on me—an opportunity for us to get acquainted, discuss your goals, and ensure we're the perfect fit.",
    bookButton: 'Book Your Free Session',
  },
}
