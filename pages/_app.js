import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { CartContextProvider } from '../context/cart-context';
import { ThemeContextProvider } from "../context/theme-context"
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
    </ThemeContextProvider>
    
  )
}

export default MyApp
