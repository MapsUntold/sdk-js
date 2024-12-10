
interface Style {
    logo: string
    colors: {
        primary: string
        secondary: string
        light: {
            text: string
            background: string
        },
        dark: {
            text: string
            background: string
        }
    }
}

interface Config {
    apiKey: string
    style: Style
}

export { Config, Style }