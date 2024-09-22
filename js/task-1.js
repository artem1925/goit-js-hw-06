const customer = {
  username: "Mango", // Ім'я користувача
  balance: 24000, // Баланс користувача
  discount: 0.1, // Знижка користувача
  orders: ["Burger", "Pizza", "Salad"], // Замовлення користувача
  getBalance() {
    // Метод для отримання балансу
    return this.balance;
  },
  getDiscount() {
    // Метод для отримання знижки
    return this.discount;
  },
  setDiscount(value) {
    // Метод для встановлення нової знижки
    this.discount = value;
  },
  getOrders() {
    // Метод для отримання списку замовлень
    return this.orders;
  },
  addOrder(cost, order) {
    // Метод для додавання нового замовлення
    // Віднімаємо вартість замовлення з урахуванням знижки від балансу
    this.balance -= cost - cost * this.discount;
    // Додаємо нове замовлення до списку замовлень
    this.orders.push(order);
  },
  // Зміни коду завершено
};

// Встановлюємо нову знижку
customer.setDiscount(0.15);
console.log(customer.getDiscount()); // Виводимо нову знижку: 0.15

// Додаємо нове замовлення
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // Виводимо новий баланс: 19750
console.log(customer.getOrders()); // Виводимо оновлений список замовлень: ["Burger", "Pizza", "Salad", "Steak"]
