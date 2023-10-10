function checkString(string, length) {
  return string.length <= length;
}

checkString('проверяемая строка', 20);
checkString('проверяемая строка', 18);
checkString('проверяемая строка', 10);
