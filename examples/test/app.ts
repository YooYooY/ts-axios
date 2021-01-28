import {deepMerge} from "../../src/helpers/util";

let obj1 = {
  name:"chenwl",
  message:{
    age:12,
    from:["meizhou"],
    detail:{
      phone:"123"
    }
  }
}

let obj2 = {
  name:"lier",
  message:{
    fav:["basketball"],
    from:["hangzhou"],
    age:15,
    detail:{
      phone:"123"
    }
  }
}

const result = deepMerge(obj1,obj2);

console.log(result);
