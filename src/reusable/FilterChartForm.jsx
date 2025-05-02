import { useState } from 'react';

const brandOptions = {
	cafe: [
		'Fort',
		'Melitta',
		'Nova Suissa',
		'Pilão',
		'3 Corações',
		'Barão',
		'Fino Grão',
		'Dom Pedro',
		'Caboclo',
		'União',
	],
	arroz: [
		'Carrijo',
		'Apreço',
		'Camil',
		'Prato Fino',
		'Vasconcelos',
		'Pilecco Nobre',
		'Super Ecco',
		'Prato Rico',
		'Tia Ju',
		'Tio João',
		'Broto Legal',
		'Namorado',
		'Empório São João',
		'Alegrete',
		'Patéko',
		'Carrefour',
	],
	feijao: [
		'Apreço',
		'Cariri',
		'Galante',
		'Pachá',
		'Sabor Campo',
		'Vasconcelos',
		'Tryumpho',
		'Camil',
		'Codil',
	],
};

// Display label → internal value
const productTypes = [
	{ label: 'Café', value: 'cafe' },
	{ label: 'Arroz', value: 'arroz' },
	{ label: 'Feijão', value: 'feijao' },
];

function FilterChartForm({ onSubmit }) {
	const [productType, setProductType] = useState('');
	const [brand, setBrand] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (productType && brand) {
			onSubmit({ productType, brand });
		}
	};

	const availableBrands = productType ? brandOptions[productType] : [];

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Product Type:
					<select
						value={productType}
						onChange={(e) => {
							setProductType(e.target.value);
							setBrand('');
						}}
					>
						<option value="">-- Select --</option>
						{productTypes.map(({ label, value }) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
				</label>
			</div>

			{productType && (
				<div>
					<label>
						Brand:
						<select value={brand} onChange={(e) => setBrand(e.target.value)}>
							<option value="">-- Select --</option>
							{availableBrands.map((b) => (
								<option key={b} value={b}>
									{b}
								</option>
							))}
						</select>
					</label>
				</div>
			)}

			<div>
				<button type="submit" disabled={!productType || !brand}>
					Generate Chart
				</button>
			</div>
		</form>
	);
}

export default FilterChartForm;
