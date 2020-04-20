import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { CartProvider } from 'contexts/cart/cart.provider';
import { AuthProvider } from 'contexts/auth/auth.provider';
import { StickyProvider } from 'contexts/app/app.provider';
import { SearchProvider } from 'contexts/search/search.provider';
import LanguageProvider from 'contexts/language/language.provider';

import AppLayout from 'containers/LayoutContainer/AppLayout-mercy';
import { useDeviceType } from 'helper/useDeviceType';

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

// Language translation Config
const messages = {
	en: localEn,
	ar: localAr,
	es: localEs,
	de: localDe,
	zh: localCn,
	he: localIl
};

export default function ExtendedApp({
	Component,
	pageProps,
	query,
	userAgent
}) {
	const deviceType = useDeviceType(userAgent);

	return (
		<ThemeProvider theme={theme}>
			<LanguageProvider messages={messages}>
				<CartProvider>
					<SearchProvider query={query}>
						<StickyProvider>
							<AuthProvider>
								<>
									<AppLayout deviceType={deviceType}>
										<Component {...pageProps} deviceType={deviceType} />
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
}

ExtendedApp.getInitialProps = async appContext => {
	const appProps = await App.getInitialProps(appContext);
	const { req, query } = appContext.ctx;
	const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
	return { ...appProps, userAgent, query };
};
