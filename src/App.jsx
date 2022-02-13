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
		}
		this.props.addProduct(product);
	}

	render() {
		return (
			<section>
				<p>Add a new product to inventory</p>
				<hr />
				<form>
					<div className="input-group">
						<label htmlFor="category">Category:</label>
						<select name="category" id="category">
							<option value="Accessories">Accessories</option>
							<option value="Shirts">Shirts</option>
							<option value="Jeans">Jeans</option>
							<option value="Jackets">Jackets</option>
							<option value="Sweaters">Sweaters</option>
						</select>
					</div>
					<div className="input-group">
						<label htmlFor="price">Price:</label>
						<input type="text" id="price" defaultValue="$" />
					</div>
					<div className="input-group">
						<label htmlFor="name">Product Name:</label>
						<input type="text" id="name" />
					</div>
					<div className="input-group">
						<label htmlFor="image">Image URL:</label>
						<input type="text" id="image" />
					</div>

					<button type="submit" onClick={this.onSubmit}>Add Product</button>
				</form>
			</section>
		)
	}
}

class ProductRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, price, category, image } = this.props.product;
		return (
			<tr>
				<td>{name}</td>
				<td>${price}</td>
				<td>{category}</td>
				<td><a href={image} target="_blank">View</a></td>
			</tr>
		)
	}
}

class ProductTable extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rows = this.props.products.map(p => <ProductRow product={p} key={p.id} />)
		return (
			<section>
				<p>Showing all available products</p>
				<hr />
				<table>
					<thead>
						<tr>
							<td>Product Name</td>
							<td>Price</td>
							<td>Category</td>
							<td>Image</td>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</ section>
		)
	}
}

class ProductList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
		this.addProduct = this.addProduct.bind(this);
	}

	addProduct(product) {
		this.setState((state, props) => {
			product["id"] = state.products.length + 1;
			state.products.push(product);
			return state;
		})
	}

	render() {
		return (
			<React.Fragment>
				<h2>My Company Inventory</h2>
				<ProductTable products={this.state.products} />
				<ProductAdd addProduct={this.addProduct} />
			</React.Fragment>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<ProductList />
			</React.Fragment>
		)
	}
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));