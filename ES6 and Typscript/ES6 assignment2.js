//q1
class name{
    function nextFibonacci(n)
    {
        let a =n *(1+ Math.sqrt(5))/2.0;
        return Math.round(a);
    }
    let n=3;
    console.log(nextFibonacci(n));
    
    
    //q2
    let armstrong = {
        [Symbol.iterator](){
            let low=10,value;
            return{
                next(){
                    function armstrong(low) {
                        var num = low+1;
                        while(true){
                            var str = num.toString();
                    
                            var sum = 0;
                    
                          for(var i = 0;i<str.length;i++){
                                sum = sum + Math.pow(parseInt(str[i]),str.length);
                            }
                    
                            if(sum == num)
                            return sum;
                    
                            else
                                num++;
                        }
                       
                    }
                    [value,low]=[armstrong(low),armstrong(low)];
                    return{value};
                    
                }
            };
        }
    };
    for (n of armstrong){
        if(n>10000){
            break;
        }
        console.log(n);
    }
    
    
    
    //q3
    function * armstrong11(low) {
        //var num = low+1;
        
    
        while(true){
            if(low>1000){
                return{done:true,'value':low};
            }
            //console.log(low);
            low++;
        do{
            var str = low.toString();
    
            var sum = 0;
    
            for(var i = 0;i<str.length;i++){
                sum = sum + Math.pow(parseInt(str[i]),str.length);
            }
    
            if(sum == low){
            //[value,low]=[sum,sum];
            //var value = sum;
            low = sum;
            break;
        }
            else
                low++;
        }while(true);
        yield low;
    }
        
    }
    
    
    var arr = armstrong11(10);  
    
    let temp = arr.next();
    console.log(temp);
    
    temp = arr.next();
    console.log(temp);
    
    temp = arr.next();
    console.log(temp);
    
    temp = arr.next();
    console.log(temp);
    
    temp = arr.next();
    console.log(temp);
    
    temp = arr.next();
    console.log(temp);
    
    
    
    
// Q4.
    
    let chatroom1 = new Map();
    let chatroom2 = new Map();
    
    let user1 = new Set(["hii"]);
    let user2 = new Set(["hello"]);
    let user3 = new Set(["hello world"]);
    let user4 = new Set(["c2u1","What's the plan for today?"]);
    let user5 = new Set(["c2u2","Let's have a get together."]);
    let user6 = new Set(["c2u3","Let's plan a get together at a local pub."]);
    
    chatroom1.set("user1 Sudhangshu",user1);
    chatroom1.set("user2 Abhishek",user2);
    chatroom1.set("user3 Aditya",user3);
    
    chatroom2.set("user1 Ashish",user4);
    chatroom2.set("user2 Anurag",user5);
    chatroom2.set("user3 Siddharth",user6);
    
    
    
    function printUsersOfChat(chatroom){
        //console.log("\nusers form chatroom :")
        for(let key of chatroom.keys()){
            console.log("\n",key);
        }
    }
    
    
    function printChatsOfChat(chatroom){
        let chats = new Set();
        for(let key of chatroom.values()){
           // console.log("\n",key);
           //chats.add(key);
           key.forEach(chats.add,chats);
        }
        console.log("\n",chats);
    }
    
    
    console.log("\nUsers of chatroom 1 :");
    printUsersOfChat(chatroom1);
    
    console.log("\nUsers of chatroom 2 :");
    printUsersOfChat(chatroom2);
    
    console.log("\n Chats from chatroom 1 :");
    printChatsOfChat(chatroom1);
    
    console.log("\n Chats from chatroom 2 :");
    printChatsOfChat(chatroom2);