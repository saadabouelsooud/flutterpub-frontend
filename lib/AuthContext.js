import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseClient';

const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        const docRef = doc(db, 'users', u.uid);
        const snap = await getDoc(docRef);
        const role = snap.exists() ? snap.data().role : null;
        setUser({ ...u, role });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const signUp = async (email, password) => {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    setUser({ ...cred.user, role: null });
  };

  const signIn = async (email, password) => {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, 'users', cred.user.uid);
    const snap = await getDoc(docRef);
    const role = snap.exists() ? snap.data().role : null;
    const current = { ...cred.user, role };
    setUser(current);
    return current;
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const cred = await signInWithPopup(auth, provider);
    const docRef = doc(db, 'users', cred.user.uid);
    const snap = await getDoc(docRef);
    const role = snap.exists() ? snap.data().role : null;
    const current = { ...cred.user, role };
    setUser(current);
    return current;
  };

  const updateRole = async (role) => {
    if (!user) return;
    await setDoc(doc(db, 'users', user.uid), { role }, { merge: true });
    setUser({ ...user, role });
  };

  const signOutUser = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{ user, loading, signUp, signIn, signInWithGoogle, updateRole, signOut: signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
