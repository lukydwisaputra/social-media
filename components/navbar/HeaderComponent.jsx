import React, { useState, useEffect } from "react";
import { createStyles, Text, ActionIcon } from "@mantine/core";
import { ToggleThemeComponent } from "./ToggleThemeComponent";
import { useRouter } from 'next/router';
import { IoIosArrowBack } from "react-icons/io";

const useStyles = createStyles((theme) => ({
	a: {
		color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[6],
		":hover": {
			color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[6],
		},
	},
}));

const homePage = () => {
	const { classes, theme } = useStyles();
	return (
		<header
			className="justify-content-between align-items-center fixed-top d-lg-none"
			style={{
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
				padding: "1.25vh",
				borderBottom: '1 px solid gray'
			}}
		>
			<div className="container m-auto">
				<div className="row justify-content-between align-items-center">
					<div className="col-3 col-sm-3 col-md-3 col-lg-1">
						<Text href="/" className={`${classes.a} fs-3 m-auto`} style={{fontWeight: '500'}}>étSocial</Text>
					</div>
					<div className={`col-6 col-sm-6 col-md-6 col-lg-7 m-auto`}>
						{/* <SearchComponent /> */}
						{/* <Text href="/" className={`${classes.a} fs-6 m-auto text-center`}>Homé</Text> */}
					</div>
					<div className="col-3 col-sm-3 col-md-3 col-lg-4">
						<div className="float-end">
							<ToggleThemeComponent />	
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

const otherPage = (title) => {
	const { classes, theme } = useStyles();
	const router = useRouter();
	const { pathname } = useRouter();
    const isLandingPage = pathname === '/' ? 'd-none' : "";

	return (
		<header
			className="justify-content-between align-items-center fixed-top d-lg-none"
			style={{
				backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "white",
				padding: "1.5vh",
				borderBottom: '1 px solid gray'
			}}
		>
			<div className="container m-auto">
				<div className="row justify-content-between align-items-center">
					<div className="col-3 col-sm-3 col-md-3 col-lg-1">
						<ActionIcon className={isLandingPage} component="button" onClick={() => router.back()}>
							<IoIosArrowBack size={20} />
						</ActionIcon>
					</div>
					<div className={`col-6 col-sm-6 col-md-6 col-lg-7 m-auto`}>
						{/* <SearchComponent /> */}
						<Text href="/" className={`${classes.a} fs-6 m-auto text-center`} style={{fontWeight: '600'}}>{title}</Text>
					</div>
					<div className="col-3 col-sm-3 col-md-3 col-lg-4">
						<div className="float-end">
							<ToggleThemeComponent />	
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function HeaderComponent() {
	const { pathname } = useRouter();
	const isHome = pathname.includes('home');
	let _title = pathname.split('/').join('');

	switch (_title) {
		case 'explore':
			_title = 'Exploré'
			break;
		case 'liked':
			_title = 'Likéd'
			break;
		case 'about':
			_title = 'About'
			break;
		case 'authentication':
			_title = 'Authéntication'
			break;
		case 'recovery':
			_title = 'Récovery'
			break;
		case 'profile':
			_title = 'lukydwisaputra' // ganti sama username
			break;
		default:
			break;
	}

	return (
		<>
			{
				isHome ? homePage() : otherPage(_title)
			}
		</>
	);
}
