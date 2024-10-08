const base = process.env.PUBLIC_URL ?? ''

const iconsMeData = [
    { 
        src: "/assets/js.png", 
        alt: "icone javascript" 
    },
    { 
        src: "/assets/react.png", 
        alt: "icone react" 
    },
    { 
        src: "/assets/html5.png", 
        alt: "icone html" 
    },
    { 
        src: "/assets/css3.png", 
        alt: "icone css" 
    },
    { 
        src: "/assets/typescript100.png", 
        alt: "icone typescript" 
    },
    { 
        src: "/assets/tailwind-css.svg", 
        alt: "icone tailwind" 
    },
    { 
        src: "/assets/git.svg", 
        alt: "icone git" 
    },
    { 
        src: "/assets/github.svg", 
        alt: "icone github" 
    },
    { 
        src: "/assets/figma.png", 
        alt: "icone figma" 
    },
    { 
        src: "/assets/php.png", 
        alt: "icone php" 
    },
].map(item => {
    return {
        ...item,
        src: base + item.src
    }
})

export default iconsMeData;
