const prodcuts=[]
const fs=require('fs')
const path=require('path')

module.exports=class prodcut{
    constructor(t){
        this.title=t;
    }
    save(){
        prodcuts.push(this)
    }
    static fetchAll(){
        return prodcuts
    }

}