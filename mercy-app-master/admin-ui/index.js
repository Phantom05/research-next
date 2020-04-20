import React from 'react';
// import Button from '../shop/components/Button/Button';
import Help from './pages/help';
import OrderReceived from './pages/order-recived';
import Bags from './pages/bags';

import App from './app';
export default {
	pages: () => [
		{
			label: 'Help',
			path: 'help',
			component: () => {
				return (
					<App>
						<Help />
					</App>
				);
			}
		},
		{
			label: 'Order Received',
			path: 'order-recived',
			component: () => {
				return (
					<App>
						<OrderReceived />
					</App>
				);
			}
		},
		{
			label: 'Bags',
			path: 'bags',
			component: () => {
				return (
					<App>
						<Bags />
					</App>
				);
			}
		}
	]
};
