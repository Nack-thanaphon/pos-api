import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTables1719172800000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Categories Table
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    { name: 'category_id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'category_group', type: 'varchar' },
                    { name: 'category', type: 'varchar' },
                    { name: 'sub_category', type: 'varchar' },
                ],
            })
        );

        // Cities Table
        await queryRunner.createTable(
            new Table({
                name: 'cities',
                columns: [
                    { name: 'city_id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'city_name', type: 'varchar', isUnique: true },
                ],
            })
        );

        // Channels Table
        await queryRunner.createTable(
            new Table({
                name: 'channels',
                columns: [
                    { name: 'channel_id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'channel_name', type: 'varchar', isUnique: true },
                ],
            })
        );

        // Brands Table
        await queryRunner.createTable(
            new Table({
                name: 'brands',
                columns: [
                    { name: 'brand_id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'brand_name', type: 'varchar', isUnique: true },
                ],
            })
        );

        // Suppliers Table (Updated)
        await queryRunner.createTable(
            new Table({
                name: 'suppliers',
                columns: [
                    { name: 'supplier_id', type: 'integer', isPrimary: true },
                    { name: 'supplier_name', type: 'varchar' },
                ],
            })
        );

        // Banner Table
        await queryRunner.createTable(
            new Table({
                name: 'banner',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'title', type: 'varchar' },
                    { name: 'description', type: 'text', isNullable: true },
                    { name: 'image', type: 'varchar' },
                    { name: 'status', type: 'boolean' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Role Table
        await queryRunner.createTable(
            new Table({
                name: 'role',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Users Table (Updated)
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'username', type: 'varchar' },
                    { name: 'code', type: 'varchar', length: '255' },
                    { name: 'email', type: 'varchar', length: '255', isUnique: true },
                    { name: 'role', type: 'integer' }, // Foreign key to role.id
                    { name: 'image', type: 'varchar' },
                    { name: 'status', type: 'boolean' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Products Table (Updated)
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'name', type: 'varchar', length: '100' },
                    { name: 'description', type: 'varchar', isNullable: true },
                    { name: 'price', type: 'decimal', precision: 10, scale: 2 },
                    { name: 'status', type: 'boolean', default: true },
                    { name: 'images', type: 'integer', isNullable: true },
                    { name: 'product_code', type: 'varchar', isNullable: true },
                    { name: 'unit', type: 'varchar', isNullable: true },
                    { name: 'barcode', type: 'integer'},
                    { name: 'brand_id', type: 'integer', isNullable: true },
                    { name: 'category_id', type: 'integer', isNullable: true },
                    { name: 'supplier_id', type: 'integer', isNullable: true },
                    { name: 'article', type: 'varchar' },
                    { name: 'sale_price', type: 'decimal', precision: 10, scale: 2, isNullable: true },
                    { name: 'image_url', type: 'varchar', isNullable: true },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Stores Table (Updated)
        await queryRunner.createTable(
            new Table({
                name: 'stores',
                columns: [
                    { name: 'store_id', type: 'integer', isPrimary: true },
                    { name: 'store_name', type: 'varchar' },
                    { name: 'city_id', type: 'integer' },
                    { name: 'channel_id', type: 'integer' },
                ],
            })
        );

        // Sales Table (Updated)
        await queryRunner.createTable(
            new Table({
                name: 'sale',
                columns: [
                    { name: 'sales_id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'period_month', type: 'varchar' },
                    { name: 'store_id', type: 'integer' },
                    { name: 'product_id', type: 'integer' },
                    { name: 'value', type: 'decimal', precision: 10, scale: 2 },
                    { name: 'qty', type: 'integer' },
                    { name: 'margin_value', type: 'decimal', precision: 10, scale: 2 },
                ],
            })
        );

        // Cart Table
        await queryRunner.createTable(
            new Table({
                name: 'cart',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'product_code', type: 'varchar' },
                    { name: 'user_code', type: 'varchar' },
                    { name: 'quantity', type: 'integer' },
                    { name: 'discount', type: 'decimal', precision: 10, scale: 2 },
                    { name: 'total_price', type: 'decimal', precision: 10, scale: 2 },
                    { name: 'detail', type: 'text' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Payment Transactions Table
        await queryRunner.createTable(
            new Table({
                name: 'payment_transuction',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'client_code', type: 'varchar' },
                    { name: 'admin_code', type: 'varchar' },
                    { name: 'cart_code', type: 'varchar' },
                    { name: 'payment_code', type: 'varchar', isUnique: true },
                    { name: 'payment_type', type: 'varchar' },
                    { name: 'images', type: 'varchar', isNullable: true },
                    { name: 'status', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Orders Table
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'client_code', type: 'varchar' },
                    { name: 'admin_code', type: 'varchar' },
                    { name: 'cart_code', type: 'varchar' },
                    { name: 'payment_code', type: 'varchar' },
                    { name: 'detail', type: 'varchar' },
                    { name: 'status', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Logs Table
        await queryRunner.createTable(
            new Table({
                name: 'logs',
                columns: [
                    { name: 'id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'event_type', type: 'varchar' },
                    { name: 'event_detail', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                    { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        // Customers Table (New)
        await queryRunner.createTable(
            new Table({
                name: 'customers',
                columns: [
                    { name: 'customer_id', type: 'integer', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
                    { name: 'customer_name', type: 'varchar' },
                    { name: 'email', type: 'varchar', isUnique: true },
                    { name: 'phone', type: 'varchar', isNullable: true },
                    { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
                ],
            })
        );

        console.log('Tables created successfully');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('customers');
        await queryRunner.dropTable('logs');
        await queryRunner.dropTable('orders');
        await queryRunner.dropTable('payment_transuctions');
        await queryRunner.dropTable('carts');
        await queryRunner.dropTable('sales');
        await queryRunner.dropTable('stores', true);
        await queryRunner.dropTable('products');
        await queryRunner.dropTable('users');
        await queryRunner.dropTable('roles');
        await queryRunner.dropTable('banners');
        await queryRunner.dropTable('suppliers');
        await queryRunner.dropTable('brands');
        await queryRunner.dropTable('channels');
        await queryRunner.dropTable('cities');
        await queryRunner.dropTable('categories');

        console.log('Tables roll-back successfully');
    }
}