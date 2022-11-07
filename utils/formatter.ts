function formatter(num: number) {
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(num);
}

export default formatter;
