import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { CartProvider } from 'contexts/cart/cart.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { StickyProvider } from 'contexts/app/app.provider';
import { SearchProvider } from 'contexts/search/search.provider';
import LanguageProvider from 'contexts/language/language.provider';

import AppLayout from 'containers/LayoutContainer/AppLayout-mercy';
import { useDeviceType } from 'helper/useDeviceType';
import getAllUrlParams from 'helper/getAllUrlParams-mercy';
// Language translation files
import localEn from 'data/translation/en-mercy.json';
import localAr from 'data/translation/ar.json';
import localEs from 'data/translation/es.json';
import localDe from 'data/translation/de.json';
import localCn from 'data/translation/zh.json';
import localIl from 'data/translation/he.json';

// External CSS import here
import 'rc-table/assets/index.css';
import 'rc-collapse/assets/index.css';
import 'react-multi-carousel/lib/styles.css';
import '@redq/reuse-modal/lib/index.css';
import { GlobalStyle } from 'styled/global.style';
import { withRouter } from 'react-router-dom';

// Language translation Config
const messages = {
	en: localEn,
	ar: localAr,
	es: localEs,
	de: localDe,
	zh: localCn,
	he: localIl
};

export default withRouter(({ children, location }) => {
	const deviceType = useDeviceType(window.navigator.userAgent);
	const query = location.state ? location.state.query : getAllUrlParams();
	return (
		<ThemeProvider theme={theme}>
			<LanguageProvider messages={messages}>
				<CartProvider>
					<SearchProvider query={query}>
						<StickyProvider>
							<AuthProvider>
								<>
									<AppLayout ssr={false} deviceType={deviceType}>
										{children}
										{/*<Component {...pageProps} deviceType={deviceType} />*/}
									</AppLayout>
									<GlobalStyle />
								</>
							</AuthProvider>
						</StickyProvider>
					</SearchProvider>
				</CartProvider>
			</LanguageProvider>
		</ThemeProvider>
	);
});
