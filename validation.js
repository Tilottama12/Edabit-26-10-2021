-- 1. Is the Number Less than or Equal to Zero?

function lessThanOrEqualToZero(num) {
	return num<=0;
        console.log(lessThanOrEqualToZero)
}

-- 2.Less Than 100?

function lessThan100(a, b) {
	if(a+b<100){
		return true;
	}
else
	{
		return false;
	}
}

-- 3. Are the Numbers Equal?

function isSameNum(num1, num2) {
	var num1
	var num2
	if(num1==num2)
		return true;
	else
		return false;
}

-- 4. Two makes ten

function makesTen(a, b) {
if (a == 10 || b == 10) {
return true;
}
else if (a + b == 10) {
return true;
}
else {
return false;
}
}
}

-- 5. Check if an Integer is Divisible By Five -very easy

function divisibleByFive(n) {
	
}
var divisible = divisibleByFive(5)

-- 6. Is it Time for Milk and Cookies? - easy

function timeForMilkAndCookies(date) {
	 if date.month == 12 && date.day == 24:
        return True

    else:
        return False
}
console.log(timeForMilkAndCookies(datetime.date()))

-- 7. Check if One Array can be Nested in Another - easy

function canNest(arr1, arr2) {
  if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
    return true;
  } else {
    return false;
  }
};
console.log(canNest([1, 2, 3, 4], [0, 6]));
console.log(canNest([3, 1], [4, 0]));
console.log(canNest([9, 9, 8], [8, 9]));
console.log(canNest([1, 2, 3, 4], [2, 3]));

}

-- 8. Is the Number Symmetrical? - easy

func isSymmetrical( num : Int) -> Bool {
var reverse: Int = 0
var mainVal: Int = num
while (mainVal != 0) {
reverse = reverse * 10
reverse = reverse + mainVal % 10
mainVal = mainVal / 10
}
if num == reverse {
return true
}else {
return false
}
}

-- 9. Check if All Values Are True - mid

function allTruthy(...args) {
	for(let i=0; i < args.length; i++)
		if (!args[i]) {
			return false;
		}
}
	return true;
}

-- 10. Match the Last Item - mid

function matchLastItem(arr) {
	return arr[arr.length-1] == arr.slice(0,arr.length-1).join("");
}

-- 11. factor chain - mid

function factorChain(arr) {
	arr.every((el, i)=> arr[i+1] ? arr[i+1] % el == 0: true);
}

-- 12. Sum of Number Elements in an Array - mid

function numbersSum(arr) {
	let sum = 0;
	for (let el of arr) {
		if(typeof el == "number") {
			sum +=el;
		}
	}
	return sum;
}

-- 13. Valid Hex Code -   mid

function isValidHexCode(str) {
	const regex = /^#[A-F|0-9]{6}$/gi;
	return regex.test(code);
}

-- 14. Oddish vs. Evenish - hard

function oddishOrEvenish(num) {
	let strNum = String(num),
			sum = 0;
	
	for(let i=0; i<strNum.length; i++)
		sum+=parseInt(strNum[i]);
    }
      if (sum % 2 === 0){
	return "evenish";
     }
      return "oddish";
    }








