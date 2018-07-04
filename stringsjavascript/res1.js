function identift(input)
{
   if (Object.prototype.toString.call(input) === '[object String]')
   console.log(true);

else
console.log(false);
}
identift('abcd');
identift('w3resource');
identift([1,2,3,4]);