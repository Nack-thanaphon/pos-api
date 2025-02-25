"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_entity_1 = require("../../orders/entities/order.entity");
const log_entity_1 = require("../../logs/entities/log.entity");
const role_entity_1 = require("../../role/entities/role.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const cart_entity_1 = require("../../cart/entities/cart.entity");
const payment_transuction_entity_1 = require("../../payment-transuctions/entities/payment-transuction.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const category_entity_1 = require("../../categories/entities/category.entity");
const city_entity_1 = require("../../cities/entities/city.entity");
const brand_entity_1 = require("../../brands/entities/brand.entity");
const banner_entity_1 = require("../../banner/entities/banner.entity");
const store_entity_1 = require("../../stores/entities/store.entity");
const supplier_entity_1 = require("../../suppliers/entities/supplier.entity");
const typeorm_1 = require("../../typeorm");
const chanel_entity_1 = require("../../chanel/entities/chanel.entity");
const fs = require("fs");
const path = require("path");
async function seed(dataSource) {
    const filePath = path.join(__dirname, '../mock.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawData);
    const productRepository = dataSource.getRepository(product_entity_1.Product);
    const productsMap = new Map();
    const roleRepository = dataSource.getRepository(role_entity_1.Role);
    await roleRepository.save([
        { name: 'Admin' },
        { name: 'User' },
    ]);
    const userRepository = dataSource.getRepository(user_entity_1.User);
    await userRepository.save([
        { username: 'admin', code: 'ADM001', email: 'admin@example.com', role: 1, image: 'admin.jpg', status: true },
        { username: 'user1', code: 'USR001', email: 'user1@example.com', role: 2, image: 'user1.jpg', status: true },
    ]);
    const categoryRepository = dataSource.getRepository(category_entity_1.Category);
    await categoryRepository.save([
        { category_group: 'Electronics', category: 'Phones', sub_category: 'Smartphones' },
        { category_group: 'Clothing', category: 'Men', sub_category: 'Shirts' },
    ]);
    const brandRepository = dataSource.getRepository(brand_entity_1.Brand);
    await brandRepository.save([
        { brand_name: 'Samsung' },
        { brand_name: 'Nike' },
    ]);
    const supplierRepository = dataSource.getRepository(supplier_entity_1.Supplier);
    await supplierRepository.save([
        { supplier_id: 1, supplier_name: 'TechCorp' },
        { supplier_id: 2, supplier_name: 'FashionInc' },
    ]);
    for (const record of jsonData) {
        await productRepository.save({
            name: 'Galaxy S23',
            description: 'Latest smartphone',
            price: 999.99,
            status: true,
            product_code: 'PROD001',
            barcode: record.barcode,
            article: 'Smartphone',
            category: { category_id: 1 },
            brand: { brand_id: 1 },
            supplier: { supplier_id: 1 },
            sale_price: 899.99,
            image_url: 'galaxy_s23.jpg',
        });
        productsMap.set(record.item_id, true);
    }
    const cityRepository = dataSource.getRepository(city_entity_1.City);
    await cityRepository.save([
        { city_id: 1, city_name: 'New York' },
        { city_id: 2, city_name: 'Los Angeles' },
    ]);
    const channelRepository = dataSource.getRepository(chanel_entity_1.Channel);
    await channelRepository.save([
        { channel_id: 1, channel_name: 'Online' },
        { channel_id: 2, channel_name: 'Retail' },
    ]);
    const storeRepository = dataSource.getRepository(store_entity_1.Store);
    await storeRepository.save([
        { store_id: 1, store_name: 'NY Store', city: { city_id: 1 }, channel: { channel_id: 1 } },
        { store_id: 2, store_name: 'LA Store', city: { city_id: 2 }, channel: { channel_id: 2 } },
    ]);
    const cartRepository = dataSource.getRepository(cart_entity_1.Cart);
    await cartRepository.save([
        { product_code: 'PROD001', user_code: 'USR001', quantity: 2, discount: 5.00, total_price: 1794.98, detail: 'User 1 cart' },
        { product_code: 'PROD002', user_code: 'USR001', quantity: 1, discount: 0.00, total_price: 39.99, detail: 'User 1 cart' },
    ]);
    const paymentRepository = dataSource.getRepository(payment_transuction_entity_1.PaymentTransuction);
    await paymentRepository.save([
        { client_code: 'C001', admin_code: 'ADM001', cart_code: 'CT001', payment_code: 'P001', payment_type: 'Credit Card', images: 'image1.jpg', status: 'Completed' },
        { client_code: 'C002', admin_code: 'ADM001', cart_code: 'CT002', payment_code: 'P002', payment_type: 'Paypal', images: 'image2.jpg', status: 'Pending' },
    ]);
    const orderRepository = dataSource.getRepository(order_entity_1.Order);
    await orderRepository.save([
        { client_code: 'C001', admin_code: 'ADM001', cart_code: 'CT001', payment_code: 'P001', detail: 'Order 1 details', status: 'Completed' },
        { client_code: 'C002', admin_code: 'ADM001', cart_code: 'CT002', payment_code: 'P002', detail: 'Order 2 details', status: 'Pending' },
    ]);
    const logRepository = dataSource.getRepository(log_entity_1.Log);
    await logRepository.save([
        { event_type: 'LOGIN', event_detail: 'User logged in' },
        { event_type: 'ORDER_CREATED', event_detail: 'Order was placed' },
    ]);
    const bannerRepository = dataSource.getRepository(banner_entity_1.Banner);
    await bannerRepository.save([
        { title: 'Summer Sale', description: 'Up to 50% off', image: 'summer.jpg', status: true },
        { title: 'Winter Deals', description: 'Cozy discounts', image: 'winter.jpg', status: false },
    ]);
    console.log('Database seeded successfully!');
}
const dataSource = typeorm_1.AppDataSource;
dataSource.initialize().then(() => {
    seed(dataSource)
        .then(() => dataSource.destroy())
        .catch((error) => console.error('Error seeding database:', error));
});
//# sourceMappingURL=seed-data.js.map