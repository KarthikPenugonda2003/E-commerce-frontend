// qr/generateQRCode.jsx
import React from 'react';
import qrcode from 'qrcode';

function GenerateQRCode({ totalCartAmount, paymentPhoneNumber }) {
    const generateQRCode = () => {
        const paymentDetails = `Total Amount: ${totalCartAmount}, Phone Number: ${paymentPhoneNumber}`;

        qrcode.toDataURL(paymentDetails, (err, url) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log(url);
            // Use the generated URL to display the QR code on the client-side
        });
    };

    return (
        <div>
            <button onClick={generateQRCode}>Generate QR Code</button>
        </div>
    );
}

export default GenerateQRCode;
