class Node{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class Tree{
    constructor(array){
        this.root = this.buildTree(array);
    }
    //method to sort an array
    sortArray(array){
    for(let i=1; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[i] < array[j]){
                let x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
    return array;
}
    //method to remove duplicates
    removeDuplicates(array){
        let sortedArray = this.sortArray(array);
        let temp = new Array;
        for(let i = 0; i<sortedArray.length; i++){
            if(sortedArray[i] !== sortedArray[i+1]){
                temp.push(sortedArray[i]);
            }
        }
        return temp;
    }
    //create a tree with a sorted array without any duplicates
    buildTree(array){

        if(array.length == 0) return null;

        let newArray = this.removeDuplicates(this.sortArray(array));

        let mid = Math.floor(newArray.length / 2);
        let rootNode = new Node(newArray[mid]);

        rootNode.left = this.buildTree(newArray.slice(0, mid));
        rootNode.right = this.buildTree(newArray.slice(mid + 1));

        return rootNode;

    }
    //insert the given value in the tree
    insert(value){
        const node = new Node(value);
        if(this.root == null){
            this.root = node;
            return;
        }
        let current = this.root;
        while (true){
            if(value < current.value){
                if(current.left == null){
                    current.left = node;
                    return;
                }
                current = current.left;
            }
            else if(value > current.value){
                if(current.right == null){
                    current.right = node;
                    return;
                }
                current = current.right;
            }
            else {return;}
        }
    }
    //find and delete the given value from the tree
    deleteItem(value){
        const recursiveDelete = (node, value) => {
            if(node == null){return null;}
            if(value < node.value){
                node.left = recursiveDelete(node.left, value);
                return node;
            }
            if(value > node.value){
                node.right = recursiveDelete(node.right, value);
                return node;
            }
            else {
                if(node.left == null && node.right == null){
                    return null;
                }
                return node;
            }
        }
        this.root = recursiveDelete(this.root, value);
    }
    //find and return the given value in tree if present
    find(value){
        let current = this.root;
        while(current !== null){
            if(value === current.value){
                return current;
            }
            else if(value < current.value){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }
    //print out all the nodes in the tree in level order
    levelOrder(callback){
        if (typeof callback !== "function"){
            console.log("Error. Callback required!");
        }
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            if(current !== null){
                callback(current);

                if(current.left !== null){
                    queue.push(current.left);
                }
                if(current.right !== null){
                    queue.push(current.right);
                }
            }
        }
    }
    //print out all the nodes in the given tree in order
    inOrder(callback){
        if (typeof callback !== "function"){
            console.log("Error. Callback required!");
        }
        const printInOrder = (node) => {
            if(node === null){
                return;
            }
            printInOrder(node.left);
            callback(node);
            printInOrder(node.right);
        } 
        printInOrder(this.root);
    }
    //print out the nodes in pre order
    preOrder(callback){
        if (typeof callback !== "function"){
            console.log("Error. Callback required!");
        }
            const printPreOrder = (node) => {
                if(node === null){
                    return;
                }
                callback(node);
                printPreOrder(node.left);
                printPreOrder(node.right);
            }
        printPreOrder(this.root);
    }
    //print out the nodes in post order
    postOrder(callback){
        if(typeof callback !== "function"){
            console.log("Error. Callback required!")
        }
        const printPostOrder = (node) => {
            if(node === null){
                return;
            }
            printPostOrder(node.left)
            printPostOrder(node.right);
            callback(node);
        }
        printPostOrder(this.root);
    }
    //to print the nodes in a tree fashion to help visualize the tree
    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      }
      //the callback function to print out the nodes in the tree
    printNodeValue = (node) => {
        console.log(node.value);
    }
}

const tree = new Tree([3,1,9,7,2,8,6,5,4]);
tree.prettyPrint(tree.root);
tree.postOrder(tree.printNodeValue);

