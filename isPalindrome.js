//وصف التحدي
// قم بكتابة دالة function تستقبل عدد صحيح وتقوم بإرجاع قيمة من نوع boolean،
// تقوم بإرجاع true إذا كان عدد مقلوب وfalse إذا كان غير ذلك.


let num=1234;
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        console.log(lastDigit);
        reverse = (reverse * 10) + lastDigit;
        num = Math.floor(num / 10);
    }

    console.log(original === reverse);

