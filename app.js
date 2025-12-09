// app.js - Shared logic

async function updateAuction(data) {
    await db.collection("auction").doc("currentPlayer").update({
        ...data,
        lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function listenAuctionUpdates(callback) {
    db.collection("auction")
      .doc("currentPlayer")
      .onSnapshot((doc) => {
         if (doc.exists) callback(doc.data());
      });
}
