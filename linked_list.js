function LinkedList(){
	var linked_list_object = {head: null};
}

function Node(input){
	this.data = input;
	this.next = null;
}

LinkedList.prototype.push = function(input){

	var node = new Node(input);

	if(this.head == null){
		this.head = node;
	}

	else{
		var runner = this.head;
		while(runner.next != null){
			runner = runner.next;
		}
		runner.next = node;
	}
}

LinkedList.prototype.remove = function(input){	
	let runner = this.head;
	console.log(this.head);
	console.log(runner);
	while(runner.next != null){
		if (runner.next.data == input){
			runner.next = runner.next.next;
			return(this);
		}
		runner = runner.next;
	}
}

function print_values(ll){
	var runner = ll.head;
	var count = 0;
	while (runner != null){
		console.log("Index " + count + " = " + runner.data);
		runner = runner.next;		
		count++;
	}
}

function find(ll, input){
	var runner = ll.head;
	while (runner != null){
		if (runner.data == input){
			console.log(`The data value ${input} is in the list`)
			return true;			
		}		
		runner = runner.next;
	}
	console.log(`The data value ${input} is not in the list`);
	return false;
}

var ll = new LinkedList();
ll.push("a");
ll.push("b");
ll.push("c");
ll.push("d");
ll.push("e");

console.log(ll);

ll.remove("d");

print_values(ll);
find(ll, "b");


// function Head(){
// 	{ears: null, eyes: null, hair: null};
// }

// Head.prototype.create

// head = new Head();

// console.log(head);

