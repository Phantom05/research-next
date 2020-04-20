import React, { useContext, useCallback } from 'react';
import { Waypoint } from 'react-waypoint';
import SearchBox from 'components/SearchBox/SearchBox';
import { SearchContext } from 'contexts/search/search.context';
import { useStickyDispatch } from 'contexts/app/app.provider';
import { FormattedMessage } from 'react-intl';
import {
	BannerWrapper,
	BannerHeading,
	BannerSubHeading,
	BannerComponent
} from './Banner.style';
import { useRouter } from 'next/router';
import { withRouter } from 'react-router-dom';

type BannerProps = {
	imageUrl: string;
	intlTitleId: string;
	intlDescriptionId: string;
	history?: any;
	ssr?: boolean;
	location?: any;
};

const Banner: React.FC<BannerProps> = ({
	imageUrl,
	intlTitleId,
	intlDescriptionId,
	history,
	location,
	ssr
}) => {
	const { state, dispatch } = useContext(SearchContext);
	let pathname;
	if (ssr) {
		const router = useRouter();
		pathname = router.pathname;
	} else {
		pathname = location ? location.pathname : window.location.pathname;
		// TODO: need to find a better way.
		// currently breaking down pathname /admin/bags to bags for searchbox
		pathname = pathname.split('/')[pathname.split('/').length - 1];
	}

	const { text } = state;

	const handleSearchInput = (text: string) => {
		dispatch({
			type: 'UPDATE',
			payload: {
				...state,
				text
			}
		});
	};

	function handleClickSearchButton() {
		const { page, ...urlState } = state;

		history.push(
			{
				pathname: pathname,
				query: { ...urlState, text }
			},
			{
				pathname: pathname === '/' ? `${pathname}grocery` : pathname,
				query: { ...urlState, text }
			},
			{ shallow: true }
		);
	}
	const useDispatch = useStickyDispatch();
	const setSticky = useCallback(() => useDispatch({ type: 'SET_STICKY' }), [
		useDispatch
	]);
	const removeSticky = useCallback(
		() => useDispatch({ type: 'REMOVE_STICKY' }),
		[useDispatch]
	);

	const onWaypointPositionChange = ({ currentPosition }) => {
		if (!currentPosition || currentPosition === 'above') {
			setSticky();
		}
	};

	return (
		<BannerWrapper
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
		>
			<BannerComponent>
				<BannerHeading>
					<FormattedMessage
						id={intlTitleId}
						defaultMessage="Set Your Title Through Language File"
					/>
				</BannerHeading>
				<BannerSubHeading>
					<FormattedMessage
						id={intlDescriptionId}
						defaultMessage="Set Your Description Through Language File"
					/>
				</BannerSubHeading>

				<SearchBox
					style={{
						width: 700,
						boxShadow: '0 21px 36px rgba(0,0,0,0.05)',
						borderRadius: '6px',
						overflow: 'hidden'
					}}
					handleSearch={(value: string) => handleSearchInput(value)}
					value={state.text || ''}
					onClick={handleClickSearchButton}
					className="banner-search"
					pathname={pathname}
				/>
				<Waypoint
					onEnter={removeSticky}
					onLeave={setSticky}
					onPositionChange={onWaypointPositionChange}
				/>
			</BannerComponent>
		</BannerWrapper>
	);
};

export default props => {
	if (props.ssr) {
		return <Banner {...props} />;
	} else {
		const BannerWrapper = withRouter(routerProps => (
			<Banner {...routerProps} {...props} />
		));
		return <BannerWrapper />;
	}
};
