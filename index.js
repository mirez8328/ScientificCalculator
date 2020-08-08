var pointflag = false; //যাতে দশমিক একসাথে একটার বেশী না দেয়া যায়
var addFlag = false; //যাতে একসাথে একটার বেশি প্লাস সাইন দেয়া না যায়
var subFlag = false; //যাতে একসাথে একটার বেশি মাইনাস সাইন দেয়া না যায়
var multiplyFlag = false; //যাতে একসাথে একটার বেশি গুণ সাইন দেয়া না যায়
var divFlag = false; //যাতে একসাথে একটার বেশি প্লাস ভাগ দেয়া না যায়
var percentageFlag = false; //
var operatorFlag = false; //সর্বশেষ পেসকৃত বাটনটি কোন অপারেটর ছিল না নাম্বার ছিল তা জানার জন্য কিনা
var operatorFlag2 = false; //একের অধিক অপারেশন এর জন্য প্রিভিয়াস অপারেটর ক্যালকুলেট করার জন্য 
var OF2Value = ''; //সর্বশেষ অপারেশন এর সাইন জানার জন্য
var check = false; //অপারেটর এর মাধ্যমে একের অধিক ক্যালকুলেট করার জন্য
var check2 = false; //অপারেটর এর মাধ্যমে ক্যালকুলেট করার পর রেজাল্ট শোতে একাধিক ডিজিট ব্যবহার এর জন্য
var calculation = 0; //ক্যালকুলেট করার জন্য ভ্যরিয়েবল
var count = 0; // একের অধিক অপারেটর ইউজ এর হিসাব রাখে
var sqrtFlag = false; //sqrtFlag একসাথে একের অধিক sqrtFlag ফাংশান ইউজ করতে দেয় না
var modulusFlag = false; //modulusFlag একসাথে একের অধিক modulus ফাংশান ইউজ করতে দেয় না
var modulusFlag2 = false; //modulusFlag2 true এর পর অপারেটরস/ইকুয়েল ক্লিক করলে modulusFlag2 true এর কন্ডিশনে ঢুকবে
var modulusDividend = 0; //modulusDividend ইনপুট থেকে Divident কে সেভ করে রাখে। modulusFlag এবং modulusFlag2 true করে
var powerBase = 0; // powerBase প্রথমে ইনপুট ফিল্ড থেকে ইনপুট নিয়ে powerBase রাখে এবং powerFlag true করে
var powerFlag = false; //powerFlag true এর পর অপারেটরস/ইকুয়েল ক্লিক করলে powerFlag true এর কন্ডিশনে ঢুকবে
var yrootBase =0 ; // yrootBase প্রথমে ইনপুট ফিল্ড থেকে ইনপুট নিয়ে yrootBase রাখে এবং yrootFlag true করে
var yrootFlag = false; //yrootFlag true এর পর অপারেটরস/ইকুয়েল ক্লিক করলে yrootFlag true এর কন্ডিশনে ঢুকবে

/* Operation */
function Addition(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(addFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  eval(calculation + OF2Value + reminder);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                        else if(powerFlag == true){
                            calculation = eval(calculation + Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(calculation + Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                        else{
                            calculation = eval(calculation + OF2Value + existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '+';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  reminder;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                        else if(powerFlag == true){
                            calculation = eval(Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '+';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    calculation = existNum;
                    document.querySelector('#result2').value = existNum + '+';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '+';
            }
            pointflag = false;
            addFlag = true;
            subFlag = false;
            multiplyFlag = false;
            divFlag = false;
            modulusFlag2 = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '+';
            percentageFlag = false;
            sqrtFlag = false;
            count++;
            powerFlag = false;
            yrootFlag = false;
        }
    
}

function Subtraction(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

        if(subFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  eval(calculation + OF2Value + reminder);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                        else if(powerFlag == true){
                            calculation = eval(calculation + Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(calculation + Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                        else{
                            calculation = eval(calculation+OF2Value+existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '-';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  reminder;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                        else if(powerFlag == true){
                            calculation = eval(Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '-';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    calculation = existNum;
                    document.querySelector('#result2').value = existNum + '-';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '-';
            }
            pointflag = false;
            subFlag = true;
            addFlag = false
            multiplyFlag = false;
            divFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '-';
            percentageFlag = false;
            sqrtFlag = false;
            count++;
            powerFlag = false;
            yrootFlag = false;
        }
    
}

function Multiplication(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(multiplyFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  eval(calculation + OF2Value + reminder);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                        else if(powerFlag == true){
                            calculation = eval(calculation + Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(calculation + Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                        else{
                            calculation = eval(calculation+OF2Value+existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '*';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  reminder;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                        else if(powerFlag == true){
                            calculation = eval(Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '*';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    calculation = existNum;
                    document.querySelector('#result2').value = existNum + '*';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '*';
            }
            pointflag = false;
            multiplyFlag = true;
            addFlag = false;
            subFlag = false;
            divFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '*'
            percentageFlag = false;
            sqrtFlag = false;
            count++;
            powerFlag = false;
            yrootFlag = false;
        }
    
}

function Division(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(divFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    if(check == true){
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  eval(calculation + OF2Value + reminder);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                        else if(powerFlag == true){
                            calculation = eval(calculation + Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(calculation + Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                        else{
                            calculation = eval(calculation+OF2Value+existNum)
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                    }
                    else{
                        if(percentageFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else if(sqrtFlag == true){
                            calculation = calculation;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + '/';
                        }
                        else if(modulusFlag2 == true){
                            //existNum2 = existNum2.replace("Mod","%");
                            var reminder = eval(modulusDividend % existNum);
                            calculation =  reminder;
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                        else if(powerFlag == true){
                            calculation = eval(Math.pow(powerBase,existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                        else if(yrootFlag == true){
                            calculation = eval(Math.pow(yrootBase,1/existNum));
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                        else{
                            calculation = eval(existNum2 + existNum);
                            document.querySelector('#result').value = calculation;
                            document.querySelector('#result2').value = existNum2 + existNum + '/';
                        }
                    }
                    check = true;
                    check2 = true;
                }
                else{
                    calculation = existNum;
                    document.querySelector('#result2').value = existNum + '/';
                    document.querySelector('#result').value = '0';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + '/';
            }
            pointflag = false;
            divFlag = true;
            addFlag = false;
            subFlag = false;
            multiplyFlag = false;
            modulusFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            OF2Value = '/';
            percentageFlag = false;
            sqrtFlag = false;
            count++;
            powerFlag = false;
            yrootFlag = false;
        }
    
}

/* 1st row */
function Percentage(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        if(percentageFlag == false){
            var fraction = eval(existNum/100);
            var input = eval(existNum2.slice(0,-1));

            if(OF2Value == '+'){
                calculation = eval(existNum2 + (input * fraction));
                document.querySelector('#result').value = (input * fraction);
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
            else if(OF2Value == '-'){
                calculation = eval(existNum2 + (input * fraction));
                document.querySelector('#result').value = (input * fraction);
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
            else if(OF2Value == '*'){
                calculation = (input * fraction);
                document.querySelector('#result').value = fraction;
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
            else if(OF2Value == '/'){
                calculation = eval(existNum2 + fraction);
                document.querySelector('#result').value = fraction;
                document.querySelector('#result2').value = existNum2 + '(' + existNum + ')%';
                percentageFlag = true;
            }
        }
    }
    sqrtFlag = false;
}

function SqurerootSTD(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.sqrt(existNum);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + '√(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.sqrt(existNum);
        document.querySelector('#result2').value = '√(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Modulus(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    
        if(modulusFlag == false){
            if(operatorFlag == false){
                if(operatorFlag2 == true){
                    modulusDividend = existNum;
                    document.querySelector('#result2').value = existNum2 + existNum + 'Mod';
                }
                else{
                    modulusDividend = existNum;
                    document.querySelector('#result2').value = existNum + 'Mod';
                }
            }
            else{
                document.querySelector('#result2').value = existNum2.slice(0,-1) + 'Mod';
            }
            pointflag = false;
            modulusFlag = true;
            modulusFlag2 = true;
            addFlag = false;
            subFlag = false;
            multiplyFlag = false;
            divFlag = false;
            operatorFlag = true;
            operatorFlag2 = true;
            check2 = true;
        }    
}

function Sine(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.sin((Math.PI/180)*existNum);
        calculation = eval(calculation + OF2Value + sqrtCal)
        document.querySelector('#result2').value = existNum2 + 'sin(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.sin((Math.PI/180)*existNum);
        document.querySelector('#result2').value = 'sin(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Cosine(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.cos((Math.PI/180)*existNum);
        calculation = eval(calculation + OF2Value + sqrtCal)
        document.querySelector('#result2').value = existNum2 + 'cos(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.cos((Math.PI/180)*existNum);
        document.querySelector('#result2').value = 'cos(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Tangent(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.tan((Math.PI/180)*existNum);
        calculation = eval(calculation + OF2Value + sqrtCal)
        document.querySelector('#result2').value = existNum2 + 'tan(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.tan((Math.PI/180)*existNum);
        document.querySelector('#result2').value = 'tan(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

/* 2nd row */
function CuberootSTD(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.cbrt(existNum);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + '∛(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.cbrt(existNum);
        document.querySelector('#result2').value = '∛(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Factorial(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        factCal = fact(existNum);
        function fact(num) { 
            if(num == 1){ return 1}
            return num * fact(num-1);
         }
        calculation = calculation + factCal;
        document.querySelector('#result2').value = existNum2 + 'fact(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = fact(existNum);
        function fact(num) { 
            if(num == 1){ return 1}
            return num * fact(num-1);
        }
        document.querySelector('#result2').value = 'fact(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function SineI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    var x = 57.29577951308232;

    if(operatorFlag2 == true){
        sqrtCal = Math.asin(existNum)*x;
        calculation = eval(calculation + OF2Value + sqrtCal)
        document.querySelector('#result2').value = existNum2 + 'asin(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.asin(existNum)*x;
        document.querySelector('#result2').value = 'asin(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function CosineI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    var x = 57.29577951308232;

    if(operatorFlag2 == true){
        sqrtCal = Math.acos(existNum)*x;
        calculation = eval(calculation + OF2Value + sqrtCal)
        document.querySelector('#result2').value = existNum2 + 'acos(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.acos(existNum)*x;
        document.querySelector('#result2').value = 'acos(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function TangentI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;
    var x = 57.29577951308232;

    if(operatorFlag2 == true){
        sqrtCal = Math.atan(existNum)*x;
        calculation = eval(calculation + OF2Value + sqrtCal)
        document.querySelector('#result2').value = existNum2 + 'atan(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.atan(existNum)*x;
        document.querySelector('#result2').value = 'atan(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

/*3rd Row*/
function SquareSTD(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.pow(existNum,2);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + 'sqr(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(existNum,2);
        document.querySelector('#result2').value = 'sqr(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function PI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        piCal = Math.PI;
        calculation = calculation + piCal;
        document.querySelector('#result2').value = existNum2 + 'π';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.PI;
        document.querySelector('#result2').value = 'π';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Log(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        logCal = Math.log10(existNum);
        calculation = calculation + logCal;
        document.querySelector('#result2').value = existNum2 + 'log(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.log10(existNum);
        document.querySelector('#result2').value = 'log(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Ln(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        lnCal = Math.log(existNum);
        calculation = calculation + lnCal;
        document.querySelector('#result2').value = existNum2 + 'ln(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.log(existNum);
        document.querySelector('#result2').value = 'ln(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function Exponential(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        expCal = Math.exp(existNum);
        calculation = calculation + expCal;
        document.querySelector('#result2').value = existNum2 + 'e^(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.exp(existNum);
        document.querySelector('#result2').value = 'e^(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
}

/* 4th row */
function TenPx(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        tenPCal = Math.pow(10,existNum);
        calculation = eval(calculation + OF2Value + tenPCal);
        document.querySelector('#result2').value = existNum2 + '10^(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(10,existNum);
        document.querySelector('#result2').value = '10^(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function SquareSCI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.pow(existNum,2);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + 'sqr(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(existNum,2);
        document.querySelector('#result2').value = 'sqr(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function CubeSTD(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.pow(existNum,3);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + 'cube(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(existNum,3);
        document.querySelector('#result2').value = 'cube(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function CubeSCI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.pow(existNum,3);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + 'cube(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.pow(existNum,3);
        document.querySelector('#result2').value = 'cube(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function XPY(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        powerBase = existNum;
        calculation = calculation;
        document.querySelector('#result2').value = existNum2 + existNum + '^';
    }
    else{
        powerBase = existNum;
        document.querySelector('#result2').value = existNum + '^';
    }
    powerFlag = true;
    count++;
    percentageFlag = false;
    check2 = true;
    operatorFlag = true;
    operatorFlag2 = true;
}

/* 5th row */
function OneBySTD(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = eval(1/existNum);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + '1/(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = eval(1/existNum);
        document.querySelector('#result2').value = '1/(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function OneBySCI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = eval(1/existNum);
        calculation = calculation + sqrtCal;
        document.querySelector('#result2').value = existNum2 + '1/(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = eval(1/existNum);
        document.querySelector('#result2').value = '1/(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function SquarerootSCI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.sqrt(existNum);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + '√(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.sqrt(existNum);
        document.querySelector('#result2').value = '√(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function CuberootSCI(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        sqrtCal = Math.cbrt(existNum);
        calculation = eval(calculation + OF2Value + sqrtCal);
        document.querySelector('#result2').value = existNum2 + '∛(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    else{
        calculation = Math.cbrt(existNum);
        document.querySelector('#result2').value = '∛(' + existNum +')';
        document.querySelector('#result').value = calculation;
    }
    sqrtFlag = true;
    percentageFlag = false;
    operatorFlag2 = true;
    count++;
}

function YrootX(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(operatorFlag2 == true){
        yrootBase = existNum;
        calculation = calculation;
        document.querySelector('#result2').value = existNum2 + existNum + 'yroot';
    }
    else{
        yrootBase = existNum;
        document.querySelector('#result2').value = existNum + 'yroot';
    }
    yrootFlag = true;
    count++;
    percentageFlag = false;
    check2 = true;
    operatorFlag = true;
    operatorFlag2 = true;
}

/*Insert Digit*/

function Zero(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0'){ existNum = '' }
    if(check2 == true){ existNum = '' }
        var text = document.querySelector("#d0").value;
        document.querySelector("#result").value = existNum + text;
        addFlag = false;
        subFlag = false;
        multiplyFlag = false;
        divFlag = false;
        modulusFlag = false;
        operatorFlag = false;
    
}

function One(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
        var text = document.querySelector("#d1").value;
        document.querySelector("#result").value = existNum + text;
        addFlag = false;
        subFlag = false;
        multiplyFlag = false;
        divFlag = false;
        modulusFlag = false;
        operatorFlag = false;
        check2 =false;
}

function Two(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d2").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false
    check2 =false;;
}

function Three(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d3").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Four(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d4").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 = false;
}

function Five(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d5").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 = false;
}

function Six(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d6").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Seven(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d7").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Eight(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d8").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Nine(){
    var existNum = document.querySelector('#result').value;
    if(existNum == '0' || check2 == true){ existNum = '' }
    var text = document.querySelector("#d9").value;
    document.querySelector("#result").value = existNum + text;
    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    operatorFlag = false;
    check2 =false;
}

function Point(){
    var existNum = document.querySelector('#result').value;
    if(pointflag == true) {  }
    if(pointflag == false) {
        pointflag = true
        var text = document.querySelector("#point").value;
        document.querySelector("#result").value = existNum + text;
    }
    
}

/*Negation*/
function Negation(){
    document.querySelector("#result").value = document.querySelector("#result").value * (-1);
}

/*Clear Function*/
function Clear(){
    document.querySelector("#result").value = '0';
    document.querySelector("#result2").value = '';

    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    modulusFlag2 = false;
    modulusDividend = 0
    operatorFlag = false;
    operatorFlag2 = false;
    OF2Value = '';
    powerFlag = false;
    powerBase = 0;
    yrootFlag = false;
    yrootBase = 0;
    check = false;
    check2 = false;
    pointflag = false;
    percentageFlag = false;
    sqrtFlag = false;
    count = 0;
    calculation = 0;
}

/*Delete Function*/
function Delete(){
    var presentValue = document.querySelector('#result').value;
    if(presentValue != ''){
        if(presentValue.length == 1){
            document.querySelector('#result').value = document.querySelector("#result").value.slice(0,-1) + '0';
        }
        else{
            document.querySelector('#result').value = document.querySelector("#result").value.slice(0,-1);
        }
    }
}

/*Calculation*/
function Calculate(){
    var existNum = document.querySelector('#result').value;
    var existNum2 = document.querySelector('#result2').value;

    if(count>1){
        if(percentageFlag == true){
            calculation = calculation;
        }
        else if(sqrtFlag == true){
            calculation = calculation
        }
        else if(modulusFlag2 == true){
            //existNum2 = existNum2.replace("Mod","%");
            var reminder = eval(modulusDividend % existNum);
            calculation =  eval(calculation + OF2Value + reminder);
        }
        else if(powerFlag == true){
            calculation = eval(calculation + OF2Value + Math.pow(powerBase,existNum));
        }
        else if(yrootFlag == true){
            calculation = eval(calculation + OF2Value + Math.pow(yrootBase,1/existNum));
        }
        else{
            calculation = eval(calculation + OF2Value + existNum);
        }
    }
    else{
        if(percentageFlag == true){
            calculation = calculation;
        }
        else if(sqrtFlag == true){
            calculation = calculation;
        }
        else if(modulusFlag2 == true){
            //existNum2 = existNum2.replace("Mod","%");
            calculation =  eval(modulusDividend % existNum);
        }
        else if(powerFlag == true){
            calculation = Math.pow(powerBase,existNum);
        }
        else if(yrootFlag == true){
            calculation = Math.pow(yrootBase,1/existNum);
        }
        else{
            calculation = eval(existNum2 + existNum);
        }
    }

    document.querySelector('#result').value = calculation;
    document.querySelector('#result2').value ='';

    addFlag = false;
    subFlag = false;
    multiplyFlag = false;
    divFlag = false;
    modulusFlag = false;
    modulusFlag2 = false;
    modulusDividend = 0
    operatorFlag = false;
    operatorFlag2 = false;
    OF2Value = '';
    powerFlag = false;
    powerBase = 0;
    yrootFlag = false;
    yrootBase = 0;
    check = false;
    check2 = false;
    pointflag = false;
    percentageFlag = false;
    sqrtFlag = false;
    count = 0;
}

// menu js

//সাইডবার অন করা জন্য
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

//সাইডবার অফ করার জন্য
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//সাইন্টেফিক ক্যালকুলেটর অফ হয়ে স্ট্যান্ডার্ড ক্যালকুলেটর অন হবে
function standard() {
    var x = document.querySelectorAll(".scientific");
    for(var i=0 ; i<x.length ; i++){
        x[i].style.display = "none";
    }

    var y = document.querySelectorAll(".standard");
    for(var j=0 ; j<y.length ; j++){
        y[j].style.display = "block";
    }
    
    var z = document.querySelectorAll(".btn");
    for(var k=0 ; k<z.length ; k++){
        z[k].style.width = "20%";
    }

    document.getElementById('topHeading').innerText = "Standard Calculator";
    document.getElementById("mySidenav").style.width = "0";
}

//স্ট্যান্ডার্ড ক্যালকুলেটর অফ হয়ে সাইন্টেফিক ক্যালকুলেটর অন হবে
function scientific() {
    var x = document.querySelectorAll(".scientific");
    for(var i=0 ; i<x.length ; i++){
        x[i].style.display = "block";
    }

    var y = document.querySelectorAll(".standard");
    for(var j=0 ; j<y.length ; j++){
        y[j].style.display = "none";
    }
    
    var z = document.querySelectorAll(".btn");
    for(var k=0 ; k<z.length ; k++){
        z[k].style.width = "12.5%";
    }

    document.getElementById('topHeading').innerText = "Scientific Calculator";
    document.getElementById("mySidenav").style.width = "0";
}

function programmer() {
    alert('Coming Soon');
    document.getElementById("mySidenav").style.width = "0";
}


document.addEventListener("keypress",function(event){
    var digits = event.key;
    KeyPress(digits);
})

function KeyPress(digits){
    switch(digits){
        case "1": One(); break;

        case "2": Two(); break;

        case "3": Three(); break;

        case "4": Four(); break;
                
        case "5": Five(); break;
    
        case "6": Six(); break;

        case "7": Seven(); break;
                
        case "8": Eight(); break;
    
        case "9": Nine(); break;
        
        case "0": Zero(); break;
        
        case "+": Addition(); break;
        
        case "-": Subtraction(); break;

        case "*": Multiplication(); break;
            
        case "/": Division(); break;

        case "!": Factorial(); break;

        case "%": Percentage(); break;

        case "^": XPY(); break;

        case "=": Calculate(); break;

        case ".": Point(); break;

        case "C": Clear(); break;

        case "c": Clear(); break;
    
        case "D": Delete(); break;

        case "d": Delete(); break;
    }
}