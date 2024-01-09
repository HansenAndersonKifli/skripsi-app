// // useWishlist.ts
// import { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../../context/UserAuthContext';
// import { db } from '../../firebase/firebaseSetup';

// const useWishlist = (businessId: string) => {
//   const { currentUser } = useContext(AuthContext);
//   const [isInWishlist, setIsInWishlist] = useState(false);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       if (!currentUser) return;

//       const docRef = db.collection('users').doc(currentUser.uid);
//       const docSnapshot = await docRef.get();

//       if (docSnapshot.exists) {
//         const wishlistData = docSnapshot.data()?.wishlist;
//         setIsInWishlist(wishlistData && wishlistData[businessId]);
//       }
//     };

//     fetchWishlist();
//   }, [businessId, currentUser]);

//   const toggleWishlist = async () => {
//     if (!currentUser) return;

//     const docRef = db.collection('users').doc(currentUser.uid);

//     // Fetch existing wishlist data
//     const docSnapshot = await docRef.get();
//     const wishlistData = docSnapshot.data()?.wishlist || {};

//     // Toggle wishlist for the business
//     wishlistData[businessId] = !wishlistData[businessId];

//     // Update Firestore document
//     await docRef.set({ wishlist: wishlistData }, { merge: true });

//     // Update local state
//     setIsInWishlist(!isInWishlist);
//   };

//   return { isInWishlist, toggleWishlist };
// };

// export default useWishlist;

export {}