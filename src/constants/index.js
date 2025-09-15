// index.js
export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "From concept to deployment, I deliver complete web solutions with secure backends, high-performing frontends, and scalable databases—giving your business a future-proof digital foundation.",
    items: [
      {
        title: "Custom APIs & Integrations",
        description:
          "(REST/GraphQL endpoints, Third-party services, Auth systems)",
      },
      {
        title: "Interactive Frontends",
        description:
          "(React, Next.js, Animations, TypeScript, UI/UX best practices)",
      },
      {
        title: "Optimized Databases",
        description:
          "(MongoDB, PostgreSQL, Scalable structures, Query efficiency)",
      },
    ],
  },
  {
    title: "Frontend Engineering",
    description:
      "Your users judge your business in seconds. I craft responsive, pixel-perfect UIs that load fast, feel intuitive, and elevate your brand identity across devices.",
    items: [
      {
        title: "Responsive & Adaptive Design",
        description: "(Mobile-first layouts, Cross-browser support)",
      },
      {
        title: "Seamless User Experience",
        description: "(Accessibility, Animations, Interactive components)",
      },
      {
        title: "Performance Driven",
        description: "(Code splitting, Lighthouse optimization, Lazy loading)",
      },
    ],
  },
  {
    title: "Backend & Infrastructure",
    description:
      "Behind every smooth app is a powerful engine. I build secure, scalable, and maintainable backends that keep your business running 24/7 with zero friction.",
    items: [
      {
        title: "Secure APIs & Microservices",
        description: "(Authentication, Role-based access, Token systems)",
      },
      {
        title: "Data Management",
        description: "(MongoDB, SQL/NoSQL optimization, Efficient queries)",
      },
      {
        title: "Scalable Architecture",
        description:
          "(Cloud-ready setups, Load balancing, Future-proof design)",
      },
    ],
  },
  {
    title: "Design to Code (Figma to Live)",
    description:
      "I bridge the gap between design and development—transforming Figma files into production-ready websites and landing pages that not only look stunning but also convert.",
    items: [
      {
        title: "Pixel-Perfect Conversion",
        description: "(Exact match to designs, Brand-consistent visuals)",
      },
      {
        title: "Conversion-Focused Pages",
        description:
          "(Call-to-action strategy, SEO optimization, Fast loading)",
      },
      {
        title: "Clean, Scalable Codebase",
        description:
          "(Reusable components, Maintainable structure, Design system integration)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "ChatGPT",
    description:
      "A full-stack AI-powered chatbot application that leverages GeminiAi for intelligent conversations. Built with a React.js frontend, Node.js/Express backend, and MongoDB for data storage. Implements JWT authentication for secure user management and provides a responsive, modern UI using Tailwind CSS.",
    href: "https://gpt-0-09.onrender.com/",
    image: "https://ik.imagekit.io/iura/pp/gpt(1).png?updatedAt=1757909821815",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GeminiAi" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Express" },
      { id: 6, name: "Node" },
      { id: 7, name: "JWT" },
    ],
  },
  {
    id: 4,
    name: "Moody Player",
    description:
      "A backend system for a moody music player that recommends and plays songs based on users' facial expressions. Developed with Node.js and Express, it manages audio streaming, mood-based playlist generation, and secure user authentication to deliver a personalized music experience.",
    href: "https://moody-player-gold.vercel.app/",
    image: "https://ik.imagekit.io/iura/pp/moody.png?updatedAt=1757909702971",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Express" },
      { id: 4, name: "Node" },
      { id: 5, name: "imagekit" },
    ],
  },
  {
    id: 5,
    name: "Havmor Ice-Cream",
    description:
      "Havmor Ice-Cream is a full-stack web application developed as part of the Sheriyans Hackathon. This project features a modern and responsive user interface built with React.js and styled using Tailwind CSS, ensuring smooth and visually appealing experiences across devices. GSAP animations are used to add engaging transitions and interactive elements throughout the app. On the backend, it utilizes Node.js and Express to handle server-side logic, while MongoDB provides a scalable database solution for storing and managing user and product data. Secure user authentication is implemented using JWT, enabling protected routes and personalized experiences. The application includes real-world features such as dynamic product listings, user account management, and seamless interactivity, making it a robust full-stack project showcasing practical web development skills from frontend design to backend functionality.",
    href: "https://havmor.vercel.app/",
    image: "https://ik.imagekit.io/iura/pp/havmor.png?updatedAt=1757909703114",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Express" },
      { id: 6, name: "Node" },
      { id: 7, name: "JWT" },
    ],
  },
  {
    id: 7,
    name: "Clothing Store",
    description:
      "Clothing Store is a fully responsive fashion e-commerce frontend built with React.js and styled with Tailwind CSS. The site features a clean and modern user interface, intuitive navigation, and seamless product browsing experience. Users can easily filter products by category or search for specific items, enhancing usability and engagement. With a focus on modern design principles, responsive layouts, and smooth interactions, this project demonstrates proficiency in frontend development and UI/UX design, making it a polished showcase of a practical online store interface.",
    href: "https://clothes-store-002.netlify.app/",
    image:
      "https://ik.imagekit.io/iura/pp/dripnest.png?updatedAt=1757909704845",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "Tailwind CSS" },
    ],
  },
  {
    id: 10,
    name: "Codexfoli0",
    description:
      "Codexfoli0 is a dynamic and interactive portfolio site built with React.js. It features smooth, engaging animations powered by GSAP and a modern, responsive design crafted with Tailwind CSS. This project showcases my proficiency in creating high-performance, visually appealing web experiences that stand out.",
    href: "https://codexfoli0.vercel.app/",
    image:
      "https://ik.imagekit.io/iura/pp/codexfolio.png?updatedAt=1757909703020",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/gofarhandev/" },
  { name: "Facebook", href: "https://www.facebook.com/gofarhandev/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/gofarhandev/" },
  { name: "GitHub", href: "https://github.com/gofarhandev/" },
];
