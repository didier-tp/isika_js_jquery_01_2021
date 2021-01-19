package tp.service;

import java.util.List;

import tp.data.Product;

public interface ProductService {
	
	List<Product> findAllProduct();
	Product findProductByCode(int code);
	List<Product> findProductByCategorie(String categorie);
    //...
}
