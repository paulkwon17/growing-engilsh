export default function numberFormatter(number: number) {
  switch (true) {
    case number > 100000000:
      return (Math.floor(number / 100000000 / 0.01) * 0.01).toString().substring(0, 3) + '억';
    case number > 100000:
      return (
        Math.floor(number / 10000)
          .toString()
          .substring(0, 4) + '만'
      );
    case number > 10000:
      return (Math.floor(number / 10000 / 0.01) * 0.01).toString().substring(0, 3) + '만';
    case number > 1000:
      return (Math.floor(number / 1000 / 0.01) * 0.01).toString().substring(0, 3) + '천';
    default:
      return number.toString();
  }
}
