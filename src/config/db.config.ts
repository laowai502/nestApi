import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {

};

// {
// 	"type": "mssql",
// 	"host": "localhost",
// 	"port": 1433,
// 	"username": "sa",
// 	"password": "user123",
// 	"database": "iq",
// 	"entity": ["src/entity/*.ts"],
// 	"synchronize": false,
// 	"options": { "trustServerCertificate": true }
// }
