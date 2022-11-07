function home({ colorMode, ...props }) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7 19H3.3C1.5 19 0 17.556 0 15.827V8.892C0 8.018 0.4 7.163 1.1 6.574L7.8 0.798C9.1 -0.266 10.9 -0.266 12.2 0.798L18.9 6.574C19.6 7.144 20 8.018 20 8.892V15.827C19.9 17.651 18.5 19 16.7 19ZM10 1.957C9.7 1.957 9.4 2.052 9.1 2.242L2.4 8.018C2.1 8.208 2 8.588 2 8.987V15.922C2 16.587 2.6 17.176 3.3 17.176H16.6C17.3 17.176 17.9 16.606 17.9 15.922V8.987C17.9 8.607 17.7 8.322 17.5 8.018L10.8 2.242C10.6 2.052 10.3 1.957 10 1.957Z"
        fill={colorMode === "dark" ? "white" : "black"}
      />
      <line
        x1="10.125"
        y1="17.125"
        x2="10.125"
        y2="12.875"
        stroke={colorMode === "dark" ? "white" : "black"}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default home;
