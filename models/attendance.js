/*
 | module.exports = function(sequelize, DataTypes) {
 |   var _yourTableName = sequelize.define('모델명', { 특성 }, { 옵션 });
 |   return _yourTableName;
 | };
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance', {
      idx        : { type : DataTypes.INTEGER(11), primaryKey: true }
    , date       : { type : DataTypes.DATEONLY, primaryKey: true
                 , validate : { isDate: true } }
    , memo       : { type : DataTypes.STRING(2000) }
    , submit_date: { type: DataTypes.DATE }
    , file_name  : { type : DataTypes.STRING(100) }
  }, {
	  timestamps: false,
    tableName: 'attendance'
  });
};