# 2FA QR Code Service

A simple service to generate QR codes for 2FA authentication.

## Usage

Include the scripts in your HTML:

```html
<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/p3073845/2fa-qr-service@main/src/qrService.js"></script>
```

Generate QR code:
```javascript
QR2FAService.generateQRCode("qrcode-element-id", "YOUR_SECRET_KEY", {
  userEmail: "user@example.com",
  issuer: "YourApp"
});
```