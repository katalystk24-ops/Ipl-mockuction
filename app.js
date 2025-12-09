// Initialize Firebase (replace with your own config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ---------------------------------
// Shared Auction Real-time Logic
// ---------------------------------

// Update auction data (Admin)
async function updateAuction(data) {
    try {
        await db.collection("auction").doc("currentPlayer").update({
            ...data,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Auction updated:", data);
    } catch (err) {
        console.error("Update failed:", err);
    }
}

// Listen for changes (Viewer/Bidder)
function listenAuctionUpdates(callback) {
    db.collection("auction")
      .doc("currentPlayer")
      .onSnapshot((doc) => {
         if (doc.exists) callback(doc.data());
      });
}

// ---------------------------------
// Example: Admin actions
// ---------------------------------

async function startAuction(playerName, baseBid) {
    await db.collection("auction").doc("currentPlayer").set({
        playerName: playerName,
        currentBid: baseBid,
        sold: false,
        bidders: []
    });
}

// Admin places a bid
async function placeBid(teamName, bidAmount) {
    const docRef = db.collection("auction").doc("currentPlayer");
    const docSnap = await docRef.get();
    if(docSnap.exists){
        const data = docSnap.data();
        if(bidAmount > data.currentBid){
            await docRef.update({
                currentBid: bidAmount,
                lastBidder: teamName,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log(`${teamName} bid ${bidAmount}`);
        } else {
            console.log("Bid too low!");
        }
    }
}
