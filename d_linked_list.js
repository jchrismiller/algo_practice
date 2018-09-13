function LinkedList(){
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.push = function(val){

	var node = {
		data: val,
		next: null,
		previous: null
	}

	if(this.head == null){
		this.head = node;
		this.tail = node;
	}

	else {
		node.previous = this.tail;
		this.tail.next = node;
		this.tail = node;
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

function find(ll, val){
	var runner = ll.head;
	while (runner != null){
		if (runner.data == val){
			console.log(`The data value ${val} is in the list`)
			return true;			
		}		
		runner = runner.next;
	}
	console.log(`The data value ${val} is not in the list`);
	return false;
}

var ll = new LinkedList();
ll.push("a");
ll.push("b");
ll.push("c");

console.log(ll);

print_values(ll);
find(ll, "b");

