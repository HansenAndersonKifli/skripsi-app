// import React, { FC, ReactNode } from "react";
// import { Navigate } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";
// // import { useUserAuth } from "../context/UserAuthContext";

// interface IProps {
//     children: JSX.Element
// }

// const ProtectedRoute: React.FC<IProps> = ({ children }): React.ReactElement => {
//   // const { user } = useUserAuth();
//   const { currentUser } = useUserAuth();

//   console.log("Check user in Private: ", currentUser);
//   if (!currentUser) {
//     return <Navigate to="/" />;
//   }
//   return children;
// };

// export default ProtectedRoute;

// interface Props {
//   children: JSX.Element;
// }

// export const ProtectedRoute = ({ children }: Props) => {
//   const { currentUser } = useUserAuth();

//   if (!currentUser) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// export default ProtectedRoute;
export {}