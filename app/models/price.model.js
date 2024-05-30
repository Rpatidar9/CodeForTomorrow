module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define(
        "price",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            Duration: {
                type: DataTypes.DATE
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            service_id: {
                type: DataTypes.INTEGER,
            }
        },
        {
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    return Price;
};
