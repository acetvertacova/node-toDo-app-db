// models/index.js (ESM)

import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import { env as _env } from 'process';

// === Замена __dirname для ESM ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basename = _basename(__filename);
// ===============================

const env = _env.NODE_ENV || 'development';
// Примечание: Для загрузки конфига в ESM часто требуется перенести его в CJS (как config.cjs)
// или использовать динамический import()
import configLoader from '../config/config.js';
const config = configLoader[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(_env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Загрузка моделей
for (const file of readdirSync(__dirname)) {
  if (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  ) {
    // Используем динамический import() для загрузки моделей в ESM
    const model = (await import(join(__dirname, file))).default(sequelize, DataTypes);
    db[model.name] = model;
  }
}

// Установка ассоциаций
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;