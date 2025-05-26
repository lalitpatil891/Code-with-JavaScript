// Generate a random 4-digit number between 1000 and 9999
// Explanation:
// Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive), e.g., 0.1234
// Multiplying by 9000 gives a number between 0 and 8999.999..., e.g., 0.1234 * 9000 ≈ 1110.6
// Adding 1000 shifts the range to 1000 to 9999.999..., e.g., 1110.6 + 1000 = 2110.6
// Math.trunc() removes the decimal part and returns only the integer part (no rounding), e.g., trunc(2110.6) = 2110


function generateOTP() {
    return Math.trunc(Math.random() * 9000) + 1000;
}

console.log("Your OTP is:", generateOTP());


/*
A 6-digit OTP instead

An alphanumeric OTP

OTP with expiry and verification logic (for real apps)

*/
