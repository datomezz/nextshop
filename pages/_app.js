import '../styles/globals.css'
import { Layout } from "../components/layouts";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.scss";

import store from "../store";

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
