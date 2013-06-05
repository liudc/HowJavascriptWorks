var A = function()   
{  
    console.log('in A, before init');
    this.initialize.apply(this , arguments);  
    console.log('in A, after init');
    //这里apply调用的是prototype中的initialize为什么不调用这个initialize而死循环呢？  
};   

A.prototype=  
    {  
    initialize:function(v){
        console.log('in initialize, before value');
        this.value=v;
        console.log('in initialize, after value');
    },  
    showValue:function(){
        console.log(this.value);
    }  
}  

var a = new A('helloWord!');//实例化一个A的对象a  

a.showValue("helloWorld");
