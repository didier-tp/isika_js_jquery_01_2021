package tp.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import tp.data.Product;
/*
 * code ici très simplifié , sans framework , sans base de données
 */
public class ProductServiceImpl implements ProductService {
	
	private Map<Integer,Product> mapProducts = new HashMap<>();
	
	
	public ProductServiceImpl() {
		super();
		//simulation d'un jeux de données (ici en mémoire):
		mapProducts.put(1, new Product(1,"cahier",3.4,"grand cahier","papeterie"));
		mapProducts.put(2, new Product(2,"stylo",2.4,"stylo bille bleu","papeterie"));
		mapProducts.put(3, new Product(3,"pc asus",567.4,"pc portable 15 pouces","ordinateur"));
		mapProducts.put(4, new Product(4,"pc hp",775.4,"pc portable 17 pouces","ordinateur"));
		mapProducts.put(5, new Product(5,"imprimante",234.4,"imprimante jet encre","imprimante"));
	}

	@Override
	public List<Product> findAllProduct() {
		return new ArrayList<Product>(mapProducts.values());
	}

	@Override
	public Product findProductByCode(int code) {
		return mapProducts.get(code);
	}

	@Override
	public List<Product> findProductByCategorie(String categorie) {
		return findAllProduct().stream()
				.filter((p)->p.getCategorie().equalsIgnoreCase(categorie))
				.collect(Collectors.toList());
	}

}
