import React from 'react';
import NavLink from '../NavLink/NavLink-mercy';
import StoreNavWrapper, { StoreNavLinks } from './StoreNav.style';
import { GroceryIcon, MakeupIcon, DressIcon, Handbag } from '../AllSvgIcon';

type StoreNavProps = {
	className?: string;
	items?: any[];
	ssr?: boolean;
};

const StoreNav: React.FunctionComponent<StoreNavProps> = ({
	className,
	items = [],
	ssr
}) => {
	return (
		<StoreNavWrapper className={className}>
			<StoreNavLinks>
				{items.map((item, index) => (
					<NavLink
						className="store-nav-link"
						href={ssr ? item.link : item.link.substr(1)}
						label={item.label}
						icon={item.icon}
						key={index}
						ssr={ssr}
					/>
				))}
			</StoreNavLinks>
		</StoreNavWrapper>
	);
};

export default StoreNav;
