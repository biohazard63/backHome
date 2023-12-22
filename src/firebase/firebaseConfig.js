

// exemple d'utilisation de firebase auth
 export default const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
}

// exemple d'utilisation de firestore
export default const addUser = (id, userData) => {
    return firestore.collection('users').doc(id).set(userData)
}

