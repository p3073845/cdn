// QR Code Generation Service for 2FA
(function(global) {
  const QR2FAService = {
    generateQRCode: function(elementId, secretKey, options = {}) {
      if (!window.QRCode) {
        console.error('QRCode library not loaded');
        return;
      }

      const defaultOptions = {
        width: 200,
        height: 200,
        colorDark: "#FFFFFF",
        colorLight: "#374151",
        userEmail: "user@example.com",
        issuer: "2FA-Demo"
      };

      const finalOptions = { ...defaultOptions, ...options };
      const qrText = `otpauth://totp/${finalOptions.issuer}:${finalOptions.userEmail}?secret=${secretKey}&issuer=${finalOptions.issuer}`;

      return new QRCode(document.getElementById(elementId), {
        text: qrText,
        width: finalOptions.width,
        height: finalOptions.height,
        colorDark: finalOptions.colorDark,
        colorLight: finalOptions.colorLight
      });
    },

    validateCode: function(secretKey, code) {
      // Add TOTP validation logic here if needed
      return code.length === 6;
    }
  };

  // Export to window object
  global.QR2FAService = QR2FAService;
})(typeof window !== 'undefined' ? window : this);