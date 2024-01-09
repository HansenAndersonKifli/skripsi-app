import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/UserAuthContext";
import { useContext, useEffect, useState } from "react";

// let menuNavbar;
// const { currentUser } = useContext(AuthContext)
// const emailCheck = String(currentUser?.email);


// if (currentUser) {
//     menuNavbar = [
//         {
//             title: 'Home',
//             url: '/'
//         },
//         {
//             title: 'Kategori',
//             url: '/kategori',
//             submenu: [
//                 {
//                     title: 'Makanan dan Minuman',
//                     url: 'makanan-dan-minuman'
//                 },
//                 {
//                     title: 'Furniture',
//                     url: 'furnitur'
//                 },
    
//             ]
//         },
//         {
//             title: 'About',
//             url: '/about'
//         },
//         {
//             title: 'Profile',
//             url: '/profile'
//         },
//         {
//             title: 'Form Pendaftaran Usaha',
//             url: '/submit-form'
//         }
//     ];
// } else if (emailCheck === 'admin@gmail.com') {
//     menuNavbar = [
//         {
//             title: 'Home',
//             url: '/'
//         },
//         {
//             title: 'Kategori',
//             url: '/kategori',
//             submenu: [
//                 {
//                     title: 'Makanan dan Minuman',
//                     url: 'makanan-dan-minuman'
//                 },
//                 {
//                     title: 'Furniture',
//                     url: 'furnitur'
//                 },

//             ]
//         },
//         {
//             title: 'About',
//             url: '/about'
//         },
//         {
//             title: 'Profile',
//             url: '/profile'
//         },
//         {
//             title: 'Form Pendaftaran Usaha',
//             url: '/submit-form'
//         },
//         {
//             title: 'Halaman Admin',
//             url: '/admin-page'
//         }
//     ];
// } else {
//     menuNavbar = [
//         {
//             title: 'Home',
//             url: '/'
//         },
//         {
//             title: 'Kategori',
//             url: '/kategori',
//             submenu: [
//                 {
//                     title: 'Makanan dan Minuman',
//                     url: 'makanan-dan-minuman'
//                 },
//                 {
//                     title: 'Furniture',
//                     url: 'furnitur'
//                 },

//             ]
//         },
//         {
//             title: 'About',
//             url: '/about'
//         },
//         // {
//         //     title: 'Sign Up',
//         //     url: '/sign-up'
//         // },
//         {
//             title: 'Sign In',
//             url: '/sign-in'
//         }
//         ];
// }

// export const menuNavbar =
//     currentUser ?
//         [
//             {
//                 title: 'Home',
//                 url: '/'
//             },
//             {
//                 title: 'Kategori',
//                 url: '/kategori',
//                 submenu: [
//                     {
//                         title: 'Makanan dan Minuman',
//                         url: 'makanan-dan-minuman'
//                     },
//                     {
//                         title: 'Furniture',
//                         url: 'furnitur'
//                     },
        
//                 ]
//             },
//             {
//                 title: 'About',
//                 url: '/about'
//             },
//             {
//                 title: 'Profile',
//                 url: '/profile'
//             },
//             {
//                 title: 'Form Pendaftaran Usaha',
//                 url: '/submit-form'
//             }  
//         ] : email === "admin@gmail.com"

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
            {
                title: 'Otomotif',
                url: 'otomotif'
            },
            {
                title: 'Elektronik',
                url: 'elektronik'
            },
            {
                title: 'Lain-lain',
                url: 'lain-lain'
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
        title: 'Tambahkan Usaha',
        url: '/tambahkan-usaha'
    }
];

//admin
export const menuAdmin = [
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
            {
                title: 'Otomotif',
                url: 'otomotif'
            },
            {
                title: 'Elektronik',
                url: 'elektronik'
            },
            {
                title: 'Lain-lain',
                url: 'lain-lain'
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
        title: 'Tambahkan Usaha',
        url: '/tambahkan-usaha'
    },
    {
        title: 'Halaman Admin',
        url: '/admin-page'
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
            {
                title: 'Otomotif',
                url: 'otomotif'
            },
            {
                title: 'Elektronik',
                url: 'elektronik'
            },
            {
                title: 'Lain-lain',
                url: 'lain-lain'
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
