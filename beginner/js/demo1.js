
function generateOTP() {
    return Math.trunc(Math.random() * 9000) + 1000;
}

console.log("Your OTP is:", generateOTP());