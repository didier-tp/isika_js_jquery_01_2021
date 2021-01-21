package tp.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import tp.data.Product;
import tp.data.ProductV1;


/* java service  (with or without spring/jpa) */
public class ProductService {
	
private Map<Integer,Product> mapProducts = new HashMap<Integer,Product>();
private Integer maxId;
	
	public ProductService(){
		mapProducts.put(1, new Product(1,"cahier",3.4,"grand cahier","papeterie"));
		mapProducts.put(2, new Product(2,"stylo",2.4,"stylo bille bleu","papeterie"));
		mapProducts.put(3, new Product(3,"pc asus",567.4,"pc portable 15 pouces","ordinateur"));
		mapProducts.put(4, new Product(4,"pc hp",775.4,"pc portable 17 pouces","ordinateur"));
		mapProducts.put(5, new Product(5,"imprimante",234.4,"imprimante jet encre","imprimante"));
		maxId=5;
	}
	

	
	public List<Product> getAllProducts(){
		return new ArrayList<Product>( mapProducts.values());
	}
	
	public List<Product> getCheapProducts(Double maxPrice){
		List<Product> cheapProds  = new ArrayList<Product>();
		for(Product p : mapProducts.values())
			if( p.getPrix() <= maxPrice)
				cheapProds.add(p);
		return cheapProds;
	}
	
	
	public List<Product> findProductByCategorie(String categorie) {
		return getAllProducts().stream()
				.filter((p)->p.getCategorie().equalsIgnoreCase(categorie))
				.collect(Collectors.toList());
	}
	
	
	public Product getProductById(Integer id){
		return mapProducts.get(id);
	}
	

	public void updateProduct(Product p){
		mapProducts.put(p.getCode(), p);
	}

	public Integer addNewProduct(Product p){
		this.maxId++;//simulate auto_incr
		p.setCode(this.maxId);
		mapProducts.put(p.getCode(), p);
		return this.maxId;
	}
	

	public void deleteProduct(Integer id){
		mapProducts.remove(id);
	}
	
	
}
