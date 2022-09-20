import { Model, DataTypes } from 'sequelize';
import { sequelize } from './index';

class Genre extends Model {
  declare genreId: string;
  declare genreName: string;
  declare genreStatus: boolean;
  declare createdDate: Date;
  declare updatedDate: Date;
}

Genre.init({
  genreId: {
    type: DataTypes.STRING(36),
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4
  },
  genreName: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  genreStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  createdDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedDate: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'Genre',
  timestamps: true,
  createdAt: 'createdDate',
  updatedAt: 'updatedDate',
  underscored: false,
  sequelize
});

export default Genre;