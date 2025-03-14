/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        background:"rgb(245,243,244)",
        background_hover:"#eee1c9d7",
        navcolor:"rgb(230,114,35)",
        footer_background:"rgb(68,66,66)",
        home_background:"rgb(245,243,244)",
      },
      screens:{
        'xs': '425px',
      },
      spacing: {
        22:'5.5rem',
        68:'17rem',
        100:"30rem"
      },
       animation:{
        film:"scroll 35s linear infinite",
        film_md:"scroll_md 35s linear infinite",
        film_sm:"scroll_sm 35s linear infinite",
        film_xs:"scroll_xs 35s linear infinite",
        film_xxs:"scroll_xxs 35s linear infinite",

        film_last:"scroll_L 35s linear infinite",
        film_last_md:"scroll_Lmd 35s linear infinite",
        film_last_sm:"scroll_Lsm 35s linear infinite",
        film_last_xs:"scroll_Lxs 35s linear infinite",
        film_last_xss:"scroll_Lxxs 35s linear infinite",
       },
       keyframes: {
        //vertical pictures animation keyframes
        scroll: {
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-100%)"}
        },
        scroll_md: {
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-142%)"}
        },
        scroll_sm:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-350%)"}
        },
        scroll_xs:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-400%)"}
        },
        scroll_xxs:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-550%)"}
        },

        //horizontal pictures animation keyframes
        scroll_L:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-250%)"}
        },
        scroll_Lmd: {
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-350%)"}
        },
        scroll_Lsm:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-450%)"}
        },
        scroll_Lxs:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-750%)"}
        },
        scroll_Lxxs:{
          '0%': { transform: "translateX(0%)" },
          "100%":{transform:"translateX(-1100%)"}
        }
      },
    },
  },
  plugins: [],
}

