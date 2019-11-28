class Node{
    constructor(a){
        this.data =  a
        this.izq = null
        this.der = null
    }   
}

class Tree{
    constructor(a){
       this.node = new Node(a)
       this.l = 0
       this.m = []
    }
    insert(x){
        let y = this.node
        resul(y)
        function resul(c){  
            if(c != null){
                if(x < c.data){
                    if(c.izq != null){
                        resul(c.izq)
                    }else{
                        c.izq = new Node(x)
                    }
                }else if(x>c.data){
                    if(c.der != null){
                        resul(c.der)
                    }else{
                        c.der = new Node(x)
                    }
                }
            }
        } 

        this.node = y
    }

    remove(a,c = this.node) {
        if(c != null){  
            if(  c.der !=null){
             if(c.der.data === a ){
                c.der =null
                
                return c
            }}else if(c.izq != null){
            if(c.izq.data === a){
                c.izq = null
                
                return c
            }}
            this.remove(a,c.izq)
            this.remove(a,c.der)
        }
        return
    }

    yours(c=this.node){
        if(c != null){  
            this.yours(c.izq)
            this.yours(c.der)
            console.log(c.data)
        }
    }
        
    bft(c=this.node,l=this.l,m=this.m){
        let n = -1
        res(c,l)
        this.l=-1
        niv(c)
        console.log(m)
        function res(c,l){        
            if(c != null){  

                m[l] = new Array
                l++
                res(c.izq,l)
            }   
            return
        }
        function niv(a=this.node) 
        { 
            if (a != null){
                n++;
                m[n] = m[n] + ", "+ a.data; 
                
                niv(a.izq)
                niv(a.der)   
            }
            for(let i=0;i<m.length;i++){
                if(n=== m.length-i){
                    n=m.length-(i+1)
                    break
                } 
            }   
            return;   
        }  
    }
}

let a = (function(){
    let t = new Tree(10)

    t.insert(9)
    t.insert(6)
    t.insert(8)
    t.insert(3)
    t.insert(5)
    t.insert(1)

    console.log("grafo")
    t.yours()
    console.log("\n remove")
    t.remove(1)
    t.yours()
    console.log("\n bft")
    t.bft()
    console.log(t.node)
}) ()