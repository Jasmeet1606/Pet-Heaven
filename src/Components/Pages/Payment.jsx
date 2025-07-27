import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useState } from "react";
import { db } from "../../Firebase";
import { useNavigate } from "react-router-dom";


function RazorpayButton() {
    const [amt,setAmt]=useState(0)
    const navigate = useNavigate();

  const handlePayment = () => {
    const options = {
      key: "rzp_test_cdMlM9elLtw0ZW", // Razorpay Key ID
      amount: amt*100, // Amount in paisa (₹500)
      currency: "INR",
      name: "Pet Heaven",
      description: "Product or Service",
      handler: async function (response) {
        // Save payment ID to Firebase Firestore
        const ref = doc(db, "payments", response.razorpay_payment_id);
        await setDoc(ref, {
          paymentId: response.razorpay_payment_id,
          status: "success",
          amount:amt,
          userId:sessionStorage.getItem("userId"),
          timestamp: Date.now(),
        });
console.log("User ID:", sessionStorage.getItem("userId"));
        toast("Payment successful!");
        navigate("/"); 

      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0066cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
        <input value={amt} onChange={(e)=>{setAmt(e.target.value)}}/>
        <button onClick={handlePayment}>Pay </button>
    </>
  );
}

export default RazorpayButton;
