const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1000000;
const ONE_BILLION = 1000000000;
const ONE_TRILLION = 1000000000000;
const ONE_QUADRILLION = 1000000000000000;
const MAX = 9007199254740992;

const LESS_THAN_TWENTY = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const TENTHS_LESS_THAN_HUNDRED = [
  "zero",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const ENDS_WITH_DOUBLE_ZERO_PATTERN =
  /(hundred|thousand|(m|b|tr|quadr)illion)$/;
const ENDS_WITH_TEEN_PATTERN = /teen$/;
const ENDS_WITH_Y_PATTERN = /y$/;
const ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN =
  /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;

const ordinalLessThanThirteen: { [key: string]: string } = {
  zero: "zeroth",
  one: "first",
  two: "second",
  three: "third",
  four: "fourth",
  five: "fifth",
  six: "sixth",
  seven: "seventh",
  eight: "eighth",
  nine: "ninth",
  ten: "tenth",
  eleven: "eleventh",
  twelve: "twelfth",
};

const replaceWithOrdinalVariant = (numberWord: string) => {
  return ordinalLessThanThirteen[numberWord];
};

const makeOrdinal = (words: string): string => {
  if (
    ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) ||
    ENDS_WITH_TEEN_PATTERN.test(words)
  ) {
    return words + "th";
  } else if (ENDS_WITH_Y_PATTERN.test(words)) {
    return words.replace(ENDS_WITH_Y_PATTERN, "ieth");
  } else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
    return words.replace(
      ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN,
      replaceWithOrdinalVariant
    );
  }
  return words;
};

const toWords = (number: number, asOrdinal = false): string => {
  if (!isFinite(number)) {
    throw new TypeError(
      "Not a finite number: " + number + " (" + typeof number + ")"
    );
  }
  const words = generateWords(number);
  return asOrdinal ? makeOrdinal(words) : words;
};

const generateWords = (number: number, words: string[] = []): string => {
  let remainder = 0;
  let word = LESS_THAN_TWENTY[number];

  if (number === 0) {
    return !words ? "zero" : words.join(" ").replace(/,$/, "");
  }

  if (!words) {
    words = [];
  }

  if (number < 0) {
    words.push("minus");
    number = Math.abs(number);
  }

  if (number < 20) {
    remainder = 0;
    word = LESS_THAN_TWENTY[number];
  } else if (number < ONE_HUNDRED) {
    remainder = number % TEN;
    word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
    if (remainder) {
      word += "-" + LESS_THAN_TWENTY[remainder];
      remainder = 0;
    }
  } else if (number < ONE_THOUSAND) {
    remainder = number % ONE_HUNDRED;
    word = generateWords(Math.floor(number / ONE_HUNDRED)) + " hundred";
  } else if (number < ONE_MILLION) {
    remainder = number % ONE_THOUSAND;
    word = generateWords(Math.floor(number / ONE_THOUSAND)) + " thousand,";
  } else if (number < ONE_BILLION) {
    remainder = number % ONE_MILLION;
    word = generateWords(Math.floor(number / ONE_MILLION)) + " million,";
  } else if (number < ONE_TRILLION) {
    remainder = number % ONE_BILLION;
    word = generateWords(Math.floor(number / ONE_BILLION)) + " billion,";
  } else if (number < ONE_QUADRILLION) {
    remainder = number % ONE_TRILLION;
    word = generateWords(Math.floor(number / ONE_TRILLION)) + " trillion,";
  } else if (number <= MAX) {
    remainder = number % ONE_QUADRILLION;
    word =
      generateWords(Math.floor(number / ONE_QUADRILLION)) + " quadrillion,";
  }

  words.push(word);
  return generateWords(remainder, words);
};

export const toWordsOrdinal = (number: number): string => {
  const words = toWords(number);
  return makeOrdinal(words);
};
