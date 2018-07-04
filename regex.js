//(1)To search for whether first letter is capital
console.log("(1)To search for whether first letter is capital");
function upper_case(str) {
  regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's first character is uppercase");
  } else {
    console.log("String's first character is not uppercase");
  }
}
upper_case("Abcd");
upper_case("abcd");
console.log("");
//(2)pattern at index
console.log("(2)pattern at index");
let input = "A string with 3 numbers in it...and 42 and 88 were present.";
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log("Found", match[0], "at", match.index);
}
console.log("");
//(3)To search dash,underscore in a string
console.log("(3)To search dash,underscore in a string");
function is_alphaDash(str) {
  regexp = /^[a-z0-9_\-]+$/i;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_alphaDash("12-133"));
console.log(is_alphaDash("100_23"));
console.log("");
//(4)To replace whitespaces with special character
console.log("(4)To replace whitespaces with special character");
function Trim(str) {
  var result;
  if (typeof str === "string") {
    result = str.replace(/^\s+|\s+$/g, "#");
    return result;
  } else {
    return false;
  }
}
console.log(Trim(" developer "));
console.log("");
//(5)To check the time
console.log("(5)To check the time");
function is_timeString(str) {
  regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_timeString("11:35:30"));
console.log(is_timeString("90:90:90"));
console.log("");
//(6)To check the value is hexadecimal or not
console.log("(6)To check the value is hexadecimal or not");
function is_hexadecimal(str) {
  regexp = /^[0-9a-fA-F]+$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_hexadecimal("ffffff"));
console.log(is_hexadecimal("fz5500"));
console.log("");

//(7)To chech for no. of vowels in a string
console.log("(7)To chech for no. of vowels in a string");
function vowel_count(str) {
  return str.match(/[aeiou]/gi).length;
}
vowel = vowel_count("The quick brown fox jumps over the lazy dog");
console.log(vowel);
console.log("");
//(8)To chech for alphanumeric charactersin string
console.log("(8)To chech for alphanumeric charactersin string");
function is_alphaNumeric(str) {
  regexp = /^[A-Za-z0-9]+$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_alphaNumeric("37828sad"));
console.log(is_alphaNumeric("3243#$sew"));
console.log("");

//(9)to identify a credit card number
console.log("(9)to identify a credit card number");
function is_creditCard(str) {
  regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_creditCard("378282246310006"));
console.log(is_creditCard("37828224630006"));
console.log("");
console.log("(10)Replacing the text with pattern matching");
var stmt1 = "Visit Microsoft!";
var result = stmt1.replace(/microsoft/i, "Linkedin");
console.log(result);
console.log("");
var str1 = "Is this all there is?";
var patt1 = /[h]/g;
var result1 = str1.match(patt1);
var result2 = patt1.test(str1);
console.log(result1);
console.log(result2);
console.log("");
var x = JSON.parse('{"foo": 1, "bar": 2}');
console.log(x.foo);
console.log(x.bar);
console.log("");

//(11)emailverify
console.log("(11)email verification");
function email(str) {
  regex = /^[A-Za-z0-9_]+([\.-]?[A-za-z0-9_]+)*@[A-Za-z0-9_]+([\.-]?[A-Za-z0-9_]+)*(\.[a-z]{2,3})+$/;
  if (regex.test(str)) {
    return "email verified";
  } else {
    return "invalid email";
  }
}
console.log(email("www-saa.as@google.com"));
console.log("");
//(12)to search a date in a string
console.log("(12)to search a date in a string");
function is_dateStr(str) {
  regexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_dateStr("01/01/2015"));
console.log(is_dateStr("01/22/2015"));
console.log("");
//(13)To count words in a statement
console.log("(13)To count words in a statement");
function count_words() {
  str1 = "The quick brown fox jumps over the lazy dog.";
  //exclude  start and end white-space
  str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
  //convert 2 or more spaces to 1
  str1 = str1.replace(/[ ]{2,}/gi, " ");
  // exclude newline with a start spacing
  str1 = str1.replace(/\n /, "\n");
  console.log(str1.split(" ").length);
}
console.log(count_words());
//(14)To check for an IP address
console.log("(14)To check for an IP address ");
function is_IP(str) {
  regexp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_IP("198.156.23.5"));
console.log(is_IP("172.16.0.1"));
console.log("");
//(15)To check for an url is valid
console.log("(15)To check for an url is valid");
function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_url("http://www.example.com"));
console.log(is_url("https://www.example.com"));
console.log(is_url("www.example.com"));
console.log("");
//(16)To check for the social security number
console.log("(16)To check for the social security number");
function is_socialSecurity_Number(str) {
  regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_socialSecurity_Number("019-90-5680"));
console.log(is_socialSecurity_Number("K8V-3Y1"));
console.log("");
//(17)To check whether a given value is valid domain
console.log("(17)To check whether a given value is valid domain");
function is_domain(str) {
  regexp = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
}
console.log(is_domain("www.example.com"));
console.log(is_domain("www.npm.co.uk"));
console.log(is_domain("http://www.example.com"));
console.log(is_domain("https://www.example.com"));
console.log(is_domain("www.example.com"));
console.log("");
//(18)starting index into the string for the next search
console.log("(18)starting index into the string for the next search");
var regexp = /foo|bar|baz/g;
console.log(regexp.exec("foo bar baz")[0]);
console.log(regexp.lastIndex);
regexp.lastIndex = 5;
console.log(regexp.exec("foo bar baz")[0]);
console.log("");
//(19)Testing a string for match
console.log("(19)Testing a string for match");
var str5 = "Javascript is an interesting scripting language";
var re = new RegExp("script", "g");
var result5 = re.test(str5);
console.log("Test 1 - returned value : " + result5);
re = new RegExp("pushing", "g");
var result5 = re.test(str5);
console.log("Test 2 - returned value : " + result5);
//(20)To check the given mobile no is valid
console.log("(20)To check the given mobile no is valid");
function checkPhoneNumber(phoneNo) {
  var phoneRE = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (phoneRE.test(phoneNo)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkPhoneNumber(1234567890));
console.log("");
//(21)To print an integer with commas as thousands separators
console.log("(21)To print an integer with commas as thousands separators");
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
console.log(thousands_separators(1000));
console.log(thousands_separators(10000.23));
console.log(thousands_separators(100000));
