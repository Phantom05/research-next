import React from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo-mercy';
import StoreNav from 'components/StoreNav/StoreNav-mercy';
import Carousel from 'components/Carousel/Carousel';
import Banner from 'containers/Banner/Banner-mercy';
import Sidebar from 'containers/Sidebar/Sidebar-mercy';
import Products from 'containers/Products/Products-mercy';
import CartPopUp from 'containers/Cart/CartPopUp';
import {
	MainContentArea,
	SidebarSection,
	ContentSection,
	OfferSection,
	MobileCarouselDropdown
} from 'styled/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import BannerImg from 'image/Bags.png';
import storeType from 'constants/storeType';
import { useDeviceType } from 'helper/useDeviceType';
import { withRouter } from 'react-router-dom';
import getAllUrlParams from 'helper/getAllUrlParams-mercy';

const PAGE_TYPE = 'bags';

function BagsPage({ location }) {
	const deviceType = useDeviceType(window.navigator.userAgent);

	const query = location.state ? location.state.query : getAllUrlParams();
	const targetRef = React.useRef(null);
	React.useEffect(() => {
		if ((query.text || query.category) && targetRef.current) {
			window.scrollTo({
				top: targetRef.current.offsetTop - 110,
				behavior: 'smooth'
			});
		}
	}, [query]);

	return (
		<>
			{/*<Head>
        <title>Bags - PickBazar</title>
      </Head>*/}
			<Modal>
				<Banner
					intlTitleId="bagsTitle"
					intlDescriptionId="bagsSubTitle"
					imageUrl={BannerImg}
				/>

				{deviceType.desktop ? (
					<>
						<MobileCarouselDropdown>
							<StoreNav ssr={false} items={storeType} />
							<Sidebar ssr={false} type={PAGE_TYPE} deviceType={deviceType} />
						</MobileCarouselDropdown>
						<OfferSection>
							<div style={{ margin: '0 -10px' }}>
								<Carousel deviceType={deviceType} data={OFFERS} />
							</div>
						</OfferSection>
						<MainContentArea>
							<SidebarSection>
								<Sidebar ssr={false} type={PAGE_TYPE} deviceType={deviceType} />
							</SidebarSection>
							<ContentSection>
								<div ref={targetRef}>
									<Products
										type={PAGE_TYPE}
										deviceType={deviceType}
										fetchLimit={16}
										ssr={false}
									/>
								</div>
							</ContentSection>
						</MainContentArea>
					</>
				) : (
					<MainContentArea>
						<StoreNav ssr={false} items={storeType} />
						<Sidebar ssr={false} type={PAGE_TYPE} deviceType={deviceType} />
						<OfferSection>
							<div style={{ margin: '0 -10px' }}>
								<Carousel deviceType={deviceType} data={OFFERS} />
							</div>
						</OfferSection>
						<ContentSection style={{ width: '100%' }}>
							<Products
								type={PAGE_TYPE}
								deviceType={deviceType}
								fetchLimit={16}
								ssr={false}
							/>
						</ContentSection>
					</MainContentArea>
				)}
				<CartPopUp deviceType={deviceType} />
			</Modal>
		</>
	);
}

export default withRouter(withApollo(BagsPage));
