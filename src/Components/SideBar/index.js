import React from 'react';
import { SidebarContaianer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SideBarRoute } from './SidebarElements';

export default function SideBar() {
	return (
		<SidebarContaianer>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/"> Pizzas </SidebarLink>
				<SidebarLink to="/"> Desserts </SidebarLink>
				<SidebarLink to="/"> Full Menu </SidebarLink>
			</SidebarMenu>
			<SidebarBtnWrap>
				<SideBarRoute to="/"> Order Now </SideBarRoute>
			</SidebarBtnWrap>

		</SidebarContaianer>
	)
}
