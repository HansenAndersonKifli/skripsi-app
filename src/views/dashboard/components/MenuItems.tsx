import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserAuthContext";
import { useContext, useEffect } from "react";

//uda login
export const menuItems = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Kategori',
        url: '/kategori',
        submenu: [
            {
                title: 'Makanan dan Minuman',
                url: 'makanan-dan-minuman'
            },
            {
                title: 'Furniture',
                url: 'furnitur'
            },

        ]
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Profile',
        url: '/profile'
    },
    {
        title: 'Form Pendaftaran Usaha',
        url: '/submit-form'
    }
];

//blm login
export const menuItems2 = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Kategori',
        url: '/kategori',
        submenu: [
            {
                title: 'Makanan dan Minuman',
                url: 'makanan-dan-minuman'
            },
            {
                title: 'Furniture',
                url: 'furnitur'
            },

        ]
    },
    {
        title: 'About',
        url: '/about'
    },
    // {
    //     title: 'Sign Up',
    //     url: '/sign-up'
    // },
    {
        title: 'Sign In',
        url: '/sign-in'
    },
];
