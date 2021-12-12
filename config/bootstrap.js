/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

	// By convention, this is a good place to set up fake data during development.
	//
	// For example:
	// ```
	// // Set up fake development data (or if we already have some, avast)
	// if (await User.count() > 0) {
	//   return;
	// }
	//
	// await User.createEach([
	//   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
	//   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
	//   // etc.
	// ]);
	// ```

	await sails.models.user.createEach([
		{ name: 'Paco Garcia'},
		{ name: 'Pedro Clemente'},
	]);

	await sails.models.pet.createEach([
		{ name: 'Salchica', color: '...'},
		{ name: 'Pastor', color: '...' },
		{ name: 'Bulldog', color: '...' },
		{ name: 'Pug', color: '...' },
		{ name: 'Doberman', color: '...' },
		{ name: 'Bóxer', color: '...' },
	]);

	await sails.models.petuser.createEach([
		{ owner: 1, pet: 1 }, 
		{ owner: 1, pet: 2 },
	]);

	await sails.models.phones.createEach([
		{ phone: '931234565', owner: 1 }, 
		{ phone: '725344563', owner: 1 },
	]);

};
