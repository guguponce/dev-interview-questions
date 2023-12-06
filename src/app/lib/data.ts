import { TypeQuestion } from "./types";

export const TECHNOLOGIES_SUPPORTED = ["HTML", "CSS", "JavaScript", "React"];

export const QUESTIONS_ARRAY: TypeQuestion[] = [
  {
    id: 1,
    tech: "HTML",
    type: "boolean",
    question: "HTML stands for Hyper Text Markup Language.",
    topic: "Basic Structure and Elements",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 2,
    tech: "HTML",
    type: "multiple",
    question: "Which of the following is a block-level element in HTML?",
    topic: "Lists and Tables",
    correctAnswer: "div",
    incorrectAnswers: ["span", "a", "p"],
  },
  {
    id: 3,
    tech: "HTML",
    type: "boolean",
    question: "Forms in HTML are used for collecting user input.",
    topic: "Forms and Input Elements",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 4,
    tech: "HTML",
    type: "multiple",
    question:
      "Which of the following is an attribute of the anchor tag in HTML?",
    topic: "Links and Anchor Tags",
    correctAnswer: "href",
    incorrectAnswers: ["src", "alt", "target"],
  },
  {
    id: 5,
    tech: "HTML",
    type: "boolean",
    question: "CSS stands for Cascading Style Sheets.",
    topic: "Basic Styling and Selectors",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 6,
    tech: "HTML",
    type: "multiple",
    question:
      "Which of the following is used to create a numbered list in HTML?",
    topic: "Lists and Tables",
    correctAnswer: "ol",
    incorrectAnswers: ["ul", "li", "dl"],
  },
  {
    id: 7,
    tech: "HTML",
    type: "boolean",
    question:
      "The meta tag in HTML is used for providing metadata about the document.",
    topic: "Meta Tags and SEO Optimization",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 8,
    tech: "HTML",
    type: "multiple",
    question: "Which of the following is used to embed an image in HTML?",
    topic: "Images and Multimedia",
    correctAnswer: "img",
    incorrectAnswers: ["a", "div", "span"],
  },
  {
    id: 9,
    tech: "HTML",
    type: "boolean",
    question:
      "ARIA attributes are used for enhancing the accessibility of web content.",
    topic: "Accessibility and ARIA",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 10,
    tech: "HTML",
    type: "multiple",
    question:
      "Which of the following is a valid input type for a form in HTML?",
    topic: "Forms and Input Elements",
    correctAnswer: "checkbox",
    incorrectAnswers: ["picklist", "toggle", "calendar"],
  },
  {
    id: 11,
    tech: "HTML",
    type: "boolean",
    question:
      "The `<aside>` element in HTML is used for marking up content tangentially related to the content around it.",
    topic: "Semantic HTML",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 12,
    tech: "HTML",
    type: "multiple",
    question:
      "Which of the following elements is used for defining navigation links in HTML?",
    topic: "Links and Anchor Tags",
    correctAnswer: "nav",
    incorrectAnswers: ["main", "section", "article"],
  },
  {
    id: 13,
    tech: "HTML",
    type: "boolean",
    question:
      "LocalStorage in HTML allows you to store key-value pairs locally in a web browser.",
    topic: "HTML5 APIs (LocalStorage, Canvas, etc.)",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 14,
    tech: "HTML",
    type: "multiple",
    question:
      "Which of the following is used to define a section or grouping of content in HTML?",
    topic: "Semantic HTML",
    correctAnswer: "section",
    incorrectAnswers: ["div", "span", "p"],
  },
  {
    id: 15,
    tech: "HTML",
    type: "boolean",
    question:
      "A valid HTML document must have a `<!DOCTYPE html>` declaration at the beginning.",
    topic: "HTML Validation and Best Practices",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 17,
    tech: "CSS",
    type: "multiple",
    question:
      "Which CSS property is used for controlling the layout of an element?",
    topic: "Positioning and Layouts (Flexbox, Grid)",
    correctAnswer: "display",
    incorrectAnswers: ["color", "font-size", "border"],
  },
  {
    id: 18,
    tech: "CSS",
    type: "boolean",
    question:
      "The `box-sizing` property in CSS can be used to control how the total width and height of an element is calculated.",
    topic: "Box Model (Margin, Border, Padding)",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 19,
    tech: "CSS",
    type: "multiple",
    question: "Which CSS property is used for adding shadows to elements?",
    topic: "Colors, Backgrounds, and Gradients",
    correctAnswer: "box-shadow",
    incorrectAnswers: ["text-shadow", "border-shadow", "element-shadow"],
  },
  {
    id: 20,
    tech: "CSS",
    type: "boolean",
    question:
      "Media Queries in CSS allow you to apply styles based on the characteristics of the device's viewport.",
    topic: "Responsive Design and Media Queries",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 21,
    tech: "CSS",
    type: "multiple",
    question:
      "Which CSS property is used to change the background color of an element?",
    topic: "Colors, Backgrounds, and Gradients",
    correctAnswer: "background-color",
    incorrectAnswers: ["color", "text-color", "border-color"],
  },
  {
    id: 22,
    tech: "CSS",
    type: "boolean",
    question:
      "Transitions and Animations in CSS allow you to create smooth and dynamic visual effects.",
    topic: "Transitions and Animations",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 23,
    tech: "CSS",
    type: "multiple",
    question:
      "Which CSS property is used for controlling the spacing between elements?",
    topic: "Box Model (Margin, Border, Padding)",
    correctAnswer: "margin",
    incorrectAnswers: ["padding", "border", "spacing"],
  },
  {
    id: 24,
    tech: "CSS",
    type: "boolean",
    question:
      "CSS Grid Layout is a two-dimensional layout system that allows you to create complex grid-based layouts with ease.",
    topic: "CSS Grid Layout",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 25,
    tech: "CSS",
    type: "multiple",
    question:
      "Which CSS property is used to change the font of an element's text?",
    topic: "Typography and Fonts",
    correctAnswer: "font-family",
    incorrectAnswers: ["font-style", "font-weight", "text-font"],
  },
  {
    id: 34,
    tech: "CSS",
    type: "boolean",
    question:
      "The `z-index` property in CSS is used to control the stacking order of elements on a web page.",
    topic: "Positioning and Layouts (Flexbox, Grid)",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 26,
    tech: "JavaScript",
    type: "boolean",
    question: "JavaScript is a statically-typed language.",
    topic: "Variables, Data Types, and Operators",
    correctAnswer: false,
    incorrectAnswers: true,
  },
  {
    id: 27,
    tech: "JavaScript",
    type: "multiple",
    question: "Which of the following is a loop in JavaScript?",
    topic: "Control Flow (if-else, switch)",
    correctAnswer: "for",
    incorrectAnswers: ["if", "else", "switch"],
  },
  {
    id: 28,
    tech: "JavaScript",
    type: "boolean",
    question:
      "A function in JavaScript can be defined inside another function, and it has access to the outer function's variables.",
    topic: "Functions and Scope",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 29,
    tech: "JavaScript",
    type: "multiple",
    question: "Which of the following is a valid JavaScript data type?",
    topic: "Variables, Data Types, and Operators",
    correctAnswer: "boolean",
    incorrectAnswers: ["array", "object", "function"],
  },
  {
    id: 30,
    tech: "JavaScript",
    type: "boolean",
    question: "JavaScript is a single-threaded language.",
    topic: "Asynchronous JavaScript (Promises, Async/Await)",
    correctAnswer: false,
    incorrectAnswers: true,
  },
  {
    id: 31,
    tech: "JavaScript",
    type: "multiple",
    question: "Which method is used to add new items to the end of an array?",
    topic: "Arrays and Objects",
    correctAnswer: "push",
    incorrectAnswers: ["pop", "shift", "unshift"],
  },
  {
    id: 32,
    tech: "JavaScript",
    type: "boolean",
    question:
      "The `typeof` operator in JavaScript returns a string indicating the type of the unevaluated operand.",
    topic: "Variables, Data Types, and Operators",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 33,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following is used to define a function in JavaScript?",
    topic: "Functions and Scope",
    correctAnswer: "function",
    incorrectAnswers: ["method", "class", "procedure"],
  },
  {
    id: 34,
    tech: "JavaScript",
    type: "boolean",
    question: "Arrow functions in JavaScript have their own `this` value.",
    topic: "Functions and Scope",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 35,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following is a valid way to declare a JavaScript variable?",
    topic: "Variables, Data Types, and Operators",
    correctAnswer: "let",
    incorrectAnswers: ["var", "const", "new"],
  },
  {
    id: 36,
    tech: "React",
    type: "boolean",
    question: "React is a JavaScript library for building user interfaces.",
    topic: "Setting Up a React App",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 37,
    tech: "React",
    type: "multiple",
    question: "What is used to pass data to a component from outside in React?",
    topic: "Components and Props",
    correctAnswer: "props",
    incorrectAnswers: ["state", "setState", "data"],
  },
  {
    id: 38,
    tech: "React",
    type: "boolean",
    question: "In React, `setState` is asynchronous.",
    topic: "State and Lifecycle",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 39,
    tech: "React",
    type: "multiple",
    question:
      "Which lifecycle method is called immediately after a component is added to the DOM?",
    topic: "Lifecycle Methods and Hooks",
    correctAnswer: "componentDidMount",
    incorrectAnswers: [
      "componentWillMount",
      "componentWillUnmount",
      "componentDidUpdate",
    ],
  },
  {
    id: 40,
    tech: "React",
    type: "boolean",
    question: "React components must always return a single JSX element.",
    topic: "Components and Props",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 41,
    tech: "React",
    type: "multiple",
    question: "Which of the following is a hook in React?",
    topic: "Hooks",
    correctAnswer: "useState",
    incorrectAnswers: ["render", "componentDidMount", "setState"],
  },
  {
    id: 42,
    tech: "React",
    type: "boolean",
    question:
      "Conditional rendering in React allows you to render different components or elements based on a condition.",
    topic: "Conditional Rendering",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 43,
    tech: "React",
    type: "multiple",
    question:
      "Which method is used to update the state of a component in React?",
    topic: "State and Lifecycle",
    correctAnswer: "setState",
    incorrectAnswers: ["updateState", "modifyState", "changeState"],
  },
  {
    id: 44,
    tech: "React",
    type: "boolean",
    question:
      "The `key` prop is used to uniquely identify elements in a list in React.",
    topic: "Lists and Keys",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 45,
    tech: "React",
    type: "multiple",
    question: "Which of the following is used to handle events in React?",
    topic: "Handling Events",
    correctAnswer: "onClick",
    incorrectAnswers: ["onEvent", "handleEvent", "eventHandler"],
  },
  {
    id: 46,
    tech: "JavaScript",
    type: "boolean",
    question:
      "The `splice` method in JavaScript can be used to add or remove elements from an array.",
    topic: "Arrays and Objects",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 47,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following is a method of the `Array` prototype in JavaScript?",
    topic: "Arrays and Objects",
    correctAnswer: "push",
    incorrectAnswers: ["join", "split", "concat"],
  },
  {
    id: 48,
    tech: "JavaScript",
    type: "boolean",
    question: "In JavaScript, the `NaN` value stands for 'Not a Number'.",
    topic: "Variables, Data Types, and Operators",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 49,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following is used to iterate over the elements of an array in JavaScript?",
    topic: "Loops (for, while, do-while)",
    correctAnswer: "for",
    incorrectAnswers: ["if", "else", "switch"],
  },
  {
    id: 50,
    tech: "JavaScript",
    type: "boolean",
    question:
      "The `map` function in JavaScript is used to create a new array with the results of calling a provided function on every element in the calling array.",
    topic: "Arrays and Objects",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 51,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following methods can be used to convert a string to lowercase in JavaScript?",
    topic: "Strings and String Methods",
    correctAnswer: "toLowerCase",
    incorrectAnswers: ["toUpperCase", "trim", "charAt"],
  },
  {
    id: 52,
    tech: "JavaScript",
    type: "boolean",
    question:
      "The `===` operator in JavaScript checks for both equality of value and equality of type.",
    topic: "Variables, Data Types, and Operators",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 53,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following is a method of the `String` prototype in JavaScript?",
    topic: "Strings and String Methods",
    correctAnswer: "slice",
    incorrectAnswers: ["concat", "indexOf", "trim"],
  },
  {
    id: 54,
    tech: "JavaScript",
    type: "boolean",
    question:
      "The `indexOf` method in JavaScript returns the first index at which a given element can be found in the array, or -1 if the element is not present.",
    topic: "Arrays and Objects",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 55,
    tech: "JavaScript",
    type: "multiple",
    question:
      "Which of the following is a method of the `Math` object in JavaScript?",
    topic: "Built-in Objects (Math, Date)",
    correctAnswer: "round",
    incorrectAnswers: ["floor", "ceil", "abs"],
  },
  {
    id: 46,
    tech: "React",
    type: "boolean",
    question: "In React, components can have their own local state.",
    topic: "State and Lifecycle",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 47,
    tech: "React",
    type: "multiple",
    question:
      "Which lifecycle method is used for cleaning up resources when a component is unmounted from the DOM?",
    topic: "Lifecycle Methods and Hooks",
    correctAnswer: "componentWillUnmount",
    incorrectAnswers: [
      "componentDidMount",
      "componentWillUpdate",
      "componentDidUpdate",
    ],
  },
  {
    id: 48,
    tech: "React",
    type: "boolean",
    question:
      "In React, the `key` prop is required for dynamic lists to help React identify which items have changed, are added, or are removed.",
    topic: "Lists and Keys",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 49,
    tech: "React",
    type: "multiple",
    question:
      "Which of the following is a hook used for side effects in React?",
    topic: "Managing Side Effects with useEffect",
    correctAnswer: "useEffect",
    incorrectAnswers: ["useState", "useContext", "useReducer"],
  },
  {
    id: 50,
    tech: "React",
    type: "boolean",
    question:
      "In React, `props` are read-only and cannot be modified by the child component.",
    topic: "Components and Props",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 51,
    tech: "React",
    type: "multiple",
    question: "Which of the following is used for routing in React?",
    topic: "React Router and Routing",
    correctAnswer: "BrowserRouter",
    incorrectAnswers: ["Route", "Link", "Switch"],
  },
  {
    id: 52,
    tech: "React",
    type: "boolean",
    question:
      "React Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    topic: "Context API and Global State",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 53,
    tech: "React",
    type: "multiple",
    question:
      "Which of the following is a hook used for managing component state?",
    topic: "State and Lifecycle",
    correctAnswer: "useState",
    incorrectAnswers: ["useEffect", "useContext", "useReducer"],
  },
  {
    id: 54,
    tech: "React",
    type: "boolean",
    question:
      "In React, components can be composed together to create more complex UIs.",
    topic: "Composing Components",
    correctAnswer: true,
    incorrectAnswers: false,
  },
  {
    id: 55,
    tech: "React",
    type: "multiple",
    question:
      "Which of the following is a hook used for managing side effects in React?",
    topic: "Managing Side Effects with useEffect",
    correctAnswer: "useEffect",
    incorrectAnswers: ["useState", "useContext", "useReducer"],
  },
];

export const BIBLIOGRAPHY_LINKS: {
  [key: string]: {
    type: string;
    links: {
      name: string;
      url: string;
      description: string;
      logo: string;
    }[];
  }[];
} = {
  JavaScript: [
    {
      type: "Documentation",
      links: [
        {
          name: "W3Schools",
          logo: "W3Schools.svg",
          description:
            "Known for beginner-friendly web development tutorials. Offers simple, practical examples, making it a popular resource for learning HTML, CSS, JavaScript, and more.",
          url: "https://www.w3schools.com/js",
        },
        {
          name: "MDN Web Docs",
          logo: "MDN.svg",
          description:
            "Mozilla's authoritative resource. Provides in-depth, accurate documentation on web technologies. Emphasizes standards compliance and is widely respected in the developer community.",
          url: "https://developer.mozilla.org/en-US/docs/Web/javascript",
        },
        {
          name: "Dev Docs",
          logo: "devdocs.png",
          description:
            "Aggregates documentation from various sources. Offers a clean, customizable interface, enabling developers to quickly access API references for a wide range of programming languages and technologies.",
          url: "https://devdocs.io/javascript",
        },
      ],
    },
    {
      type: "Youtube Channels",
      links: [
        {
          name: "FreeCodeCamp",
          logo: "FreeCodeCamp.png",
          description:
            "Offers free coding tutorials and projects, emphasizing practical skills. Known for its comprehensive curriculum and community-driven learning, aiding aspiring developers worldwide.",
          url: "https://www.youtube.com/@freecodecamp/search?query=javascript",
        },
        {
          name: "Web Dev Simplified",
          logo: "web_dev_simplified.jpg",
          description:
            "Focuses on simplifying web development concepts with clear explanations and practical examples. Provides valuable insights for beginners and intermediate developers.",
          url: "https://www.youtube.com/@WebDevSimplified/search?query=javascript",
        },
        {
          name: "developedbyed",
          logo: "developedbyed.jpeg",
          description:
            "Ed (Eddie) teaches web development, design, and game development. Known for his engaging tutorials and practical projects, making complex concepts accessible.",
          url: "https://www.youtube.com/playlist?list=PLDyQo7g0_nsXlSfuoBpG5Fgz0Qe3IvWnA",
        },
        {
          name: "Net Ninja",
          logo: "net_ninja.png",
          description:
            "Provides clear, concise tutorials on web development technologies like HTML, CSS, JavaScript, and more. Known for its organized playlists and effective teaching methods.",
          url: "https://www.youtube.com/@NetNinja/search?query=javascript",
        },
      ],
    },
    {
      type: "Practice your logic",
      links: [
        {
          logo: "exercism.png",
          name: "Exercism",
          url: "https://exercism.org/",
          description:
            "Exercism.org offers a platform for logic practice through coding exercises. Choose a language, download exercises, and solve logic problems. Test locally, submit for feedback, and engage in discussions to enhance problem-solving skills and logical thinking.",
        },
        {
          logo: "adventjs.jpeg",
          name: "AdventJS",
          url: "adventjs․dev",
          description:
            "AdventJS is a coding challenge platform centered around JavaScript. It provides daily challenges in December. Users solve problems, share solutions, and engage in discussions to enhance their JavaScript and logical thinking skills.",
        },
        {
          logo: "codewars.png",
          name: "CodeWars",
          url: "codewars․com",
          description:
            "CodeWars is a platform for honing coding and logic skills. Users solve challenges in their chosen language, with test cases for validation. Community discussions and rankings foster continuous improvement in logical thinking.",
        },
      ],
    },
    {
      type: "Learn by playing",
      links: [
        {
          logo: "warriorjs.png",
          name: "WarriorJS",
          url: "warriorjs.com",
          description:
            "Gamifies learning JavaScript. Players solve coding challenges by writing scripts for game characters. Encourages problem-solving and logic-building in an interactive, engaging format.",
        },
        {
          logo: "jsdares.png",
          name: "JS Dares",
          url: "https://jsdares.com/",
          description:
            "Engages learners with coding challenges in a playful environment. Offers progressively complex tasks to develop JavaScript skills through hands-on practice, fostering a deeper understanding.",
        },
      ],
    },
  ],
  CSS: [
    {
      type: "Documentation",
      links: [
        {
          logo: "W3Schools.svg",
          description:
            "Offers beginner-friendly CSS documentation with live examples. Known for its simplicity, accessibility, and vast library of tutorials covering various web technologies.",
          name: "W3Schools",
          url: "https://www.w3schools.com/css/",
        },
        {
          logo: "MDN.svg",
          description:
            "Provides comprehensive, authoritative CSS documentation. Known for in-depth explanations, browser compatibility data, and contributions from the developer community.",
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          logo: "css_reference.png",
          description:
            "A concise, well-organized CSS documentation resource. Known for its easy navigation, clear explanations, and focus on providing quick reference information for developers.",
          name: "CSS Reference",
          url: "https://cssreference.io/",
        },
      ],
    },
    {
      type: "Youtube Channels",
      links: [
        {
          logo: "FreeCodeCamp.png",
          description:
            "FreeCodeCamp offers a comprehensive, hands-on approach to learning CSS with tutorials, projects, and a coding platform, emphasizing practical skills and real-world applications.",
          name: "FreeCodeCamp",
          url: "https://www.youtube.com/@KevinPowell/search?query=css",
        },
        {
          logo: "kevin_powell.png",
          description:
            "Kevin Powell provides in-depth CSS tutorials, emphasizing fundamental concepts and modern techniques. His clear explanations and real-time coding demos make learning CSS accessible and engaging.",
          name: "Kevin Powell",
          url: "https://www.youtube.com/@freecodecamp/search?query=css",
        },
        {
          logo: "traversy_media.jpeg",
          description:
            "Traversy Media delivers practical CSS tutorials, often integrated with other web development technologies. The channel's focus on real-world projects enhances practical application and understanding.",
          name: "Traversy Media",
          url: "https://www.youtube.com/@TraversyMedia/search?query=css",
        },
      ],
    },
    {
      type: "Learn by playing",
      links: [
        {
          logo: "guess_css.png",
          name: "Guess CSS",
          description:
            "Teaches CSS selectors by guessing the correct ones to style a given element. Encourages trial and error for effective learning.",
          url: "https://www.guess-css.app/",
        },
        {
          logo: "css_battle.png",
          name: "CSS Battle",
          description:
            "Engages users in competitive CSS challenges. Encourages creativity and efficiency in writing CSS code to replicate given designs.",
          url: "https://cssbattle.dev/",
        },
        {
          logo: "css_dinner.jpeg",
          name: "CSS Dinner",
          description:
            "Offers interactive lessons on CSS selectors. Users style a virtual dinner table by applying selectors in progressively complex levels.",
          url: "https://flukeout.github.io/",
        },
        {
          logo: "grid_garden.png",
          name: "GRID GARDEN",
          description:
            "Gamifies learning CSS Grid layout. Players cultivate a garden by applying Grid properties, providing hands-on experience with this powerful layout tool.",
          url: "https://cssgridgarden.com/",
        },
        {
          logo: "flexbox_froggy.png",
          name: "FLEXBOX FROGGY",
          description:
            "Gamifies learning Flexbox. Players solve puzzles by applying Flexbox properties to guide frogs to their lily pads, reinforcing Flexbox layout concepts effectively.",
          url: "http://flexboxfroggy.com",
        },
      ],
    },
  ],
  HTML: [
    {
      type: "Documentation",
      links: [
        {
          logo: "w3schools.svg",
          description:
            "Offers beginner-friendly HTML tutorials with simple, practical examples. Known for its straightforward approach, making it accessible for learners of all levels.",
          name: "W3Schools",
          url: "https://www.w3schools.com/html",
        },
        {
          logo: "MDN.svg",
          description:
            "Mozilla's authoritative resource. Provides comprehensive, accurate HTML documentation. Emphasizes standards compliance, trusted by professional developers worldwide.",
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          logo: "devdocs.png",
          description:
            "Aggregates HTML documentation from various sources. Offers a clean, customizable interface, enabling developers to quickly access HTML specifications and related resources efficiently.",
          name: "DevDocs",
          url: "https://devdocs.io/html/",
        },
      ],
    },
    {
      type: "Youtube Channels",
      links: [
        {
          logo: "FreeCodeCamp.png",
          description:
            "Offers extensive tutorials on HTML, emphasizing hands-on projects. Known for its interactive coding challenges and community-driven learning, aiding aspiring developers worldwide.",
          name: "FreeCodeCamp",
          url: "https://www.youtube.com/@freecodecamp/search?query=html",
        },

        {
          logo: "kevin_powell.png",
          description:
            "Focuses on web development, with clear HTML tutorials. Offers in-depth explanations and practical projects, making complex concepts accessible for learners.",
          name: "Kevin Powell",
          url: "https://www.youtube.com/@KevinPowell/search?query=html",
        },
      ],
    },
  ],

  React: [
    {
      type: "Documentation",
      links: [
        {
          logo: "react.svg",
          description:
            "The best guide to learning and using React, featuring comprehensive tutorials, API references, and best practices.",
          name: "React official docs",
          url: `https://reactjs.org/docs/getting-started.html`,
        },
        {
          logo: "MDN.svg",
          description:
            "Mozilla's extensive resource on React, offering tutorials, guides, and references for getting started and mastering React development.",
          name: "MDN Web Docs",
          url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
        },
        {
          logo: "W3Schools.svg",
          description:
            "W3Schools provides beginner-friendly tutorials and examples for learning React, along with interactive code editors for practice.",
          name: "W3Schools",
          url: "https://w3schools.com/react/",
        },
      ],
    },
    {
      type: "Youtube Channels",
      links: [
        {
          logo: "FreeCodeCamp.png",
          description:
            "Dive into React with freeCodeCamp's video tutorials, covering fundamentals, projects, and best practices for hands-on learning. Engage and code!",
          name: "FreeCodeCamp",
          url: "https://www.youtube.com/@freecodecamp/search?query=react",
        },
        {
          logo: "codevolution.jpg",
          description:
            "Codevolution offers concise, practical tutorials for learning React, covering fundamental concepts and advanced topics with clear explanations.",
          name: "FreeCodeCamp",
          url: "https://www.youtube.com/@Codevolution/search?query=react",
        },

        {
          name: "Web Dev Simplified",
          logo: "web_dev_simplified.jpg",
          description:
            "Focuses on simplifying web development concepts with clear explanations and practical examples. Provides valuable insights for beginners and intermediate developers.",
          url: "https://www.youtube.com/@WebDevSimplified/search?query=react",
        },
        {
          name: "PedroTech",
          logo: "pedro_tech.jpg",
          description:
            "Pedro offers insightful tutorials for learning React, covering key concepts with practical examples and clear explanations.",
          url: "https://www.youtube.com/@PedroTechnologies/search?query=react",
        },
      ],
    },
  ],
};
