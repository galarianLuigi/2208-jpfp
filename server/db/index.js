// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Student = require('./student');
const Campus = require('./campus');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  //use this area to sync your database
  await Student.create({
    firstName: 'Irwing',
    lastName: 'Alvarez',
    email: 'irwing@yahoo.com',
    gpa: 3.5,
  });
  await Campus.create({
    name: 'IrCademy',
    address: 'Chicago',
    description: 'A very good school',
  });

  console.log(`
    Seeding successful!
  `);
};

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  // Include your models in this exports object as well!
  db,
  syncAndSeed,
  Student,
  Campus,
};
