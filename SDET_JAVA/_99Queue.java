package SDET;

class _65Queue {
    private int[] arr;
    private int front;
    private int rear;
    private int size;
    private int capacity;

    _65Queue(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    // Add element
    public void enqueue(int value) {
        if (size == capacity) {
            System.out.println("Queue Overflow");
            return;
        }

        rear++;
        arr[rear] = value;
        size++;
    }

    // Remove element
    public int dequeue() {
        if (size == 0) {
            System.out.println("Queue Underflow");
            return -1;
        }

        int value = arr[front];
        front++;
        size--;

        return value;
    }

    // Get front element
    public int peek() {
        if (size == 0) {
            System.out.println("Queue is empty");
            return -1;
        }

        return arr[front];
    }

    // Check empty
    public boolean isEmpty() {
        return size == 0;
    }

    // Size
    public int size() {
        return size;
    }
}

class Main65 {
    public static void main(String[] args) {

        _65Queue queue = new _65Queue(5);

        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        System.out.println("Front: " + queue.peek());
        System.out.println("Size: " + queue.size());

        System.out.println("Dequeue: " + queue.dequeue());
        System.out.println("Dequeue: " + queue.dequeue());

        System.out.println("Front: " + queue.peek());
    }
}
