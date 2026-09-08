// Datos del negocio en un solo lugar: los consumen los datos estructurados del
// layout y la sección de contacto. Si cambian aquí, cambian en los dos sitios.

export const negocio = {
	nombre: 'Mariachi México Lindo',
	telefono: '+593992084976',
	telefonoVisible: '+593 99 208 4976',
	director: 'Sergio Allauca',
	ciudad: 'Ambato',
	provincia: 'Tungurahua',
	pais: 'EC',
	// 1 de noviembre de 2009, la misma fecha con la que se calculan los años de experiencia
	fundacion: '2009-11-01',
	// Ciudades donde se presentan, las mismas que ofrece el formulario
	cobertura: ['Ambato', 'Pelileo', 'Baños', 'Patate', 'Píllaro'],
	redes: {
		facebook: 'https://www.facebook.com/mexicolindoambato',
		instagram: 'https://www.instagram.com/mexicolindoambato',
		youtube: 'https://www.youtube.com/@mariachimexicolindoambato7998',
	},
} as const;
