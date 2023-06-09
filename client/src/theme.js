// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#E6FBFF",
      100: "#CCF7FE",
      200: "#99EEFD",
      300: "#66E6FC",
      400: "#33DDFB",
      500: "#00D5FA",
      600: "#00A0BC",
      700: "#006B7D",
      800: "#00353F",
      900: "#001519",
    },
    brand:{
      50: "#62828F",
      100: "#BAC8C9",
      200: "#EDC1B6",
      250: "#E85A4F",
      300: "#C7AEB4",
      400: "#4A5A67",
      500: "#ffffff",
      600: "#1A1A1A"
    }
  };

  // mui theme settings
export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
                button: colorTokens.brand[200],
                button2: colorTokens.brand[250],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.brand[50],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.brand[50],
                main: colorTokens.brand[100],
                light: colorTokens.brand[50],
                button: colorTokens.brand[200],
                button2: colorTokens.brand[250],
                text: colorTokens.brand[500],
                text2: colorTokens.brand[600],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.brand[50],
              },
            }),
      },
      typography: {
        fontFamily: ['Agency FB Bold', 'arial'].join(","),
        fontSize: 12,
        letterSpacing: "2px",
        h1: {
          fontFamily: ['Agency FB Bold', 'arial'].join(","),
          fontSize: 40,
          letterSpacing: "2px",
        },
        h2: {
          fontFamily: ['Agency FB Bold', 'arial'].join(","),
          fontSize: 32,
          letterSpacing: "2px",
        },
        h3: {
          fontFamily: ['Agency FB Bold', 'arial'].join(","),
          fontSize: 24,
          letterSpacing: "2px",
        },
        h4: {
          fontFamily: ['Agency FB Bold', 'arial'].join(","),
          fontSize: 18,
          letterSpacing: "2px",
        },
        h5: {
          fontFamily: ['Agency FB Bold', 'arial'].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ['Agency FB Bold', 'arial'].join(","),
          fontSize: 14,
          letterSpacing: "2px",
        },
      },
    };
  };