import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/core/theme";
import 'react-multi-carousel/lib/styles.css';



export default function App({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
