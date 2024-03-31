1. Overriding: Tên của method con phải giống tên của method cha, tham số thì ko cần giống
2. Extend nhiều hơn 1 lớp: Vào con check xem có ko >> vào cha check >> check của ông .... nếu không ở đâu có thì nó sẽ báo
3. Khi mình reuse lại theo hướng reuse hay hướng design trong child class có constructor thì trước khi làm gì thì phải gọi constructor của cha

Design concept:
- Khi thiết kế một class thì điều quan trọng nhất là properties của class
- MVC: Model (OO)- View (Usage) - Controller (Functional programing)

static variable - is a shared value belongs to class, NOT object --> khi trực tiếp thay đổi ở value thì những thằng refer nó đều ảnh hưởng
- static chỉ accept static
- Static ko override được


- Parent class has constructor, child class has no constructor
--> No problem, when init child class, has to call constructor of parent class
- Parent class has constructor, child class has constructor
--> Constructor of child class sẽ gọi constructor của parent class trước (super...)
- Parent class has no constructor, child class has constructor
--> Con chỉ cần gọi super của parent nhưng constructor này ko có đối số
