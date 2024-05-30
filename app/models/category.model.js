module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: true, // Enable automatic timestamps
      underscored: true, // Use snake_case for timestamps
      createdAt: "created_at", // Map createdAt to created_at
      updatedAt: "updated_at" // Map updatedAt to updated_at
    }
  );

  return Category;
};
