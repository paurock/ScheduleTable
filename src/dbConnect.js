import firebase from "./configFB";
import "firebase/auth";

const auth = firebase.auth();
//DB
const db = firebase.firestore();

//Set ref to docs in Firebase firestore
export const getDocRef = arrName => {
  const user = auth.currentUser; // return object if signedin and null if not
  return user
    ? console.log("Logged in user")
    : db
        .collection("data")
        .get()
        .catch(err => console.log(err));
};

export const setDataFB = (key, item) => {
  //Create reducer to coherence writing data with FB format
  //(FB donot support nested arrays that is used in state)
  const emptyArr = [];
  const objVal = it => Object.values(it)[0];
  item.map(it =>
    emptyArr.push(
      objVal(it).name !== ("" || null || undefined) && {
        name: objVal(it).name,
        id: objVal(it).id
      }
    )
  );
  //Write data to FB
  db.collection("data")
    .doc("219")
    .set(
      {
        [key]: emptyArr
      },
      { merge: true }
    );
};
