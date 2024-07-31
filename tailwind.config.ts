import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        alfa_color: "#BF6415",
        beta_color: "#8C503A",
        text_color: "#FFFFFF",
        contrast_text: "#D9CCC1",
        contrast_color_1: "",
        contrast_color_2: "",
        contrast_color_3: "",
        contrast_color_4: "",
        background_color: "#024059",
        background_aux: "#023E73",
    
      },
      fontFamily: {
        'Inter': ['Inter'],
      },
    },
  },
  plugins: [],
};
export default config;
