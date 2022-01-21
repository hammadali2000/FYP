import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text2'
    },

    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text2'
    },

    {
        title: 'Product',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text2'
    },

    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text2'
    },

    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text2'
    }

]