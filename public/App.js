class ProductAdd extends React.Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		const product = {
			category: document.getElementById("category").value,
			price: document.getElementById("price").value.slice(1),
			name: document.getElementById("name").value,
			image: document.getElementById("image").value
		};
		this.props.addProduct(product);
	}

	render() {
		return React.createElement(
			"section",
			null,
			React.createElement(
				"p",
				null,
				"Add a new product to inventory"
			),
			React.createElement("hr", null),
			React.createElement(
				"form",
				null,
				React.createElement(
					"div",
					{ className: "input-group" },
					React.createElement(
						"label",
						{ htmlFor: "category" },
						"Category:"
					),
					React.createElement(
						"select",
						{ name: "category", id: "category" },
						React.createElement(
							"option",
							{ value: "Accessories" },
							"Accessories"
						),
						React.createElement(
							"option",
							{ value: "Shirts" },
							"Shirts"
						),
						React.createElement(
							"option",
							{ value: "Jeans" },
							"Jeans"
						),
						React.createElement(
							"option",
							{ value: "Jackets" },
							"Jackets"
						),
						React.createElement(
							"option",
							{ value: "Sweaters" },
							"Sweaters"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "input-group" },
					React.createElement(
						"label",
						{ htmlFor: "price" },
						"Price:"
					),
					React.createElement("input", { type: "text", id: "price", defaultValue: "$" })
				),
				React.createElement(
					"div",
					{ className: "input-group" },
					React.createElement(
						"label",
						{ htmlFor: "name" },
						"Product Name:"
					),
					React.createElement("input", { type: "text", id: "name" })
				),
				React.createElement(
					"div",
					{ className: "input-group" },
					React.createElement(
						"label",
						{ htmlFor: "image" },
						"Image URL:"
					),
					React.createElement("input", { type: "text", id: "image" })
				),
				React.createElement(
					"button",
					{ type: "submit", onClick: this.onSubmit },
					"Add Product"
				)
			)
		);
	}
}

class ProductRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, price, category, image } = this.props.product;
		return React.createElement(
			"tr",
			null,
			React.createElement(
				"td",
				null,
				name
			),
			React.createElement(
				"td",
				null,
				"$",
				price
			),
			React.createElement(
				"td",
				null,
				category
			),
			React.createElement(
				"td",
				null,
				React.createElement(
					"a",
					{ href: image, target: "_blank" },
					"View"
				)
			)
		);
	}
}

class ProductTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rows = this.props.products.map(p => React.createElement(ProductRow, { product: p, key: p.id }));
		return React.createElement(
			"section",
			null,
			React.createElement(
				"p",
				null,
				"Showing all available products"
			),
			React.createElement("hr", null),
			React.createElement(
				"table",
				null,
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"td",
							null,
							"Product Name"
						),
						React.createElement(
							"td",
							null,
							"Price"
						),
						React.createElement(
							"td",
							null,
							"Category"
						),
						React.createElement(
							"td",
							null,
							"Image"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					rows
				)
			)
		);
	}
}

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		};
		this.addProduct = this.addProduct.bind(this);
	}

	addProduct(product) {
		this.setState((state, props) => {
			product["id"] = state.products.length + 1;
			state.products.push(product);
			return state;
		});
	}

	render() {
		return React.createElement(
			React.Fragment,
			null,
			React.createElement(
				"h2",
				null,
				"My Company Inventory"
			),
			React.createElement(ProductTable, { products: this.state.products }),
			React.createElement(ProductAdd, { addProduct: this.addProduct })
		);
	}
}

class App extends React.Component {
	render() {
		return React.createElement(
			React.Fragment,
			null,
			React.createElement(ProductList, null)
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));