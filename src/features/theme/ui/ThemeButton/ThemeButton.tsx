import { useTheme } from "@/app/providers/ThemeProvider"
import { themeIcons } from "@/shared/assets"

const ThemeButton = () => {
    const { isDark, toggleTheme } = useTheme()
    return (<img
        src={isDark ? themeIcons.dark : themeIcons.light}
        width={30}
        alt="theme"
        onClick={toggleTheme} />)
}
export default ThemeButton