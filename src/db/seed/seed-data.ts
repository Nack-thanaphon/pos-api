import { DataSource } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Log } from '../../logs/entities/log.entity';
import { Role } from '../../role/entities/role.entity';
import { User } from '../../users/entities/user.entity';
import { Cart } from '../../cart/entities/cart.entity';
import { PaymentTransuction } from '../../payment-transuctions/entities/payment-transuction.entity';
import { Product } from '../../products/entities/product.entity';
import { Category } from '../../categories/entities/category.entity';
import { City } from '../../cities/entities/city.entity';
import { Brand } from '../../brands/entities/brand.entity';
import { Banner } from '../../banner/entities/banner.entity';
import { Store } from '../../stores/entities/store.entity';
import { Supplier } from '../../suppliers/entities/supplier.entity';
import { Sale } from '../../sale/entities/sale.entity';
import { AppDataSource } from '../../typeorm';
import { Channel } from 'src/chanel/entities/chanel.entity';
import * as fs from 'fs';
import * as path from 'path';

async function seed(dataSource: DataSource) {
    const filePath = path.join(__dirname, '../mock.json');
    const rawData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawData); // สมมติว่าเป็น array ถ้าเป็น object ต้องปรับ
    const productRepository = dataSource.getRepository(Product);
    const productsMap = new Map();

    // Seed Roles
    const roleRepository = dataSource.getRepository(Role);
    await roleRepository.save([
        { name: 'Admin' },
        { name: 'User' },
    ]);

    // Seed Users
    const userRepository = dataSource.getRepository(User);
    await userRepository.save([
        { username: 'admin', code: 'ADM001', email: 'admin@example.com', role: 1, image: 'admin.jpg', status: true },
        { username: 'user1', code: 'USR001', email: 'user1@example.com', role: 2, image: 'user1.jpg', status: true },
    ]);

    // Seed Categories
    const categoryRepository = dataSource.getRepository(Category);
    await categoryRepository.save([
        { category_group: 'Electronics', category: 'Phones', sub_category: 'Smartphones' }, // category_id: 1
        { category_group: 'Clothing', category: 'Men', sub_category: 'Shirts' },          // category_id: 2
    ]);

    // Seed Brands
    const brandRepository = dataSource.getRepository(Brand);
    await brandRepository.save([
        { brand_name: 'Samsung' }, // brand_id: 1
        { brand_name: 'Nike' },    // brand_id: 2
    ]);

    // Seed Suppliers
    const supplierRepository = dataSource.getRepository(Supplier);
    await supplierRepository.save([
        { supplier_id: 1, supplier_name: 'TechCorp' },
        { supplier_id: 2, supplier_name: 'FashionInc' },
    ]);



    // Seed Products from mock.json
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


    // Seed Cities
    const cityRepository = dataSource.getRepository(City);
    await cityRepository.save([
        { city_id: 1, city_name: 'New York' },
        { city_id: 2, city_name: 'Los Angeles' },
    ]);

    // Seed Channels
    const channelRepository = dataSource.getRepository(Channel);
    await channelRepository.save([
        { channel_id: 1, channel_name: 'Online' },
        { channel_id: 2, channel_name: 'Retail' },
    ]);

    // Seed Stores
    const storeRepository = dataSource.getRepository(Store);
    await storeRepository.save([
        { store_id: 1, store_name: 'NY Store', city: { city_id: 1 }, channel: { channel_id: 1 } },
        { store_id: 2, store_name: 'LA Store', city: { city_id: 2 }, channel: { channel_id: 2 } },
    ]);

    // Seed Sales
    // const saleRepository = dataSource.getRepository(Sale);
    // await saleRepository.save([
    //     { period_month: '2025-02', store: { store_id: 1 }, product: { id: 1 }, value: 4499.95, qty: 5, margin_value: 500.00 },
    //     { period_month: '2025-02', store: { store_id: 2 }, product: { id: 2 }, value: 399.90, qty: 10, margin_value: 100.00 },
    // ]);

    // Seed Cart
    const cartRepository = dataSource.getRepository(Cart);
    await cartRepository.save([
        { product_code: 'PROD001', user_code: 'USR001', quantity: 2, discount: 5.00, total_price: 1794.98, detail: 'User 1 cart' },
        { product_code: 'PROD002', user_code: 'USR001', quantity: 1, discount: 0.00, total_price: 39.99, detail: 'User 1 cart' },
    ]);

    // Seed Payment Transactions
    const paymentRepository = dataSource.getRepository(PaymentTransuction);
    await paymentRepository.save([
        { client_code: 'C001', admin_code: 'ADM001', cart_code: 'CT001', payment_code: 'P001', payment_type: 'Credit Card', images: 'image1.jpg', status: 'Completed' },
        { client_code: 'C002', admin_code: 'ADM001', cart_code: 'CT002', payment_code: 'P002', payment_type: 'Paypal', images: 'image2.jpg', status: 'Pending' },
    ]);

    // Seed Orders
    const orderRepository = dataSource.getRepository(Order);
    await orderRepository.save([
        { client_code: 'C001', admin_code: 'ADM001', cart_code: 'CT001', payment_code: 'P001', detail: 'Order 1 details', status: 'Completed' },
        { client_code: 'C002', admin_code: 'ADM001', cart_code: 'CT002', payment_code: 'P002', detail: 'Order 2 details', status: 'Pending' },
    ]);

    // Seed Logs
    const logRepository = dataSource.getRepository(Log);
    await logRepository.save([
        { event_type: 'LOGIN', event_detail: 'User logged in' },
        { event_type: 'ORDER_CREATED', event_detail: 'Order was placed' },
    ]);

    // Seed Banners
    const bannerRepository = dataSource.getRepository(Banner);
    await bannerRepository.save([
        { title: 'Summer Sale', description: 'Up to 50% off', image: 'summer.jpg', status: true },
        { title: 'Winter Deals', description: 'Cozy discounts', image: 'winter.jpg', status: false },
    ]);


    console.log('Database seeded successfully!');
}

const dataSource = AppDataSource;
dataSource.initialize().then(() => {
    seed(dataSource)
        .then(() => dataSource.destroy())
        .catch((error) => console.error('Error seeding database:', error));
});