import React from 'react';
import Link from "next/link";
import { useMantineTheme, Text, ActionIcon } from "@mantine/core";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/router';

function MenubarComponent(props) {
    const theme = useMantineTheme();
    const border = "1px solid rgb(166,167,171, 0.2)";
    const router = useRouter();
    
    return ( 
        <div
            className="fixed-top d-none d-sm-none d-md-none d-lg-block"
            style={{zIndex: '1'}}
        >
            <div className='container'>
                <div className="row">
                    <div className='col-1'></div>
                    <div className='col-1'></div>
                    <div className='col-5 py-1' style={{
                            height: "6vh",
                            backgroundColor:
                                theme.colorScheme === "dark" ? theme.colors.dark[7] : "white"
                        }}>
                        <div className="row border-sm-0" style={{ height: "5vh"}}>
                            <div className="col-1 m-auto d-none d-sm-none d-md-block d-lg-block">
                                <ActionIcon component="button" onClick={() => router.back()}>
                                    <IoIosArrowBack size={17}/>
                                </ActionIcon>
                            </div>
                            <div className="col-11 border-0 d-md-none d-lg-none">
                                <ActionIcon component="button" onClick={() => router.back()}>
                                    <IoIosArrowBack size={17} />
                                </ActionIcon>
                            </div>
                            <div className="col-11 m-auto">
                                <Text className="fs-6 fw-bold" >{props.title}</Text>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'></div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>
    );
}

export default MenubarComponent;