import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app)

const Products = () => {
    // const { user } = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3>Current user is : <small>{user ? user.displayName : 'Nobody'}</small> </h3>
        </div>
    );
};

export default Products;