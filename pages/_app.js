import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { CartContextProvider } from "../context/cart-context";
import { ThemeContextProvider } from "../context/theme-context";
import { AuthContextProvider } from "../context/auth-context";
import { ItemsContextProvider } from "../context/items-context";
import { ContactShippingInfoContextProvider } from "../context/contact-shipping-info-context";
import { ScrollContextProvider } from "../context/scroll-context";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <ScrollContextProvider>
      <ThemeContextProvider>
      <AuthContextProvider>
        <ContactShippingInfoContextProvider>
        <CartContextProvider>
          <ItemsContextProvider>
            <Component {...pageProps} />
          </ItemsContextProvider>
        </CartContextProvider>
        </ContactShippingInfoContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
    </ScrollContextProvider>
    
  );
}

export default MyApp;
